  const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
  ];

const items = document.querySelector("#ingredients");
const arr = [];
ingredients.forEach(test => {
	const item = document.createElement("li");
	item.textContent = test;
	item.className = "item";
	arr.push(item);
	// console.log(`Індекс ${index}, значення ${number}`);
  });
  items.append(...arr);

  console.log(items);