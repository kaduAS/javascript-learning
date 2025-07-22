// array = a variable like structure that can hold more than 1 value

// Creating an array of favorite games
let favoriteGames = ["Zelda", "Mario", "Metroid", "Pokémon"];

console.log("Initial games:", favoriteGames);

// Accessing elements by index
console.log("First game:", favoriteGames[0]);
console.log("Last game:", favoriteGames[favoriteGames.length - 1]);

// Modifying values
favoriteGames[1] = "Donkey Kong"; // Replace "Mario" with "Donkey Kong"

// Adding elements
favoriteGames.push("Kirby");       // Adds to the end
favoriteGames.unshift("F-Zero");   // Adds to the beginning

// Removing elements
favoriteGames.pop();               // Removes last
favoriteGames.shift();             // Removes first

// Checking length
console.log("Total games:", favoriteGames.length);

// Looping through the array
console.log("Games List:");
for (let i = 0; i < favoriteGames.length; i++) {
  console.log(`- ${favoriteGames[i]}`);
}
