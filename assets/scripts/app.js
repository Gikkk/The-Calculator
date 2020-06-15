const defaultResult = 0;
let currentResult = defaultResult;
let logArr = [];

function getUserNumberInput(){
    return parseFloat(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNum){
    const calcDescription = `${operator}  ${resultBeforeCalc}  ${calcNum}`
    outputResult(currentResult, calcDescription );
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult){
        const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult
        }
        logArr.push(logEntry);
        console.log(logArr);
}

function add(){
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNum;
    createAndWriteOutput( initialResult, '+', enteredNum);
    writeToLog("ADD", initialResult, enteredNum, currentResult )   
}

function subtract(){
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNum;
    createAndWriteOutput(initialResult,'-', enteredNum);
    writeToLog("SUBTRACT", initialResult, enteredNum, currentResult )   

}

function multiply(){
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNum;
    createAndWriteOutput(initialResult,'*', enteredNum);
    writeToLog("Multiply", initialResult, enteredNum, currentResult )   

}

function divide(){
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNum;
    createAndWriteOutput(initialResult,'/', enteredNum);
    writeToLog("Divide", initialResult, enteredNum, currentResult )   
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
