let display = document.querySelector("#display");
const nine = document.querySelector("#nine");
const eight = document.querySelector("#eight");
const seven = document.querySelector("#seven");
const six = document.querySelector("#six");
const five = document.querySelector("#five");
const four = document.querySelector("#four");
const three = document.querySelector("#three");
const two = document.querySelector("#two");
const one = document.querySelector("#one");
const zero = document.querySelector("#zero");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const decimalButton = document.querySelector("#decimal");
const prefixButton = document.querySelector("#prefix");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const digits = document.querySelectorAll(".digit");
const miscButtons = document.querySelectorAll(".miscButtons");
const darkButtons = document.querySelectorAll(".darkOnClick");

function add(firstNumber, secondNumber) {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  if ((firstNumber + secondNumber) % 1 !== 0) {
    return parseFloat((firstNumber + secondNumber).toFixed(5));
  } else {
    return parseFloat(firstNumber + secondNumber);
  }
}

function subtract(firstNumber, secondNumber) {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  if ((firstNumber - secondNumber) % 1 !== 0) {
    return parseFloat((firstNumber - secondNumber).toFixed(5));
  } else {
    return parseFloat(firstNumber - secondNumber);
  }
}

function multiply(firstNumber, secondNumber) {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  if ((firstNumber * secondNumber) % 1 !== 0) {
    return parseFloat((firstNumber * secondNumber).toFixed(5));
  } else {
    return parseFloat(firstNumber * secondNumber);
  }
}

function divide(firstNumber, secondNumber) {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  if ((firstNumber / secondNumber) % 1 !== 0) {
    return parseFloat((firstNumber / secondNumber).toFixed(5));
  } else {
    return parseFloat(firstNumber / secondNumber);
  }
}

function operate(operation, firstNumber, secondNumber) {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  if (operation == add) {
    return add(firstNumber, secondNumber);
  } else if (operation == subtract) {
    return subtract(firstNumber, secondNumber);
  } else if (operation == multiply) {
    return multiply(firstNumber, secondNumber);
  } else if (operation == divide) {
    return divide(firstNumber, secondNumber);
  }
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
          num = e.target.value;
          display.textContent = num;
        } else if (num !== null) {
          num += e.target.value;
          display.textContent = num;
        }
      }
    }

    if (parseFloat(num2).toString().length < 10) {
      if (mode === "num2") {
        if (num2 === null) {
          num2 = e.target.value;
          display.textContent = num2;
        } else if (num2 !== null) {
          num2 += e.target.value;
          display.textContent = num2;
        }
      }
    } else {
      return;
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "9") {
    nine.click();
  } else if (e.key === "8") {
    eight.click();
  } else if (e.key === "7") {
    seven.click();
  } else if (e.key === "6") {
    six.click();
  } else if (e.key === "5") {
    five.click();
  } else if (e.key === "4") {
    four.click();
  } else if (e.key === "3") {
    three.click();
  } else if (e.key === "2") {
    two.click();
  } else if (e.key === "1") {
    one.click();
  } else if (e.key === "0") {
    zero.click();
  } else if (e.key === "." || e.key === ",") {
    decimalButton.click();
  } else if (e.key === "+") {
    addButton.click();
  } else if (e.key === "-") {
    subtractButton.click();
  } else if (e.key === "*") {
    multiplyButton.click();
  } else if (e.key === "/") {
    divideButton.click();
  } else if (e.key === "=" || e.key === "Enter") {
    equals.click();
  } else if (e.key === "Backspace") {
    backspace.click();
  } else if (e.key === "Escape") {
    clear.click();
  }
});

addButton.addEventListener("click", () => {
  operationActive(addButton);
  operationInactive(subtractButton);
  operationInactive(multiplyButton);
  operationInactive(divideButton);

  if (operationMode === "null") {
    operator = add;
    operationMode = "notNull";
    mode = "num2";
  } else if (operationMode !== "null") {
    calculateResult(add);
  }
});

subtractButton.addEventListener("click", () => {
  operationActive(subtractButton);
  operationInactive(addButton);
  operationInactive(multiplyButton);
  operationInactive(divideButton);

  if (operationMode === "null") {
    operator = subtract;
    operationMode = "notNull";
    mode = "num2";
  } else if (operationMode !== "null") {
    calculateResult(subtract);
  }
});

multiplyButton.addEventListener("click", () => {
  operationActive(multiplyButton);
  operationInactive(addButton);
  operationInactive(subtractButton);
  operationInactive(divideButton);

  if (operationMode === "null") {
    operator = multiply;
    operationMode = "notNull";
    mode = "num2";
  } else if (operationMode !== "null") {
    calculateResult(multiply);
  }
});

divideButton.addEventListener("click", () => {
  operationActive(divideButton);
  operationInactive(addButton);
  operationInactive(subtractButton);
  operationInactive(multiplyButton);

  if (operationMode === "null") {
    operator = divide;
    operationMode = "notNull";
    mode = "num2";
  } else if (operationMode !== "null") {
    calculateResult(divide);
  }
});

decimalButton.addEventListener("click", () => {
  if (mode === "num") {
    if (!num.toString().includes(".") && num.toString().length < 10) {
      num += ".";
      display.textContent = num;
    } else {
      return;
    }
  } else if (mode === "num2") {
    if (!num2.toString().includes(".") && num2.toString().length < 10) {
      num2 += ".";
      display.textContent = num2;
    } else {
      return;
    }
  }
});

prefixButton.addEventListener("click", () => {
  if (display.textContent == num) {
    if (!num.toString().includes("-")) {
      num = -Math.abs(num);
      display.textContent = num;
    } else {
      num = Math.abs(num);
      display.textContent = num;
    }
  } else if (display.textContent == num2) {
    if (!num2.toString().includes("-")) {
      num2 = -Math.abs(num2);
      display.textContent = num2;
    } else {
      num2 = Math.abs(num2);
      display.textContent = num2;
    }
  }
});

equals.addEventListener("click", () => {
  calculateResult();
  operator = null;
  operationMode = "null";
  operationInactive(addButton);
  operationInactive(subtractButton);
  operationInactive(multiplyButton);
  operationInactive(divideButton);
});

// MARKER
backspace.addEventListener("click", () => {
  if (mode === "num") {
    if (num.toString().length > 1) {
      num = num.toString().slice(0, -1);
      num = parseFloat(num);
      display.textContent = num;
    } else if ((num.toString().length = 1)) {
      display.textContent = 0;
      num = null;
    }
  } else if (mode === "num2") {
    if (num2.toString().length > 1) {
      num2 = num2.toString().slice(0, -1);
      num2 = parseFloat(num2);
      display.textContent = num2;
    } else if ((num2.toString().length = 1)) {
      display.textContent = 0;
      num2 = null;
    }
  }
});

clear.addEventListener("click", () => {
  display.textContent = 0;
  num = null;
  num2 = null;
  operator = null;
  operationMode = "null";
  mode = "num";
});

zero.addEventListener("click", () => {
  if (num.toString().length <= 10 && num.toString().includes(".")) {
    zero.value = "0";
  } else if (num[0] == "0") {
    zero.value = "";
  }
});

function operationActive(target) {
  target.style.filter = "brightness(150%)";
}

function operationInactive(target) {
  target.style.filter = "";
}

miscButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.style.filter = "brightness(150%)";
    setTimeout(() => {
      e.target.style.filter = "";
    }, 100);
  });
});

darkButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.style.filter = "brightness(80%)";
    setTimeout(() => {
      e.target.style.filter = "";
    }, 100);
  });
});

// Bug: When deleting single char, if only 0s left it will delete all instead of one-by-one
