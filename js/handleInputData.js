//var summaryLink = "https://dirtyearplugs.pythonanywhere.com/summary";
//var costValueLink = "https://dirtyearplugs.pythonanywhere.com/costValueCalc";
//var incomeValueLink = "https://dirtyearplugs.pythonanywhere.com/incomeValueCalc";
//var basicLink = "https://dirtyearplugs.pythonanywhere.com/basic";
//var regressionAnalysis= "https://dirtyearplugs.pythonanywhere.com/regressionAnalysis";
//var regressionLink = "https://dirtyearplugs.pythonanywhere.com/regressionRun"



//var summaryLink = "http://localhost:5000/summary";
//var costValueLink = "http://localhost:5000/costValueCalc";
//var incomeValueLink = "http://localhost:5000/incomeValueCalc";
//var regressionAnalysis = "http://localhost:5000/regressionAnalysis";
//var basicLink = "http://localhost:5000/basic";
//var runRegressionLink = "http://localhost:5000/regressionRun"
//var sendAddressLink = "http://localhost:5000/sendAddress"
//var capRateBuilder = "http://localhost:5000/capRateBuilder"
//var sendMarketAfterAddressLink = "http://localhost:5000/marketAfterAddress"


var summaryLink = "https://basic.datacrosspoint.com/summary";
var costValueLink = "https://basic.datacrosspoint.com/costValueCalc";
var incomeValueLink = "https://basic.datacrosspoint.com/incomeValueCalc";
var regressionAnalysis = "https://basic.datacrosspoint.com/regressionAnalysis";
var basicLink = "https://basic.datacrosspoint.com/basic";
var runRegressionLink = "https://basic.datacrosspoint.com/regressionRun";
var sendAddressLink = "https://basic.datacrosspoint.com/sendAddress";
var capRateBuilder = "https://basic.datacrosspoint.com/capRateBuilder";
var sendMarketAfterAddressLink = "https://basic.datacrosspoint.com/marketAfterAddress";


var specialInd = "false"


let dollarsUSNoDecimal = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0, 
    minimumFractionDigits: 0, 
});

let dollarsUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});



var xhr = null
getXmlHttpRequestObject = function () {
    if (!xhr) {
        // Create a new XMLHttpRequest object
        xhr = new XMLHttpRequest();
        xhr.addEventListener("load", uploadcosComplete, false)
    }
    return xhr;
};

var xhr2 = null
getXmlHttpRequestObject2 = function () {
    if (!xhr2) {
        // Create a new XMLHttpRequest object
        xhr2 = new XMLHttpRequest();
        xhr2.addEventListener("load", uploadbasComplete, false)
    }
    return xhr2;
};

var xhr3 = null
getXmlHttpRequestObject3 = function () {
    if (!xhr3) {
        // Create a new XMLHttpRequest object
        xhr3 = new XMLHttpRequest();
        xhr3.addEventListener("load", uploadincComplete, false)
    }
    return xhr3;
};

var xhr4 = null
getXmlHttpRequestObject4 = function () {
    if (!xhr4) {
        // Create a new XMLHttpRequest object
        xhr4 = new XMLHttpRequest();
        xhr4.addEventListener("load", regressionComplete, false)
    }
    return xhr4;
};


var xhr5 = null
getXmlHttpRequestObject5 = function () {
    if (!xhr5) {
        // Create a new XMLHttpRequest object
        xhr5 = new XMLHttpRequest();
        //xhr5.addEventListener("load",addressComplete, false)
    }
    return xhr5;
};

var xhr6 = null
getXmlHttpRequestObject6 = function () {
    if (!xhr6) {
        // Create a new XMLHttpRequest object
        xhr6 = new XMLHttpRequest();
    }
    return xhr6;
};


function sendDataCallbackForMarketAfterAddress(){
    
    if (xhr6.readyState == 4 && xhr6.status == 201) {
        //parse the json sent from calculate method
        
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


        const dataPackage = JSON.parse(xhr6.response)
        console.log(dataPackage.marketTableData)
        createMarketTable(dataPackage.marketTableData);

        document.getElementById("sale1ParcelIDEntryID").value = dataPackage.marketTableData[0][2]
        document.getElementById("sale2ParcelIDEntryID").value = dataPackage.marketTableData[1][2]
        document.getElementById("sale3ParcelIDEntryID").value = dataPackage.marketTableData[2][2]
        
        document.getElementById("sale1FromDatabaseEntryID").value = dollarsUSNoDecimal.format(dataPackage.marketTableData[0][19])
        document.getElementById("sale2FromDatabaseEntryID").value = dollarsUSNoDecimal.format(dataPackage.marketTableData[1][19])
        document.getElementById("sale3FromDatabaseEntryID").value = dollarsUSNoDecimal.format(dataPackage.marketTableData[2][19])
        
        let sqf1 = (parseInt(dataPackage.marketTableData[0][19]) / parseInt(dataPackage.marketTableData[0][11]))
        let sqf2 = (parseInt(dataPackage.marketTableData[1][19]) / parseInt(dataPackage.marketTableData[1][11]))
        let sqf3 = (parseInt(dataPackage.marketTableData[2][19]) / parseInt(dataPackage.marketTableData[2][11]))
        
        
        document.getElementById("dollarsPerSquareFootForSale1EntryID").value = dollarsUS.format(sqf1)
        document.getElementById("dollarsPerSquareFootForSale2EntryID").value = dollarsUS.format(sqf2)
        document.getElementById("dollarsPerSquareFootForSale3EntryID").value = dollarsUS.format(sqf3)
        
        
        document.getElementById("adjustedDollarsPerSquareFootForSale1EntryID").value = dollarsUS.format(sqf1)
        document.getElementById("adjustedDollarsPerSquareFootForSale2EntryID").value = dollarsUS.format(sqf2)
        document.getElementById("adjustedDollarsPerSquareFootForSale3EntryID").value = dollarsUS.format(sqf3)


        var sale1 = parseFloat(dataPackage.marketTableData[0][19])
        var sale2 = parseFloat(dataPackage.marketTableData[1][19])
        var sale3 = parseFloat(dataPackage.marketTableData[2][19])

        var avg = (sale1 + sale2 + sale3) / 3

        document.getElementById("marketEstimatedValueEntryID").value = dollarsUSNoDecimal.format(avg)

        var sqf1math = sqf1
        var sqf2math = sqf2
        var sqf3math = sqf3
        var avgSQF = (sqf1 + sqf2 + sqf3) / 3
        document.getElementById("dollarsPerSquareFootMarketEntryID").value = dollarsUS.format(avgSQF)


    }
}

function sendDataCallbackForCapRateBuilder() {
    // Check response is ready or not
    if (xhr.readyState == 4 && xhr.status == 201) {
        //parse the json sent from calculate method




        const dataPackage = JSON.parse(xhr.response)



        document.getElementById("bandMEMethodEntryID").value = ((dataPackage.BandMethodME) + "%")
        document.getElementById("netIncomeRatioMethodEntryID").value = ((dataPackage.NetIncomeMethod) + "%")
        document.getElementById("debtcoverageRatioMethodEntryID").value = ((dataPackage.DebtCoverageMethod) + "%")
        document.getElementById("bandLIMethodEntryID").value = ((dataPackage.BandMethodLI) + "%")
        document.getElementById("summaryCapRateEntryID").value = ((dataPackage.SummaryCapRate) + "%")







    }
}

function sendDataCallbackForAddress() {
    if (xhr5.readyState == 4 && xhr5.status == 201) {
        //parse the json sent from calculate method







        const dataPackage = JSON.parse(xhr5.response)

        // KEY
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



        console.log("account_num: " + dataPackage.matchArray[0][0])
        console.log("account_type: " + dataPackage.matchArray[0][1])
        console.log("full_address: " + dataPackage.matchArray[0][2])
        console.log("land_total_acres: " + dataPackage.matchArray[0][3])
        console.log("zipcode: " + dataPackage.matchArray[0][4])
        console.log("business_name: " + dataPackage.matchArray[0][5])
        console.log("buildings: " + dataPackage.matchArray[0][6])
        console.log("full_legal: " + dataPackage.matchArray[0][7])
        console.log("total_mill_levy: " + dataPackage.matchArray[0][8])
        console.log("total_market_value: " + dataPackage.matchArray[0][9])
        console.log("last_sale_date: " + dataPackage.matchArray[0][10])


        console.log("\n\n\n\n")
        console.log(dataPackage.matchArray)

        console.log("square_feet: " + dataPackage.matchArray[0][11])
        console.log("condition: " + dataPackage.matchArray[0][12])
        console.log("quality: " + dataPackage.matchArray[0][13])
        console.log("exterior: " + dataPackage.matchArray[0][14])
        console.log("interior: " + dataPackage.matchArray[0][15])
        console.log("year_built: " + dataPackage.matchArray[0][16])
        console.log("linear_feet_of_perimeter: " + dataPackage.matchArray[0][17])
        console.log("story_height: " + dataPackage.matchArray[0][18])
        console.log("sale_price: " + dataPackage.matchArray[0][19])
        console.log("sale_date: " + dataPackage.matchArray[0][20])




        
        //Check square feet data
        if (dataPackage.matchArray[0][11] != 0) {
            document.getElementById("sqfEntryID").value = dataPackage.matchArray[0][11]
        }
        else {
            document.getElementById("sqfEntryID").value = "BAD DATA(" + dataPackage.matchArray[0][11] + ")"
        }
        //Check perimeter data
        if (dataPackage.matchArray[0][17] != 0 && dataPackage.matchArray[0][17] != null) {
            document.getElementById("perimeterEntryID").value = dataPackage.matchArray[0][17]
        }
        else {
            document.getElementById("perimeterEntryID").value = "BAD DATA(" + dataPackage.matchArray[0][17] + ")"
        }
        //Check wall height data
        if (dataPackage.matchArray[0][18] != 0) {
            var storyHeight = (dataPackage.matchArray[0][18] * 8)
            //var storyHeight = (dataPackage.matchArray[0][8])
            document.getElementById("wallHeightEntryID").value = storyHeight
        }
        else {
            document.getElementById("wallHeightEntryID").value = "BAD DATA(" + dataPackage.matchArray[0][18] + ")"
        }
        //Check year built data
        if (dataPackage.matchArray[0][16] != 0) {
            document.getElementById("effectiveyearBuiltEntryID").value = dataPackage.matchArray[0][16]
        }
        else {
            document.getElementById("effectiveyearBuiltEntryID").value = "BAD DATA(" + dataPackage.matchArray[0][16] + ")"
        }
        //Check Parcel size Acres data
        if (dataPackage.matchArray[0][3] != 0) {
            document.getElementById("parcelSizeEntryID").value = dataPackage.matchArray[0][3]
        }
        else {
            document.getElementById("parcelSizeEntryID").value = "BAD DATA(" + dataPackage.matchArray[0][3] + ")"
        }


        if (dataPackage.matchArray[0][1] != 0) {
            if (dataPackage.matchArray[0][1] == "Residential") {
                document.getElementById("propertyTypeEntrySelect").value = dataPackage.matchArray[0][1]
            }
            else {
                document.getElementById("propertyTypeEntrySelect").value = "Apartments"
            }

        }
        else {

        }

        //document.getElementById("locationAddressEntryID").value = dataPackage.matchArray[0]['FULL_ADDRESS']
        document.getElementById("locationAddressEntryID").value = dataPackage.matchArray[0][2]

        $('#basicFormValidate3').submit();

        addressComplete(xhr5.response)



        //Do Market stuff
        console.log("here is market data \n")
        console.log(dataPackage.marketData)
        console.log("\n")


        //--------------------------------Market--------------------------------------------

        var marketSale1 = dataPackage.marketData[0][0][1]
        var marketSale2 = dataPackage.marketData[1][0][1]
        var marketSale3 = dataPackage.marketData[2][0][1]


        var pricePerSquareFootMarket1 = dataPackage.marketData[0][0][0]['SQUARE_FEET']
        var pricePerSquareFootMarket2 = dataPackage.marketData[1][0][0]['SQUARE_FEET']
        var pricePerSquareFootMarket3 = dataPackage.marketData[2][0][0]['SQUARE_FEET']

        var adjustedPricePerSquareFootMarket1 = dataPackage.marketData[0][0][0]['YEAR_BUILT']
        var adjustedPricePerSquareFootMarket2 = dataPackage.marketData[1][0][0]['YEAR_BUILT']
        var adjustedPricePerSquareFootMarket3 = dataPackage.marketData[2][0][0]['YEAR_BUILT']

        let dollarsUSNoDecimal = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0, 
            minimumFractionDigits: 0, 
        });

        let dollarsUS = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });

        var sqf1 = (parseInt(dataPackage.marketData[0][0][1]) / parseInt(pricePerSquareFootMarket1))
        var sqf2 = (parseInt(dataPackage.marketData[1][0][1]) / parseInt(pricePerSquareFootMarket2))
        var sqf3 = (parseInt(dataPackage.marketData[2][0][1]) / parseInt(pricePerSquareFootMarket3))


        document.getElementById("sale1FromDatabaseEntryID").value = dollarsUS.format(marketSale1)
        document.getElementById("sale2FromDatabaseEntryID").value = dollarsUS.format(marketSale2)
        document.getElementById("sale3FromDatabaseEntryID").value = dollarsUS.format(marketSale3)

        document.getElementById("dollarsPerSquareFootForSale1EntryID").value = dollarsUS.format(sqf1)
        document.getElementById("dollarsPerSquareFootForSale2EntryID").value = dollarsUS.format(sqf2)
        document.getElementById("dollarsPerSquareFootForSale3EntryID").value = dollarsUS.format(sqf3)

        document.getElementById("sale1ParcelIDEntryID").value = dataPackage.marketData[0][1]['FULL_ADDRESS']
        document.getElementById("sale2ParcelIDEntryID").value = dataPackage.marketData[1][1]['FULL_ADDRESS']
        document.getElementById("sale3ParcelIDEntryID").value = dataPackage.marketData[2][1]['FULL_ADDRESS']

        document.getElementById("adjustedDollarsPerSquareFootForSale1EntryID").value = dollarsUS.format(sqf1)
        document.getElementById("adjustedDollarsPerSquareFootForSale2EntryID").value = dollarsUS.format(sqf2)
        document.getElementById("adjustedDollarsPerSquareFootForSale3EntryID").value = dollarsUS.format(sqf3)


        var sale1 = parseFloat(marketSale1)
        var sale2 = parseFloat(marketSale2)
        var sale3 = parseFloat(marketSale3)

        var avg = (sale1 + sale2 + sale3) / 3

        document.getElementById("marketEstimatedValueEntryID").value = dollarsUSNoDecimal.format(avg)

        var sqf1math = sqf1
        var sqf2math = sqf2
        var sqf3math = sqf3
        var avgSQF = (sqf1 + sqf2 + sqf3) / 3
        document.getElementById("dollarsPerSquareFootMarketEntryID").value = dollarsUS.format(avgSQF)



    }
    else{
        console.log("error status")
        console.log(xhr5.status)
        console.log("ready state")
        console.log(xhr5.readyState)
    }
}

function sendDataCallbackForRegressionAnaylsis() {
    // Check response is ready or not
    if (xhr4.readyState == 4 && xhr4.status == 201) {
        //parse the json sent from calculate method




        const dataPackage = JSON.parse(xhr4.response)
        console.log(dataPackage)

        document.getElementById("correlationEntryID").value = (Math.round(dataPackage.correlationCoe * 100) + "%")
        document.getElementById("rSquareEntryID").value = (Math.round(dataPackage.rSquare * 100) + "%")
        document.getElementById("adjustedRSquareEntryID").value = (Math.round(dataPackage.adjustedRSquare * 100) + "%")
        document.getElementById("RMSEEntryID").value = dataPackage.RMSE
        //
        document.getElementById("ssRegEntryID").value = dataPackage.ssReg
        document.getElementById("ssResEntryID").value = dataPackage.ssRes
        document.getElementById("ssTotalEntryID").value = dataPackage.ssTotal
        document.getElementById("msRegEntryID").value = dataPackage.msReg
        document.getElementById("msResEntryID").value = dataPackage.msRes
        //
        document.getElementById("dfRegEntryID").value = dataPackage.dfReg
        document.getElementById("dfResEntryID").value = dataPackage.dfRes
        document.getElementById("dfModEntryID").value = dataPackage.dfMod
        document.getElementById("fStatEntryID").value = dataPackage.fStat
        document.getElementById("pStatEntryID").value = dataPackage.pStat
        //
        document.getElementById("origMedianID").value = dataPackage.OrigMedian
        document.getElementById("regMedianID").value = dataPackage.RegMedian

        document.getElementById("origSumID").value = dataPackage.OrigSumOfDiff
        document.getElementById("regSumID").value = dataPackage.RegSumOfDiff

        document.getElementById("origAADID").value = dataPackage.OrigAAD
        document.getElementById("regAADID").value = dataPackage.RegAAD

        document.getElementById("origCoDID").value = ((dataPackage.OrigCoD * 100) + "%")
        document.getElementById("regCoDID").value = ((dataPackage.RegCoD * 100) + "%")

        document.getElementById("regEquationEntryID").value = dataPackage.RegEquation


        console.log("x and y")
        console.log(dataPackage.xValues)
        console.log(dataPackage.yValues)

        var xAxis = dataPackage.xValues
        var yAxis = dataPackage.yValues
        combined = []

        combined.push(xAxis, yAxis)
        console.log("combined")
        console.log(combined)


        var dependent = dataPackage.DependentVariable
        var independent = dataPackage.IndependentList


        console.log(independent)




        if (dataPackage.IsAppraised == "false") {
            coordsForChart(xAxis, yAxis).then(function (axis) {
                //
                return createGraph(axis, dependent, independent)
            })
            document.getElementById("chart_div").style.display = "block";
            document.getElementById("buttonDiv").style.display = "block";
        }
        else{
            document.getElementById("chart_div").style.display = "none";
            document.getElementById("buttonDiv").style.display = "none";
        }




    }
}

function coordsForChart(x, y) {
    return new Promise(function (resolve, reject) {
        var AxisArray = []
        console.log(" length")
        //console.log(x)
        //console.log(x.length)
        console.log()
        for (i = 0; i < y.length; i++) {
            for (j = 0; j < x.length; j++) {
                AxisArray.push([parseFloat(x[j][i]), parseFloat(y[i])]);
            }
            //AxisArray.push([parseFloat(x[0][i]), parseFloat(y[i])]);

        }
        AxisArray.push(x.length)


        console.log("axis")
        console.log(AxisArray)
        resolve(AxisArray)

    })


}
function sendDataCallbackForCostValueCalc() {
    // Check response is ready or not
    if (xhr.readyState == 4 && xhr.status == 201) {
        //console.log("Data creation response received!");
        //getDate();
        //dataDiv = document.getElementById('sent-data-container');
        // Set current data text
        //parse the json sent from calculate method
        const dataPackage = JSON.parse(xhr.response)
        console.log(dataPackage)


        document.getElementById("intFinRateEntryID").value = dataPackage.IntFinRate
        document.getElementById("extWallAndBuildClassRateID").value = dataPackage.ExtWallandBuildClassRate


        document.getElementById("adjustedRateEntryID").value = dataPackage.AdjustedRate
        document.getElementById("improvedValueEntryID").value = dataPackage.ImprovedValue
        document.getElementById("itemsEntryID").value = dataPackage.yardItem
        document.getElementById("totalRCNEntryID").value = dataPackage.TotalRCN
        document.getElementById("depreciationEntryID").value = dataPackage.Depreciation
        document.getElementById("RCNLDEntryID").value = dataPackage.RCNLD
        document.getElementById("landValueEntryID").value = dataPackage.LandValue
        document.getElementById("estimatedImprovedAndLandValueEntryID").value = dollarsUSNoDecimal.format(dataPackage.EstimatedImprovedAndLandValue)
        document.getElementById("dollarsPerSquareFootForCostEntryID").value = dataPackage.DollarsPerSquareFoot


        


        document.getElementById("costEstimatedValueEntryID").value = dollarsUSNoDecimal.format(dataPackage.EstimatedImprovedAndLandValue)
        document.getElementById("dollarsPerSquareFootCostEntryID").value = dataPackage.DollarsPerSquareFoot





        //create second form
        //createIncomeValueCalculatorForm();
    }
}

function sendDataCallbackForIncomeValueCalc() {
    // Check response is ready or not
    if (xhr3.readyState == 4 && xhr3.status == 201) {
        //console.log("Data creation response received!");
        //getDate();
        //dataDiv = document.getElementById('sent-data-container');
        // Set current data text
        //parse the json sent from calculate method
        const dataPackage = JSON.parse(xhr3.response)
        console.log("income")
        console.log(dataPackage)
        //put the WeightedCapRate in the appropriate input box
        document.getElementById("vacancyAndCollectionLossEntryID").value = dataPackage.VacancyAndCollectionLossEntry
        document.getElementById("vacancyAndCollectionLossEntryID2").value = dataPackage.VacancyAndCollectionLossPercentage
        document.getElementById("miscIncomeEntryID").value = dataPackage.MiscIncomeEntry
        document.getElementById("miscIncomeEntryID2").value = dataPackage.MiscIncomePercentage
        document.getElementById("effectiveGrossIncomeEntryID").value = dataPackage.EffectiveGrossIncomeEntry
        document.getElementById("effectiveGrossIncomeEntryID2").value = dataPackage.EffectiveGrossIncomePercentage
        document.getElementById("expenseLossEntryID").value = dataPackage.ExpenseLossEntry
        document.getElementById("expenseLossEntryID2").value = dataPackage.ExpenseLossPercentage
        document.getElementById("EBITDAEntryID2").value = dataPackage.EBITDAEntryPercentage
        document.getElementById("lessPersonalPropertyEntryID").value = dataPackage.LessPersonalPropertyEntry

        document.getElementById("EBITDAEntryID").value = dataPackage.EBITDA
        document.getElementById("estimatedIncomeValueEntryID").value = dollarsUSNoDecimal.format(dataPackage.EstimatedIncomeValue)
        document.getElementById("dollarsPerSquareFootEntryID").value = dataPackage.DollarPerSquareFoot
        document.getElementById("potentialGrossIncomeEntryID").value = dataPackage.PotentialGrossIncome


        //Summary page Income
        document.getElementById("incomeEstimatedValueEntryID").value = dollarsUSNoDecimal.format(dataPackage.EstimatedIncomeValue)
        document.getElementById("dollarsPerSquareFootIncomeEntryID").value = dataPackage.DollarPerSquareFoot



        console.log("\n heres the sales data \n : " + dataPackage.SalesData[0])
    }
}


function sendDataCallbackForBasic() {
    // Check response is ready or not
    if (xhr2.readyState == 4 && xhr2.status == 201) {
        //console.log("Data creation response received!");
        //getDate();
        //dataDiv = document.getElementById('sent-data-container');
        // Set current data text
        //parse the json sent from calculate method
        const weightedCapRate = JSON.parse(xhr2.response)
        //console.log(weightedCapRate.WCR)
        //console.log(weightedCapRate.PotentialGrossIncome)
        //put the WeightedCapRate in the appropriate input box
        document.getElementById("weightedCapRateID").value = weightedCapRate.WCR

        //create second form
        //createIncomeValueCalculatorForm();
        //document.getElementById("secondFlex").setAttribute("style","display:block;")

        if (weightedCapRate.method == "MarketAverage") { // if Method is Market Average set Cap rate in Income Value Calculator to Market Average
            document.getElementById("capRateEntryID").value = weightedCapRate.WCR
        }
        else {                                           // if Method is Your Cap Rate set Cap rate in Income Value Calculator to YourCapRate
            document.getElementById("capRateEntryID").value = weightedCapRate.yourCapRate
        }


        //Income Value Calc
        document.getElementById("potentialGrossIncomeEntryID").value = weightedCapRate.PotentialGrossIncome // set Potential Gross Income

        //Cost Value Clalc

        document.getElementById("intFinRateEntryID").value = weightedCapRate.IntFinRate // set IntFinRate
        document.getElementById("extWallAndBuildClassRateID").value = weightedCapRate.ExtWallandBuildClassRate // set ExtWall and Build Class Rate
        document.getElementById("locationAdjustmentEntryID").value = weightedCapRate.LocationAdjustment // set LocationAdjustment
        document.getElementById("AreaPerimAdjustmentEntryID").value = weightedCapRate.AreaPerimAdjustment // set AreaPerimAdjustment
        document.getElementById("heightAdjustmentEntryID").value = weightedCapRate.HeightAdjustment // set HeightAdjustment
        document.getElementById("qualityAdjustmentEntryID").value = weightedCapRate.QualityAdjustment // set QualityandConditionAdjustment
        document.getElementById("conditionAdjustmentEntryID").value = weightedCapRate.ConditionAdjustment // set QualityandConditionAdjustment


        document.getElementById("propertyTypeSummaryID").value = weightedCapRate.PropertyType
        document.getElementById("propertyTypeCapRateEntryID").value = weightedCapRate.PropertyType




        //Go ahead and load the Income Table  after Basic now that we have sufficient inputs
        //if($('#incomeValueFormValidate').valid()){
        //    $('#incomeValueFormValidate').submit();
        //    $('#costValueFormValidate').submit();
        //}

        //Go ahead and load the Cost Table  after Basic now that we have sufficient inputs

    }
}




//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getDate() {
    date = new Date().toString();
    document.getElementById('time-container').textContent
        = date;
}



//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------Send Data---------------------------------------------------------------------
//---------------------------|--------------------------------------------------------------------------
//---------------------------|--------------------------------------------------------------------------
//---------------------------|--------------------------------------------------------------------------
//---------------------------|--------------------------------------------------------------------------
//---------------------------|--------------------------------------------------------------------------
//---------------------------|--------------------------------------------------------------------------
//---------------------------|--------------------------------------------------------------------------
//---------------------------|--------------------------------------------------------------------------
//---------------------------|--------------------------------------------------------------------------
//---------------------------|--------------------------------------------------------------------------
//---------------------------|--------------------------------------------------------------------------
//---------------------------V--------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
function sendCapRateBuilderData() {
    //GET values from the html to be used for packaging later in this function

    //from Input




    var LTVRatioSlider = document.getElementById('ltvRatioRangeOutput').value
    var DCRRatioSlider = document.getElementById('dcrRatioRangeOutput').value
    var OERRatioSlider = document.getElementById('oerRatioRangeOutput').value
    var EGIMRatioSlider = document.getElementById('egimRatioRangeOutput').value
    var GIMRatioSlider = document.getElementById('gimRatioRangeOutput').value
    var MIRRatioSlider = document.getElementById('mortgageRatioRangeOutput').value
    var EYRRatioSlider = document.getElementById('equityRatioRangeOutput').value
    var ETRRatioSlider = document.getElementById('effectiveTaxRatioRangeOutput').value
    var RELRatioSlider = document.getElementById('remainingEconomicLifeRangeOutput').value
    var TOLRatioSlider = document.getElementById('termOfLoanRangeOutput').value



    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = sendDataCallbackForCapRateBuilder;
    // asynchronous requests
    xhr.open("POST", capRateBuilder, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Send the request over the network with user input variables
    xhr.send(JSON.stringify({
        'LTVRatio': LTVRatioSlider,
        'DCRRatio': DCRRatioSlider,
        'OERRatio': OERRatioSlider,
        'EGIMRatio': EGIMRatioSlider,
        'GIMRatio': GIMRatioSlider,
        'MIRRatio': MIRRatioSlider,
        'EYRRatio': EYRRatioSlider,
        'ETRRatio': ETRRatioSlider,
        'RELRatio': RELRatioSlider,
        'TOLRatio': TOLRatioSlider,
    }));
}
function sendRegressionAnalysisData() {
    //GET values from the html to be used for packaging later in this function

    //from Input
    var propertyType = document.getElementById('propertyTypeEntrySelect')
    var propertyTypeDataToSend = propertyType.options[propertyType.selectedIndex].value;
    var sqfEntry = document.getElementById('sqfEntryID').value

    //from Income
    var estimatedIncomeValue = document.getElementById('estimatedIncomeValueEntryID')
    var incomeDollarsPerSquareFoot = document.getElementById('dollarsPerSquareFootEntryID')

    //from Cost
    var estimatedCostValue = document.getElementById('estimatedImprovedAndLandValueEntryID')
    var costDollarsPerSquareFoot = document.getElementById('dollarsPerSquareFootForCostEntryID')


    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = sendDataCallbackForSummary;
    // asynchronous requests
    xhr.open("POST", summaryLink, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Send the request over the network with user input variables
    xhr.send(JSON.stringify({
        'PropertyType': propertyTypeDataToSend,
        'SqfEntry': sqfEntry,
        'EstimatedIncomeValue': estimatedIncomeValue,
        'IncomeDollarsPerSquareFoot': incomeDollarsPerSquareFoot,
        'EstimatedCostValue': estimatedCostValue,
        'CostDollarsPerSquareFoot': costDollarsPerSquareFoot,
    }));
}

function sendSummaryValueData() {
    //GET values from the html to be used for packaging later in this function

    //from Input
    var propertyType = document.getElementById('propertyTypeEntrySelect')
    var propertyTypeDataToSend = propertyType.options[propertyType.selectedIndex].value;
    var sqfEntry = document.getElementById('sqfEntryID').value

    //from Income
    var estimatedIncomeValue = document.getElementById('estimatedIncomeValueEntryID')
    var incomeDollarsPerSquareFoot = document.getElementById('dollarsPerSquareFootEntryID')

    //from Cost
    var estimatedCostValue = document.getElementById('estimatedImprovedAndLandValueEntryID')
    var costDollarsPerSquareFoot = document.getElementById('dollarsPerSquareFootForCostEntryID')


    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = sendDataCallbackForSummary;
    // asynchronous requests
    xhr.open("POST", summaryLink, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Send the request over the network with user input variables
    xhr.send(JSON.stringify({
        'PropertyType': propertyTypeDataToSend,
        'SqfEntry': sqfEntry,
        'EstimatedIncomeValue': estimatedIncomeValue,
        'IncomeDollarsPerSquareFoot': incomeDollarsPerSquareFoot,
        'EstimatedCostValue': estimatedCostValue,
        'CostDollarsPerSquareFoot': costDollarsPerSquareFoot,
    }));
}

function sendCostValueData() {
    //GET values from the html to be used for packaging later in this function

    //from Cost
    var intFinRateEntry = document.getElementById('intFinRateEntryID').value
    var extWallAndBuildClassRate = document.getElementById('extWallAndBuildClassRateID').value
    var locationAdjustmentEntry = document.getElementById('locationAdjustmentEntryID').value
    var AreaPerimAdjustmentEntry = document.getElementById('AreaPerimAdjustmentEntryID').value
    var heightAdjustmentEntry = document.getElementById('heightAdjustmentEntryID').value
    var qualityAdjustmentEntry = document.getElementById('qualityAdjustmentEntryID').value
    var conditionAdjustmentEntry = document.getElementById('conditionAdjustmentEntryID').value
    var yardItem1 = document.getElementById('itemsEntryID').value
    //from Input
    var sqfEntry = document.getElementById('sqfEntryID').value
    var effectiveyearBuiltEntry = document.getElementById('effectiveyearBuiltEntryID').value
    var parcelSizeEntry = document.getElementById('parcelSizeEntryID').value


    xhr = getXmlHttpRequestObject();
    xhr.onreadystatechange = sendDataCallbackForCostValueCalc;
    // asynchronous requests
    xhr.open("POST", costValueLink, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Send the request over the network with user input variables
    xhr.send(JSON.stringify({
        'IntFinRate': intFinRateEntry,
        'ExtWallandBuildClassRate': extWallAndBuildClassRate,
        'LocationAdjustment': locationAdjustmentEntry,
        'AreaPerimAdjustment': AreaPerimAdjustmentEntry,
        'HeightAdjustment': heightAdjustmentEntry,
        'QualityAdjustment': qualityAdjustmentEntry,
        'ConditionAdjustment': conditionAdjustmentEntry,
        'EffectiveyearBuiltEntry': effectiveyearBuiltEntry,
        'ParcelSizeEntry': parcelSizeEntry,
        'YardItem1': yardItem1,
        'SqfEntry': sqfEntry,
    }));
}



function sendIncomeValueData() {
    //GET values from the html to be used for packaging later in this function

    //from Income
    var potentialGrossIncomeEntry = document.getElementById('potentialGrossIncomeEntryID').value

    var vacancyAndCollectionLossEntry = document.getElementById('vacancyAndCollectionLossEntryID').value
    var vacancyAndCollectionLossPercentageEntry = document.getElementById('vacancyAndCollectionLossEntryID2').value

    var miscIncomeEntry = document.getElementById('miscIncomeEntryID').value
    var miscIncomePercentageEntry = document.getElementById('miscIncomeEntryID2').value

    var effectiveGrossIncomeEntry = document.getElementById('effectiveGrossIncomeEntryID').value
    var effectiveGrossIncomePercentageEntry = document.getElementById('effectiveGrossIncomeEntryID2').value

    var expenseLossEntry = document.getElementById('expenseLossEntryID').value
    var expenseLossPercentageEntry = document.getElementById('expenseLossEntryID2').value

    var EBITDAEntry = document.getElementById('EBITDAEntryID').value
    var EBITDAEntryPercentageEntry = document.getElementById('EBITDAEntryID2').value
    //-

    //from Input
    var capRateEntry = document.getElementById('capRateEntryID').value
    //-

    //from Income
    var lessPersonalPropertyEntry = document.getElementById('lessPersonalPropertyEntryID').value

    var estimatedIncomeValueEntry = document.getElementById('estimatedIncomeValueEntryID').value

    var dollarsPerSquareFootEntry = document.getElementById('dollarsPerSquareFootEntryID').value
    //-

    //from Input
    var sqfEntry = document.getElementById('sqfEntryID').value





    xhr3 = getXmlHttpRequestObject3();
    xhr3.onreadystatechange = sendDataCallbackForIncomeValueCalc;
    // asynchronous requests
    xhr3.open("POST", incomeValueLink, true);
    xhr3.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Send the request over the network with user input variables
    xhr3.send(JSON.stringify({
        "potentialGrossIncomeEntry": potentialGrossIncomeEntry,
        "vacancyAndCollectionLossEntry": vacancyAndCollectionLossEntry,
        "vacancyAndCollectionLossPercentageEntry": vacancyAndCollectionLossPercentageEntry,
        "miscIncomeEntry": miscIncomeEntry,
        "miscIncomePercentageEntry": miscIncomePercentageEntry,
        "effectiveGrossIncomeEntry": effectiveGrossIncomeEntry,
        "effectiveGrossIncomePercentageEntry": effectiveGrossIncomePercentageEntry,
        "expenseLossEntry": expenseLossEntry,
        "expenseLossPercentageEntry": expenseLossPercentageEntry,
        "EBITDAEntry": EBITDAEntry,
        "EBITDAEntryPercentageEntry": EBITDAEntryPercentageEntry,
        "capRateEntry": capRateEntry,
        "lessPersonalPropertyEntry": lessPersonalPropertyEntry,
        "estimatedIncomeValueEntry": estimatedIncomeValueEntry,
        "dollarsPerSquareFootEntry": dollarsPerSquareFootEntry,
        "sqfEntry": sqfEntry,
        "vacancyAndCollectionLossWHATChanged": vacancyAndCollectionLossWHATChanged,
        "miscIncomeWHATChanged": miscIncomeWHATChanged,
        "expenseLossWHATChanged": expenseLossWHATChanged
    }));
}

function sendBasicData() {
    //GET values from the html to be used for packaging later in this function

    //These are all from Input as User inputs/ selections
    var locationEntry = document.getElementById('locationEntrySelect')
    var propertyType = document.getElementById('propertyTypeEntrySelect')
    var classType = document.getElementById('classTypeEntrySelect')
    var exteriorWall = document.getElementById('exteriorWallEntrySelect')
    var interiorWall = document.getElementById('interiorWallEntrySelect')
    var quality = document.getElementById('qualitySelect')
    var condition = document.getElementById('conditionSelect')
    var method = document.getElementById('methodSelect')
    var sqfEntry = document.getElementById('sqfEntryID').value
    var perimeterEntry = document.getElementById('perimeterEntryID').value
    var wallHeightEntry = document.getElementById('wallHeightEntryID').value
    var effectiveyearBuiltEntry = document.getElementById('effectiveyearBuiltEntryID').value
    var parcelSizeEntry = document.getElementById('parcelSizeEntryID').value
    var yourCapRateEntry = document.getElementById('yourCapRateEntryID').value
    var locationEntryDataToSend = locationEntry.options[locationEntry.selectedIndex].value;
    var propertyTypeDataToSend = propertyType.options[propertyType.selectedIndex].value;
    var classTypeDataToSend = classType.options[classType.selectedIndex].value;
    var exteriorWallDataToSend = exteriorWall.options[exteriorWall.selectedIndex].value;
    var interiorWallDataToSend = interiorWall.options[interiorWall.selectedIndex].value;
    var qualityDataToSend = quality.options[quality.selectedIndex].value;
    var conditionDataToSend = condition.options[condition.selectedIndex].value;
    var methodDataToSend = method.options[method.selectedIndex].value;

    xhr2 = getXmlHttpRequestObject2();


    xhr2.onreadystatechange = sendDataCallbackForBasic;
    // asynchronous requests
    xhr2.open("POST", basicLink, true);
    xhr2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Send the request over the network with user input variables
    xhr2.send(JSON.stringify({
        "locationEntry": locationEntryDataToSend,
        "propertyType": propertyTypeDataToSend,
        "classType": classTypeDataToSend,
        "exteriorWall": exteriorWallDataToSend,
        "interiorWall": interiorWallDataToSend,
        "sqfEntry": sqfEntry,
        "perimeterEntry": perimeterEntry,
        "wallHeightEntry": wallHeightEntry,
        "effectiveYearBuiltEntry": effectiveyearBuiltEntry,
        "parcelSizeEntry": parcelSizeEntry,
        "quality": qualityDataToSend,
        "condition": conditionDataToSend,
        "method": methodDataToSend,
        "yourCapRate": yourCapRateEntry
    }));
}



function sendRegressionData() {
    //GET values from the html to be used for packaging later in this function

    //These are all from Input as User inputs/ selections
    var regressionMethod = document.getElementById('selectRegressionMethodID')
    //var dependentVariable = document.getElementById('dependentVariableEntryID').value
    //var independentVariable = document.getElementById('independentVariableEntryID').value
    var regressionMethodDataToSend = regressionMethod.options[regressionMethod.selectedIndex].value;

    var buttons = document.getElementsByClassName('independentSelectionButton')
    var independentVariableButtons = ""
    var saveForEnd = ""
    for (var i = 0; i < buttons.length; i++) {
        //console.log(buttons.item(i).textContent);

        if (i == 0) {
            independentVariableButtons = buttons.item(i).textContent
        }
        else {
            independentVariableButtons = independentVariableButtons + "," + buttons.item(i).textContent
        }

    }

    //var dependentVariableButton = document.getElementById('dependentSelectionButton').textContent\
    var dependentSelection = document.getElementById("selectDependentVariablesID")
    var dependentVariableButton = dependentSelection.options[dependentSelection.selectedIndex].value;

    console.log("value: v")
    console.log($("#selectAppraisedValueID").find(":selected").length)
    var appraisedValueSelection = document.getElementById("selectAppraisedValueID")
    if ($("#selectAppraisedValueID").find(":selected").length == 0 || $("#selectAppraisedValueID").find(":selected").text() == "") {
        var appraisedValueSelectionToSend = 0;
    }
    else {
        var appraisedValueSelectionToSend = appraisedValueSelection.options[appraisedValueSelection.selectedIndex].value;
    }

    xhr4 = getXmlHttpRequestObject4();



    xhr4.onreadystatechange = sendDataCallbackForRegressionAnaylsis;

    // asynchronous requests
    xhr4.open("POST", runRegressionLink, true);
    xhr4.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Send the request over the network with user input variables
    xhr4.send(JSON.stringify({
        "regressionMethod": regressionMethodDataToSend,
        //"dependentVariable": dependentVariable,
        //"independentVariable": independentVariable,
        "independentVariableButtons": independentVariableButtons,
        "dependentVariableButton": dependentVariableButton,
        "appraisedValueSelectionToSend": appraisedValueSelectionToSend,
        "dataFile": dataFile,
        "specialInd": specialInd,
    }));
}


function sendAddress() {
    //GET values from the html to be used for packaging later in this function



    //var googleAddress = document.getElementById("location-input").value
    console.log("address entry")
    console.log(addressEntry)
    var googleAddress = addressEntry;



    xhr5 = getXmlHttpRequestObject5();



    xhr5.onreadystatechange = sendDataCallbackForAddress;
    // asynchronous requests
    xhr5.open("POST", sendAddressLink, true);
    xhr5.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Send the request over the network with user input variables
    xhr5.send(JSON.stringify({
        "googleAddress": googleAddress,
    }));
}

function addressComplete(evt){
    
    //Address is done populating inputs, run some market analysis now

    //const dataPackage = JSON.parse(evt.response)




    xhr6 = getXmlHttpRequestObject6();



    xhr6.onreadystatechange = sendDataCallbackForMarketAfterAddress;
    // asynchronous requests
    xhr6.open("POST", sendMarketAfterAddressLink, true);
    xhr6.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Send the request over the network with user input variables
    xhr6.send(evt)



}

function regressionComplete(evt) {
    console.log("");
}

function uploadbasComplete(evt) {
    //This is my form of promise chaining
    //wait for completion of form upload
    //this is probably a bad idea but it works for now
    $('#incomeValueFormValidate').submit();
}

function uploadincComplete(evt) {
    //This is my form of promise chaining
    //wait for completion of form upload
    //this is probably a bad idea but it works for now
    $('#costValueFormValidate').submit();
}

function uploadcosComplete(evt) {
    //This is my form of promise chaining
    //wait for completion of form upload
    //this is probably a bad idea but it works for now


    //used to convert float numbers into us dollar currency
    let dollarsUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });






    //Remove currency for math
    var totalforavg1 = Number(document.getElementById('incomeEstimatedValueEntryID').value.replace(/[^0-9.-]+/g, ""));
    var totalforavg2 = Number(document.getElementById('costEstimatedValueEntryID').value.replace(/[^0-9.-]+/g, ""));
    var totalforavg3 = Number(document.getElementById('marketEstimatedValueEntryID').value.replace(/[^0-9.-]+/g, ""));

    var totalSQFforavg1 = Number(document.getElementById('dollarsPerSquareFootIncomeEntryID').value.replace(/[^0-9.-]+/g, ""));
    var totalSQFforavg2 = Number(document.getElementById('dollarsPerSquareFootCostEntryID').value.replace(/[^0-9.-]+/g, ""));
    var totalSQFforavg3 = Number(document.getElementById('dollarsPerSquareFootMarketEntryID').value.replace(/[^0-9.-]+/g, ""));


    //do math
    var totalAvg = (totalforavg1 + totalforavg2 + totalforavg3) / 3
    //turn back into dollar
    document.getElementById("summaryValueEntryID").value = dollarsUSNoDecimal.format(totalAvg)

    //do math
    var totalSQFAvg = (totalSQFforavg1 + totalSQFforavg2 + totalSQFforavg3) / 3
    //turn back into dollar
    document.getElementById("dollarsPerSquareFootSummaryEntryID").value = dollarsUS.format(totalSQFAvg)
}

(function () {
    getDate();
})




