# JavaScript Variable Types

This project demonstrates the basic usage of JavaScript variable declarations using `let`, `const`, and `var`. It provides examples to help new developers understand the differences between these keywords, how to declare variables, update them, and best practices.

---

## Project Structure

variables/
│
├── index.html # Main HTML file linking CSS and JS
├── style.css # Stylesheet
└── script.js # JavaScript file demonstrating variables and simple logic

---

## Features

- Demonstrates variable declaration using:
  - `let` — block-scoped, re-assignable, not re-declarable in the same scope
  - `const` — block-scoped, immutable after declaration
  - `var` — function-scoped, re-assignable and re-declarable (legacy use)
- Simple calculations, such as computing age from a birth year
- Console output showcasing variable values

---

## How to Run

1. Clone or download the repository.
2. Open the `index.html` file in a modern web browser.
3. Open the browser console (F12 or right-click → Inspect → Console) to see the JavaScript output.
4. The page also displays some key info on the screen.

---

## Code Highlights

### Variables

```js
let userAge = 18;          // Can be updated but not re-declared in same scope
const BIRTH_YEAR = 2006;   // Cannot be changed after declaration
var userScore = 100;       // Function-scoped, can be re-declared (legacy)
