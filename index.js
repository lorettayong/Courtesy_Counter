// Grabs the count-el element and stores it to the countEl variable
let countEl = document.getElementById("count-el");
// Grabs the save-el element and stores it to the saveEl variable
let saveEl = document.getElementById("save-el");
// Sets count variable to 0
let count = 0;

function increment() {
  // Adds 1 count when the Increment button is pressed
  count += 1;
  // Sets countEl's textContent to the count
  countEl.textContent = count;
}

function save() {
  // Creates a variable that contains both the count and the dash separator
  let countStr = count + " - ";
  // Renders the variable in the saveEl using textContent
  saveEl.textContent += countStr;
  // Resets back to 0 after clicking on the save button
  countEl.textContent = 0;
  // Resets the count variable back to 0 to erase the memory in JavaScript
  count = 0;
}
