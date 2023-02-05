let counterValue = 0;
const decrementBtnEl = document.querySelector("button[data-action=decrement]");
const incrementBtnEl = document.querySelector("button[data-action=increment]");
const valueEl = document.querySelector("#value");

decrementBtnEl.addEventListener("click", onDecreaseBtnClick);
incrementBtnEl.addEventListener("click", onIncreaseBtnClick);

function onIncreaseBtnClick(event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
function onDecreaseBtnClick(event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
