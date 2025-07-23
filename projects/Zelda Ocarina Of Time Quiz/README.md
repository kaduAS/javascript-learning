## Projects

### Zelda: Ocarina of Time – Web Quiz

An interactive and responsive quiz application designed to test your knowledge of *The Legend of Zelda: Ocarina of Time*, one of the most iconic games in gaming history and also my favorite. This project features a clean Zelda-themed UI, instant feedback, and a curated set of questions focused on Hyrule, Link, and the game’s legendary characters and locations.

**Core JavaScript Concepts Applied:**

- DOM manipulation with `document.getElementById` and `querySelector`  
- Event handling using `addEventListener` for form submission  
- Objects to store correct answers and manage quiz logic  
- Loops (`for...in`) to iterate through questions and evaluate responses  
- Conditionals (`if` and `switch`) for score calculation and displaying personalized feedback  
- Functions to modularize code and handle UI updates dynamically  
- Use of `DOMContentLoaded` event to ensure scripts run after page load  

**How I used JavaScript concepts in the Zelda Quiz**

- **`document.addEventListener('DOMContentLoaded', ...)`**  
  Ensures the script runs after the HTML is fully loaded, preventing errors when accessing DOM elements.

- **DOM Selection (`getElementById`, `querySelector`)**  
  Selects form and message elements to interact with user input and display results.

- **Event Handling (`addEventListener` for `submit`)**  
  Captures form submission to process answers without reloading the page.

- **Objects (`answers`)**  
  Stores correct answers for efficient lookup during scoring.

- **Loops (`for...in`)**  
  Iterates over all questions to check user responses.

- **Conditionals (`if`, `switch`)**  
  Compares answers and decides which feedback message to display based on the score.

- **Functions (`showMessage`)**  
  Handles showing result messages with a smooth fade-in effect for better UX.

---

Thank you for visiting! Feel free to browse the code, share feedback, or connect to collaborate.

