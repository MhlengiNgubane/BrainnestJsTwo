let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttons = document.querySelectorAll('button');

function operate(y, z, op) {
    if(op === '+') {
        return y + z;
    } else if(op === '-') {
        return y - z;
    } else if(op === '*') {
        return  * y;
    } else if(op === '/') {
        if(y === 0) {
            return 'lmao';
        } else {
        return x / y;
        }
    }
}