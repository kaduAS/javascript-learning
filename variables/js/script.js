// LET - Block scoped, can be reassigned (not redeclared)
// Useful when values need to change during runtime

let userAge = 18;
userAge += 1; // User has a birthday, now 19

let isUserOnline = true;
let currentLevel = 5;
let favoriteLanguage = "JavaScript";

console.log(`User is ${userAge} years old and currently online: ${isUserOnline}`);
console.log(`Current level: ${currentLevel}`);
console.log(`Favorite language: ${favoriteLanguage}`);




// CONST - Block scoped, cannot be reassigned or redeclared


const COUNTRY = "Brazil";
const BIRTH_YEAR = 2007;
const PI = 3.14159;
const APP_NAME = "MyApp";

console.log(`User was born in ${BIRTH_YEAR}, lives in ${COUNTRY}, and uses ${APP_NAME}`);



// VAR - Function scoped, can be reassigned and redeclared
// Generally avoided in modern JavaScript due to scope issues


var userScore = 100;
userScore += 20; // Score increased
var userScore = 150; // Re-declared

var isAdmin = false;
var userCity = "São Paulo";
var isLoggedIn = true;

console.log(`Score: ${userScore}, Admin: ${isAdmin}, City: ${userCity}, Logged in: ${isLoggedIn}`);
