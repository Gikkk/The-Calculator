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

function calculateResult(calculationType){
    const enteredNum = getUserNumberInput();

    if(
        calculationType !=="ADD" &&
        calculationType !== "SUBTRACT" &&
        calculationType !== "MULTIPLY" &&
        calculationType !== "DIVIDE" ){
            return;
       }

    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD'){
        currentResult += enteredNum;
        mathOperator = '+'
    }else if(calculationType === "SUBTRACT"){
        currentResult -= enteredNum;
        mathOperator = '-'
    }else if(calculationType === "MULTIPLY"){
        currentResult *= enteredNum;
        mathOperator = '*'
    }else if(calculationType === "DIVIDE"){
        currentResult /= enteredNum;
        mathOperator = '/'
    }

    createAndWriteOutput( initialResult, mathOperator, enteredNum);
    writeToLog(calculationType, initialResult, enteredNum, currentResult )  
}

function add(){
    calculateResult('ADD');
}

function subtract(){
    calculateResult('SUBTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
