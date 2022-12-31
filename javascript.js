function add(num1,num2){
    return num1 + num2
}

function minus(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(num1,num2,operator1){
    let result = 0;
    if(operator1=="+"){
        result = add(num1,num2)
    }
    else if(operator1=="-"){
        result = minus(num1,num2);
    }
    else if(operator1=='*'){
        result = multiply(num1,num2)
    }
    else{
        result = divide(num1,num2)
    }
    return result;
}

let numberString = "";
let number = Number(numberString);
let operator = "";
const display = document.querySelector('.display');

function populatedisplay(){
    display.textContent = numberString;
}




const lb1 = document.querySelector('#l1');
const lb2 = document.querySelector('#l2');
const lb3 = document.querySelector('#l3');
const lb4 = document.querySelector('#l4');
const lb5 = document.querySelector('#l5');
const lb6 = document.querySelector('#l6');
const lb7 = document.querySelector('#l7');
const lb8 = document.querySelector('#l8');
const lb9 = document.querySelector('#l9');
const lb0 = document.querySelector('#l0');
const lbdecimal = document.querySelector('#ldecimal');
const lbequal = document.querySelector('#lequal');
const rbplus = document.querySelector('#rplus');
const rbminus = document.querySelector('#rminus');
const rbmultiply = document.querySelector('#rmultiply');
const rbdivide = document.querySelector('#rdivide');
const rbclear = document.querySelector('#AC');



rbclear.addEventListener('click', () => {
    numberString = ""
    number = Number(numberString);
    populatedisplay()
})

lb1.addEventListener('click', () => {
    numberString += "1";
    number = Number(numberString);
    populatedisplay();
})

lb2.addEventListener('click', () => {
    numberString += "2";
    number = Number(numberString);
    populatedisplay();
})

lb3.addEventListener('click', () => {
    numberString += "3";
    number = Number(numberString);
    populatedisplay();
})

lb4.addEventListener('click', () => {
    numberString += "4";
    number = Number(numberString);
    populatedisplay();
})

lb5.addEventListener('click', () => {
    numberString += "5";
    number = Number(numberString);
    populatedisplay();
})

lb6.addEventListener('click', () => {
    numberString += "6";
    number = Number(numberString);
    populatedisplay();
})

lb7.addEventListener('click', () => {
    numberString += "7";
    number = Number(numberString);
    populatedisplay();
})

lb8.addEventListener('click', () => {
    numberString += "8";
    number = Number(numberString);
    populatedisplay();
})

lb9.addEventListener('click', () => {
    numberString += "9";
    number = Number(numberString);
    populatedisplay();
})

lb0.addEventListener('click', () => {
    numberString += "0";
    number = Number(numberString);
    populatedisplay();
})

lbdecimal.addEventListener('click', () => {
    numberString += ".";
    number = Number(numberString);
    populatedisplay();
})


