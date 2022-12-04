// const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments']

// const list = document.querySelector('#ingredients')
// const liArray = []

// ingredients.forEach(ingredient => {
// 	const item = document.createElement('li')
// 	item.className = 'item'
// 	item.textContent = ingredient
// 	liArray.push(item)
// })

// list.append(...liArray)
// console.log(list);







// const ingredients = [
// 	"Potatoes",
// 	"Mushrooms",
// 	"Garlic",
// 	"Tomatos",
// 	"Herbs",
// 	"Condiments",
//   ];

// const items = document.querySelector("#ingredients");
// const arr = [];
// ingredients.forEach(function (number, index) {
// 	const item = document.createElement("li");
// 	item.textContent = number;
// 	item.className = "item";
// 	arr.push(item);
// 	// console.log(`Індекс ${index}, значення ${number}`);
//   });
//   items.append(...arr);

//   console.log(items);



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