// obj w e/t we need to construct a valid expression
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

const inputDigit = (digit) => {
    //////////////////////// is this necessary? 
    const {displayValue, waitingForSecondOperand} = calculator;
    // overwrite 'displayValue' if current value is '0'
    // otherwise, append to it
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    console.log(calculator);
}

const inputDecimal = (dot) => {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0';
        calculator.waitingForSecondOperand = false;
        return;
    }

    // if 'displayValue' property does not contain decimal
    if (!calculator.displayValue.includes(dot)) {
        // append decimal
        calculator.displayValue += dot;
    }
}

const handleOperator = (nextOperator) => {
    // destructure the properties on the calculator obj
    const {firstOperand, displayValue, operator} = calculator;
    // 'parsefloat' converys the str contents of displayValue to a float
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        console.log(calculator);
        return
    }

    // verify 'firstOperand' is null and 'inputValue' is not Nan
    if (firstOperand === null && !isNaN(inputValue)) {
        // update firstOperand
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
}

const calculate = (firstOperand, secondOperand, operator) => {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

const resetCalculator = () => {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}

const updateDisplay = () => {
    // select element w class 'calculator-screen'
    const display = document.querySelector('.calculator-screen');
    // update value of elements with contents of 'displayValue'
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // access clicked 
    // equivalent to const target = event.target;
    const {target} = event;
    const {value} = target;

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            handleOperator(value);
            break;
        case '.':
            inputDecimal(value);
            break;
        case 'all-clear':
            resetCalculator();
            break;
        default:
            // check if key is an int
            if(Number.isInteger(parseFloat(value))) {
                inputDigit(value);
            }
    }

    updateDisplay();
})