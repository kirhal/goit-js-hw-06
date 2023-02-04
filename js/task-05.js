const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

inputValue.addEventListener("input", (Event) => {
  if (Event.currentTarget.value.trim() !== "") {
    outputValue.textContent = Event.currentTarget.value.trim();
  } else outputValue.textContent = "Anonymous";
});
