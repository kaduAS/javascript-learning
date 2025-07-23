// FOR Loop

for (let i = 1; i <= 5; i++) {
  console.log(`For Loop - Count: ${i}`);
}

// WHILE Loop

let count = 1;
while (count <= 5) {
  console.log(`While Loop - Count: ${count}`);
  count++;
}

// DO-WHILE Loop

let num = 1;
do {
  console.log(`Do-While Loop - Count: ${num}`);
  num++;
} while (num <= 5);

// FOR-OF Loop (Iterating over an array)

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(`For-Of Loop - Fruit: ${fruit}`);
}

// FOR-IN Loop (Iterating over object properties)

const user = {
  name: "Carlos",
  age: 17,
  country: "Brazil"
};

for (const key in user) {
  console.log(`For-In Loop - ${key}: ${user[key]}`);
}
