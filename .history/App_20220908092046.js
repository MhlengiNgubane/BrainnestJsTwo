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
    } else if(op === 'x') {
        return y * z;
    } else if(op === '^') {
        return y ** z;
    } else if(op === '÷') {
        if(z === 0) {
            return 'undefined';
        } else {
        return y / z;
        }
    }
}

console.log(operate(2, 2,x))