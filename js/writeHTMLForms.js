function createForm(container) {

    //Create HTML Elements for Input Tab

    // Create a form dynamically
    var gridContainer = document.createElement("form");
    gridContainer.setAttribute("id", "basicFormValidate3");
    gridContainer.setAttribute("method", "get");
    gridContainer.setAttribute("name", "basicForm");
    gridContainer.setAttribute("class", "inputForm")
    //form.setAttribute("action", "basic");
    gridContainer.setAttribute("action", "javascript:void(0)");
    //form.setAttribute("onsubmit", "sendData()")
    //Create array of options to be added


    //---------------Location Entry------------------------------

    //create Location Entry label
    var lblLocationEntry = document.createElement("label");
    lblLocationEntry.textContent = "Location Entry";
    lblLocationEntry.setAttribute("class", "InputLabels")

    //Create and append select list for Location Entry
    var selectLocationEntry = document.createElement("select");
    selectLocationEntry.id = "locationEntrySelect";
    selectLocationEntry.setAttribute("class", "InputEntries")

    //Create and append the options

    var shellArray = getShellArray();
    for (var i = 0; i < shellArray.length; i++) {
        var option = document.createElement("option");
        option.value = shellArray[i];
        option.text = shellArray[i];
        selectLocationEntry.appendChild(option);
    }




    //---------------Property Type------------------------------



    //create Property Type Entry label
    var lblPropertyType = document.createElement("label");
    lblPropertyType.textContent = "Property Type";
    lblPropertyType.setAttribute("class", "InputLabels")

    //Create and append select list for PropertyType Entry
    var selectPropertyType = document.createElement("select");
    selectPropertyType.id = "propertyTypeEntrySelect";
    selectPropertyType.setAttribute("class", "InputEntries")

    //Create and append the options
    var propertyArray = getPropertyArray();
    for (var i = 0; i < propertyArray.length; i++) {
        var option = document.createElement("option");
        option.value = propertyArray[i];
        option.text = propertyArray[i];
        selectPropertyType.appendChild(option);
    }



    //---------------Class Type------------------------------



    //create Class Type Entry label
    var lblClassType = document.createElement("label");
    lblClassType.textContent = "Class Type";
    lblClassType.setAttribute("class", "InputLabels")

    //Create and append select list for Class Type Entry
    var selectClassType = document.createElement("select");
    selectClassType.id = "classTypeEntrySelect";
    selectClassType.setAttribute("class", "InputEntries")

    //Create and append the options
    var classArray = getClassArray();
    for (var i = 0; i < classArray.length; i++) {
        var option = document.createElement("option");
        option.value = classArray[i];
        option.text = classArray[i];
        selectClassType.appendChild(option);
    }



    //---------------Exterior Wall Finish Type------------------------------



    //create Exterior Wall Entry label
    var lblExteriorWall = document.createElement("label");
    lblExteriorWall.textContent = "Exterior Wall Finish Type";
    lblExteriorWall.setAttribute("class", "InputLabels")

    //Create and append select list for Exterior Wall Entry
    var selectExteriorWall = document.createElement("select");
    selectExteriorWall.id = "exteriorWallEntrySelect";
    selectExteriorWall.setAttribute("class", "InputEntries")

    ////Create and append the options
    var extArray = getExtArray();
    for (var i = 0; i < 5; i++) {
        var option = document.createElement("option");
        option.value = extArray[i];
        option.text = extArray[i];
        selectExteriorWall.appendChild(option);
    }
    //---------------Interior Wall Finish Type------------------------------



    //create Interior Wall Entry label
    var lblInteriorWall = document.createElement("label");
    lblInteriorWall.textContent = "Interior Wall Finish Type";
    lblInteriorWall.setAttribute("class", "InputLabels")


    //Create and append select list for Interior Wall Entry
    var selectInteriorWall = document.createElement("select");
    selectInteriorWall.id = "interiorWallEntrySelect";
    selectInteriorWall.setAttribute("class", "InputEntries")

    //Create and append the options
    var intArray = getIntArray();
    for (var i = 0; i < intArray.length; i++) {
        var option = document.createElement("option");
        option.value = intArray[i];
        option.text = intArray[i];
        selectInteriorWall.appendChild(option);
    }



    //---------------User Entries------------------------------


    //Square Footage Entry
    //create Square Footage Entry label
    var lblSqfEntry = document.createElement("label");
    lblSqfEntry.textContent = "Square Footage";
    lblSqfEntry.setAttribute("class", "InputLabels")


    var sqfEntry = document.createElement("input");
    sqfEntry.setAttribute("type", "text");
    sqfEntry.setAttribute("id", "sqfEntryID");
    sqfEntry.setAttribute("name", "sqfEntry");
    sqfEntry.setAttribute("class", "InputEntries")

    //dollarSign.appendChild(sqfEntry);



    //Perimeter Entry
    //create Perimeter Entry label
    var lblPerimeterEntry = document.createElement("label");
    lblPerimeterEntry.textContent = "Perimeter";
    lblPerimeterEntry.setAttribute("class", "InputLabels")

    var perimeterEntry = document.createElement("input");
    perimeterEntry.setAttribute("type", "text");
    perimeterEntry.setAttribute("id", "perimeterEntryID")
    perimeterEntry.setAttribute("name", "perimeterEntry");
    perimeterEntry.setAttribute("class", "InputEntries")


    //Wall Height Entry
    //create Wall Height Entry label
    var lblWallHeight = document.createElement("label");
    lblWallHeight.textContent = "Wall Height (ft)";
    lblWallHeight.setAttribute("class", "InputLabels")

    var wallHeightEntry = document.createElement("input");
    wallHeightEntry.setAttribute("type", "text");
    wallHeightEntry.setAttribute("id", "wallHeightEntryID")
    wallHeightEntry.setAttribute("name", "wallHeightEntry");
    wallHeightEntry.setAttribute("class", "InputEntries")


    //Effective Year Built Entry
    //create Effective Year Built Entry label
    var lblEffectiveYearBuilt = document.createElement("label");
    lblEffectiveYearBuilt.textContent = "Effective Year Built";
    lblEffectiveYearBuilt.setAttribute("class", "InputLabels")

    var effectiveyearBuiltEntry = document.createElement("input");
    effectiveyearBuiltEntry.setAttribute("type", "text");
    effectiveyearBuiltEntry.setAttribute("id", "effectiveyearBuiltEntryID")
    effectiveyearBuiltEntry.setAttribute("name", "effectiveyearBuiltEntry");
    effectiveyearBuiltEntry.setAttribute("class", "InputEntries")


    //Parcel Size in Acres Entry
    //create Parcel Size in Acres Entry label
    var lblParcelSize = document.createElement("label");
    lblParcelSize.textContent = "Parcel Size in Acres";
    lblParcelSize.setAttribute("class", "InputLabels")

    var parcelSizeEntry = document.createElement("input");
    parcelSizeEntry.setAttribute("type", "text");
    parcelSizeEntry.setAttribute("id", "parcelSizeEntryID")
    parcelSizeEntry.setAttribute("name", "parcelSizeEntry");
    parcelSizeEntry.setAttribute("class", "InputEntries")



    //---------------Quality Selection------------------------------



    //create Interior Wall Entry label
    var lblQuality = document.createElement("label");
    lblQuality.textContent = "Quality";
    lblQuality.setAttribute("class", "InputLabels")

    //Create and append select list for Interior Wall Entry
    var selectQuality = document.createElement("select");
    selectQuality.id = "qualitySelect";
    selectQuality.setAttribute("class", "InputEntries")

    //Create and append the options
    for (var i = 0; i < qualityArray.length; i++) {
        var option = document.createElement("option");
        option.value = qualityArray[i];
        option.text = qualityArray[i];
        selectQuality.appendChild(option);
    }

    //---------------Condition Selection------------------------------



    //create Condition label
    var lblCondition = document.createElement("label");
    lblCondition.textContent = "Condition";
    lblCondition.setAttribute("class", "InputLabels")

    //Create and append select list for Interior Wall Entry
    var selectCondition = document.createElement("select");
    selectCondition.id = "conditionSelect";
    selectCondition.setAttribute("class", "InputEntries")

    //Create and append the options
    for (var i = 0; i < conditionArray.length; i++) {
        var option = document.createElement("option");
        option.value = conditionArray[i];
        option.text = conditionArray[i];
        selectCondition.appendChild(option);
    }

    //---------------Method Selection------------------------------



    //create Method label
    var lblMethod = document.createElement("label");
    lblMethod.textContent = "Method";
    lblMethod.setAttribute("class", "InputLabels")

    //Create and append select list for Interior Wall Entry
    var selectMethod = document.createElement("select");
    selectMethod.id = "methodSelect";
    selectMethod.setAttribute("name", "methodSelect")
    selectMethod.setAttribute("class", "InputEntries")

    //Create and append the options
    var MarketAverageOption = document.createElement("option");
    MarketAverageOption.value = "MarketAverage";
    MarketAverageOption.text = "Market Average";
    selectMethod.appendChild(MarketAverageOption);
    var YourCapRateOption = document.createElement("option");
    YourCapRateOption.value = "YourCapRate";
    YourCapRateOption.text = "Your Cap Rate";
    selectMethod.appendChild(YourCapRateOption);



    //Your Cap Rate output
    //create Your Cap Rate Label
    var lblYourCapRate = document.createElement("label");
    lblYourCapRate.textContent = "Your Cap Rate";
    lblYourCapRate.setAttribute("class", "InputLabels");
    lblYourCapRate.setAttribute("id", "lblYourCapRateID");
    lblYourCapRate.style.display = "none";

    var yourCapRateEntry = document.createElement("input");
    yourCapRateEntry.setAttribute("type", "text");
    yourCapRateEntry.setAttribute("id", "yourCapRateEntryID")
    yourCapRateEntry.setAttribute("name", "yourCapRateEntry");
    yourCapRateEntry.style.display = "none";


    //Weighted Cap Rate output
    //create Weighted Cap Rate Label
    var lblWeightedCapRate = document.createElement("label");
    lblWeightedCapRate.textContent = "Weighted Cap Rate";
    lblWeightedCapRate.setAttribute("class", "InputLabels")

    var weightedCapRate = document.createElement("input");
    weightedCapRate.setAttribute("type", "text");
    weightedCapRate.setAttribute("id", "weightedCapRateID")
    weightedCapRate.setAttribute("name", "weightedCapRate");
    weightedCapRate.setAttribute("readonly", true);




    var button = document.createElement("button");
    //button.setAttribute("type", "submit");
    button.setAttribute("form", "basicFormValidate3")
    //button.setAttribute("value", "Submit")
    button.setAttribute("class", "SubmitButton")
    button.textContent = 'Submit'




    //---------------------------------------------------

    gridContainer.appendChild(lblLocationEntry)
    gridContainer.appendChild(selectLocationEntry)

    gridContainer.appendChild(lblPropertyType)
    gridContainer.appendChild(selectPropertyType)

    gridContainer.appendChild(lblClassType)
    gridContainer.appendChild(selectClassType)

    gridContainer.appendChild(lblExteriorWall)
    gridContainer.appendChild(selectExteriorWall)

    gridContainer.appendChild(lblInteriorWall)
    gridContainer.appendChild(selectInteriorWall)

    gridContainer.appendChild(lblSqfEntry)
    gridContainer.appendChild(sqfEntry)

    gridContainer.appendChild(lblPerimeterEntry)
    gridContainer.appendChild(perimeterEntry)

    gridContainer.appendChild(lblWallHeight)
    gridContainer.appendChild(wallHeightEntry)

    gridContainer.appendChild(lblEffectiveYearBuilt)
    gridContainer.appendChild(effectiveyearBuiltEntry)

    gridContainer.appendChild(lblParcelSize)
    gridContainer.appendChild(parcelSizeEntry)

    gridContainer.appendChild(lblQuality)
    gridContainer.appendChild(selectQuality)

    gridContainer.appendChild(lblCondition)
    gridContainer.appendChild(selectCondition)

    gridContainer.appendChild(lblMethod)
    gridContainer.appendChild(selectMethod)

    gridContainer.appendChild(lblYourCapRate)
    gridContainer.appendChild(yourCapRateEntry)

    gridContainer.appendChild(lblWeightedCapRate)
    gridContainer.appendChild(weightedCapRate)

    var empty = document.createElement("label");
    empty.textContent = "";
    empty.setAttribute("class", "grid-item")

    gridContainer.appendChild(empty)
    gridContainer.appendChild(button)


    //document.getElementById('input-grid-container').appendChild(gridContainer)

    document.getElementById(container).appendChild(gridContainer)



    //------------------------------------------------------------------




    //-----------Check ClassType and Exterior Wall congruency----------------------------------------------------



    $("#classTypeEntrySelect").on('change', function () {// in this line identify if there is any changes to first select box
        var thevalue = $("#exteriorWallEntrySelect").val(); // if there is any changes to first selection box, then at that time get the value of second selection box.
        var index = jQuery.inArray($("#classTypeEntrySelect").val(), classArray)
        //alert(index)
        //alert(thevalue);
        exteriorWallEntrySelect.length = 0;

        if (index == 0 || index == 1) {
            for (var i = 0; i < 5; i++) {
                var option = document.createElement("option");
                option.value = extArray[i];
                option.text = extArray[i];
                selectExteriorWall.appendChild(option);
            }
        }

        if (index == 2) {
            for (var i = 3; i < 8; i++) {
                var option = document.createElement("option");
                option.value = extArray[i];
                option.text = extArray[i];
                selectExteriorWall.appendChild(option);
            }
        }

        if (index == 3) {
            var option = document.createElement("option");
            option.value = extArray[3];
            option.text = extArray[3];
            selectExteriorWall.appendChild(option);
            var option = document.createElement("option");
            option.value = extArray[5];
            option.text = extArray[5];
            selectExteriorWall.appendChild(option);

        }

        if (index == 4) {
            for (var i = 9; i < 13; i++) {
                var option = document.createElement("option");
                option.value = extArray[i];
                option.text = extArray[i];
                selectExteriorWall.appendChild(option);
            }
        }

        if (index == 5) {
            var option = document.createElement("option");
            option.value = extArray[8];
            option.text = extArray[8];
            selectExteriorWall.appendChild(option);
            var option = document.createElement("option");
            option.value = extArray[10];
            option.text = extArray[10];
            selectExteriorWall.appendChild(option);
            var option = document.createElement("option");
            option.value = extArray[12];
            option.text = extArray[12];
            selectExteriorWall.appendChild(option);
            var option = document.createElement("option");
            option.value = extArray[13];
            option.text = extArray[13];
            selectExteriorWall.appendChild(option);
        }

        if (index == 6 || index == 7) {
            var option = document.createElement("option");
            option.value = extArray[3];
            option.text = extArray[3];
            selectExteriorWall.appendChild(option);
            var option = document.createElement("option");
            option.value = extArray[4];
            option.text = extArray[4];
            selectExteriorWall.appendChild(option);
            var option = document.createElement("option");
            option.value = extArray[7];
            option.text = extArray[7];
            selectExteriorWall.appendChild(option);
            var option = document.createElement("option");
            option.value = extArray[14];
            option.text = extArray[14];
            selectExteriorWall.appendChild(option);
            var option = document.createElement("option");
            option.value = extArray[15];
            option.text = extArray[15];
            selectExteriorWall.appendChild(option);
        }

    });

}







function createIncomeValueCalculatorForm(container) {

        //Create HTML Elements for Income Tab


    var fieldset2 = document.createElement("Fieldset");
    var legend2 = document.createElement("Legend");
    legend2.textContent = "Income Value Calculator";

    // Create a form dynamically
    var form2 = document.createElement("form");
    form2.setAttribute("id", "incomeValueFormValidate")
    form2.setAttribute("method", "post");
    form2.setAttribute("name", "incomeValueForm")
    form2.setAttribute("class", "inputForm")
    form2.setAttribute("action", "javascript:void(0)");

    //------------Empty Value--------------------------------------
    var empty = document.createElement("label");
    empty.textContent = "";
    empty.setAttribute("class", "grid-item")

    var empty2 = document.createElement("label");
    empty2.textContent = "";
    empty2.setAttribute("class", "grid-item")

    var empty3 = document.createElement("label");
    empty3.textContent = "";
    empty3.setAttribute("class", "grid-item")

    var empty4 = document.createElement("label");
    empty4.textContent = "";
    empty4.setAttribute("class", "grid-item")

    var empty5 = document.createElement("label");
    empty5.textContent = "";
    empty5.setAttribute("class", "grid-item")

    var empty6 = document.createElement("label");
    empty6.textContent = "";
    empty6.setAttribute("class", "grid-item")


    //---------------Potential Gross Income------------------------------

    //create Potential Gross Income label
    var lblPotentialGrossIncome = document.createElement("label");
    lblPotentialGrossIncome.textContent = "Potential Gross Income";
    lblPotentialGrossIncome.setAttribute("class", "grid-item")

    var lblPercentOfPGIM = document.createElement("label");
    lblPercentOfPGIM.textContent = "% of PGI"
    lblPercentOfPGIM.setAttribute("class", "grid-item")
    lblPercentOfPGIM.setAttribute("id", "percentageOfPGIID")

    //Create and append select list for Location Entry

    var potentialGrossIncomeEntry = document.createElement("input");
    potentialGrossIncomeEntry.setAttribute("type", "text");
    potentialGrossIncomeEntry.setAttribute("id", "potentialGrossIncomeEntryID");
    potentialGrossIncomeEntry.setAttribute("name", "potentialGrossIncomeEntry");
    potentialGrossIncomeEntry.setAttribute("class", "grid-item");
    //potentialGrossIncomeEntry.setAttribute("onkeyup","javascript:this.value=Comma(this.value)")

    //---------------Vacancy and Collection Loss------------------------------

    //create Vacancy and Collection Loss label
    var lblVacancyAndCollectionLoss = document.createElement("label");
    lblVacancyAndCollectionLoss.textContent = "Vacancy and Collection Loss";
    lblVacancyAndCollectionLoss.setAttribute("class", "grid-item")

    //Create and append select list for Location Entry

    var vacancyAndCollectionLossEntry = document.createElement("input");
    vacancyAndCollectionLossEntry.setAttribute("type", "text");
    vacancyAndCollectionLossEntry.setAttribute("id", "vacancyAndCollectionLossEntryID");
    vacancyAndCollectionLossEntry.setAttribute("name", "vacancyAndCollectionLossEntry");
    vacancyAndCollectionLossEntry.setAttribute("class", "grid-item")
    var vacancyAndCollectionLossEntry2 = document.createElement("input");
    vacancyAndCollectionLossEntry2.setAttribute("type", "text");
    vacancyAndCollectionLossEntry2.setAttribute("id", "vacancyAndCollectionLossEntryID2");
    vacancyAndCollectionLossEntry2.setAttribute("name", "vacancyAndCollectionLossEntry2");
    vacancyAndCollectionLossEntry2.setAttribute("class", "grid-item")
    //vacancyAndCollectionLossEntry2.setAttribute("readonly", true);


    //---------------Misc. Income------------------------------

    //create Vacancy and Collection Loss label
    var lblMiscIncome = document.createElement("label");
    lblMiscIncome.textContent = "Misc. Income";
    lblMiscIncome.setAttribute("class", "grid-item")

    //Create and append select list for Location Entry

    var miscIncomeEntry = document.createElement("input");
    miscIncomeEntry.setAttribute("type", "text");
    miscIncomeEntry.setAttribute("id", "miscIncomeEntryID");
    miscIncomeEntry.setAttribute("name", "miscIncomeEntry");
    miscIncomeEntry.setAttribute("class", "grid-item")
    var miscIncomeEntry2 = document.createElement("input");
    miscIncomeEntry2.setAttribute("type", "text");
    miscIncomeEntry2.setAttribute("id", "miscIncomeEntryID2");
    miscIncomeEntry2.setAttribute("name", "miscIncomeEntry2");
    miscIncomeEntry2.setAttribute("class", "grid-item")
    //miscIncomeEntry2.setAttribute("readonly", true);


    //---------------Effective Gross Income------------------------------

    //create Effective Gross Income label
    var lblEffectiveGrossIncome = document.createElement("label");
    lblEffectiveGrossIncome.textContent = "Effective Gross Income";
    lblEffectiveGrossIncome.setAttribute("class", "grid-item")

    //Create and append select list forEffective Gross Income
    var effectiveGrossIncomeEntry = document.createElement("input");
    effectiveGrossIncomeEntry.setAttribute("type", "text");
    effectiveGrossIncomeEntry.setAttribute("id", "effectiveGrossIncomeEntryID");
    effectiveGrossIncomeEntry.setAttribute("name", "effectiveGrossIncomeEntry");
    effectiveGrossIncomeEntry.setAttribute("class", "grid-item")
    effectiveGrossIncomeEntry.setAttribute("readonly", true);
    var effectiveGrossIncomeEntry2 = document.createElement("input");
    effectiveGrossIncomeEntry2.setAttribute("type", "text");
    effectiveGrossIncomeEntry2.setAttribute("id", "effectiveGrossIncomeEntryID2");
    effectiveGrossIncomeEntry2.setAttribute("name", "effectiveGrossIncomeEntry2");
    effectiveGrossIncomeEntry2.setAttribute("class", "grid-item")
    effectiveGrossIncomeEntry2.setAttribute("readonly", true);


    //---------------Expense Loss------------------------------

    //create Expense Loss label
    var lblExpenseLoss = document.createElement("label");
    lblExpenseLoss.textContent = "Expense Loss";
    lblExpenseLoss.setAttribute("class", "grid-item")

    //Create and append select list for Expense Loss
    var expenseLossEntry = document.createElement("input");
    expenseLossEntry.setAttribute("type", "text");
    expenseLossEntry.setAttribute("id", "expenseLossEntryID");
    expenseLossEntry.setAttribute("name", "expenseLossEntry");
    expenseLossEntry.setAttribute("class", "grid-item")
    var expenseLossEntry2 = document.createElement("input");
    expenseLossEntry2.setAttribute("type", "text");
    expenseLossEntry2.setAttribute("id", "expenseLossEntryID2");
    expenseLossEntry2.setAttribute("name", "expenseLossEntry2");
    expenseLossEntry2.setAttribute("class", "grid-item")
    //expenseLossEntry2.setAttribute("readonly", true);


    //---------------EBITDA------------------------------

    //create EBITDA label
    var lblEBITDA = document.createElement("label");
    lblEBITDA.textContent = "EBITDA";
    lblEBITDA.setAttribute("class", "grid-item")

    //Create and append select list for EBITDA
    var EBITDAEntry = document.createElement("input");
    EBITDAEntry.setAttribute("type", "text");
    EBITDAEntry.setAttribute("id", "EBITDAEntryID");
    EBITDAEntry.setAttribute("name", "EBITDAEntry");
    EBITDAEntry.setAttribute("class", "grid-item")
    EBITDAEntry.setAttribute("readonly", true);
    var EBITDAEntry2 = document.createElement("input");
    EBITDAEntry2.setAttribute("type", "text");
    EBITDAEntry2.setAttribute("id", "EBITDAEntryID2");
    EBITDAEntry2.setAttribute("name", "EBITDAEntry2");
    EBITDAEntry.setAttribute("class", "grid-item")
    EBITDAEntry2.setAttribute("readonly", true);

    //---------------Cap Rate------------------------------

    //create Cap Rate label
    var lblCapRate = document.createElement("label");
    lblCapRate.textContent = "Cap Rate";
    lblCapRate.setAttribute("class", "grid-item")

    //Create and append select list for Cap Rate
    var capRateEntry = document.createElement("input");
    capRateEntry.setAttribute("type", "text");
    capRateEntry.setAttribute("id", "capRateEntryID");
    capRateEntry.setAttribute("name", "capRateEntry");
    capRateEntry.setAttribute("class", "grid-item")
    capRateEntry.setAttribute("readonly", true);


    //---------------Less Personal Property------------------------------

    //create Less Personal Property label
    var lblLessPersonalProperty = document.createElement("label");
    lblLessPersonalProperty.textContent = "Less Personal Property";
    lblLessPersonalProperty.setAttribute("class", "grid-item")

    //Create and append select list for Less Personal Property
    var lessPersonalPropertyEntry = document.createElement("input");
    lessPersonalPropertyEntry.setAttribute("type", "text");
    lessPersonalPropertyEntry.setAttribute("id", "lessPersonalPropertyEntryID");
    lessPersonalPropertyEntry.setAttribute("name", "lessPersonalPropertyEntry");
    lessPersonalPropertyEntry.setAttribute("class", "grid-item")



    //---------------Estimated Income Value------------------------------

    //create Estimated Income Value label
    var lblEstimatedIncomeValue = document.createElement("label");
    lblEstimatedIncomeValue.textContent = "Estimated Income Value";
    lblEstimatedIncomeValue.setAttribute("class", "grid-item")

    //Create and append select list for Estimated Income Value
    var estimatedIncomeValueEntry = document.createElement("input");
    estimatedIncomeValueEntry.setAttribute("type", "text");
    estimatedIncomeValueEntry.setAttribute("id", "estimatedIncomeValueEntryID");
    estimatedIncomeValueEntry.setAttribute("name", "estimatedIncomeValueEntry");
    estimatedIncomeValueEntry.setAttribute("class", "grid-item")
    estimatedIncomeValueEntry.setAttribute("readonly", true);



    //---------------Dollars per Square Foot------------------------------

    //create Dollars per Square Foot label
    var lblDollarsPerSquareFoot = document.createElement("label");
    lblDollarsPerSquareFoot.textContent = "Dollars per Square Foot";
    lblDollarsPerSquareFoot.setAttribute("class", "grid-item")

    //Create and append select list for Dollars per Square Foot
    var dollarsPerSquareFootEntry = document.createElement("input");
    dollarsPerSquareFootEntry.setAttribute("type", "text");
    dollarsPerSquareFootEntry.setAttribute("id", "dollarsPerSquareFootEntryID");
    dollarsPerSquareFootEntry.setAttribute("name", "dollarsPerSquareFootEntry");
    dollarsPerSquareFootEntry.setAttribute("class", "grid-item")
    dollarsPerSquareFootEntry.setAttribute("readonly", true);





    //---------------Submit Button------------------------------

    var button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.setAttribute("form", "incomeValueFormValidate")
    button.setAttribute("value", "Submit")
    button.setAttribute("class", "SubmitButton")
    button.textContent = 'Submit'


    //var gridContainer = document.getElementById('grid-container')
    var gridContainer = document.getElementById(container)

    var gridItemDiv = document.createElement("div");
    gridItemDiv.setAttribute("class", "grid-item")


    gridContainer.appendChild(lblPotentialGrossIncome)
    gridContainer.appendChild(potentialGrossIncomeEntry)
    gridContainer.appendChild(lblPercentOfPGIM)

    gridContainer.appendChild(lblVacancyAndCollectionLoss)
    gridContainer.appendChild(vacancyAndCollectionLossEntry)
    gridContainer.appendChild(vacancyAndCollectionLossEntry2)

    gridContainer.appendChild(lblMiscIncome)
    gridContainer.appendChild(miscIncomeEntry)
    gridContainer.appendChild(miscIncomeEntry2)


    gridContainer.appendChild(lblEffectiveGrossIncome)
    gridContainer.appendChild(effectiveGrossIncomeEntry)
    gridContainer.appendChild(effectiveGrossIncomeEntry2)

    gridContainer.appendChild(lblExpenseLoss)
    gridContainer.appendChild(expenseLossEntry)
    gridContainer.appendChild(expenseLossEntry2)

    gridContainer.appendChild(lblEBITDA)
    gridContainer.appendChild(EBITDAEntry)
    gridContainer.appendChild(EBITDAEntry2)

    gridContainer.appendChild(lblCapRate)
    gridContainer.appendChild(capRateEntry)
    gridContainer.appendChild(empty)

    gridContainer.appendChild(lblLessPersonalProperty)
    gridContainer.appendChild(lessPersonalPropertyEntry)
    gridContainer.appendChild(empty2)

    gridContainer.appendChild(lblEstimatedIncomeValue)
    gridContainer.appendChild(estimatedIncomeValueEntry)
    gridContainer.appendChild(empty3)

    gridContainer.appendChild(lblDollarsPerSquareFoot)
    gridContainer.appendChild(dollarsPerSquareFootEntry)
    gridContainer.appendChild(empty4)

    //gridContainer.appendChild(empty5)
    //gridContainer.appendChild(empty6)
    //gridContainer.appendChild(button)
    gridContainer.appendChild(form2)

    //var gridContainerAll = document.getElementById('all-grid-container')
    //gridContainerAll.appendChild(form2)
}





function createCostValueCalculator(container) {

        //Create HTML Elements for Cost Tab


    var leftInput = document.createElement("div");
    leftInput.setAttribute("id", "leftInput")
    var rightInput = document.createElement("div");
    rightInput.setAttribute("id", "rightInput")

    // Create a form dynamically
    var form4 = document.createElement("form");
    form4.setAttribute("id", "costValueFormValidate");
    form4.setAttribute("method", "post");
    form4.setAttribute("name", "costValueForm");
    form4.setAttribute("class", "inputForm")
    //form.setAttribute("action", "basic");
    form4.setAttribute("action", "javascript:void(0)");
    //form.setAttribute("onsubmit", "sendData()")
    //Create array of options to be added

    var empty = document.createElement("label");
    empty.textContent = "";
    empty.setAttribute("class", "grid-item")

    var empty2 = document.createElement("label");
    empty2.textContent = "";
    empty2.setAttribute("class", "grid-item")



    //---------------Int Fin Rate------------------------------

    //create Int Fin Rate Label
    var lblIntFinRate = document.createElement("label");
    lblIntFinRate.textContent = "Int Fin Rate";
    lblIntFinRate.setAttribute("class", "InputLabels")



    var intFinRateEntry = document.createElement("input");
    intFinRateEntry.setAttribute("type", "text");
    intFinRateEntry.setAttribute("id", "intFinRateEntryID");
    intFinRateEntry.setAttribute("name", "intFinRate");
    intFinRateEntry.setAttribute("class", "InputEntries")







    //---------------Ext Wall and Build Class Rate------------------------------

    //create Ext Wall and Build Class Rate Label
    var lblExtWallAndBuildClassRate = document.createElement("label");
    lblExtWallAndBuildClassRate.textContent = "Ext Wall and Build Class Rate";
    lblExtWallAndBuildClassRate.setAttribute("class", "InputLabels")



    var extWallAndBuildClassRateEntry = document.createElement("input");
    extWallAndBuildClassRateEntry.setAttribute("type", "text");
    extWallAndBuildClassRateEntry.setAttribute("id", "extWallAndBuildClassRateID");
    extWallAndBuildClassRateEntry.setAttribute("name", "extWallAndBuildClassRate");
    extWallAndBuildClassRateEntry.setAttribute("class", "InputEntries")


    //---------------Location Adjustment------------------------------

    //create Location Adjustment Label
    var lblLocationAdjustment = document.createElement("label");
    lblLocationAdjustment.textContent = "Location Adjustment";
    lblLocationAdjustment.setAttribute("class", "InputLabels")



    var locationAdjustmentEntry = document.createElement("input");
    locationAdjustmentEntry.setAttribute("type", "text");
    locationAdjustmentEntry.setAttribute("id", "locationAdjustmentEntryID");
    locationAdjustmentEntry.setAttribute("name", "locationAdjustmentEntry");
    locationAdjustmentEntry.setAttribute("class", "InputEntries")
    locationAdjustmentEntry.setAttribute("readonly", true)

    //---------------Area/Perim Adjustment------------------------------

    //create Location Adjustment Label
    var lblAreaPerimAdjustment = document.createElement("label");
    lblAreaPerimAdjustment.textContent = "Area/Perim Adjustments";
    lblAreaPerimAdjustment.setAttribute("class", "InputLabels")



    var AreaPerimAdjustmentEntry = document.createElement("input");
    AreaPerimAdjustmentEntry.setAttribute("type", "text");
    AreaPerimAdjustmentEntry.setAttribute("id", "AreaPerimAdjustmentEntryID");
    AreaPerimAdjustmentEntry.setAttribute("name", "AreaPerimAdjustmentEntry");
    AreaPerimAdjustmentEntry.setAttribute("class", "InputEntries")
    AreaPerimAdjustmentEntry.setAttribute("readonly", true)

    //---------------Height Adjustment------------------------------

    //create Height Adjustment Label
    var lblHeightAdjustment = document.createElement("label");
    lblHeightAdjustment.textContent = "Height Adjustment";
    lblHeightAdjustment.setAttribute("class", "InputLabels")



    var heightAdjustmentEntry = document.createElement("input");
    heightAdjustmentEntry.setAttribute("type", "text");
    heightAdjustmentEntry.setAttribute("id", "heightAdjustmentEntryID");
    heightAdjustmentEntry.setAttribute("name", "heightAdjustmentEntry");
    heightAdjustmentEntry.setAttribute("class", "InputEntries")
    heightAdjustmentEntry.setAttribute("readonly", true)


    //---------------Quality Adjustment------------------------------

    //create Height Adjustment Label
    var lblQualityAdjustment = document.createElement("label");
    lblQualityAdjustment.textContent = "Quality Adjustment";
    lblQualityAdjustment.setAttribute("class", "InputLabels")



    var qualityAdjustmentEntry = document.createElement("input");
    qualityAdjustmentEntry.setAttribute("type", "text");
    qualityAdjustmentEntry.setAttribute("id", "qualityAdjustmentEntryID");
    qualityAdjustmentEntry.setAttribute("name", "qualityAdjustmentEntry");
    qualityAdjustmentEntry.setAttribute("class", "InputEntries")
    qualityAdjustmentEntry.setAttribute("readonly", true)

    //---------------Condition Adjustment------------------------------

    //create Height Adjustment Label
    var lblConditionAdjustment = document.createElement("label");
    lblConditionAdjustment.textContent = "Condition Adjustment";
    lblConditionAdjustment.setAttribute("class", "InputLabels")



    var conditionAdjustmentEntry = document.createElement("input");
    conditionAdjustmentEntry.setAttribute("type", "text");
    conditionAdjustmentEntry.setAttribute("id", "conditionAdjustmentEntryID");
    conditionAdjustmentEntry.setAttribute("name", "conditionAdjustmentEntry");
    conditionAdjustmentEntry.setAttribute("class", "InputEntries")
    conditionAdjustmentEntry.setAttribute("readonly", true)

    //---------------Adjusted Rate------------------------------

    //create Adjusted Rate Label
    var lblAdjustedRate = document.createElement("label");
    lblAdjustedRate.textContent = "Adjusted Rate";
    lblAdjustedRate.setAttribute("class", "InputLabels")



    var adjustedRateEntry = document.createElement("input");
    adjustedRateEntry.setAttribute("type", "text");
    adjustedRateEntry.setAttribute("id", "adjustedRateEntryID");
    adjustedRateEntry.setAttribute("name", "adjustedRateEntry");
    adjustedRateEntry.setAttribute("class", "InputEntries")

    //---------------Improved Value------------------------------

    //create Improved Value Label
    var lblImprovedValue = document.createElement("label");
    lblImprovedValue.textContent = "Improved Value";
    lblImprovedValue.setAttribute("class", "InputLabels")



    var improvedValueEntry = document.createElement("input");
    improvedValueEntry.setAttribute("type", "text");
    improvedValueEntry.setAttribute("id", "improvedValueEntryID");
    improvedValueEntry.setAttribute("name", "improvedValueEntry");
    improvedValueEntry.setAttribute("class", "InputEntries")



    //---------------Items Value------------------------------

    //create Items Label
    var lblItems = document.createElement("label");
    lblItems.textContent = "Items";
    lblItems.setAttribute("class", "InputLabels")



    var itemsEntry = document.createElement("input");
    itemsEntry.setAttribute("type", "text");
    itemsEntry.setAttribute("id", "itemsEntryID");
    itemsEntry.setAttribute("name", "itemsEntry");
    itemsEntry.setAttribute("class", "InputEntries");












    //---------------Total RCN Value------------------------------

    //create Total RCN Label
    var lblTotalRCN = document.createElement("label");
    lblTotalRCN.textContent = "Total RCN";
    lblTotalRCN.setAttribute("class", "InputLabels")



    var totalRCNEntry = document.createElement("input");
    totalRCNEntry.setAttribute("type", "text");
    totalRCNEntry.setAttribute("id", "totalRCNEntryID");
    totalRCNEntry.setAttribute("name", "totalRCNEntry");
    totalRCNEntry.setAttribute("class", "InputEntries")

    //---------------Depreciation------------------------------

    //create Depreceation Label
    var lblDepreciation = document.createElement("label");
    lblDepreciation.textContent = "Depreciation";
    lblDepreciation.setAttribute("class", "InputLabels")



    var DepreciationEntry = document.createElement("input");
    DepreciationEntry.setAttribute("type", "text");
    DepreciationEntry.setAttribute("id", "depreciationEntryID");
    DepreciationEntry.setAttribute("name", "totalRCNEntry");
    DepreciationEntry.setAttribute("class", "InputEntries")


    //---------------RCNLD------------------------------

    //create RCNLD Label
    var lblRCNLD = document.createElement("label");
    lblRCNLD.textContent = "RCNLD";
    lblRCNLD.setAttribute("class", "InputLabels")



    var RCNLDEntry = document.createElement("input");
    RCNLDEntry.setAttribute("type", "text");
    RCNLDEntry.setAttribute("id", "RCNLDEntryID");
    RCNLDEntry.setAttribute("name", "RCNLDEntry");
    RCNLDEntry.setAttribute("class", "InputEntries")

    //---------------Land Value------------------------------

    //create Land Value Label
    var lblLandValue = document.createElement("label");
    lblLandValue.textContent = "Land Value";
    lblLandValue.setAttribute("class", "InputLabels")



    var landValueEntry = document.createElement("input");
    landValueEntry.setAttribute("type", "text");
    landValueEntry.setAttribute("id", "landValueEntryID");
    landValueEntry.setAttribute("name", "landValueEntry");
    landValueEntry.setAttribute("class", "InputEntries")


    //---------------Estimated Improved and Land Value------------------------------

    //create Land Value Label
    var lblEstimatedImprovedAndLandValue = document.createElement("label");
    lblEstimatedImprovedAndLandValue.textContent = "Estimated Improved and Land Value";
    lblEstimatedImprovedAndLandValue.setAttribute("class", "InputLabels")



    var estimatedImprovedAndLandValueEntry = document.createElement("input");
    estimatedImprovedAndLandValueEntry.setAttribute("type", "text");
    estimatedImprovedAndLandValueEntry.setAttribute("id", "estimatedImprovedAndLandValueEntryID");
    estimatedImprovedAndLandValueEntry.setAttribute("name", "estimatedImprovedAndLandValueEntry");
    estimatedImprovedAndLandValueEntry.setAttribute("class", "InputEntries")

    //---------------Estimated Improved and Land Value------------------------------

    //create Land Value Label
    var lblEstimatedImprovedAndLandValue = document.createElement("label");
    lblEstimatedImprovedAndLandValue.textContent = "Estimated Improved and Land Value";
    lblEstimatedImprovedAndLandValue.setAttribute("class", "InputLabels")



    var estimatedImprovedAndLandValueEntry = document.createElement("input");
    estimatedImprovedAndLandValueEntry.setAttribute("type", "text");
    estimatedImprovedAndLandValueEntry.setAttribute("id", "estimatedImprovedAndLandValueEntryID");
    estimatedImprovedAndLandValueEntry.setAttribute("name", "estimatedImprovedAndLandValueEntry");
    estimatedImprovedAndLandValueEntry.setAttribute("class", "InputEntries")


    //---------------Dollars Per Square Foot------------------------------

    //create Dollars Per Square Foot Label
    var lblDollarsPerSquareFoot = document.createElement("label");
    lblDollarsPerSquareFoot.textContent = "Dollars per Square Foot";
    lblDollarsPerSquareFoot.setAttribute("class", "InputLabels")



    var dollarsPerSquareFootForCostEntry = document.createElement("input");
    dollarsPerSquareFootForCostEntry.setAttribute("type", "text");
    dollarsPerSquareFootForCostEntry.setAttribute("id", "dollarsPerSquareFootForCostEntryID");
    dollarsPerSquareFootForCostEntry.setAttribute("name", "dollarsPerSquareFootForCostEntry");
    dollarsPerSquareFootForCostEntry.setAttribute("class", "InputEntries")

    var button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.setAttribute("form", "costValueFormValidate")
    button.setAttribute("value", "Submit")
    button.setAttribute("class", "SubmitButton")
    button.textContent = 'Submit'


    //var gridContainer = document.getElementById('cost-grid-container')
    var gridContainer = document.getElementById(container)

    var gridItemDiv = document.createElement("div");
    gridItemDiv.setAttribute("class", "cost-grid-item")


    gridContainer.appendChild(lblIntFinRate)
    gridContainer.appendChild(intFinRateEntry)

    gridContainer.appendChild(lblExtWallAndBuildClassRate)
    gridContainer.appendChild(extWallAndBuildClassRateEntry)


    //using hardcoded variables for basic version

    gridContainer.appendChild(lblLocationAdjustment)
    gridContainer.appendChild(locationAdjustmentEntry)

    gridContainer.appendChild(lblAreaPerimAdjustment)
    gridContainer.appendChild(AreaPerimAdjustmentEntry)

    gridContainer.appendChild(lblHeightAdjustment)
    gridContainer.appendChild(heightAdjustmentEntry)

    gridContainer.appendChild(lblQualityAdjustment)
    gridContainer.appendChild(qualityAdjustmentEntry)

    gridContainer.appendChild(lblConditionAdjustment)
    gridContainer.appendChild(conditionAdjustmentEntry)

    gridContainer.appendChild(lblAdjustedRate)
    gridContainer.appendChild(adjustedRateEntry)

    gridContainer.appendChild(lblImprovedValue)
    gridContainer.appendChild(improvedValueEntry)

    gridContainer.appendChild(lblItems)
    gridContainer.appendChild(itemsEntry)

    //gridContainer.appendChild(empty2)
    //gridContainer.appendChild(itemsEntryButton)

    gridContainer.appendChild(lblTotalRCN)
    gridContainer.appendChild(totalRCNEntry)

    gridContainer.appendChild(lblDepreciation)
    gridContainer.appendChild(DepreciationEntry)

    gridContainer.appendChild(lblRCNLD)
    gridContainer.appendChild(RCNLDEntry)

    gridContainer.appendChild(lblLandValue)
    gridContainer.appendChild(landValueEntry)

    gridContainer.appendChild(lblEstimatedImprovedAndLandValue)
    gridContainer.appendChild(estimatedImprovedAndLandValueEntry)

    gridContainer.appendChild(lblDollarsPerSquareFoot)
    gridContainer.appendChild(dollarsPerSquareFootForCostEntry)

    //gridContainer.appendChild(empty)
    //gridContainer.appendChild(button)
    gridContainer.appendChild(form4)



    //document.getElementById('costValueCalculatorForm').appendChild(form4)
    //document.getElementById('basicForm').appendChild(button)



    //------------------------------------------------------------------

    //mainContentDiv.appendChild(form);

    //document.getElementsByTagName("body")[0]
    //   .appendChild(form);

}




function createMarketValueCalculator(container) {

        //Create HTML Elements for Market Tab


    // Create a form dynamically
    var form5 = document.createElement("form");
    form5.setAttribute("id", "marketValueFormValidate")
    form5.setAttribute("method", "post");
    form5.setAttribute("name", "marketValueForm")
    form5.setAttribute("class", "inputForm")
    form5.setAttribute("action", "javascript:void(0)");

    //------------Empty Value--------------------------------------
    var empty = document.createElement("label");
    empty.textContent = "";
    empty.setAttribute("class", "grid-item")

    var empty2 = document.createElement("label");
    empty2.textContent = "";
    empty2.setAttribute("class", "grid-item")

    var empty3 = document.createElement("label");
    empty3.textContent = "";
    empty3.setAttribute("class", "grid-item")

    var empty4 = document.createElement("label");
    empty4.textContent = "";
    empty4.setAttribute("class", "grid-item")

    var empty5 = document.createElement("label");
    empty5.textContent = "";
    empty5.setAttribute("class", "grid-item")


    //---------------Total Sale Value and $ per Square------------------------------

    //create Sale Total Sale Value label
    var lblTotalSaleValue = document.createElement("label");
    lblTotalSaleValue.textContent = "Total Sale Value";
    lblTotalSaleValue.setAttribute("class", "grid-item")

    var lblDollarsPerSquareFootMarket = document.createElement("label");
    lblDollarsPerSquareFootMarket.textContent = "Price p Square Foot"
    lblDollarsPerSquareFootMarket.setAttribute("class", "grid-item")


    //---------------Parcel ID and Adj Sale $ per sqf------------------------------
    //

    //create Sale Total Sale Value label
    var lblParcelID = document.createElement("label");
    lblParcelID.textContent = "Address";
    lblParcelID.setAttribute("class", "grid-item")

    var lblAdjustedSaleDollarsPerSquareFoot = document.createElement("label");
    lblAdjustedSaleDollarsPerSquareFoot.textContent = "Adjusted Price p Square Foot"
    lblAdjustedSaleDollarsPerSquareFoot.setAttribute("class", "grid-item")

    //Create and append select list for Sale 1 From Database-----------------------

    var lblSale1FromDatabase = document.createElement("label");
    lblSale1FromDatabase.textContent = "Sale 1 From Database"
    lblSale1FromDatabase.setAttribute("class", "grid-item")

    var sale1FromDatabaseEntry = document.createElement("input");
    sale1FromDatabaseEntry.setAttribute("type", "text");
    sale1FromDatabaseEntry.setAttribute("id", "sale1FromDatabaseEntryID");
    sale1FromDatabaseEntry.setAttribute("name", "sale1FromDatabaseEntry");
    sale1FromDatabaseEntry.setAttribute("class", "grid-item");

    var dollarsPerSquareFootForSale1Entry = document.createElement("input");
    dollarsPerSquareFootForSale1Entry.setAttribute("type", "text");
    dollarsPerSquareFootForSale1Entry.setAttribute("id", "dollarsPerSquareFootForSale1EntryID");
    dollarsPerSquareFootForSale1Entry.setAttribute("name", "dollarsPerSquareFootForSale1Entry");
    dollarsPerSquareFootForSale1Entry.setAttribute("class", "grid-item");

    var sale1ParcelIDEntry = document.createElement("input");
    sale1ParcelIDEntry.setAttribute("type", "text");
    sale1ParcelIDEntry.setAttribute("id", "sale1ParcelIDEntryID");
    sale1ParcelIDEntry.setAttribute("name", "sale1ParcelIDEntry");
    sale1ParcelIDEntry.setAttribute("class", "grid-item");

    var adjustedDollarsPerSquareFootForSale1Entry = document.createElement("input");
    adjustedDollarsPerSquareFootForSale1Entry.setAttribute("type", "text");
    adjustedDollarsPerSquareFootForSale1Entry.setAttribute("id", "adjustedDollarsPerSquareFootForSale1EntryID");
    adjustedDollarsPerSquareFootForSale1Entry.setAttribute("name", "adjustedDollarsPerSquareFootForSale1Entry");
    adjustedDollarsPerSquareFootForSale1Entry.setAttribute("class", "grid-item");


    //Create and append select list for Sale 2 From Database----------------------------

    var lblSale2FromDatabase = document.createElement("label");
    lblSale2FromDatabase.textContent = "Sale 2 From Database"
    lblSale2FromDatabase.setAttribute("class", "grid-item")

    var sale2FromDatabaseEntry = document.createElement("input");
    sale2FromDatabaseEntry.setAttribute("type", "text");
    sale2FromDatabaseEntry.setAttribute("id", "sale2FromDatabaseEntryID");
    sale2FromDatabaseEntry.setAttribute("name", "sale2FromDatabaseEntry");
    sale2FromDatabaseEntry.setAttribute("class", "grid-item");

    var dollarsPerSquareFootForSale2Entry = document.createElement("input");
    dollarsPerSquareFootForSale2Entry.setAttribute("type", "text");
    dollarsPerSquareFootForSale2Entry.setAttribute("id", "dollarsPerSquareFootForSale2EntryID");
    dollarsPerSquareFootForSale2Entry.setAttribute("name", "dollarsPerSquareFootForSale2Entry");
    dollarsPerSquareFootForSale2Entry.setAttribute("class", "grid-item");


    var sale2ParcelIDEntry = document.createElement("input");
    sale2ParcelIDEntry.setAttribute("type", "text");
    sale2ParcelIDEntry.setAttribute("id", "sale2ParcelIDEntryID");
    sale2ParcelIDEntry.setAttribute("name", "sale2ParcelIDEntry");
    sale2ParcelIDEntry.setAttribute("class", "grid-item");

    var adjustedDollarsPerSquareFootForSale2Entry = document.createElement("input");
    adjustedDollarsPerSquareFootForSale2Entry.setAttribute("type", "text");
    adjustedDollarsPerSquareFootForSale2Entry.setAttribute("id", "adjustedDollarsPerSquareFootForSale2EntryID");
    adjustedDollarsPerSquareFootForSale2Entry.setAttribute("name", "adjustedDollarsPerSquareFootForSale2Entry");
    adjustedDollarsPerSquareFootForSale2Entry.setAttribute("class", "grid-item");


    //Create and append select list for Sale 3 From Database-----------------------------------

    var lblSale3FromDatabase = document.createElement("label");
    lblSale3FromDatabase.textContent = "Sale 3 From Database"
    lblSale3FromDatabase.setAttribute("class", "grid-item")

    var sale3FromDatabaseEntry = document.createElement("input");
    sale3FromDatabaseEntry.setAttribute("type", "text");
    sale3FromDatabaseEntry.setAttribute("id", "sale3FromDatabaseEntryID");
    sale3FromDatabaseEntry.setAttribute("name", "sale3FromDatabaseEntry");
    sale3FromDatabaseEntry.setAttribute("class", "grid-item");

    var dollarsPerSquareFootForSale3Entry = document.createElement("input");
    dollarsPerSquareFootForSale3Entry.setAttribute("type", "text");
    dollarsPerSquareFootForSale3Entry.setAttribute("id", "dollarsPerSquareFootForSale3EntryID");
    dollarsPerSquareFootForSale3Entry.setAttribute("name", "dollarsPerSquareFootForSale3Entry");
    dollarsPerSquareFootForSale3Entry.setAttribute("class", "grid-item");

    var sale3ParcelIDEntry = document.createElement("input");
    sale3ParcelIDEntry.setAttribute("type", "text");
    sale3ParcelIDEntry.setAttribute("id", "sale3ParcelIDEntryID");
    sale3ParcelIDEntry.setAttribute("name", "sale3ParcelIDEntry");
    sale3ParcelIDEntry.setAttribute("class", "grid-item");

    var adjustedDollarsPerSquareFootForSale3Entry = document.createElement("input");
    adjustedDollarsPerSquareFootForSale3Entry.setAttribute("type", "text");
    adjustedDollarsPerSquareFootForSale3Entry.setAttribute("id", "adjustedDollarsPerSquareFootForSale3EntryID");
    adjustedDollarsPerSquareFootForSale3Entry.setAttribute("name", "adjustedDollarsPerSquareFootForSale3Entry");
    adjustedDollarsPerSquareFootForSale3Entry.setAttribute("class", "grid-item");



    //Create and append select list for Subject regression results-----------------------------------

    var lblRegressionModelValue = document.createElement("label");
    lblRegressionModelValue.textContent = "Regression Model Value"

    var regressionSubjectTotalEntry = document.createElement("input");
    regressionSubjectTotalEntry.setAttribute("type", "text");
    regressionSubjectTotalEntry.setAttribute("id", "regressionSubjectTotalEntryID");
    regressionSubjectTotalEntry.setAttribute("name", "regressionSubjectTotalEntry");

    var regressionModelValuePerSquareFootEntry = document.createElement("input");
    regressionModelValuePerSquareFootEntry.setAttribute("type", "text");
    regressionModelValuePerSquareFootEntry.setAttribute("id", "regressionModelValuePerSquareFootEntryID");
    regressionModelValuePerSquareFootEntry.setAttribute("name", "regressionModelValuePerSquareFootEntry");

    var regressionSubjectAddressEntry = document.createElement("input");
    regressionSubjectAddressEntry.setAttribute("type", "text");
    regressionSubjectAddressEntry.setAttribute("id", "regressionSubjectAddressEntryID");
    regressionSubjectAddressEntry.setAttribute("name", "regressionSubjectAddressEntry");

    var adjustedDollarsPerSquareFootForRegressionModelEntry = document.createElement("input");
    adjustedDollarsPerSquareFootForRegressionModelEntry.setAttribute("type", "text");
    adjustedDollarsPerSquareFootForRegressionModelEntry.setAttribute("id", "adjustedDollarsPerSquareFootForRegressionModelEntryID");
    adjustedDollarsPerSquareFootForRegressionModelEntry.setAttribute("name", "adjustedDollarsPerSquareFootForRegressionModelEntry");
    //---------------Estimated Sale Value and $ per square foot total------------------------------

    var lblEstimatedSalesValue = document.createElement("label");
    lblEstimatedSalesValue.textContent = "Estimated Sales Value"
    lblEstimatedSalesValue.setAttribute("class", "grid-item")

    var estimatedSalesValueEntry = document.createElement("input");
    estimatedSalesValueEntry.setAttribute("type", "text");
    estimatedSalesValueEntry.setAttribute("id", "estimatedSalesValueEntryID");
    estimatedSalesValueEntry.setAttribute("name", "estimatedSalesValueEntry");
    estimatedSalesValueEntry.setAttribute("class", "grid-item");


    var lblDollarsPerSquareFootMarketTotalEntry = document.createElement("label");
    lblDollarsPerSquareFootMarketTotalEntry.textContent = "Dollars per Square Foot"
    lblDollarsPerSquareFootMarketTotalEntry.setAttribute("class", "grid-item")

    var dollarsPerSquareFootMarketTotalEntry = document.createElement("input");
    dollarsPerSquareFootMarketTotalEntry.setAttribute("type", "text");
    dollarsPerSquareFootMarketTotalEntry.setAttribute("id", "dollarsPerSquareFootMarketTotalEntryID");
    dollarsPerSquareFootMarketTotalEntry.setAttribute("name", "dollarsPerSquareFootMarketTotalEntry");
    dollarsPerSquareFootMarketTotalEntry.setAttribute("class", "grid-item");



    //---------------Submit Button------------------------------

    var button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.setAttribute("form", "marketValueFormValidate")
    button.setAttribute("value", "Submit")
    button.setAttribute("class", "SubmitButton")
    button.textContent = 'Submit'


    //var gridContainerMarket = document.getElementById('market-grid-container')
    var gridContainerMarket = document.getElementById(container)


    var gridItemDiv = document.createElement("div");
    gridItemDiv.setAttribute("class", "grid-item")

    gridContainerMarket.appendChild(empty)
    gridContainerMarket.appendChild(lblParcelID)
    gridContainerMarket.appendChild(lblTotalSaleValue)
    gridContainerMarket.appendChild(lblDollarsPerSquareFootMarket)

    gridContainerMarket.appendChild(lblAdjustedSaleDollarsPerSquareFoot)



    gridContainerMarket.appendChild(lblSale1FromDatabase)
    gridContainerMarket.appendChild(sale1ParcelIDEntry)
    gridContainerMarket.appendChild(sale1FromDatabaseEntry)
    gridContainerMarket.appendChild(dollarsPerSquareFootForSale1Entry)

    gridContainerMarket.appendChild(adjustedDollarsPerSquareFootForSale1Entry)


    gridContainerMarket.appendChild(lblSale2FromDatabase)
    gridContainerMarket.appendChild(sale2ParcelIDEntry)
    gridContainerMarket.appendChild(sale2FromDatabaseEntry)
    gridContainerMarket.appendChild(dollarsPerSquareFootForSale2Entry)

    gridContainerMarket.appendChild(adjustedDollarsPerSquareFootForSale2Entry)


    gridContainerMarket.appendChild(lblSale3FromDatabase)
    gridContainerMarket.appendChild(sale3ParcelIDEntry)
    gridContainerMarket.appendChild(sale3FromDatabaseEntry)
    gridContainerMarket.appendChild(dollarsPerSquareFootForSale3Entry)

    gridContainerMarket.appendChild(adjustedDollarsPerSquareFootForSale3Entry)

    gridContainerMarket.appendChild(lblRegressionModelValue)
    gridContainerMarket.appendChild(regressionSubjectAddressEntry)
    gridContainerMarket.appendChild(regressionSubjectTotalEntry)
    gridContainerMarket.appendChild(regressionModelValuePerSquareFootEntry)

    gridContainerMarket.appendChild(adjustedDollarsPerSquareFootForRegressionModelEntry)

}

function createMarketTable(propertyList) {

        //Create HTML Elements for Market Comp Table

    console.log("creating a table with : " + propertyList)
    console.log(propertyList)

    let numberOfRows = propertyList.length
    let numberOfColumns = 4


    for (var j = 0; j < numberOfRows; j++) {
        //var headers = ["Full Address","Total Acres","Square Feet","Condition","Quality","Exterior Wall","Interior Wall","Year Built","Perimeter","Height","Sale Price","Sale Date",];
        // 0 - "account_num",        
        // 1 - "account_type",       
        // 2 - "full_address",       
        // 3 - "land_total_acres",
        // 4 - "zipcode", 
        // 5 - "business_name", 
        // 6 - "buildings", 
        // 7 - "full_legal", 
        // 8 - "total_mill_levy",
        // 9 - "total_market_value", 
        // 10 - "last_sale_date", 
        // 11 - "square_feet", 
        // 12 - "condition", 
        // 13 - "quality", 
        // 14 - "exterior", 
        // 15 - "interior", 
        // 16 - "year_built", 
        // 17 - "linear_feet_of_perimeter", 
        // 18 - "story_height"
        // 19 - "sale_price"
        // 20 - "sale_date"

            inputsArray.push(propertyList[j])
            var checkBox = document.createElement('input')
            checkBox.setAttribute("type", "checkbox")
            checkBox.setAttribute("id", "selectedComp")
            checkBox.setAttribute("name", "selectedComp")
            checkBox.setAttribute("value", "selectedComp")
            checkBox.checked = true;
            var tr = document.createElement('tr');//tr
            var td = document.createElement('td')//address
            var td2 = document.createElement('td')//sale price
            var td6 = document.createElement('td')//sale date
            var td3 = document.createElement('td')// square feet
            var td4 = document.createElement('td')//Price p Square Feet
            var td5 = document.createElement('td')// PropertyType
        // 0 - "account_num",
        // 1 - "account_type",
        // 2 - "full_address",
        // 3 - "land_total_acres",
        // 4 - "zipcode", 
        // 5 - "business_name", 
        // 6 - "buildings", 
        // 7 - "full_legal", 
        // 8 - "total_mill_levy", 
        // 9 - "total_market_value", 
        // 10 - "last_sale_date", 
        // 11 - "square_feet", 
        // 12 - "condition", 
        // 13 - "quality", 
        // 14 - "exterior", 
        // 15 - "interior", 
        // 16 - "year_built", 
        // 17 - "linear_feet_of_perimeter", 
        // 18 - "story_height"
        // 19 - "sale_price"
        // 20 - "sale_date"
            td.appendChild(document.createTextNode(propertyList[j][2]))
            let marketValue = dollarsUSNoDecimal.format(parseInt(propertyList[j][19]))
            td2.appendChild(document.createTextNode(marketValue))
            td3.appendChild(document.createTextNode(propertyList[j][11]))
            if(parseInt(propertyList[j][11]) == 0){
                td4.appendChild(document.createTextNode("0"))
            }
            else{
                let sqfPrice = parseInt(propertyList[j][9]) / parseInt(propertyList[j][11])
                sqfPrice = dollarsUS.format(sqfPrice)
                td4.appendChild(document.createTextNode(sqfPrice))
            }
            
            td5.appendChild(document.createTextNode(propertyList[j][1]))
            td6.appendChild(document.createTextNode(propertyList[j][20]))
            tr.appendChild(checkBox)
            tr.appendChild(td)
            tr.appendChild(td2)
            tr.appendChild(td6)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            document.getElementById("marketTable").appendChild(tr)  
    }

    //for (var j = 0; j < propertyList.length; j++) {
    //    var tr = document.createElement('tr');
    //    for (var k = 0; k < 4; k++) {
    //        var td = document.createElement('td')
    //        td.appendChild(document.createTextNode(propertyList[j][k]))
    //        tr.appendChild(td)
    //        document.getElementById("marketTable").appendChild(tr)
    //    }
//
    //}

console.log("inputsarray at writeHTML")
console.log(inputsArray)



}


function createSummary(container) {

        //Create HTML Elements for Summary Tab

    // Create a form dynamically
    var form6 = document.createElement("form");
    form6.setAttribute("id", "summaryFormValidate")
    form6.setAttribute("method", "post");
    form6.setAttribute("name", "summaryForm")
    form6.setAttribute("class", "inputForm")
    form6.setAttribute("action", "javascript:void(0)");



    //------------Empty Value--------------------------------------
    var empty = document.createElement("label");
    empty.textContent = "";
    empty.setAttribute("class", "grid-item")

    var empty2 = document.createElement("label");
    empty2.textContent = "";
    empty2.setAttribute("class", "grid-item")

    var empty3 = document.createElement("label");
    empty3.textContent = "";
    empty3.setAttribute("class", "grid-item")

    var empty4 = document.createElement("label");
    empty4.textContent = "";
    empty4.setAttribute("class", "grid-item")

    var empty5 = document.createElement("label");
    empty5.textContent = "";
    empty5.setAttribute("class", "grid-item")


    //---------------Location------------------------------

    //create Location label
    var lblLocationAddress = document.createElement("label");
    lblLocationAddress.textContent = "Location Address";
    lblLocationAddress.setAttribute("class", "grid-item")

    var locationAddressEntry = document.createElement("input");
    locationAddressEntry.setAttribute("type", "text");
    locationAddressEntry.setAttribute("id", "locationAddressEntryID");
    locationAddressEntry.setAttribute("name", "locationAddressEntry");
    locationAddressEntry.setAttribute("class", "grid-item");


    //---------------Property Type------------------------------

    //create Property Type label
    var lblPropertyTypeSummary = document.createElement("label");
    lblPropertyTypeSummary.textContent = "Property Type";
    lblPropertyTypeSummary.setAttribute("class", "grid-item")

    var propertyTypeSummary = document.createElement("input");
    propertyTypeSummary.setAttribute("type", "text");
    propertyTypeSummary.setAttribute("id", "propertyTypeSummaryID");
    propertyTypeSummary.setAttribute("name", "propertyTypeSummary");
    propertyTypeSummary.setAttribute("class", "grid-item");

    //---------------Square Footage------------------------------

    //create Square Footage label
    var lblSquareFootageSummary = document.createElement("label");
    lblSquareFootageSummary.textContent = "Square Footage";
    lblSquareFootageSummary.setAttribute("class", "grid-item")

    var squareFootageSummaryEntry = document.createElement("input");
    squareFootageSummaryEntry.setAttribute("type", "text");
    squareFootageSummaryEntry.setAttribute("id", "squareFootageSummaryEntryID");
    squareFootageSummaryEntry.setAttribute("name", "squareFootageSummaryEntry");
    squareFootageSummaryEntry.setAttribute("class", "grid-item");

    //---------------Income Estimated Value------------------------------

    //create Income Estimated Value label
    var lblIncomeEstimatedValue = document.createElement("label");
    lblIncomeEstimatedValue.textContent = "Income Estimated Value";
    lblIncomeEstimatedValue.setAttribute("class", "grid-item")

    var incomeEstimatedValueEntry = document.createElement("input");
    incomeEstimatedValueEntry.setAttribute("type", "text");
    incomeEstimatedValueEntry.setAttribute("id", "incomeEstimatedValueEntryID");
    incomeEstimatedValueEntry.setAttribute("name", "incomeEstimatedValueEntry");
    incomeEstimatedValueEntry.setAttribute("class", "grid-item");
    //SQF Dollars
    var lblDollarsPerSquareFootSummary = document.createElement("label");
    lblDollarsPerSquareFootSummary.textContent = "Dollars per Square Foot";
    lblDollarsPerSquareFootSummary.setAttribute("class", "grid-item")

    var dollarsPerSquareFootIncomeEntry = document.createElement("input");
    dollarsPerSquareFootIncomeEntry.setAttribute("type", "text");
    dollarsPerSquareFootIncomeEntry.setAttribute("id", "dollarsPerSquareFootIncomeEntryID");
    dollarsPerSquareFootIncomeEntry.setAttribute("name", "dollarsPerSquareFootIncomeEntry");
    dollarsPerSquareFootIncomeEntry.setAttribute("class", "grid-item");

    //---------------Cost Estimated Value------------------------------

    //create Income Estimated Value label
    var lblCostEstimatedValue = document.createElement("label");
    lblCostEstimatedValue.textContent = "Cost Estimated Value";
    lblCostEstimatedValue.setAttribute("class", "grid-item")

    var costEstimatedValueEntry = document.createElement("input");
    costEstimatedValueEntry.setAttribute("type", "text");
    costEstimatedValueEntry.setAttribute("id", "costEstimatedValueEntryID");
    costEstimatedValueEntry.setAttribute("name", "costEstimatedValueEntry");
    costEstimatedValueEntry.setAttribute("class", "grid-item");

    //SQF Dollars
    var dollarsPerSquareFootCostEntry = document.createElement("input");
    dollarsPerSquareFootCostEntry.setAttribute("type", "text");
    dollarsPerSquareFootCostEntry.setAttribute("id", "dollarsPerSquareFootCostEntryID");
    dollarsPerSquareFootCostEntry.setAttribute("name", "dollarsPerSquareFootCostEntry");
    dollarsPerSquareFootCostEntry.setAttribute("class", "grid-item");

    //---------------Market Estimated Value------------------------------

    //create Income Estimated Value label
    var lblMarketEstimatedValue = document.createElement("label");
    lblMarketEstimatedValue.textContent = "Market Estimated Value";
    lblMarketEstimatedValue.setAttribute("class", "grid-item")

    var marketEstimatedValueEntry = document.createElement("input");
    marketEstimatedValueEntry.setAttribute("type", "text");
    marketEstimatedValueEntry.setAttribute("id", "marketEstimatedValueEntryID");
    marketEstimatedValueEntry.setAttribute("name", "marketEstimatedValueEntry");
    marketEstimatedValueEntry.setAttribute("class", "grid-item");

    //SQF Dollars
    var dollarsPerSquareFootMarketEntry = document.createElement("input");
    dollarsPerSquareFootMarketEntry.setAttribute("type", "text");
    dollarsPerSquareFootMarketEntry.setAttribute("id", "dollarsPerSquareFootMarketEntryID");
    dollarsPerSquareFootMarketEntry.setAttribute("name", "dollarsPerSquareFootMarketEntry");
    dollarsPerSquareFootMarketEntry.setAttribute("class", "grid-item");


    //---------------------Summary Value----------------------------------------

    //create Income Estimated Value label
    var lblSummaryValue = document.createElement("label");
    lblSummaryValue.textContent = "Summary Value";
    lblSummaryValue.setAttribute("class", "grid-item")

    var summaryValueEntry = document.createElement("input");
    summaryValueEntry.setAttribute("type", "text");
    summaryValueEntry.setAttribute("id", "summaryValueEntryID");
    summaryValueEntry.setAttribute("name", "summaryValueEntry");
    summaryValueEntry.setAttribute("class", "grid-item");

    //SQF Dollars
    var dollarsPerSquareFootSummaryEntry = document.createElement("input");
    dollarsPerSquareFootSummaryEntry.setAttribute("type", "text");
    dollarsPerSquareFootSummaryEntry.setAttribute("id", "dollarsPerSquareFootSummaryEntryID");
    dollarsPerSquareFootSummaryEntry.setAttribute("name", "dollarsPerSquareFootSummaryEntry");
    dollarsPerSquareFootSummaryEntry.setAttribute("class", "grid-item");




    //do the magic

    var gridContainerMarket = document.getElementById(container)

    gridContainerMarket.appendChild(lblLocationAddress)
    gridContainerMarket.appendChild(locationAddressEntry)
    gridContainerMarket.appendChild(empty)

    gridContainerMarket.appendChild(lblPropertyTypeSummary)
    gridContainerMarket.appendChild(propertyTypeSummary)
    gridContainerMarket.appendChild(empty2)

    gridContainerMarket.appendChild(lblIncomeEstimatedValue)
    gridContainerMarket.appendChild(incomeEstimatedValueEntry)
    gridContainerMarket.appendChild(dollarsPerSquareFootIncomeEntry)

    gridContainerMarket.appendChild(lblCostEstimatedValue)
    gridContainerMarket.appendChild(costEstimatedValueEntry)
    gridContainerMarket.appendChild(dollarsPerSquareFootCostEntry)

    gridContainerMarket.appendChild(lblMarketEstimatedValue)
    gridContainerMarket.appendChild(marketEstimatedValueEntry)
    gridContainerMarket.appendChild(dollarsPerSquareFootMarketEntry)


    gridContainerMarket.appendChild(lblSummaryValue)
    gridContainerMarket.appendChild(summaryValueEntry)
    gridContainerMarket.appendChild(dollarsPerSquareFootSummaryEntry)

    gridContainerMarket.appendChild(form6)
}




function createGraph(array, dependent, independent) {

    //Create HTML Elements for Regressional Analysis Graph

    console.log("array length")
    //console.log(array[array.length - 1][2])
    var numOfInd = array.pop()
    console.log(numOfInd)
    //console.log(array.pop())
    if (numOfInd == 1) {


        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);

        console.log(array)

        function drawChart() {
            var data = new google.visualization.DataTable();
            data.addColumn("number", dependent)
            data.addColumn("number", independent)
            console.log(dependent + " " + independent)
            data.addRows(array)
            //data.addRows(array[i][1])
            //  
            var options = {
                title: dependent + ' vs. ' + independent,
                hAxis: { title: independent, minValue: 0, maxValue: 15 },
                vAxis: { title: dependent, minValue: 0, maxValue: 15 },
                width: 900,
                height: 500,
                legend: 'none'
            };
            //  
            var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
            //var chartDiv = document.getElementById('chart_div')
            //var newChart = document.createElement('div')
            //var chart = new google.visualization.ScatterChart(newChart);
            //  
            chart.draw(data, options);
        }
    }
    else {
        var newChart = document.getElementById("newChartSelect")
        var buttonDiv = document.getElementById("buttonDiv")
        buttonDiv.appendChild(newChart)
        var SplicedArray = sliceIntoChunks(array, numOfInd)
        if (newChart.hasChildNodes()) {
            removeAllChildNodes(newChart)
        }


        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);
        //console.log(array)



        function drawChart() {

            //buttonDiv.removeChild();
            console.log("Spliced Array")
            console.log(SplicedArray)
            for (var k = 0; k < numOfInd; k++) {

                //var data = google.visualization.arrayToDataTable(['Age', "weight"],array
                var data = new google.visualization.DataTable();
                //['Age', 'Weight'],
                //[ parseInt(x),      parseInt(y)],
                //[ 4,      5.5],
                //[ 11,     14],
                //[ 4,      5],
                //[ 3,      3.5],
                //[ 6.5,    7]
                //);
                //console.log("k " + SplicedArray[0][0])
                data.addColumn("number", dependent)
                data.addColumn("number", independent[k])
                //console.log(dependent + " " + independent[k])
                for (var j = 0; j < (SplicedArray.length); j++) {
                    //console.log("k " + SplicedArray[j][k])
                    data.addRow(SplicedArray[j][k])
                }
                //for (var j = 0; j < (SplicedArray.length); j++) {
                //    //console.log("k " + SplicedArray[j][k])
                //    for(var p = 0; p < SplciedArray[0].length; p++){
                //        data.addRows(SplicedArray[j][p])
                //    }
                //    
                //}
                var options = {
                    title: dependent + ' vs. ' + independent[k],
                    hAxis: { title: independent[k], minValue: 0, maxValue: 15 },
                    vAxis: { title: dependent, minValue: 0, maxValue: 15 },
                    width: 900,
                    height: 500,
                    legend: 'none'
                };
                //  
                //var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));



                if (k != numOfInd - 1) {
                    var option = document.createElement("option");
                    option.value = independent[k];
                    option.text = independent[k];
                    newChart.appendChild(option);
                }
                else {
                    var option = document.createElement("option");
                    option.value = independent[k];
                    option.text = independent[k];
                    newChart.appendChild(option);
                    newChart.value = independent[k]
                }


                //newChart.setAttribute("onclick", "setSpecialInd("+"'"+independent[k]+"'"+")")
                //newChart.textContent ="Show " + independent[k] + " Chart"

                var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
                //  
                chart.draw(data, options);







                // Import the example feature collection and subset the forest feature.



            }
        }
    }
}



function createSlider(type, min, max, value, step, name, id, classname) {
    //Slider for CapRateBuilder with values

    let NewSlider = document.createElement("input")
    NewSlider.setAttribute("type", type)
    NewSlider.setAttribute("min", min)
    NewSlider.setAttribute("max", max)
    NewSlider.setAttribute("value", value)
    NewSlider.setAttribute("step", step)
    NewSlider.setAttribute("name", (name + "Input"))
    NewSlider.setAttribute("id", (id + "Input"))
    NewSlider.setAttribute("class", classname)
    NewSlider.setAttribute("oninput", name + "Output.value=" + name + "Input.value")




    return (NewSlider)
}

function createOutput(name, id, classname) {
    let newOutput = document.createElement("output")
    newOutput.setAttribute("name", (name + "Output"))
    newOutput.setAttribute("id", (id + "Output"))
    newOutput.setAttribute("class", classname)
    newOutput.setAttribute("for", (id + "Input"))
    newOutput.textContent = "0"

    return (newOutput)
}

function createCapRateBuilder() {
    var lblLTVRatio = document.createElement("label")
    lblLTVRatio.textContent = "LTV Ratio:"


    var ltvRatioSlider = document.createElement("input")
    ltvRatioSlider.setAttribute("type", "range")
    ltvRatioSlider.setAttribute("min", "0.50")
    ltvRatioSlider.setAttribute("max", "1.00")
    ltvRatioSlider.setAttribute("value", "0.50")
    ltvRatioSlider.setAttribute("step", "0.05")
    ltvRatioSlider.setAttribute("name", "ltvRatioRangeInput")
    ltvRatioSlider.setAttribute("id", "ltvRatioRangeInput")
    ltvRatioSlider.setAttribute("class", "slider")
    ltvRatioSlider.setAttribute("oninput", "ltvRatioRangeOutput.value=ltvRatioRangeInput.value")

    var newOutputs = document.createElement("output")
    newOutputs.setAttribute("name", "ltvRatioRangeOutput")
    newOutputs.setAttribute("id", "ltvRatioRangeOutput")
    newOutputs.setAttribute("class", "bubble")
    newOutputs.setAttribute("for", "rangeInput")
    newOutputs.textContent = "0.50"


    //-----------------
    var lblDCRRatio = document.createElement("label")
    lblDCRRatio.textContent = "DCR Ratio:"

    var DCRRatioSlider = createSlider("range", "1.0", "5.0", "1", "0.1", "dcrRatioRange", "dcrRatioRange", "slider")
    var DCRRatioSliderOutput = createOutput("dcrRatioRange", "dcrRatioRange", "bubble")
    //-----------------------------------

    //-----------------
    var lblOERSlider = document.createElement("label")
    lblOERSlider.textContent = "Operating Expense Ratio:"

    var OERSlider = createSlider("range", "0.00", "1.00", "0", ".05", "oerRatioRange", "oerRatioRange", "slider")
    var OERSliderOutput = createOutput("oerRatioRange", "oerRatioRange", "bubble")
    //-----------------------------------

    //-----------------
    var lblEGIMSlider = document.createElement("label")
    lblEGIMSlider.textContent = "EGIM Ratio:"

    var EGIMSlider = createSlider("range", "1.00", "15.00", "1", "0.1", "egimRatioRange", "egimRatioRange", "slider")
    var EGIMSliderOutput = createOutput("egimRatioRange", "egimRatioRange", "bubble")
    //-----------------------------------


    //-----------------
    var lblGIMSlider = document.createElement("label")
    lblGIMSlider.textContent = "GIM Ratio:"

    var GIMSlider = createSlider("range", "1.00", "15.00", "1", "0.5", "gimRatioRange", "gimRatioRange", "slider")
    var GIMSliderOutput = createOutput("gimRatioRange", "gimRatioRange", "bubble")
    //-----------------------------------



    //-----------------
    var lblMortgageInterestSlider = document.createElement("label")
    lblMortgageInterestSlider.textContent = "Mortgage Interest Rate(%):"

    var MortgageInterestSlider = createSlider("range", "0.00", "20.00", "0", "0.1", "mortgageRatioRange", "mortgageRatioRange", "slider")
    var MortgageInterestSliderOutput = createOutput("mortgageRatioRange", "mortgageRatioRange", "bubble")
    //-----------------------------------




    //-----------------
    var lblEquityYieldSlider = document.createElement("label")
    lblEquityYieldSlider.textContent = "Equity Yield Rate(%):"

    var EquityYieldSlider = createSlider("range", "0.00", "20.00", "0", "0.1", "equityRatioRange", "equityRatioRange", "slider")
    var EquityYieldSliderOutput = createOutput("equityRatioRange", "equityRatioRange", "bubble")
    //-----------------------------------




    //-----------------
    var lblEffectiveTaxRate = document.createElement("label")
    lblEffectiveTaxRate.textContent = "Effective Tax Rate(%):"

    var EffectiveTaxRate = createSlider("range", "0", "5.00", "0", "0.1", "effectiveTaxRatioRange", "effectiveTaxRatioRange", "slider")
    var EffectiveTaxRateOutput = createOutput("effectiveTaxRatioRange", "effectiveTaxRatioRange", "bubble")
    //-----------------------------------


    //-----------------
    var lblRemainingEconomicLife = document.createElement("label")
    lblRemainingEconomicLife.textContent = "Remaining Economic Life (Yrs):"

    var RemainingEconomicLife = createSlider("range", "0.00", "60.00", "0", "1", "remainingEconomicLifeRange", "remainingEconomicLifeRange", "slider")
    var RemainingEconomicLifeOutput = createOutput("remainingEconomicLifeRange", "remainingEconomicLifeRange", "bubble")
    //-----------------------------------


    //-----------------
    var lblTermOfLoan = document.createElement("label")
    lblTermOfLoan.textContent = "Term of Loan (Yrs):"

    var TermOfLoan = createSlider("range", "0.00", "30.00", "0", "1", "termOfLoanRange", "termOfLoanRange", "slider")
    var TermOfLoanOutput = createOutput("termOfLoanRange", "termOfLoanRange", "bubble")
    //-----------------------------------




    var LTVRatioSliderDiv = document.getElementById("LTVRatioSliderDiv")
    var DCRRatioSliderDiv = document.getElementById("DCRRatioSliderDiv")
    var OERRatioSliderDiv = document.getElementById("OERRatioSliderDiv")
    var EGIMRatioSliderDiv = document.getElementById("EGIMRatioSliderDiv")
    var GIMRatioSliderDiv = document.getElementById("GIMRatioSliderDiv")
    var MIRRatioSliderDiv = document.getElementById("MIRRatioSliderDiv")
    var EYRRatioSliderDiv = document.getElementById("EYRRatioSliderDiv")
    var ETRRatioSliderDiv = document.getElementById("ETRRatioSliderDiv")
    var RELRatioSliderDiv = document.getElementById("RELRatioSliderDiv")
    var TOLRatioSliderDiv = document.getElementById("TOLRatioSliderDiv")



    LTVRatioSliderDiv.appendChild(lblLTVRatio)
    LTVRatioSliderDiv.appendChild(ltvRatioSlider)
    LTVRatioSliderDiv.appendChild(newOutputs)


    DCRRatioSliderDiv.appendChild(lblDCRRatio)
    DCRRatioSliderDiv.appendChild(DCRRatioSlider)
    DCRRatioSliderDiv.appendChild(DCRRatioSliderOutput)


    OERRatioSliderDiv.appendChild(lblOERSlider)
    OERRatioSliderDiv.appendChild(OERSlider)
    OERRatioSliderDiv.appendChild(OERSliderOutput)

    EGIMRatioSliderDiv.appendChild(lblEGIMSlider)
    EGIMRatioSliderDiv.appendChild(EGIMSlider)
    EGIMRatioSliderDiv.appendChild(EGIMSliderOutput)

    GIMRatioSliderDiv.appendChild(lblGIMSlider)
    GIMRatioSliderDiv.appendChild(GIMSlider)
    GIMRatioSliderDiv.appendChild(GIMSliderOutput)

    MIRRatioSliderDiv.appendChild(lblMortgageInterestSlider)
    MIRRatioSliderDiv.appendChild(MortgageInterestSlider)
    MIRRatioSliderDiv.appendChild(MortgageInterestSliderOutput)

    EYRRatioSliderDiv.appendChild(lblEquityYieldSlider)
    EYRRatioSliderDiv.appendChild(EquityYieldSlider)
    EYRRatioSliderDiv.appendChild(EquityYieldSliderOutput)

    ETRRatioSliderDiv.appendChild(lblEffectiveTaxRate)
    ETRRatioSliderDiv.appendChild(EffectiveTaxRate)
    ETRRatioSliderDiv.appendChild(EffectiveTaxRateOutput)

    RELRatioSliderDiv.appendChild(lblRemainingEconomicLife)
    RELRatioSliderDiv.appendChild(RemainingEconomicLife)
    RELRatioSliderDiv.appendChild(RemainingEconomicLifeOutput)

    TOLRatioSliderDiv.appendChild(lblTermOfLoan)
    TOLRatioSliderDiv.appendChild(TermOfLoan)
    TOLRatioSliderDiv.appendChild(TermOfLoanOutput)



    //create Property Type label
    var lblPropertyTypeCapRate = document.createElement("label");
    lblPropertyTypeCapRate.textContent = "Property Type";

    var propertyTypeCapRateEntry = document.createElement("input");
    propertyTypeCapRateEntry.setAttribute("type", "text");
    propertyTypeCapRateEntry.setAttribute("id", "propertyTypeCapRateEntryID");
    propertyTypeCapRateEntry.setAttribute("name", "propertyTypeCapRateEntry");

    //---------------------------------------------------------------
    var lblBandMEMethod = document.createElement("label")
    lblBandMEMethod.textContent = "Band Method Mortgage and Equity:"

    var bandMEMethodEntry = document.createElement("input");
    bandMEMethodEntry.setAttribute("type", "text");
    bandMEMethodEntry.setAttribute("id", "bandMEMethodEntryID");
    bandMEMethodEntry.setAttribute("name", "bandMEMethodEntry");
    bandMEMethodEntry.setAttribute("class", "InputEntries");
    bandMEMethodEntry.setAttribute("readonly", true);


    //---------------------------------------------------------------

    //---------------------------------------------------------------
    var lblNetIncomeMethod = document.createElement("label")
    lblNetIncomeMethod.textContent = "Net Income Ratio Method:"

    var netIncomeRatioMethodEntry = document.createElement("input");
    netIncomeRatioMethodEntry.setAttribute("type", "text");
    netIncomeRatioMethodEntry.setAttribute("id", "netIncomeRatioMethodEntryID");
    netIncomeRatioMethodEntry.setAttribute("name", "netIncomeRatioMethodEntry");
    netIncomeRatioMethodEntry.setAttribute("class", "InputEntries");
    netIncomeRatioMethodEntry.setAttribute("readonly", true);


    //---------------------------------------------------------------
    //---------------------------------------------------------------
    var lblDebtCoverageMethod = document.createElement("label")
    lblDebtCoverageMethod.textContent = "DebtCoverageMethod:"

    var debtcoverageRatioMethodEntry = document.createElement("input");
    debtcoverageRatioMethodEntry.setAttribute("type", "text");
    debtcoverageRatioMethodEntry.setAttribute("id", "debtcoverageRatioMethodEntryID");
    debtcoverageRatioMethodEntry.setAttribute("name", "debtcoverageRatioMethodEntry");
    debtcoverageRatioMethodEntry.setAttribute("class", "InputEntries");
    debtcoverageRatioMethodEntry.setAttribute("readonly", true);


    //---------------------------------------------------------------
    //---------------------------------------------------------------
    var lblBandLIMethod = document.createElement("label")
    lblBandLIMethod.textContent = "Band Method Land and Improvements:"

    var bandLIMethodEntry = document.createElement("input");
    bandLIMethodEntry.setAttribute("type", "text");
    bandLIMethodEntry.setAttribute("id", "bandLIMethodEntryID");
    bandLIMethodEntry.setAttribute("name", "bandLIMethodEntry");
    bandLIMethodEntry.setAttribute("class", "InputEntries");
    bandLIMethodEntry.setAttribute("readonly", true);


    //---------------------------------------------------------------

    var lblSummaryCapRate = document.createElement("label")
    lblSummaryCapRate.textContent = "Summary Cap Rate:"

    var summaryCapRateEntry = document.createElement("input");
    summaryCapRateEntry.setAttribute("type", "text");
    summaryCapRateEntry.setAttribute("id", "summaryCapRateEntryID");
    summaryCapRateEntry.setAttribute("name", "summaryCapRateEntry");
    summaryCapRateEntry.setAttribute("class", "InputEntries");
    summaryCapRateEntry.setAttribute("readonly", true);


    var CapRateDivBottom = document.getElementById("CapRateDivBottom")

    CapRateDivBottom.appendChild(lblPropertyTypeCapRate)
    CapRateDivBottom.appendChild(propertyTypeCapRateEntry)

    CapRateDivBottom.appendChild(lblBandMEMethod)
    CapRateDivBottom.appendChild(bandMEMethodEntry)

    CapRateDivBottom.appendChild(lblNetIncomeMethod)
    CapRateDivBottom.appendChild(netIncomeRatioMethodEntry)

    CapRateDivBottom.appendChild(lblDebtCoverageMethod)
    CapRateDivBottom.appendChild(debtcoverageRatioMethodEntry)

    CapRateDivBottom.appendChild(lblBandLIMethod)
    CapRateDivBottom.appendChild(bandLIMethodEntry)

    CapRateDivBottom.appendChild(lblSummaryCapRate)
    CapRateDivBottom.appendChild(summaryCapRateEntry)

    var empty = document.createElement("label");
    empty.textContent = "";
    empty.setAttribute("class", "grid-item")

    var CapRateButton = document.createElement("button");
    //button.setAttribute("type", "submit");
    CapRateButton.setAttribute("id", "submitCapRates")
    //button.setAttribute("value", "Submit")
    CapRateButton.setAttribute("class", "SubmitButton")
    CapRateButton.textContent = 'Get Cap Rates'

    CapRateDivBottom.appendChild(empty)
    CapRateDivBottom.appendChild(CapRateButton)





}

// helpers for create graph------------------------------------
function setSpecialInd(num) {
    specialInd = num;// used for telling regression script what chart to display after button press
    sendRegressionData();
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}
//--------------------------------------------------------------------
function submitCapRates() {
    console.log("submit cap rates!")
    sendCapRateBuilderData();
}

