// screen is the text box containing the calculation

const screen = document.getElementById('screen');

// Variables (inputs) are declared and set to null because they are empty

let input = '';
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;

// Update the screen (text box containing the calculation) with the inputs
// updateScreen is a function that updates the screen with the inputs

const updateScreen = function() {
  screen.value = `${firstOperand !== null ? firstOperand : ''} ${operator !== null ? operator : ''} ${input}`;
};

// button with listener for digits 0-9
// when digit is clicked, it is added to the input and the screen is updated

document.querySelectorAll('.digit').forEach(button => {
  button.addEventListener('click', () => {
    input += button.textContent;
    updateScreen();
  });
});

// button with listener for different operators (+, -, x, /)


document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    if (input === '' && result !== null) { // if input is empty and result is not empty
      firstOperand = result; // then firstOperand is set to result
    } else if (input === '') { // if input is empty
      return;  // then return the function
    } else if (firstOperand === null) { // if firstOperand is empty
      firstOperand = parseFloat(input); // then firstOperand is set to the input
    } else if (operator) { // if operator is not empty
      secondOperand = parseFloat(input); // then secondOperand is set to the input
      if (operator === '+') { // if operator is +
        firstOperand = add(firstOperand, secondOperand); // then firstOperand is set to the result of the add function
      } else if (operator === '-') { // if operator is -
        firstOperand = subtract(firstOperand, secondOperand); // then firstOperand is set to the result of the subtract function
      } else if (operator === 'x') { // if operator is x
        firstOperand = multiply(firstOperand, secondOperand); // then firstOperand is set to the result of the multiply function
      } else if (operator === '/') { // if operator is /
        firstOperand = divide(firstOperand, secondOperand); // then firstOperand is set to result
      }
    }
    operator = button.textContent; // operator is set to the button text content
    input = ''; // input is set to empty
    updateScreen(); // run the updateScreen function
  });
});

// button with listener for equals 

document.getElementById('equals').addEventListener('click', () => { // when equals button is clicked
  if (input === '' || firstOperand === null || !operator) return; // if input is empty or firstOperand is empty or operator is empty, then return the function
  secondOperand = parseFloat(input); // secondOperand is set to the input
  if (operator === '+') { // if operator is +
    result = add(firstOperand, secondOperand); // result is set to the result of the add function
  } else if (operator === '-') { // if operator is -
    result = subtract(firstOperand, secondOperand); // result is set to the result of the subtract function
  } else if (operator === 'x') { // if operator is x
    result = multiply(firstOperand, secondOperand); //  result is set to the result of the multiply function
  } else if (operator === '/') { // if operator is / and
    if (secondOperand === 0) { // if secondOperand is 0
      screen.value = 'PETER, YOU\'VE LOST THE MATHS!'; // then display this 'snarky' message
      return; // and return the function
    }
    result = divide(firstOperand, secondOperand); // result is set to the result of the divide function
  }
  screen.value = `${firstOperand} ${operator} ${secondOperand} = ${result}`; // display the result
  input = ''; // input is set to empty
  firstOperand = result; // firstOperand is set to result
  secondOperand = null; // secondOperand is set to empty
  operator = null; // operator is set to empty
});

// button with listener for clear

document.getElementById('clear').addEventListener('click', () => { // when clear button is clicked
  input = ''; // all variables are set to empty
  operator = 
  firstOperand = null;  
  secondOperand = null;
  result = null;
  screen.value = '';
})

// BASE FUNCTIONS

const roundTo7 = function(num) {
  return Math.round(num * 1e7) / 1e7;
};

const add = function(a, b) {
  return roundTo7(a + b);
};

const subtract = function(a, b) {
  return roundTo7(a - b);
};

const multiply = function(a, b) {
  return roundTo7(a * b);
};

const divide = function(a, b) {
  return roundTo7(a / b);
};

module.exports = {
  add,
  subtract,
  multiply,
  divide
};

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
