let display = document.querySelector("#display");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const decimalButton = document.querySelector("#decimal");
const prefixButton = document.querySelector("#prefix");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const digits = document.querySelectorAll(".digit");

function add(firstNumber, secondNumber) {
  if ((firstNumber + secondNumber) % 1 !== 0) {
    return parseFloat(firstNumber + secondNumber).toFixed(5);
  } else {
    return parseFloat(firstNumber + secondNumber);
  }
}

function subtract(firstNumber, secondNumber) {
  if ((firstNumber - secondNumber) % 1 !== 0) {
    return parseFloat(firstNumber - secondNumber).toFixed(5);
  } else {
    return parseFloat(firstNumber - secondNumber);
  }
}

function multiply(firstNumber, secondNumber) {
  if ((firstNumber * secondNumber) % 1 !== 0) {
    return parseFloat(firstNumber * secondNumber).toFixed(5);
  } else {
    return parseFloat(firstNumber * secondNumber);
  }
}

function divide(firstNumber, secondNumber) {
  if ((firstNumber / secondNumber) % 1 !== 0) {
    return parseFloat(firstNumber / secondNumber).toFixed(5);
  } else {
    return parseFloat(firstNumber / secondNumber);
  }
}

function operate(operation, firstNumber, secondNumber) {
  return operation(firstNumber, secondNumber);
}

function calculateResult(operation) {
  if (num2 === null) {
    return;
  } else {
    if (operate(operator, num, num2) === Infinity) {
      display.textContent = "Error";
    } else if (
      parseFloat(operate(operator, num, num2)).toString().length >= 10
    ) {
      display.textContent = parseFloat(
        operate(operator, num, num2)
      ).toExponential(5);
      num = operate(operator, num, num2);
      num2 = null;
      mode = "num2";
      operator = operation;
    } else if (
      parseFloat(operate(operator, num, num2)).toString().length < 10
    ) {
      display.textContent = operate(operator, num, num2);
      num = operate(operator, num, num2);
      num2 = null;
      mode = "num2";
      operator = operation;
    }
  }
}

let num = null;
let num2 = null;
let mode = "num";
let operator = null;
let operationMode = "null";
let prefix = "positive";

digits.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (parseFloat(num).toString().length < 10) {
      if (mode === "num") {
        if (num === null) {
          num = parseFloat(e.target.value);
          display.textContent = num;
        } else if (num !== null) {
          num += e.target.value;
          display.textContent = num;
          num = parseFloat(num);
        }
      }
    }

    if (parseFloat(num2).toString().length < 10) {
      if (mode === "num2") {
        if (num2 === null) {
          num2 = parseFloat(e.target.value);
          display.textContent = num2;
        } else if (num2 !== null) {
          num2 += e.target.value;
          display.textContent = num2;
          num2 = parseFloat(num2);
        }
      }
    } else {
      return;
    }
  });
});

addButton.addEventListener("click", () => {
  if (operationMode === "null") {
    operator = add;
    operationMode = "notNull";
    mode = "num2";
  } else if (operationMode !== "null") {
    calculateResult(add);
  }
});

subtractButton.addEventListener("click", () => {
  if (operationMode === "null") {
    operator = subtract;
    operationMode = "notNull";
    mode = "num2";
  } else if (operationMode !== "null") {
    calculateResult(subtract);
  }
});

multiplyButton.addEventListener("click", () => {
  if (operationMode === "null") {
    operator = multiply;
    operationMode = "notNull";
    mode = "num2";
  } else if (operationMode !== "null") {
    calculateResult(multiply);
  }
});

divideButton.addEventListener("click", () => {
  if (operationMode === "null") {
    operator = divide;
    operationMode = "notNull";
    mode = "num2";
  } else if (operationMode !== "null") {
    calculateResult(divide);
  }
});

decimalButton.addEventListener("click", () => {
  if (display.textContent == num) {
    num += ".";
    display.textContent = num;
  } else if (display.textContent == num2) {
    num2 += ".";
    display.textContent = num2;
  }
});

prefixButton.addEventListener("click", () => {
  if (display.textContent == num && num < 0) {
    num = Math.abs(num);
    display.textContent = num;
  } else if (display.textContent == num2 && num2 < 0) {
    num2 = Math.abs(num2);
    display.textContent = num2;
  }

  if (display.textContent == num && num >= 0) {
    num = -Math.abs(num);
    display.textContent = num;
  } else if (display.textContent == num2 && num2 >= 0) {
    num2 = -Math.abs(num2);
    display.textContent = num2;
  }
});

equals.addEventListener("click", () => {
  calculateResult();
  operator = null;
});

clear.addEventListener("click", () => {
  display.textContent = 0;
  num = null;
  num2 = null;
  operator = null;
  operationMode = "null";
  mode = "num";
});

// link keyboard, delete characters, negative/positive switch, no multiple decimals
