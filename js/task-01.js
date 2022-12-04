const menuItemsByClass = document.querySelectorAll(".item");
console.log("Number of categories: " + menuItemsByClass.length);

for (const key of menuItemsByClass) {
    console.log("Category: " + key.firstElementChild.textContent);
    console.log("Elements: " + key.lastElementChild.children.length);
  }