# JavaScript Function Types

This project demonstrates the different ways to define and use functions in JavaScript. It includes examples of **function declarations**, **function expressions**, and **arrow functions**, helping new developers understand their syntax, behavior, and use cases.

---

## Project Structure

functions/
│
├── index.html // Main HTML file linking CSS and JS
├── style.css // Stylesheet
└── script.js // JavaScript file demonstrating function types

---

## Features

- Covers key types of functions:
  - **Function Declaration** — Traditional, hoisted, and versatile
  - **Function Expression** — Stored in a variable, not hoisted
  - **Arrow Function** — Shorter syntax, does not bind its own `this`
- Demonstrates:
  - Passing arguments and using parameters
  - Returning values from functions
  - Console outputs for testing and feedback

---

## How to Run

1. Clone or download the repository.  
2. Open the `index.html` file in a modern web browser.  
3. Open the browser console (`F12` or right-click → Inspect → Console) to view function outputs.  
4. Read the `script.js` file to explore the code and function examples.

---

## Code Highlights

### Function Declaration

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}
