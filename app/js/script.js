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

function add(firstNumber, secondNumber) {
  if ((firstNumber + secondNumber) % 1 !== 0) {
    return parseFloat((firstNumber + secondNumber).toFixed(5));
  } else {
    return parseFloat(firstNumber + secondNumber);
  }
}

function subtract(firstNumber, secondNumber) {
  if ((firstNumber - secondNumber) % 1 !== 0) {
    return parseFloat((firstNumber - secondNumber).toFixed(5));
  } else {
    return parseFloat(firstNumber - secondNumber);
  }
}

function multiply(firstNumber, secondNumber) {
  if ((firstNumber * secondNumber) % 1 !== 0) {
    return parseFloat((firstNumber * secondNumber).toFixed(5));
  } else {
    return parseFloat(firstNumber * secondNumber);
  }
}

function divide(firstNumber, secondNumber) {
  if ((firstNumber / secondNumber) % 1 !== 0) {
    return parseFloat((firstNumber / secondNumber).toFixed(5));
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
          num = parseFloat(num);
          display.textContent = num;
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
          num2 = parseFloat(num2);
          display.textContent = num2;
        }
      }
    } else {
      return;
    }
  });
});

// digits.forEach((element) => {
//   element.addEventListener("keyup", (e) => {
//     console.log("success");
//     if (parseFloat(num).toString().length < 10) {
//       if (mode === "num") {
//         if (num === null) {
//           console.log("success2");
//           num = parseFloat(e.target.key.value);
//           display.textContent = num;
//         } else if (num !== null) {
//           console.log("success3");
//           num += e.target.value;
//           num = parseFloat(num);
//           display.textContent = num;
//         }
//       }
//     }

//     if (parseFloat(num2).toString().length < 10) {
//       if (mode === "num2") {
//         if (num2 === null) {
//           num2 = parseFloat(e.target.key.value);
//           display.textContent = num2;
//         } else if (num2 !== null) {
//           num2 += e.target.value;
//           num2 = parseFloat(num2);
//           display.textContent = num2;
//         }
//       }
//     } else {
//       return;
//     }
//   });
// });

document.addEventListener("keydown", (e) => {
  e.preventDefault();
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
    if (!num.toString().includes(".") && num.toString().length < 10) {
      num += ".";
      display.textContent = num;
    } else {
      return;
    }
  } else if (display.textContent == num2) {
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
});

backspace.addEventListener("click", () => {
  if (display.textContent == num) {
    if (num.toString().length > 1) {
      num = num.toString().slice(0, -1);
      num = parseFloat(num);
      display.textContent = num;
    } else if ((num.toString().length = 1)) {
      display.textContent = 0;
      num = null;
    }
  } else if (display.textContent == num2) {
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

// Bug: expected: 5 + 5.5 => received: 5 + 55
// On num2 the decimal disappears, this only happens when num === single char && 1st char of num2 is === 1st char of num
