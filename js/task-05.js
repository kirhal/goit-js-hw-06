const inputValueEl = document.querySelector("#name-input");
const outputValueEl = document.querySelector("#name-output");

inputValueEl.addEventListener("input", onInputValueChanging);

function onInputValueChanging(event) {
  const inputData = event.currentTarget.value.trim();
  if (inputData !== "") {
    outputValueEl.textContent = inputData;
  } else outputValueEl.textContent = "Anonymous";
}
