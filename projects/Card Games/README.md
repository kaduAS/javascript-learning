## Projects

### My Favorite Games – Search Feature

A simple yet functional webpage that displays a list of favorite games with a clean, organized layout.  
This project started as a CSS practice activity and was later enhanced with a JavaScript-powered search bar, allowing users to dynamically filter games by name.

**Core JavaScript Concepts Applied:**

- **DOM Selection (`getElementById`, `querySelectorAll`)**  
  Accesses the search input and the list of games to manipulate visibility based on search text.

- **Event Handling (`addEventListener`)**  
  Listens for the `input` event to update the list of visible games in real time as the user types.

- **String Methods (`toLowerCase`, `includes`)**  
  Converts search queries and game titles to lowercase for case-insensitive filtering.

- **Loops (`forEach`)**  
  Iterates through each game item to check if it matches the search query and shows or hides it accordingly.

- **Conditionals (`if`)**  
  Decides whether each game should be displayed or hidden based on the user’s search text.

---

### **How I used JavaScript concepts in My Favorite Games**

- **DOM Access**  
  Used `document.getElementById` to get the search input and `querySelectorAll` to get all game titles for filtering.

- **Event Listener**  
  Added an `input` event listener to the search bar to trigger filtering as the user types.

- **Filtering Logic**  
  Converted both the search text and game names to lowercase, using `includes` to check matches.

- **Dynamic Display**  
  Used conditional logic to set `display: none` for non-matching games and keep matching ones visible.

---

Thank you for visiting!  
Feel free to explore the code, suggest improvements, or collaborate to expand this project with additional interactivity.
