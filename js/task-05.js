const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

inputValue.addEventListener("input", (Event) => {
  const value = Event.currentTarget.value.trim();
  if (value !== "") {
    outputValue.textContent = value;
  } else outputValue.textContent = "Anonymous";
});
