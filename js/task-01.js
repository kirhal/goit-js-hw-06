const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", numberOfCategories.length);

console.log("Category: ", numberOfCategories[0].firstElementChild.textContent);
console.log(
  "Elements: ",
  numberOfCategories[0].lastElementChild.children.length
);
console.log("Category: ", numberOfCategories[1].firstElementChild.textContent);
console.log(
  "Elements: ",
  numberOfCategories[1].lastElementChild.children.length
);
console.log("Category: ", numberOfCategories[2].firstElementChild.textContent);
console.log(
  "Elements: ",
  numberOfCategories[2].lastElementChild.children.length
);
