



var headersOriginal = [
"Full Address",
"Total Acres",
"Square Feet",
"Condition",
"Quality",
"Exterior Wall",
"Interior Wall",
"Year Built",
"Perimeter",
"Height",
"Sale Price",
"Sale Date",];
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

var headers = []
var dep = [];
var ind = [];
var jsonString = "";
var dataFile = "";
var checkingForDuplicatesArray = []

var inputsArray = []

//creates HTML elements for the regression analysis
function createRatioStudy(container) {


    var empty5 = document.createElement("label");
    empty5.textContent = "";
    empty5.setAttribute("class", "removeChildren")

    var lblOrig = document.createElement("label");
    lblOrig.textContent = "Original";
    lblOrig.setAttribute("class", "removeChildren")
    lblOrig.setAttribute("id", "OrigLblID")

    var lblReg = document.createElement("label");
    lblReg.textContent = "Regression Model";
    lblReg.setAttribute("class", "removeChildren")
    lblReg.setAttribute("id", "RegLblID")


    var lblMedian = document.createElement("label");
    lblMedian.textContent = "Median";
    lblMedian.setAttribute("class", "removeChildren")

    var origMedian = document.createElement("input");
    origMedian.setAttribute("type", "text");
    origMedian.setAttribute("id", "origMedianID");
    origMedian.setAttribute("name", "origMedian");
    origMedian.setAttribute("class", "removeChildren")
    origMedian.setAttribute("readonly", true);

    var regMedian = document.createElement("input");
    regMedian.setAttribute("type", "text");
    regMedian.setAttribute("id", "regMedianID");
    regMedian.setAttribute("name", "regMedian");
    regMedian.setAttribute("class", "removeChildren")
    regMedian.setAttribute("readonly", true);

    //

    var lblSumofDiff = document.createElement("label");
    lblSumofDiff.textContent = "Sum of Difference";
    lblSumofDiff.setAttribute("class", "removeChildren")

    var origSum = document.createElement("input");
    origSum.setAttribute("type", "text");
    origSum.setAttribute("id", "origSumID");
    origSum.setAttribute("name", "origSum");
    origSum.setAttribute("class", "removeChildren")
    origSum.setAttribute("readonly", true);

    var regSum = document.createElement("input");
    regSum.setAttribute("type", "text");
    regSum.setAttribute("id", "regSumID");
    regSum.setAttribute("name", "regSum");
    regSum.setAttribute("class", "removeChildren")
    regSum.setAttribute("readonly", true);

    //

    var lblAAD = document.createElement("label");
    lblAAD.textContent = "AAD";
    lblAAD.setAttribute("class", "removeChildren")

    var origAAD = document.createElement("input");
    origAAD.setAttribute("type", "text");
    origAAD.setAttribute("id", "origAADID");
    origAAD.setAttribute("name", "origAAD");
    origAAD.setAttribute("class", "removeChildren")
    origAAD.setAttribute("readonly", true);

    var regAAD = document.createElement("input");
    regAAD.setAttribute("type", "text");
    regAAD.setAttribute("id", "regAADID");
    regAAD.setAttribute("name", "regAAD");
    regAAD.setAttribute("class", "removeChildren")
    regAAD.setAttribute("readonly", true);

    //

    var lblCoD = document.createElement("label");
    lblCoD.textContent = "CoD";
    lblCoD.setAttribute("class", "removeChildren")

    var origCoD = document.createElement("input");
    origCoD.setAttribute("type", "text");
    origCoD.setAttribute("id", "origCoDID");
    origCoD.setAttribute("name", "origCoD");
    origCoD.setAttribute("class", "removeChildren")
    origCoD.setAttribute("readonly", true);

    var regCoD = document.createElement("input");
    regCoD.setAttribute("type", "text");
    regCoD.setAttribute("id", "regCoDID");
    regCoD.setAttribute("name", "regCoD");
    regCoD.setAttribute("class", "removeChildren")
    regCoD.setAttribute("readonly", true);


    //



    var cont = document.getElementById("ratioStudy")

    cont.appendChild(empty5)
    cont.appendChild(lblOrig)
    cont.appendChild(lblReg)

    cont.appendChild(lblMedian)
    cont.appendChild(origMedian)
    cont.appendChild(regMedian)

    cont.appendChild(lblSumofDiff)
    cont.appendChild(origSum)
    cont.appendChild(regSum)

    cont.appendChild(lblAAD)
    cont.appendChild(origAAD)
    cont.appendChild(regAAD)

    cont.appendChild(lblCoD)
    cont.appendChild(origCoD)
    cont.appendChild(regCoD)

}

function createRegression(container) {


    var lblUseInput = document.createElement("label");
    lblUseInput.textContent = "Use Input Data";
    lblUseInput.setAttribute("class", "grid-item");

    var useInputData = document.createElement("button");
    useInputData.setAttribute("value", "Submit")
    useInputData.setAttribute("id", "useInputDataButtonID")
    useInputData.textContent = 'Populate Fields';

    //-----------------------------------------------------------------------------------
    var lblOpenFile = document.createElement("label");
    lblOpenFile.textContent = "Open File";
    lblOpenFile.setAttribute("class", "grid-item");

    var openFileButton = document.createElement("button");
    openFileButton.setAttribute("value", "Submit")
    openFileButton.setAttribute("id", "openFileButtonID")
    openFileButton.textContent = 'Select File';

    //----------------------------------------------------------------------------------------

    var lblSelectDependent = document.createElement("label");
    lblSelectDependent.textContent = "Select Dependent Variable";
    lblSelectDependent.setAttribute("class", "grid-item");

    //Create and append select list for
    var selectDependentVariables = document.createElement("select");
    selectDependentVariables.id = "selectDependentVariablesID";
    selectDependentVariables.setAttribute("class", "InputEntries")
    selectDependentVariables.setAttribute("name", "dependentVariables")

    //Create and append the options


    var addDependentButton = document.createElement("button");
    addDependentButton.setAttribute("value", "Submit")
    addDependentButton.setAttribute("id", "addDependentButtonID")
    addDependentButton.textContent = 'Add Dependent';

    //----------------------------------------------------------------------------------------

    var lblSelectIndependent = document.createElement("label");
    lblSelectIndependent.textContent = "Select Independent Variable";
    lblSelectIndependent.setAttribute("class", "grid-item");

    //Create and append select list for 
    var selectIndependentVariables = document.createElement("select");
    selectIndependentVariables.id = "selectIndependentVariablesID";
    selectIndependentVariables.setAttribute("class", "InputEntries")
    selectIndependentVariables.setAttribute("name", "independentVariables")




    var addIndependentButton = document.createElement("button");
    addIndependentButton.setAttribute("value", "Submit")
    addIndependentButton.setAttribute("id", "addIndependentButtonID")
    addIndependentButton.textContent = 'Add Independent';




    //----------------------------------------------------------------------------------------

    var lblSelectAppraisedValue = document.createElement("label");
    lblSelectAppraisedValue.textContent = "Select Appraised Value";
    lblSelectAppraisedValue.setAttribute("class", "grid-item");

    //Create and append select list for 
    var selectAppraisedValue = document.createElement("select");
    selectAppraisedValue.id = "selectAppraisedValueID";
    selectAppraisedValue.setAttribute("class", "InputEntries")
    selectAppraisedValue.setAttribute("name", "selectAppraisedValue")
    //----------------------------------------------------------------------------------------

    var lblSelectRegressionMethod = document.createElement("label");
    lblSelectRegressionMethod.textContent = "Select Regression Method";
    lblSelectRegressionMethod.setAttribute("class", "grid-item");

    //Create and append select list for 
    var selectRegressionMethod = document.createElement("select");
    selectRegressionMethod.id = "selectRegressionMethodID";
    selectRegressionMethod.setAttribute("class", "InputEntries")

    var option1 = document.createElement("option");
    option1.value = "Forward Regression"
    option1.text = "Forward Regression"
    selectRegressionMethod.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "Backward Regression"
    option2.text = "Backward Regression"
    selectRegressionMethod.appendChild(option2);

    var option3 = document.createElement("option");
    option3.value = "Stepwise Regression"
    option3.text = "Stepwise Regression"
    selectRegressionMethod.appendChild(option3);

    var option4 = document.createElement("option");
    option4.value = "SubSet Regression"
    option4.text = "SubSet Regression"
    selectRegressionMethod.appendChild(option4);


    //----------------------------------------------------------------------------------------

    var lblCorrelationCoe = document.createElement("label");
    lblCorrelationCoe.textContent = "R";
    lblCorrelationCoe.setAttribute("class", "grid-item");


    var correlationEntry = document.createElement("input");
    correlationEntry.setAttribute("type", "text");
    correlationEntry.setAttribute("id", "correlationEntryID");
    correlationEntry.setAttribute("name", "correlationEntry");
    correlationEntry.setAttribute("class", "InputEntries");
    correlationEntry.setAttribute("readonly", true);


    //----------------------------------------------------------------------------------------

    var lblRSquare = document.createElement("label");
    lblRSquare.textContent = "R Square";
    lblRSquare.setAttribute("class", "grid-item");


    var rSquareEntry = document.createElement("input");
    rSquareEntry.setAttribute("type", "text");
    rSquareEntry.setAttribute("id", "rSquareEntryID");
    rSquareEntry.setAttribute("name", "rSquareEntry");
    rSquareEntry.setAttribute("class", "InputEntries");
    rSquareEntry.setAttribute("readonly", true);

    //----------------------------------------------------------------------------------------

    var lblAdjustedRSquare = document.createElement("label");
    lblAdjustedRSquare.textContent = "Adjusted R Square";
    lblAdjustedRSquare.setAttribute("class", "grid-item");


    var adjustedRSquareEntry = document.createElement("input");
    adjustedRSquareEntry.setAttribute("type", "text");
    adjustedRSquareEntry.setAttribute("id", "adjustedRSquareEntryID");
    adjustedRSquareEntry.setAttribute("name", "adjustedRSquareEntry");
    adjustedRSquareEntry.setAttribute("class", "InputEntries");
    adjustedRSquareEntry.setAttribute("readonly", true);

    //----------------------------------------------------------------------------------------

    var lblRMSE = document.createElement("label");
    lblRMSE.textContent = "RMSE";
    lblRMSE.setAttribute("class", "grid-item");


    var RMSEEntry = document.createElement("input");
    RMSEEntry.setAttribute("type", "text");
    RMSEEntry.setAttribute("id", "RMSEEntryID");
    RMSEEntry.setAttribute("name", "RMSEEntry");
    RMSEEntry.setAttribute("class", "InputEntries");
    RMSEEntry.setAttribute("readonly", true);
    //-

    var lblRegEquation = document.createElement("label");
    lblRegEquation.textContent = "Reg Equation";
    lblRegEquation.setAttribute("class", "grid-item");


    var regEquationEntry = document.createElement("input");
    regEquationEntry.setAttribute("type", "text");
    regEquationEntry.setAttribute("id", "regEquationEntryID");
    regEquationEntry.setAttribute("name", "regEquationEntry");
    regEquationEntry.setAttribute("class", "InputEntries");
    regEquationEntry.setAttribute("readonly", true);
    //-
    //-
    //-
    //-
    //-
    //-
    //-
    //-
    //-
    //-
    //-
    //-
    //-
    //-
    //-
    //-
    //-


    var lblRunRegression = document.createElement("label");
    lblRunRegression.textContent = "Run Regression";
    lblRunRegression.setAttribute("class", "grid-item");

    var runRegressionButton = document.createElement("button");
    runRegressionButton.setAttribute("value", "Submit")
    runRegressionButton.setAttribute("id", "runRegressionButtonID")
    runRegressionButton.textContent = 'Run Regression';

    //------------------------------------------------------------------------------------------------
    var lblDependentVariable = document.createElement("label");
    lblDependentVariable.textContent = "Dependent Variable";
    lblDependentVariable.setAttribute("class", "grid-item");


    var dependentVariableEntry = document.createElement("input");
    dependentVariableEntry.setAttribute("type", "text");
    dependentVariableEntry.setAttribute("id", "dependentVariableEntryID");
    dependentVariableEntry.setAttribute("name", "dependentVariableEntry");
    dependentVariableEntry.setAttribute("class", "InputEntries");
    dependentVariableEntry.setAttribute("readonly", true);


    //------------------------------------------------------------------------------------------------
    var lblIndependentVariable = document.createElement("label");
    lblIndependentVariable.textContent = "Independent Variable";
    lblIndependentVariable.setAttribute("class", "grid-item");


    var independentVariableEntry = document.createElement("input");
    independentVariableEntry.setAttribute("type", "text");
    independentVariableEntry.setAttribute("id", "independentVariableEntryID");
    independentVariableEntry.setAttribute("name", "independentVariableEntry");
    independentVariableEntry.setAttribute("class", "InputEntries");
    independentVariableEntry.setAttribute("readonly", true);


    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    //Bottom Right


    var lblSSReg = document.createElement("label");
    lblSSReg.textContent = "SS Reg";
    lblSSReg.setAttribute("class", "grid-item");


    var ssRegEntry = document.createElement("input");
    ssRegEntry.setAttribute("type", "text");
    ssRegEntry.setAttribute("id", "ssRegEntryID");
    ssRegEntry.setAttribute("name", "ssRegEntry");
    ssRegEntry.setAttribute("class", "InputEntries");
    ssRegEntry.setAttribute("readonly", true);



    //-------------------------------------------------------------------------
    var lblSSRes = document.createElement("label");
    lblSSRes.textContent = "SS Res";
    lblSSRes.setAttribute("class", "grid-item");


    var ssResEntry = document.createElement("input");
    ssResEntry.setAttribute("type", "text");
    ssResEntry.setAttribute("id", "ssResEntryID");
    ssResEntry.setAttribute("name", "ssResEntry");
    ssResEntry.setAttribute("class", "InputEntries");
    ssResEntry.setAttribute("readonly", true);


    //-------------------------------------------------------------------------
    var lblSSTotal = document.createElement("label");
    lblSSTotal.textContent = "SS Total";
    lblSSTotal.setAttribute("class", "grid-item");


    var ssTotalEntry = document.createElement("input");
    ssTotalEntry.setAttribute("type", "text");
    ssTotalEntry.setAttribute("id", "ssTotalEntryID");
    ssTotalEntry.setAttribute("name", "ssTotalEntry");
    ssTotalEntry.setAttribute("class", "InputEntries");
    ssTotalEntry.setAttribute("readonly", true);

    //-------------------------------------------------------------------------
    var lblMSReg = document.createElement("label");
    lblMSReg.textContent = "MS Reg";
    lblMSReg.setAttribute("class", "grid-item");


    var msRegEntry = document.createElement("input");
    msRegEntry.setAttribute("type", "text");
    msRegEntry.setAttribute("id", "msRegEntryID");
    msRegEntry.setAttribute("name", "msRegEntry");
    msRegEntry.setAttribute("class", "InputEntries");
    msRegEntry.setAttribute("readonly", true);

    //-------------------------------------------------------------------------
    var lblMSRes = document.createElement("label");
    lblMSRes.textContent = "MS Res";
    lblMSRes.setAttribute("class", "grid-item");


    var msResEntry = document.createElement("input");
    msResEntry.setAttribute("type", "text");
    msResEntry.setAttribute("id", "msResEntryID");
    msResEntry.setAttribute("name", "msResEntry");
    msResEntry.setAttribute("class", "InputEntries");
    msResEntry.setAttribute("readonly", true);


    //-------------------------------------------------------------------------
    var lblDFReg = document.createElement("label");
    lblDFReg.textContent = "df Reg";
    lblDFReg.setAttribute("class", "grid-item");


    var dfRegEntry = document.createElement("input");
    dfRegEntry.setAttribute("type", "text");
    dfRegEntry.setAttribute("id", "dfRegEntryID");
    dfRegEntry.setAttribute("name", "dfRegEntry");
    dfRegEntry.setAttribute("class", "InputEntries");
    dfRegEntry.setAttribute("readonly", true);

    //-------------------------------------------------------------------------
    var lblDFRes = document.createElement("label");
    lblDFRes.textContent = "df Res";
    lblDFRes.setAttribute("class", "grid-item");


    var dfResEntry = document.createElement("input");
    dfResEntry.setAttribute("type", "text");
    dfResEntry.setAttribute("id", "dfResEntryID");
    dfResEntry.setAttribute("name", "dfResEntry");
    dfResEntry.setAttribute("class", "InputEntries");
    dfResEntry.setAttribute("readonly", true);

    //-------------------------------------------------------------------------
    var lblDFMod = document.createElement("label");
    lblDFMod.textContent = "df Mod";
    lblDFMod.setAttribute("class", "grid-item");


    var dfModEntry = document.createElement("input");
    dfModEntry.setAttribute("type", "text");
    dfModEntry.setAttribute("id", "dfModEntryID");
    dfModEntry.setAttribute("name", "dfModEntry");
    dfModEntry.setAttribute("class", "InputEntries");
    dfModEntry.setAttribute("readonly", true);

    //-------------------------------------------------------------------------
    var lblFStat = document.createElement("label");
    lblFStat.textContent = "F Stat";
    lblFStat.setAttribute("class", "grid-item");


    var fStatEntry = document.createElement("input");
    fStatEntry.setAttribute("type", "text");
    fStatEntry.setAttribute("id", "fStatEntryID");
    fStatEntry.setAttribute("name", "fStatEntry");
    fStatEntry.setAttribute("class", "InputEntries");
    fStatEntry.setAttribute("readonly", true);

    //-------------------------------------------------------------------------
    var lblPStat = document.createElement("label");
    lblPStat.textContent = "P Stat";
    lblPStat.setAttribute("class", "grid-item");


    var pStatEntry = document.createElement("input");
    pStatEntry.setAttribute("type", "text");
    pStatEntry.setAttribute("id", "pStatEntryID");
    pStatEntry.setAttribute("name", "pStatEntry");
    pStatEntry.setAttribute("class", "InputEntries");
    pStatEntry.setAttribute("readonly", true);





    var topLeftDiv = document.getElementById('topLeft');

    //var bottomLeftDiv = document.getElementById('bottomLeft');
    //var bottomRightDiv = document.getElementById('bottomRight');

    var bottomLeftDiv = document.createElement("div")
    var bottomRightDiv = document.createElement("div")
    //var conjointedBot = document.getElementById('conjoinedBot');
    var conjointedBot = document.createElement("div")

    var empty3 = document.createElement("label");
    empty3.textContent = "";
    empty3.setAttribute("class", "grid-item")

    var empty4 = document.createElement("label");
    empty4.textContent = "";
    empty4.setAttribute("class", "grid-item")



    topLeftDiv.appendChild(lblUseInput)
    topLeftDiv.appendChild(useInputData)
    topLeftDiv.appendChild(lblOpenFile)
    topLeftDiv.appendChild(openFileButton)
    topLeftDiv.appendChild(lblSelectDependent)
    topLeftDiv.appendChild(selectDependentVariables)
    //topLeftDiv.appendChild(empty3)
    //topLeftDiv.appendChild(addDependentButton)


    topLeftDiv.appendChild(lblSelectIndependent)
    topLeftDiv.appendChild(selectIndependentVariables)


    topLeftDiv.appendChild(lblSelectAppraisedValue)
    topLeftDiv.appendChild(selectAppraisedValue)



    //topLeftDiv.appendChild(empty4)
    //topLeftDiv.appendChild(addIndependentButton)

    topLeftDiv.appendChild(lblSelectRegressionMethod)
    topLeftDiv.appendChild(selectRegressionMethod)





    var empty = document.createElement("label");
    empty.textContent = "";
    empty.setAttribute("class", "grid-item")

    var empty2 = document.createElement("label");
    empty2.textContent = "";
    empty2.setAttribute("class", "grid-item")


    var botleftDiv = document.getElementById('botleft');
    var botmidDiv = document.getElementById('botmid');
    var botrightDiv = document.getElementById('botright');
    var container = document.getElementById('bottomContainer');

    botleftDiv.appendChild(lblCorrelationCoe)
    botleftDiv.appendChild(correlationEntry)
    botleftDiv.appendChild(lblRSquare)
    botleftDiv.appendChild(rSquareEntry)
    botleftDiv.appendChild(lblAdjustedRSquare)
    botleftDiv.appendChild(adjustedRSquareEntry)
    botleftDiv.appendChild(lblRMSE)
    botleftDiv.appendChild(RMSEEntry)
    botleftDiv.appendChild(lblRegEquation)
    botleftDiv.appendChild(regEquationEntry)

    botmidDiv.appendChild(lblSSReg)
    botmidDiv.appendChild(ssRegEntry)
    botmidDiv.appendChild(lblSSRes)
    botmidDiv.appendChild(ssResEntry)
    botmidDiv.appendChild(lblSSTotal)
    botmidDiv.appendChild(ssTotalEntry)
    botmidDiv.appendChild(lblMSReg)
    botmidDiv.appendChild(msRegEntry)
    botmidDiv.appendChild(lblMSRes)
    botmidDiv.appendChild(msResEntry)

    botrightDiv.appendChild(lblDFReg)
    botrightDiv.appendChild(dfRegEntry)
    botrightDiv.appendChild(lblDFRes)
    botrightDiv.appendChild(dfResEntry)
    botrightDiv.appendChild(lblDFMod)
    botrightDiv.appendChild(dfModEntry)
    botrightDiv.appendChild(lblFStat)
    botrightDiv.appendChild(fStatEntry)
    botrightDiv.appendChild(lblPStat)
    botrightDiv.appendChild(pStatEntry)
}





function clearRegression() {
    if (document.getElementById("selectDependentVariablesID").options.length > 0) {
        var i, L = document.getElementById("selectDependentVariablesID").options.length - 1;
        for (i = L; i >= 0; i--) {
            document.getElementById("selectDependentVariablesID").remove(i);
        }
    }

    if (document.getElementById("selectIndependentVariablesID").options.length > 0) {
        var i, L = document.getElementById("selectIndependentVariablesID").options.length - 1;
        for (i = L; i >= 0; i--) {
            document.getElementById("selectIndependentVariablesID").remove(i);
        }
    }


    if (document.getElementById("selectAppraisedValueID").options.length > 0) {
        var i, L = document.getElementById("selectAppraisedValueID").options.length - 1;
        for (i = L; i >= 0; i--) {
            document.getElementById("selectAppraisedValueID").remove(i);
        }
    }
}

//This is used for event listeners

$(document).ready(function () {
    //when open file button is clicked, prompt user to insert a file
    $("#openFileButtonID").on("click", function () {
        var fileOpener = document.getElementById("file-selection");
        clearRegression();
        setTimeout(fileOpener.click(), 250);
    })

    $("#useInputDataButtonID").on("click", function () { // if user pressed use input data button
        clearRegression();
        setTimeout(createTableFromInputs(), 250);
    })


    $("#selectRegressionMethodID").change(function () {
        if (document.getElementById("selectRegressionMethodID").value == "Stepwise Regression") {
            createRatioStudy();
        }
        else {
            let children = document.querySelectorAll(".removeChildren")
            children.forEach(child => {
                child.remove();
            })
            //document.getElementById("ratioStudy").remove()
        }
    })



    $("#runRegressionButtonID").on("click", function () {
        sendRegressionData();
    })

    $("#file-selection").change(function (e) {
        console.log("loaded file")
        handleFileSelector(e).then(function (handledFile) {
            return processData(handledFile);
        }).then(function (lines) {

            createTable(lines);

        })

    })


    $("#selectIndependentVariablesID").on("change", function () {
        createNewButtonForIndependentSelection()
    })



});

function removeWithPromise(value) {
    $(value).remove();
    resolve();
}


function addDependentVariable() {

    var dependentVariableSelection = document.getElementById('selectDependentVariablesID')
    var dependentVariableSelectionToSend = dependentVariableSelection.options[dependentVariableSelection.selectedIndex].value;
    $("#dependentVariableEntryID").val(dependentVariableSelectionToSend)

}


function createNewButtonForDependentSelection() {
    var dependentVariableSelection = document.getElementById('selectDependentVariablesID')
    var dependentVariableSelectionToSend = dependentVariableSelection.options[dependentVariableSelection.selectedIndex].value;

    buildButtonsDependent(dependentVariableSelectionToSend)


}

function createNewButtonForIndependentSelection() {
    var independentVariableSelection = document.getElementById('selectIndependentVariablesID')
    var independentVariableSelectionToSend = independentVariableSelection.options[independentVariableSelection.selectedIndex].value;



    checkIndependentArray(independentVariableSelectionToSend).then(function (resolve) {
        return buildButtons(resolve);
    }, function () {
        console.log("No Duplicate Independent Variables!")
    })

}
function checkIndependentArray(independentVariableSelectionToSend) {
    return new Promise(function (resolve, reject) {
        if (checkingForDuplicatesArray.length == 0) {
            var buttonWrapper = document.createElement("div")
            buttonWrapper.setAttribute("class", "independentSelectionButtonSpan")

            newButton = document.createElement("button")
            newButton.setAttribute("class", "independentSelectionButton")
            //newButton.setAttribute("onclick", 'deleteme( " '+newButton+' " )')
            newButton.textContent = independentVariableSelectionToSend

            var xspan = document.createElement("span");
            xspan.setAttribute("class", "xspan")
            xspan.innerHTML = "x";
            xspan.style.cursor = "default";

            buttonWrapper.appendChild(newButton)
            buttonWrapper.appendChild(xspan)

            document.getElementById("independentSelection").appendChild(buttonWrapper)

            checkingForDuplicatesArray.push(independentVariableSelectionToSend + "x") //add selected value to checking duplicate array
            var answer = "dupe"
            reject(answer)//Dupe because it is the first value to be addded. Not really a dupe but this works.
        }
        else {
            for (var i = 0; i < checkingForDuplicatesArray.length; i++) {
                if (checkingForDuplicatesArray[i] == independentVariableSelectionToSend + "x") {
                    var answer = "dupe"
                    reject(answer)// found a duplicate
                }

            }
        }
        resolve(independentVariableSelectionToSend)
    })
}

function buildButtons(independentVariableSelectionToSend) {
    var buttonWrapper = document.createElement("div")
    buttonWrapper.setAttribute("class", "independentSelectionButtonSpan")

    newButton = document.createElement("button")
    newButton.setAttribute("class", "independentSelectionButton")
    newButton.textContent = independentVariableSelectionToSend

    var xspan = document.createElement("span");
    xspan.setAttribute("class", "xspan")
    xspan.innerHTML = "x";
    xspan.style.cursor = "default";

    buttonWrapper.appendChild(newButton)
    buttonWrapper.appendChild(xspan)

    document.getElementById("independentSelection").appendChild(buttonWrapper)

    checkingForDuplicatesArray.push(independentVariableSelectionToSend + "x")//add selected value to checking duplicate array
}


function buildButtonsDependent(dependentVariableSelectionToSend) {
    try {
        document.getElementsByClassName("dependentSelectionButtonSpan").remove();
    } catch {
        console.log("nothing there yet")
    }
    var buttonWrapper = document.createElement("div")
    buttonWrapper.setAttribute("class", "dependentSelectionButtonSpan")

    newButton = document.createElement("button")
    newButton.setAttribute("class", "dependentSelectionButton")
    newButton.setAttribute("id", "dependentSelectionButton")
    newButton.textContent = dependentVariableSelectionToSend

    var xspanDep = document.createElement("span");
    xspanDep.setAttribute("class", "xspanDep")
    xspanDep.innerHTML = "x";
    xspanDep.style.cursor = "default";

    buttonWrapper.appendChild(newButton)
    buttonWrapper.appendChild(xspanDep)

    document.getElementById("dependentSelection").appendChild(buttonWrapper)
}

//watch for clicking of independent variable clicking then do removing stuff
$(document.getElementById("independentSelection")).click(function (event) {
    if (event.target.className == "independentSelectionButtonSpan") {// remove if direct click is on text
        console.log(event.target.textContent)
        var index = checkingForDuplicatesArray.indexOf(event.target.textContent)
        if (index > -1) {
            checkingForDuplicatesArray.splice(index, 1);
        }
        event.target.remove()

    }
    if (event.target.className == "independentSelectionButton" || event.target.className == "xspan") {// remove if direct click is anywhere on button
        var index = checkingForDuplicatesArray.indexOf(event.target.parentNode.textContent)
        if (index > -1) {
            checkingForDuplicatesArray.splice(index, 1); // remove the name of the button from this Checking for Duplicates array
        }
        event.target.parentNode.remove()
    }
});


//watch for clicking of dependent variable clicking then do removing stuff
$(document.getElementById("dependentSelection")).click(function (event) {
    if (event.target.className == "dependentSelectionButtonSpan") {// remove if direct click is on text
        event.target.remove()

    }
    if (event.target.className == "dependentSelectionButton" || event.target.className == "xspanDep") {// remove if direct click is anywhere on button
        event.target.parentNode.remove()
    }
});


//------------------------------------------

function createTableFromInputs() {
    console.log("creating inputs from input")
    console.log(inputsArray)

    //create table headers
    for (var i = 0; i < headersOriginal.length; i++) {
        $("#tableRowHeaders").append("<th>" + headersOriginal[i] + "</th>")


        var depOptionAsString = "<option value='" + headersOriginal[i] + "'>" + headersOriginal[i] + "</option>";
        $('select[name="dependentVariables"]').append(depOptionAsString)
        $('select[name="dependentVariables"]').val(headersOriginal[-1])


        var indOptionAsString = "<option value='" + headersOriginal[i] + "'>" + headersOriginal[i] + "</option>";
        $('select[name="independentVariables"]').append(indOptionAsString)
        $('select[name="independentVariables"]').val(headersOriginal[-1])

        var appValueAsString = "<option value='" + headersOriginal[i] + "'>" + headersOriginal[i] + "</option>";
        $('select[name="selectAppraisedValue"]').append(appValueAsString)
        $('select[name="selectAppraisedValue"]').val(headersOriginal[-1])

    }

    //create table

    //this is used to pull only sepcific values
    arrayForValues = [
        2, //full_address
        3, //land_total_acres 
        11, // square_feet
        12, // condition
        13,// "quality", 
        14,// "exterior", 
        15,// "interior", 
        16,// "year_built", 
        17,// "linear_feet_of_perimeter
        18,// "story_height"
        19,// "sale_price"
        20,// "sale_date"
    ]

    let data = []
    data.push(headersOriginal)
    dataFile = data.toString() + "\n" // add the headers to the "datafile" string first

    for (var j = 0; j < inputsArray.length; j++) { // for every line from market comps
        var tr = document.createElement('tr'); // create a new table row
        for (var k = 0; k < headersOriginal.length; k++) { // for every item inside a market comp
            if (inputsArray[j][arrayForValues[k]] == null) { // if theres a null value set it to 0
                inputsArray[j][arrayForValues[k]] = "0"
            }
            var td = document.createElement('td')
            td.appendChild(document.createTextNode(inputsArray[j][arrayForValues[k]])) // add item to the table
            tr.appendChild(td)
            document.getElementById("regressionTable").appendChild(tr) // add the table to div



            // write everything to a string for DataFile so that regression analysis can "open" it
            if (k == headersOriginal.length - 1) { // if we are on the last item of market comp
                dataFile = dataFile + (inputsArray[j][arrayForValues[k]].toString()) // no comma on last item in j line
            }
            else {
                dataFile = dataFile + (inputsArray[j][arrayForValues[k]].toString()) + "," // add commas after each item
            }


        }
        dataFile = dataFile + "\n" // add a new line to the end of each j item

    }

    //dataFile += (lines.toString())

}

function createTable(lines) {

    // create table headers

    for (var i = 0; i < headers.length; i++) {
        $("#tableRowHeaders").append("<th>" + headers[i] + "</th>")


        var depOptionAsString = "<option value='" + headers[i] + "'>" + headers[i] + "</option>";
        $('select[name="dependentVariables"]').append(depOptionAsString)
        $('select[name="dependentVariables"]').val(headers[-1])


        var indOptionAsString = "<option value='" + headers[i] + "'>" + headers[i] + "</option>";
        $('select[name="independentVariables"]').append(indOptionAsString)
        $('select[name="independentVariables"]').val(headers[-1])

        var appValueAsString = "<option value='" + headers[i] + "'>" + headers[i] + "</option>";
        $('select[name="selectAppraisedValue"]').append(appValueAsString)
        $('select[name="selectAppraisedValue"]').val(headers[-1])

    }

    for (var j = 0; j < lines.length; j++) { // create table
        var tr = document.createElement('tr');
        for (var k = 0; k < headers.length; k++) {
            var td = document.createElement('td')
            td.appendChild(document.createTextNode(lines[j][k]))
            tr.appendChild(td)
            document.getElementById("regressionTable").appendChild(tr)
        }

    }




}

function handleFileSelector(evt) {
    return new Promise(function (resolve, reject) {
        let files = evt.target.files; // FileList object


        // use the 1st file from the list
        let f = files[0];

        let reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                res = JSON.stringify(e.currentTarget.result);
                dataFile = e.currentTarget.result
                resolve(e.currentTarget.result)
            };

        })(f);

        // Read in the image file as a data URL.
        reader.readAsText(f);

    })

}

const csvFile = document.getElementById("file-selector");







function processData(allText) {
    // seperate deliminated objects
    //STRICTLY FOR CSV
    var allTextLines = allText.split(/\r\n|\n/);
    headers = allTextLines[0].split(',');
    var lines = [];

    for (var i = 1; i < allTextLines.length; i++) { //for each line
        var data = allTextLines[i].split(','); // seperate individual values inside , ,
        if (data.length == headers.length) {
            var tarr = []; // temp array
            for (var j = 0; j < headers.length; j++) {
                tarr.push(data[j]); // push data to temp array
                if (headers[j] == headers[1]) {
                    ind.push(data[j])
                }
                else {
                    dep.push(data[j])
                }
            }

            lines.push(tarr);
        }




    }
    //console.log(lines);
    return lines
}

