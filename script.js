// Get the screen (input display)
const screen = document.getElementById('screen');

// Variables
let input = '';
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;
let operatorFilter = false;

// Function to update the screen display
const updateScreen = function() {
    screen.value = `${firstOperand !== null ? firstOperand : ''} ${operator !== null ? operator : ''} ${input}`;
};

// Digit button event listener
document.querySelectorAll('.digit').forEach(button => {
    button.addEventListener('click', () => {
        input += button.textContent;
        operatorFilter = false;
        updateScreen();
    });
});

// Decimal point listener
document.getElementById('dot').addEventListener('click', () => {
    if (!input.includes('.')) {
        input += '.';
        operatorFilter = false;
        updateScreen();
    }
});

// Operator button listener
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        handleOperator(button.textContent);
    });
});

// Function to handle operator logic
const handleOperator = (op) => {
    if (operatorFilter) {
        operator = op; // Change the operator if the last input was an operator
        updateScreen();
        return;
    }
    
    if (input === '' && result !== null) {
        firstOperand = result;
    } else if (input === '') {
        return;
    } else if (firstOperand === null) {
        firstOperand = parseFloat(input);
    } else if (operator) {
        secondOperand = parseFloat(input);
        firstOperand = calculate(firstOperand, secondOperand, operator);
    }

    operator = op;
    input = '';
    operatorFilter = true;
    updateScreen();
};

// Equals button listener
document.getElementById('equals').addEventListener('click', () => {
    if (input === '' || firstOperand === null || !operator) return;
    secondOperand = parseFloat(input);
    
    if (operator === '/' && secondOperand === 0) {
        screen.value = "PETER, YOU'VE LOST THE MATHS!";
        return;
    }
    
    result = calculate(firstOperand, secondOperand, operator);
    screen.value = `${firstOperand} ${operator} ${secondOperand} = ${result}`;
    
    input = '';
    firstOperand = result;
    secondOperand = null;
    operator = null;
    operatorFilter = false;
});

// Clear button listener
document.getElementById('clear').addEventListener('click', () => {
    input = '';
    operator = null;
    firstOperand = null;
    secondOperand = null;
    result = null;
    operatorFilter = false;
    screen.value = '';
});

// Backspace button listener
document.getElementById('backspace').addEventListener('click', () => {
    input = input.slice(0, -1);
    updateScreen();
});

// Function to perform calculations
const calculate = (a, b, op) => {
    if (op === '+') return roundTo7(a + b);
    if (op === '-') return roundTo7(a - b);
    if (op === 'x') return roundTo7(a * b);
    if (op === '/') return roundTo7(a / b);
};

// Rounds numbers to 7 decimal places
const roundTo7 = (num) => Math.round(num * 1e7) / 1e7;

// Keyboard event listener
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        input += key;
        operatorFilter = false;
    } else if (key === '.' && !input.includes('.')) {
        input += '.';
        operatorFilter = false;
    } else if (['+', '-', '*', '/'].includes(key)) {
        handleOperator(key === '*' ? 'x' : key);
    } else if (key === 'Enter' || key === '=') {
        document.getElementById('equals').click();
    } else if (key === 'Backspace') {
        input = input.slice(0, -1);
    } else if (key === 'Escape') {
        document.getElementById('clear').click();
    }

    updateScreen();
});


// MY NOTES

// - Functions all work standalone in jest. ✅
// - Create basic css and html structure. ✅
// - when 1, plus +, then 2, then = are pressed, it completes the calculation and shows it on the screen (expected result 3) ✅
// when 5, plus -, then 2, then = are pressed, it completes the calculation and shows it on the screen (expected result 3) ✅


//   Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
// - add
// - subtract
// - multiply
// - divide

// A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables, one for each part of the operation. You’ll use these variables to update your display later.

// 1. Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.
//     Create a basic HTML calculator with buttons for each digit and operator (including =).
//         Don’t worry about making them functional just yet.
//         There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
//         Add a “clear” button.
// 2. Create the functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable for use in the next step.
//     Make the calculator work! You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.
//         You should already have the code that can populate the display, so once operate has been called, update the display with the result of the operation.
//         This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
// 3. Gotchas: watch out for and fix these bugs if they show up in your code:
        
//     Your calculator should not evaluate more than a single pair of numbers at a time. Example: you enter a number (12), followed by an operator button (+), a second number button (7), and a second operator button (-). Your calculator should then do the following: first, evaluate the initial pair of numbers (12 + 7), then display the result of that calculation (19). Finally, use that result (19) as the first number in a new calculation, along with the next operator (-). An example of the behavior we’re looking for can be seen in this student’s calculator live preview.
    
//     You should round answers with long decimals so that they don’t overflow the display.
    
//     Pressing = before entering all of the numbers or an operator could cause problems!
    
//     Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”.
    
//     Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
    
//     Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user. Example: you enter a number (2), followed by an operator button (+). You press the operator button (+) a second consecutive time. Your calculator should not evaluate this as (2 + 2) and should not display the result (4). If consecutive operator buttons are pressed, your calculator should not run any evaluations, it should only take the last operator entered to be used for the next operation.

// 4. Extra credit

//     Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though, like: 12.3.56.5. Disable the . button if there’s already a decimal separator in the display.
//     Add a “backspace” button, so the user can undo their last input if they click the wrong number.
//     Add keyboard support!


