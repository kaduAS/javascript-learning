// CONDITIONALS IN JAVASCRIPT

// 1. If / Else If / Else Example
const age = 20;

if (age < 13) {
  console.log("You are a child.");
} else if (age < 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}

// 2. Comparison Operators
const score = 85;

if (score === 100) {
  console.log("Perfect score!");
} else if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 3. Logical Operators
const isMember = true;
const hasDiscount = false;

if (isMember && hasDiscount) {
  console.log("You get a full discount.");
} else if (isMember || hasDiscount) {
  console.log("You get a partial discount.");
} else {
  console.log("No discounts available.");
}

// 4. Switch Statement Example
const day = 5;

switch (day) {
  case 1:
    console.log("Today is Monday.");
    break;
  case 2:
    console.log("Today is Tuesday.");
    break;
  case 3:
    console.log("Today is Wednesday.");
    break;
  case 4:
    console.log("Today is Thursday.");
    break;
  case 5:
    console.log("Today is Friday.");
    break;
  case 6:
    console.log("Today is Saturday.");
    break;
  case 7:
    console.log("Today is Sunday.");
    break;
  default:
    console.log("Invalid day.");
}

// 5. Ternary Operator
const isLoggedIn = true;
const welcomeMessage = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(welcomeMessage);


