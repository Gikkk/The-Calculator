const defaultResult = 0;
let currentResult = defaultResult;
let logEnt = [];

function getUserNumberInput(){
    return parseFloat(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNum){
    const calcDescription = `${operator}  ${resultBeforeCalc}  ${calcNum}`
    outputResult(currentResult, calcDescription );
}

function add(){
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNum;
    createAndWriteOutput( initialResult, '+', enteredNum);
}

function subtract(){
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNum;
    createAndWriteOutput(initialResult,'-', enteredNum);

}

function multiply(){
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNum;
    createAndWriteOutput(initialResult,'*', enteredNum);
}

function divide(){
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNum;
    createAndWriteOutput(initialResult,'/', enteredNum);

}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
