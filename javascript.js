let numOne = 0;
console.log("Nadun");
let displayText = "";
let num = Number(displayText);
let operator = ".";

const allClear = document.querySelector("#allclear");
const display = document.querySelector(".display");
const lb1 = document.querySelector("#one");
const lb2 = document.querySelector("#two");
const lb3 = document.querySelector("#three");
const lb4 = document.querySelector("#four");
const lb5 = document.querySelector("#five");
const lb6 = document.querySelector("#six");
const lb7 = document.querySelector("#seven");
const lb8 = document.querySelector("#eight");
const lb9 = document.querySelector("#nine");
const lb0 = document.querySelector("#zero");
const clear = document.querySelector(".clear");
const decimal = document.querySelector("#decimal");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equal");

allClear.addEventListener("click", () => {
  displayText = "";
  num = Number(displayText);
  display.textContent = "";
  console.log("Cleared");
});

lb1.addEventListener("click", () => {
  displayText += "1";
  num = Number(displayText);
  display.textContent = displayText;
});

lb2.addEventListener("click", () => {
  displayText += "2";
  num = Number(displayText);
  display.textContent = displayText;
});

lb3.addEventListener("click", () => {
  displayText += "3";
  num = Number(displayText);
  display.textContent = displayText;
});

lb4.addEventListener("click", () => {
  displayText += "4";
  num = Number(displayText);
  display.textContent = displayText;
});

lb5.addEventListener("click", () => {
  displayText += "5";
  num = Number(displayText);
  display.textContent = displayText;
});

lb6.addEventListener("click", () => {
  displayText += "6";
  num = Number(displayText);
  display.textContent = displayText;
});

lb7.addEventListener("click", () => {
  displayText += "7";
  num = Number(displayText);
  display.textContent = displayText;
});

lb8.addEventListener("click", () => {
  displayText += "8";
  num = Number(displayText);
  display.textContent = displayText;
});

lb9.addEventListener("click", () => {
  displayText += "9";
  num = Number(displayText);
  display.textContent = displayText;
});

lb0.addEventListener("click", () => {
  displayText += "0";
  num = Number(displayText);
  display.textContent = displayText;
});

clear.addEventListener("click", () => {
  displayText = displayText.slice(0, -1);
  num = Number(displayText);
  display.textContent = displayText;
});

decimal.addEventListener("click", () => {
  if (displayText.includes(".") == true) {
    prompt("Cannot add a decimal point");
  } else {
    displayText += ".";
    num = Number(displayText);
    display.textContent = displayText;
  }
});

clear.addEventListener("click", () => {
  displayText = displayText.slice(0, -1);
  num = Number(displayText);
  display.textContent = displayText;
});

plus.addEventListener("click", () => {
  numOne = num;
  displayText = "";
  num = Number(displayText);
  operator = "+";
  console.log("plus");
  console.log(num);
  display.textContent = "+";
});

minus.addEventListener("click", () => {
  numOne = num;
  displayText = "";
  num = Number(displayText);
  operator = "-";
  console.log("minus");
  console.log(num);
  display.textContent = "-";
});

multiply.addEventListener("click", () => {
  numOne = num;
  displayText = "";
  num = Number(displayText);
  operator = "*";
  console.log("multiply");
  console.log(num);
  display.textContent = "*";
});

divide.addEventListener("click", () => {
  numOne = num;
  displayText = "";
  num = Number(displayText);
  operator = "/";
  console.log("divide");
  console.log(num);
  display.textContent = "/";
});

equals.addEventListener("click", () => {
  console.log("equals");
  if (operator == "+") {
    display.textContent = "";
    display.textContent = (numOne + num).toString();
    num = numOne + num;
  }
  if (operator == "-") {
    display.textContent = "";
    display.textContent = (numOne - num).toString();
    num = numOne - num;
  }
  if (operator == "*") {
    display.textContent = "";
    display.textContent = (numOne * num).toString();
    num = numOne * num;
  }
  if (operator == "/") {
    display.textContent = "";
    display.textContent = (numOne / num).toString();
    num = numOne / num;
  }
});
