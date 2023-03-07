console.log("Nadun");
let displayText = "";
let num = Number(displayText);

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

allClear.addEventListener("click", () => {
  displayText = "";
  num = Number(displayText);
  display.textContent = "";
  console.log("Cleared");
});

lb1.addEventListener("click", () => {
  displayText += "1";
  number = Number(displayText);
  display.textContent = displayText;
});

lb2.addEventListener("click", () => {
  displayText += "2";
  number = Number(displayText);
  display.textContent = displayText;
});

lb3.addEventListener("click", () => {
  displayText += "3";
  number = Number(displayText);
  display.textContent = displayText;
});

lb4.addEventListener("click", () => {
  displayText += "4";
  number = Number(displayText);
  display.textContent = displayText;
});

lb5.addEventListener("click", () => {
  displayText += "5";
  number = Number(displayText);
  display.textContent = displayText;
});

lb6.addEventListener("click", () => {
  displayText += "6";
  number = Number(displayText);
  display.textContent = displayText;
});

lb7.addEventListener("click", () => {
  displayText += "7";
  number = Number(displayText);
  display.textContent = displayText;
});

lb8.addEventListener("click", () => {
  displayText += "8";
  number = Number(displayText);
  display.textContent = displayText;
});

lb9.addEventListener("click", () => {
  displayText += "9";
  number = Number(displayText);
  display.textContent = displayText;
});

lb0.addEventListener("click", () => {
  displayText += "0";
  number = Number(displayText);
  display.textContent = displayText;
});

clear.addEventListener("click", () => {
  displayText = displayText.slice(0, -1);
  number = Number(displayText);
  display.textContent = displayText;
});
