var addressEntry = "";
//these are used to Resend form incase changes have been made
//is basic changed? 0 if no
var basicIsChanged = 0;
//is income changed? 0 if no
var incomeIsChanged = 0
//is cost changed? 0 if no
var costIsChanged = 0

//-----------------------------------------------------------------------
// VALIDATION
//-----------------------------------------------------------------------

//----------------Basic Form-----------------------------------------
$(document).ready(function () {


    $('#submitCapRates').click(function () { // submit input form on submit button click
        submitCapRates();
    })

    //has the basic form (Input Tab) changed at all? if yes set basicIsChanged to 1
    //if things are changed it will resubmit form when user clicks a new tab
    $('#basicFormValidate3').change(function () {
        basicIsChanged = 1;
    });

    //THIS IS FOR DEVELOPMENT PURPOSES, DOES NOTHING FOR FUNCTIONALITY AS OF 07/11/22
    $('#location-input').change(function () {
        var googleAddress = document.getElementById("location-input").value
        console.long("after input is updated v")
        console.log(googleAddress)
        //console.log(addressEntry)
        //sendAddress();
    });


    //View Different Charts on Regression Analysis Tab
    $('#newChartSelect').change(function () {
        //console.log("select changed")
        //console.log($("#newChartSelect").find(":selected").text())
        setSpecialInd($("#newChartSelect").find(":selected").text())
    });

    //If user selects My Cap Rate Method allow users to input their own cap rate
    $('#methodSelect').change(function () {
        if (document.getElementById("methodSelect").value == "YourCapRate") {
            document.getElementById("lblYourCapRateID").style.display = "block";
            document.getElementById("yourCapRateEntryID").style.display = "block";
        }
        if (document.getElementById("methodSelect").value == "MarketAverage") {
            document.getElementById("lblYourCapRateID").style.display = "none";
            document.getElementById("yourCapRateEntryID").style.display = "none";
        }
    });

    //Update second form when yourcaprate is updated (outdated)
    $('#yourCapRateEntryID').on('change', function () {
        if (document.getElementById("methodSelect").value == "YourCapRate") {
            $(this).closest('#basicFormValidates').submit();
        }
    });




    //validation for Input Tab basic Form
    //This holds rules for input tab
    $("#basicFormValidate3").validate({
        errorClass: "error fail-alert",
        submitHandler: function (gridContainer) {
            sendBasicData();
            gridContainer.submit()
        },
        messages: {
            sqfEntry: {
                required: "*Square feet cannot be blank!",
                number: "*Square feet must be a number!",
                minlength: "*Square feet must be at least 3 characters long!"
            },
            perimeterEntry: {
                required: "*Perimeter cannot be blank!",
                number: "*Perimeter must be a number!"
            },
            wallHeightEntry: {
                required: "*Wall Height cannot be blank!",
                number: "*Wall Height must be a Number! Do not include (ft)"
            },
            effectiveyearBuiltEntry: {
                required: "*Year Built cannot be blank!",
                minlength: "*Please enter a valid Year!",
                maxlength: "*Please enter a valid Year!",
                max: "*Please enter a valid Year!"
            },
            parcelSizeEntry: {
                required: "*Parcel Size cannot be blank!",
                number: "*Parcel Size must be a number!"
            },
            yourCapRateEntry: {
                number: "*Please enter number only! Do not include (%)"
            },
            methodSelect: "Please choose a valid option",
            YourCapRate: { required: "Please enter a valid other value" }
        },
        rules: {
            sqfEntry: {
                required: true,
                number: true,
                minlength: 3
            },
            perimeterEntry: {
                required: true,
                number: true,
            },
            wallHeightEntry: {
                required: true,
                number: true
            },
            effectiveyearBuiltEntry: {
                required: true,
                number: true,
                minlength: 4,
                maxlength: 4,
                max: new Date().getFullYear()
            },
            parcelSizeEntry: {
                required: true,
                number: true
            },
            yourCapRateEntry: {
                number: true,
                //if method has been changed to Your Cap Rate, do some validation on it
                required: function () {
                    return $('#methodSelect').val() == 'YourCapRate';
                }
            },
        },
        errorElement: 'div',
        errorLabelContainer: '.errorTxt'

    });



    //Validation is not necessary, this is used for the submit
    $("#incomeValueFormValidate").validate({
        submitHandler: function (form2) {
            sendIncomeValueData();
            form2.submit();
        },
        messages: {

        },
        rules: {

        },
    });

    //Validation is not necessary, this is used for the submit
    $("#costValueFormValidate").validate({
        submitHandler: function (form4) {
            sendCostValueData();
            form4.submit();
        },
        messages: {
        },
        rules: {
        }
    });


    //Validation is not necessary, this is used for the submit
    $("#summaryFormValidate").validate({
        submitHandler: function (form6) {
            sendSummaryValueData();
            form6.submit();
        },
        messages: {
        },
        rules: {
        }
    });




    //Initialize the map here so that all our validation scripts can run first
    initMap()


    //Add Functionality to the Toggle Map button
    $("#toggleMap").click(function () {
        var hint = document.getElementById("map")
        hint.classList.toggle("hide");
    })




    $("#navbarCollapse").click(function (evt) {
        if (evt.target.id == "InputTab") {
            checkCompleteness(evt, 'Input')
            //openCity(evt, 'Input')
        }
        if (evt.target.id == "IncomeTab") {
            checkCompleteness(evt, 'Income')
            //openCity(evt, 'Income')
        }
        if (evt.target.id == "CostTab") {
            checkCompleteness(evt, 'Cost')
            //openCity(evt, 'Cost')
        }
        if (evt.target.id == "MarketTab") {
            checkCompleteness(evt, 'Market')
            //openCity(evt, 'Market')
        }
        if (evt.target.id == "SummaryTab") {
            checkCompleteness(evt, 'Summary')
            //openCity(evt, 'Summary')
        }
        if (evt.target.id == "RegressionAnalysisTab") {
            checkCompleteness(evt, 'RegressionAnalysis')
            //openCity(evt, 'RegressionAnalysis')
        }
        if (evt.target.id == "CapRateBuilderTab") {
            checkCompleteness(evt, 'RegressionAnalysis')
            //openCity(evt, 'CapRateBuilder')
        }
        if (evt.target.id == "AllTab") {
            checkCompleteness(evt, 'All')
            //openCity(evt, 'All')
        }

    });
    //<!--<button class="tablinks" onclick="checkCompleteness(event, 'Input')" id="InputTab">Input</button>-->





});


//Checks to see what has been changed on Income calculator whether to run math off of $ change or % change
//For example if user inputs lump sum of 10000 / 10,000 / $10,000.00, the percent of PGI will be calculated from 10000
//If user inputs amount in percentage column 12 / 12%, the lump sum of PGI will be calulated from 12
var vacancyAndCollectionLossWHATChanged = 'dollar';

$(document).ready(function () {
    $("#potentialGrossIncomeEntryID").change(function () { // PGI Has changed, resubmit form
        incomeIsChanged = 1
        $('#incomeValueFormValidate').submit();
    });
    $("#vacancyAndCollectionLossEntryID2").change(function () {//vacancy percentage changed
        vacancyAndCollectionLossWHATChanged = 'percent'
        incomeIsChanged = 1
        $('#incomeValueFormValidate').submit();
    });
    $("#vacancyAndCollectionLossEntryID").change(function () {//vacancy dollar changed
        vacancyAndCollectionLossWHATChanged = 'dollar'
        incomeIsChanged = 1
        $('#incomeValueFormValidate').submit();
    });
});


var miscIncomeWHATChanged = 'dollar';

$(document).ready(function () {
    $("#miscIncomeEntryID2").change(function () {//misc income percent changed
        miscIncomeWHATChanged = 'percent'
        incomeIsChanged = 1
        $('#incomeValueFormValidate').submit();
    });
    $("#miscIncomeEntryID").change(function () {//misc income dollar changed
        miscIncomeWHATChanged = 'dollar'
        incomeIsChanged = 1
        $('#incomeValueFormValidate').submit();
    });
});


var expenseLossWHATChanged = 'dollar';

$(document).ready(function () {
    $("#expenseLossEntryID2").change(function () {//expense loss percent changed
        expenseLossWHATChanged = 'percent'
        incomeIsChanged = 1
        $('#incomeValueFormValidate').submit();
    });
    $("#expenseLossEntryID").change(function () {//expense loss dollar changed
        expenseLossWHATChanged = 'dollar'
        incomeIsChanged = 1
        $('#incomeValueFormValidate').submit();
    });

    $("#lessPersonalPropertyEntryID").change(function () {//less personal dollar changed
        incomeIsChanged = 1
        $('#incomeValueFormValidate').submit();
    });
});

$(document).ready(function () {
    //has the cost form changed at all? if yes set to 1
    $('#intFinRateEntryID').change(function () {
        costIsChanged = 1;
        $('#costValueFormValidate').submit();
    });
    $('#extWallAndBuildClassRateID').change(function () {
        costIsChanged = 1;
        $('#costValueFormValidate').submit();
    });
    $('#itemsEntryID').change(function () {
        costIsChanged = 1;
        $('#costValueFormValidate').submit();
    });
});

function Comma(Num) { //function to add commas and $ to textboxes 
    Num += '';
    Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
    Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
    x = Num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
}



var currentTab = 'InputTab';




function checkCompleteness(evt, newTab) {

    if (currentTab == 'InputTab' && newTab != 'Input') { // if InputTab is currently the active tab and trying to click off without finishing form
        if ($('#basicFormValidate3').valid() && basicIsChanged == 1) {
            console.log('successful input, now switching to new tab')
            $('#basicFormValidate3').submit();
            openCity(evt, newTab)
            basicIsChanged = 0
        }
        else if ($('#basicFormValidate3').valid() && basicIsChanged == 0) {
            console.log('not successful input, now switching to new tab')
            openCity(evt, newTab)
            basicIsChanged = 0
        }
        else {
            alert('All required input fields must be filled before continuing!')
        }

    }
    else if (currentTab == 'IncomeTab' && newTab != 'Income') { // if IncomeTab is currently the active tab and trying to click off without finishing form
        if ($('#incomeValueFormValidate').valid() && incomeIsChanged == 1) {
            console.log('successful input, now switching to new tab')
            $('#incomeValueFormValidate').submit();

            //$(validateInputForm())
            //setTimeout(openCity(evt, newTab), 10000)
            openCity(evt, newTab)
            incomeIsChanged = 0
        }
        else if ($('#incomeValueFormValidate').valid() && incomeIsChanged == 0) {
            openCity(evt, newTab)
            incomeIsChanged = 0
        }
        else {
            alert('All required input fields must be filled before continuing!')
        }
    }
    else if (currentTab == 'CostTab' && newTab != 'Cost') { // if CostTab is currently the active tab and trying to click off without finishing form
        if ($('#costValueFormValidate').valid() && costIsChanged == 1) {
            console.log('successful input, now switching to new tab')
            $('#costValueFormValidate').submit();
            //$(validateInputForm())
            //setTimeout(openCity(evt, newTab), 10000)
            openCity(evt, newTab)
            costIsChanged = 0
        }
        else if ($('#costValueFormValidate').valid() && costIsChanged == 0) {
            openCity(evt, newTab)
            costIsChanged = 0
        }
        else {
            alert('All required input fields must be filled before continuing!')
        }
    }
    else if (newTab == 'CapRateBuilder') {

        console.log("!ready!")
        const allRanges = document.querySelectorAll(".slider-wrap");
        allRanges.forEach(wrap => {
            console.log("!ready2!")
            const range = wrap.querySelector(".slider");
            const bubble = wrap.querySelector(".bubble");

            range.addEventListener("input", () => {
                setBubble(range, bubble);
            });
            setBubble(range, bubble);
        });

        function setBubble(range, bubble) {
            console.log("!ready3!")
            const val = range.value;
            const min = range.min ? range.min : 1;
            const max = range.max ? range.max : 100;
            const newVal = Number(((val - min) * 100) / (max - min));
            bubble.innerHTML = val;
            bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
        }

        openCity(evt, newTab)
    }
    else {
        openCity(evt, newTab)
    }
}

function openCity(evt, newTab) {
    console.log(newTab)
    console.log("here are the evt's")
    console.log(evt.target.id)
    //console.log(toString(evt))


    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    if (newTab == "All") {
        document.getElementById("Input").style.display = "block";
        document.getElementById("Income").style.display = "block";
        document.getElementById("Cost").style.display = "block";
        document.getElementById("Market").style.display = "block";
        document.getElementById("Summary").style.display = "block";
        document.getElementById("RegressionAnalysis").style.display = "block";
        document.getElementById("CapRateBuilder").style.display = "block";
    }
    else {
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(newTab).style.display = "block";
    //evt.target.className += " active";
    console.log(evt.target.id)

    if (evt.target.id == "InputTab") {
        currentTab = 'InputTab'
    }
    if (evt.target.id == "IncomeTab") {
        currentTab = 'IncomeTab'
    }
    if (evt.target.id == "CostTab") {
        currentTab = 'CostTab'
    }

}





function initMap(buttonpress) {
    const CONFIGURATION = {
        "ctaTitle": "Checkout",
        "mapOptions": { "center": { "lat": 37.4221, "lng": -122.0841 }, "fullscreenControl": true, "mapTypeControl": false, "streetViewControl": false, "zoom": 11, "zoomControl": true, "maxZoom": 22 },
        "mapsApiKey": "AIzaSyCdEZLWwakd1Iv9qjYUgstm-APjR4g3bpo",
        "capabilities": { "addressAutocompleteControl": true, "mapDisplayControl": true, "ctaControl": false }
    };
    const componentForm = [
        'location',
        'locality',
        'administrative_area_level_1',
        'country',
        'postal_code',
    ];

    const getFormInputElement = (component) => document.getElementById(component + '-input');




    const map = new google.maps.Map(document.getElementById("gmp-map"), {
        zoom: CONFIGURATION.mapOptions.zoom,
        center: { lat: 35.2226, lng: -97.4395 },
        mapTypeControl: false,
        fullscreenControl: CONFIGURATION.mapOptions.fullscreenControl,
        zoomControl: CONFIGURATION.mapOptions.zoomControl,
        streetViewControl: CONFIGURATION.mapOptions.streetViewControl,
        mapTypeId: 'hybrid'

    });

    //map.data.loadGeoJson(
    //    "static/BLM Natl PLSS CadNSDI NAD83 - PLSS TownshipOK.geojson"
    //  );

    //map.data.setStyle({
    //  strokeWeight: 1,
    //  fillOpacity: 0.0
    //});

    //var townshipLayer = new google.maps.Data();
    //var sectionLayer = new google.maps.Data();

    //townshipLayer.KmlLayer('static/TownshipOK.kml');
    //var src = 'static/TownshipOK.kml';
    //var kmlLayer = new google.maps.KmlLayer(src, {
    //    suppressInfoWindows: true,
    //    preserveViewport: false,
    //    map: map
    //  });
    //townshipLayer.loadGeoJson('static/BLM Natl PLSS CadNSDI NAD83 - PLSS TownshipOK.json');
    //sectionLayer.loadGeoJson('static/BLM Natl PLSS CadNSDI NAD83 - PLSS SectionOK.json');

    //townshipLayer.setStyle({
    //    strokeColor: 'red',
    //    strokeWeight: 4,
    //    fillOpacity: 0.0
    //   });
    //  
    //   sectionLayer.setStyle({
    //    strokeColor: 'black',
    //    strokeWeight: 2,
    //    fillOpacity: 0.0
    //  });


    //townshipLayer.setMap(map);
    //sectionLayer.setMap(map);
    //



    //google.maps.event.addListener(map, 'zoom_changed', function() {
    //    var zoom = map.getZoom();
    //    if (zoom >= 1 && zoom <= 9) { 
    //
    //    } 
    //    else if (zoom > 9 && zoom <= 11) {
    //
    //
    //        
    //    }
    //    else if (zoom > 11) {
    //   
    //    }
    //  });

    //map.data.loadGeoJson(
    //    "static/BLM Natl PLSS CadNSDI NAD83 - State Boundaries.geojson"
    //);


    const marker = new google.maps.Marker({ map: map, draggable: false });
    const autocompleteInput = getFormInputElement('location');
    const autocomplete = new google.maps.places.Autocomplete(autocompleteInput, {
        fields: ["address_components", "geometry", "name"],
        types: ["address"],
    });



    //WHEN MAP IS CLICKED ON DROP NEW PIN
    google.maps.event.addListener(map, 'click', function (event) {
        lat = event.latLng.lat()
        lng = event.latLng.lng()
        //map.setCenter(new google.maps.LatLng(lat, lng));
        marker.setPosition(new google.maps.LatLng(lat, lng));
        //getReverseGeocodingData(new google.maps.LatLng(lat, lng))
        getReverseGeocodingData(new google.maps.LatLng(lat, lng)).then(function (resolve) {
            return fillInAddress(resolve);
        }).then(function (resolve) {
            console.log("we are inside promise chain")
            console.log(autocomplete.getPlace())
            console.log("blank")
        })
    });


    autocomplete.addListener('place_changed', function () {
        marker.setVisible(false);
        const place = autocomplete.getPlace();
        console.log("getplace")
        console.log(place)
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert('No details available for input: \'' + place.name + '\' \n Please click Google\'s suggested Address');
            return;
        }
        renderAddress(place);
        fillInAddress(place);
    });

    function fillInAddress(place) {  // optional parameter
        const addressNameFormat = {
            'street_number': 'short_name',
            'route': 'long_name',
            'locality': 'long_name',
            'administrative_area_level_1': 'short_name',
            'country': 'long_name',
            'postal_code': 'short_name',
        };
        const getAddressComp = function (type) {
            for (const component of place.address_components) {
                if (component.types[0] === type) {

                    return component[addressNameFormat[type]];
                }
            }
            return '';
        };
        getFormInputElement('location').value = getAddressComp('street_number') + ' '
            + getAddressComp('route');
        for (const component of componentForm) {
            // Location field is handled separately above as it has different logic.
            if (component !== 'location') {
                getFormInputElement(component).value = getAddressComp(component);
            }
        }




    }

    function renderAddress(place) {
        map.setCenter(place.geometry.location);
        map.setZoom(20)
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        addressEntry = getFormInputElement('location').value
        console.log(addressEntry)
        sendAddress()
    }

    if (buttonpress) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        console.log("position")
        console.log(position)
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        map.setCenter(new google.maps.LatLng(lat, lng));
        marker.setPosition(new google.maps.LatLng(lat, lng));
        //getReverseGeocodingData(new google.maps.LatLng(lat, lng))
        getReverseGeocodingData(new google.maps.LatLng(lat, lng)).then(function (resolve) {
            return fillInAddress(resolve);
        }).then(function () {
            //sendAddress()
        })



        //marker.setVisible(true);

        //sendAddress()
    }

    function getReverseGeocodingData(lat, lng) {
        return new Promise(function (resolve, reject) {
            var latlng = new google.maps.LatLng(lat, lng);
            // This is making the Geocode request
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'latLng': latlng }, (results, status) => {
                if (status !== google.maps.GeocoderStatus.OK) {
                    alert(status);

                }
                // This is checking to see if the Geoeode Status is OK before proceeding
                if (status == google.maps.GeocoderStatus.OK) {
                    //console.log(results);
                    resolve(results[0]);
                }
            });
        })
    }




}



/* ~~~~~~~~~~~ Event Listeners~~~~~~~~~~~~ */


function setUpPage() {
    document.getElementById("InputTab").click();
    createForm('input-grid-container')
    createIncomeValueCalculatorForm('income-grid-container')
    createCostValueCalculator('cost-grid-container');
    createMarketValueCalculator('market-grid-container');
    createSummary('summary-grid-container');
    createRegression();
    createRatioStudy();
    createCapRateBuilder();

    //setTimeout(createAllTab, 1000);
}




if (window.addEventListener) {
    window.addEventListener("load", setUpPage);
} else if (window.attachEvent) {
    window.attachEvent("load", setUpPage);
}

