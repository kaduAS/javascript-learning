## Projects

### Zelda: A Link to the Past – Inventory System

An interactive and dynamic inventory management application inspired by *The Legend of Zelda: A Link to the Past*. This project allows users to add, categorize, and manage items with Zelda-themed icons, offering a visually immersive experience. The UI is styled to match the dark, mysterious atmosphere of Hyrule’s adventures.

**Core JavaScript Concepts Applied:**

- **Local Storage (`localStorage`)**  
  Persists inventory data so that items remain saved even after refreshing or closing the browser.

- **DOM Manipulation (`getElementById`, `createElement`)**  
  Dynamically creates and updates inventory items in the list with icons and interactive buttons.

- **Event Handling (`addEventListener`)**  
  Handles form submissions to add items and buttons to remove them in real time.

- **Objects (`icons`)**  
  Maps item types (weapon, shield, potion, etc.) to corresponding Zelda-themed icons.

- **Array Methods (`push`, `splice`, `forEach`)**  
  Manages the inventory list by adding, iterating, and removing items efficiently.

- **Conditionals (`if`)**  
  Ensures items are not added without a name and displays a default icon when the type is unknown.

- **Functions (`saveInventory`, `renderInventory`)**  
  Organizes code into reusable pieces for saving and rendering the inventory.

---

### **How I used JavaScript concepts in the Zelda Inventory**

- **Local Storage**  
  Used `JSON.stringify` and `JSON.parse` to save and retrieve the inventory, keeping data persistent across sessions.

- **DOM Creation and Updates**  
  Created `<li>` elements dynamically for each item and appended them to the inventory list with the correct icon.

- **Event Listeners**  
  Attached a `submit` listener to handle adding new items and `click` listeners on remove buttons for deletion.

- **Icons Mapping**  
  Used an `icons` object to map each item type to a Zelda icon (🗡️, 🛡️, 🧪, etc.), making the UI more thematic.

- **Array Management**  
  Used `push` to add new items and `splice` to remove them from the inventory array efficiently.

---

Thank you for visiting! 
Feel free to explore the code, suggest improvements, or collaborate to expand this project with more Zelda-inspired features.
