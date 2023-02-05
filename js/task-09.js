const buttonEl = document.querySelector(".change-color");
const currentColorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", onBtnClick);

function onBtnClick() {
  const randomHexColor = getRandomHexColor();
  bodyEl.style.background = randomHexColor;
  currentColorEl.textContent = randomHexColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
