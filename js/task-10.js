// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову
// функцію getRandomHexColor для отримання кольору.

const inputEl = document.querySelector("input");
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

// --------- Function of random HEX color ---------
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// --------- Function of random Box destroy ---------
function destroyBoxes() {
  boxesEl.innerHTML = "";
}
// --------- Events ---------
destroyEl.addEventListener("click", destroyBoxes);
// createEl.addEventListener("click", createBoxes);
createEl.addEventListener("click", markupBoxes);
// --------------------------

// --------- Function of random Box create var.1 with inline inner + map---------
// function createBoxes(amount) {
//   destroyBoxes();
//   amount = Number(inputEl.value);
//   const array = new Array(amount).fill("");
//   const listOfBoxes = array
//     .map(
//       (element, index) =>
//         (element += `<div
//       style='width: ${30 + index * 10}px; height: ${
//           30 + index * 10
//         }px; background: ${getRandomHexColor()};'>
//     </div>`)
//     )
//     .join("");
//   boxesEl.insertAdjacentHTML("afterbegin", listOfBoxes);
//   inputEl.value = "";
// }

// --------- Function of random Box create var.2 with 'for' method---------
// function createBoxes(amount) {
//   destroyBoxes();
//   amount = Number(inputEl.value);
//   const listOfBoxes = [];
//   for (let index = 0; index < amount; index++) {
//     const boxEl = document.createElement("div");
//     boxEl.style.width = 30 + index * 10 + "px";
//     boxEl.style.height = 30 + index * 10 + "px";
//     boxEl.style.background = getRandomHexColor();
//     listOfBoxes.push(boxEl);
//   }
//   boxesEl.append(...listOfBoxes);
//   inputEl.value = "";
// }
// --------- Function of random Box create var.3 with inline inner + reduce---------
function markupBoxes() {
  const createBoxes = (amount) => {
    destroyBoxes();
    const boxesAmmount = new Array(amount).fill("");
    return boxesAmmount.reduce(
      (total, element, index) =>
        (total += `<div
      style='width: ${30 + index * 10}px; height: ${
          30 + index * 10
        }px; background: ${getRandomHexColor()};'>
    </div>`)
    );
  };
  boxesEl.insertAdjacentHTML("afterbegin", createBoxes(Number(inputEl.value)));
  inputEl.value = "";
}
