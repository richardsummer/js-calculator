// logs 'hello' to the console

// alert('hello'); Uncomment later

// Number Buttons <-------------------------->
// Logs the value attribute of an HTML element.

function pushNumber(event) {
  alert(event.target.value);
  }

// Gets the buttons from HTML and returns a NodeList.

const buttons = document.querySelectorAll('.number');

// Iterates over each item in the NodeList.
// Listens for click event and logs an alert with
// the number of the button clicked to the console.

buttons.forEach(function(button) {
   button.addEventListener('click', pushNumber);
});

// Operator Buttons <-------------------------->
// Logs the value attribute of an HTML element.

function pushOperator(event) {
  alert(event.target.value);
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

function calculate(event) {
  alert(event.target.value);
}

// Gets the buttons from HTML and returns a NodeList.

const equalSign = document.querySelectorAll('.equal-sign');

// Iterates over each item in the NodeList.
// Listens for click event and logs an alert with
// the number of the button clicked to the console.

equalSign.forEach(function(button) {
   button.addEventListener('click', calculate);
});



const calculation = [];

Array.prototype.push(buttons);
