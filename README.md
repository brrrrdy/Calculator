# Calculator

https://brrrrdy.github.io/Calculator

![Calculator screenshot](https://tomalvarez.xyz/assets/scrn_calculator-CLjjlMTM.webp)

## REQUIREMENTS

- Functions for add, subtract, multiply, and divide
- Display updates correctly on digit and operator input
- Chained calculations — result of one operation becomes the first operand of the next
- Decimal input support
- Backspace button
- Keyboard support
- Graceful divide-by-zero handling
- Consecutive operator presses handled correctly
- Long decimal results rounded to prevent display overflow
- Clear button resets all state

## ABOUT

A browser-based calculator built as the final project of The Odin Project Foundations curriculum, combining everything learned so far: DOM manipulation, event handling, andapplication logic in vanilla JavaScript.

The core challenge was managing calculator state correctly — storing operands and operators, chaining calculations so each result feeds into the next operation, and handling edge cases like consecutive operator presses, divide-by-zero, and overly long decimals.

All core functions were tested independently using Jest before being wired to the UI.

A dynamic font-size solution handles display overflow when input exceeds a certain length, keeping the interface clean regardless of the numbers involved.

## BUILT WITH

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
