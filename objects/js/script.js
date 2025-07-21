// OBJECTS — Used to group related data using key-value pairs
// Let's create a character object for Link from Zelda

const link = {
  name: "Link",
  age: 17,
  race: "Hylian",
  isHero: true,
  location: "Kakariko Village",
  weapon: "Master Sword",
  inventory: ["Hylian Shield", "Bow", "Bombs"],
  stats: {
    health: 100,
    stamina: 80,
    rupees: 250
  }
};

console.log("Link's Character Info:");
console.log(link);

// Accessing object properties
console.log(`Name: ${link.name}`);
console.log(`Location: ${link.location}`);
console.log(`Weapon: ${link.weapon}`);
console.log(`Inventory: ${link.inventory.join(", ")}`);
console.log(`Health: ${link.stats.health}`);

// Updating values
link.stats.health -= 30; // Took damage
link.stats.rupees += 100; // Collected more rupees
link.location = "Hyrule Field";

console.log("\n After some gameplay...");
console.log(`Health: ${link.stats.health}`);
console.log(`Rupees: ${link.stats.rupees}`);
console.log(`New Location: ${link.location}`);

// Adding a new property
link.hasTriforce = true;
console.log(`Triforce Possession: ${link.hasTriforce}`);

// Deleting a property
delete link.age;
console.log("\n Removed 'age' property:");
console.log(link);

// Looping through properties
console.log("\n Looping through Link's main properties:");
for (let key in link) {
  console.log(`${key}:`, link[key]);
}
