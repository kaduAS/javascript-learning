# JavaScript Conditionals

This project demonstrates how to use conditional statements in JavaScript to control the flow of logic. It includes examples of `if`, `else if`, `else`, `switch`, and ternary operators. These tools are essential for making decisions in your code based on data, user input, or other conditions.

---

## Project Structure

conditionals/
│
├── index.html // Main HTML file linking CSS and JS
├── style.css // Optional styling
└── script.js // JavaScript file with condition examples


---

## Features

- Covers all major conditional structures:
  - `if`, `else if`, `else`
  - `switch`, `case`, `default`
  - Ternary operator (`? :`)
- Demonstrates:
  - Comparison operators (`===`, `!==`, `>`, `<`, `>=`, `<=`)
  - Logical operators (`&&`, `||`, `!`)
  - Decision-based code examples such as:
    - Age categorization
    - Score/grade evaluation
    - Discount logic
    - Day of the week detection
    - Login status display

---

## How to Run

1. Clone or download the repository.  
2. Open the `index.html` file in any modern web browser.  
3. Open the browser console (`F12` or right-click → Inspect → Console) to see the outputs from `script.js`.  
4. Modify values inside `script.js` to test and explore how conditionals work.

---

## Code Highlights

### If / Else If / Else

```js
const age = 20;

if (age < 13) {
  console.log("You are a child.");
} else if (age < 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}
