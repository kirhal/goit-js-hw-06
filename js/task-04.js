let counterValue = 0;
const decrementBtn = document.querySelector("button[data-action=decrement]");
const incrementBtn = document.querySelector("button[data-action=increment]");
const value = document.querySelector("#value");

decrementBtn.addEventListener("click", (Event) => {
  counterValue -= 1;
  value.textContent = counterValue;
});
incrementBtn.addEventListener("click", (Event) => {
  counterValue += 1;
  value.textContent = counterValue;
});
