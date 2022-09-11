/* Add two numbers */
function add(num1, num2){
  return num1 + num2;
}
/* subtract two numbers */
function subtract(num1, num2){
  return num1 - num2;
}
/* multiply two numbers */
function multiply(num1, num2){
  return num1 * num2;
}
/* divide two numbers */
function divide(num1, num2){
  return num1 / num2;
}
/* Make the operations */
function operate(num1, operator, num2){
  if(operator === '+'){
    return add(num1, num2);
  }
  else if(operator === '-'){
    return subtract(num1, num2);
  }
  else if(operator === '*'){
    return multiply(num1, num2);
  }
  else if(operator === '/'){
    return divide(num1, num2);
  }
  return num2;
}

const display = document.querySelector('.display p');

const calculator = {
  displayValue: '0',
  num1: null,
  operator: null,
  num2: false,
};

function clear() {
  calculator.displayValue = '0';
  calculator.num2 = null;
  calculator.operator = null;
  calculator.num2 = false;
}       

function updateDisplay() {
  display.value = calculator.displayValue;
}

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (e) => {
const target = e.target;

  if (!target.matches('button')) {
      return;
  }

  if (target.classList.contains('clear')) {
      clear();
      updateDisplay();
      return;
  }

  if (target.classList.contains('delete')) {
      undo();
      return;
  }

  if (target.classList.contains('plusMinus')) {
      plusMinus();
      return;
  }

  if (target.classList.contains('percent')) {
      percentage();
      return;
  }

  if (target.classList.contains('decimal')) {
      decimal(target.value);
      updateDisplay();
      return;
  }

  if (target.classList.contains('operator')) {
      calculate(target.value);
      updateDisplay();
      return;
  }

      displayNumber(target.value);
      updateDisplay();
});

function undo(){
  display.value = display.value.slice(0, -1);
  calculator.displayValue = display.value;
}

function plusMinus(){
  let displayPlusMinus = calculator.displayValue;
  if(displayPlusMinus >= 0){
      display.value = '-' + displayPlusMinus;    
  }
  calculator.displayValue = display.value;
}

function percentage(){
  let displayPercent = calculator.displayValue;
  if(displayPercent != 0){
      display.value = displayPercent / 100;
  }
 calculator.displayValue = display.value;
}

function decimal(dot) {
  if (calculator.secondNumber === true) {
      calculator.displayValue = '0.'
      calculator.secondNumber = false;
      return
  }
  if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
  }
}

function displayNumber(number) {
  let displayValue = calculator.displayValue;
  const secondNumber = calculator.secondNumber;
  
  if (secondNumber === true) {
      calculator.displayValue = number;
      calculator.secondNumber = false;
  }
  else if(displayValue === '0'){
      calculator.displayValue = number;
  }
  else{
      calculator.displayValue = displayValue + number;
  }
}

function calculate(inputOperator) {
  const firstNumber = calculator.firstNumber;
  const displayValue = calculator.displayValue;
  const operator  = calculator.operator;
 
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.secondNumber)  {
      calculator.operator = inputOperator;
      return;
    }

  if (firstNumber == null) {
      calculator.firstNumber = inputValue;

  } else if (operator) {
      const result = operate(operator, firstNumber, inputValue);
      calculator.displayValue = `${parseFloat(result.toFixed(6))}`;
      calculator.firstNumber = result;
  }
  calculator.secondNumber = true;
  calculator.operator = inputOperator;
  console.log(calculator);
}