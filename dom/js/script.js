console.log("JavaScript loaded and DOM accessed!");

// === DOM SELECTION ===
// Select elements from the page to work with them
const heading = document.querySelector("h1");           // Select the first <h1> element
const note = document.querySelector(".note");            // Select the element with class "note"
const allParagraphs = document.querySelectorAll("p");    // Select all <p> elements (returns a NodeList)
const container = document.querySelector(".container");  // Select the container div

// Log the selected elements to the console for inspection
console.log("Selected heading:", heading);
console.log("All paragraphs:", allParagraphs);
console.log("Note element:", note);

// === DOM MANIPULATION ===
// Change text content and styles dynamically
heading.textContent = "DOM Manipulation!";                // Change heading text
note.style.backgroundColor = "#2e2e3e";                   // Change note background color
note.style.borderLeftColor = "#dff18f";                   // Change note left border color

// Loop through each paragraph and log its original text content
allParagraphs.forEach((p, index) => {
  console.log(`Original text of paragraph ${index + 1}:`, p.textContent);
});

// === CREATE NEW ELEMENTS ===
// Create a new paragraph element
const newMessage = document.createElement("p");
newMessage.textContent = "This paragraph was created with JavaScript!";
newMessage.style.color = "#dff18f";                        // Style the new paragraph text color

// Append the new paragraph to the container div
container.appendChild(newMessage);

// Log the newly created paragraph element
console.log("New paragraph created:", newMessage);

// === CREATE BUTTON AND ADD EVENT LISTENER ===
// Create a new button element
const button = document.createElement("button");
button.textContent = "Click Me!";
button.classList.add("dom-button");                        // Add a CSS class for styling

// Append the button to the container div
container.appendChild(button);

// Log the created button element
console.log("Button created:", button);

// Add a click event listener to the button
button.addEventListener("click", () => {
  alert("Button clicked!");                                // Show alert when button is clicked
  button.textContent = "Clicked!";                         // Change button text after click
  console.log("Button was clicked!");                      // Log the click event to the console
});
