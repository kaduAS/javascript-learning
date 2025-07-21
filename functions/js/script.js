// Function Declarations


function greet(name) {
  console.log(`Hello, ${name}!`);
}

function sum(a, b) {
  return a + b;
}

function getAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

// Function Expressions


const multiply = function (x, y) {
  return x * y;
};


// Arrow Functions


const divide = (a, b) => a / b;
const sayGoodbye = () => console.log("Goodbye!");


// Execution / Outputs


greet("Carlos");
console.log("Sum: " + sum(5, 7));
console.log("Age: " + getAge(2006));
console.log("Multiplication: " + multiply(3, 4));
console.log("Division: " + divide(10, 2));
sayGoodbye();
