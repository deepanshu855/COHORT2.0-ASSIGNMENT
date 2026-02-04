// Create a Counter (Only Description)
// Using DOM + event listeners, create a counter with:
// * Increase button
// * Decrease button
// * Reset button
// The counter value should update on the screen.

let h1 = document.querySelector("h1");
let incBtn = document.querySelector("#inc");
let decBtn = document.querySelector("#dec");
let rstBtn = document.querySelector("#rst");

let count = 0;
incBtn.addEventListener("click", function () {
  count++;
  h1.innerHTML = count;
});

decBtn.addEventListener("click", function () {
  count--;
  h1.innerHTML = count;
});

rstBtn.addEventListener("click", function () {
  count = 0;
  h1.innerHTML = count;
});
