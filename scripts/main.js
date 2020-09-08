// logs 'hello' to the console

// alert('hello'); Uncomment later

// Number Buttons <-------------------------->
// Logs the value attribute of an HTML element.

function pushNumber(event) {
  // alert(event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);
  }

// Gets the buttons from HTML and returns a NodeList.

const numbers = document.querySelectorAll('.number');

// Iterates over each item in the NodeList.
// Listens for click event and logs an alert with
// the number of the button clicked to the console.

numbers.forEach(function(button) {
   button.addEventListener('click', pushNumber);
});

// Operator Buttons <-------------------------->
// Logs the value attribute of an HTML element.

function pushOperator(event) {
  // alert(event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);
}

// Gets the buttons from HTML and returns a NodeList.

const operatorButtons = document.querySelectorAll('.operator');

// Iterates over each item in the NodeList.
// Listens for click event and logs an alert with
// the number of the button clicked to the console.

operatorButtons.forEach(function(button) {
   button.addEventListener('click', pushOperator);
});

// Equals Sign Button <-------------------------->
// Logs the value attribute of an HTML element.

const calculation = [];

function calculate(event) {
  // alert(event.target.value);
  let num1 = '';
  let num2 = '';
  let operator;
  let result;

  for(let i = 0; i < calculation.length; i++){
    if(['+', '-', '*', '/'].includes(calculation[i])){
      operator = calculation[i];
    } else if(operator){
        num2 = num2 + calculation[i];
    } else{
      num1 = num1 + calculation[i];
    }
  }
  if(operator === '+'){
    result = parseFloat(num1) + parseFloat(num2);
  } else if(operator === '-'){
    result = parseFloat(num1) - parseFloat(num2);
  } else if(operator === '*'){
    result = parseFloat(num1) * parseFloat(num2);
  } else if(operator === '/'){
    result = parseFloat(num1) / parseFloat(num2);
  }
  alert(result);
}

// Gets the buttons from HTML and returns a NodeList.

const equalSign = document.querySelectorAll('.equal-sign');

// Iterates over each item in the NodeList.
// Listens for click event and logs an alert with
// the number of the button clicked to the console.

equalSign.forEach(function(button) {
   button.addEventListener('click', calculate);
});

// Clear Button
//--------------------------------------------------->


function clearButton(event) {
  // alert(event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);
  }

// Gets the buttons from HTML and returns a NodeList.

const clear = document.querySelectorAll('.clear');

// Iterates over each item in the NodeList.
// Listens for click event and logs an alert with
// the number of the button clicked to the console.

clear.forEach(function(button) {
   button.addEventListener('click', clearButton);
});
