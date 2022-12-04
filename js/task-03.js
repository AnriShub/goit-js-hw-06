const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");
const markup = images //
  .map((image) => `<li><img class="imgItem" src="${image.url}" alt="${image.alt}"></img></li>`)
  .join("");

  list.insertAdjacentHTML("beforeend", markup);

  const pic = document.querySelectorAll('.imgItem');
console.log(pic.length);
pic.forEach(element => element.style.width = "400px");

  // pic[2].style.width = "400px";
  
  // pic.style.marginRight = '30px';

// pic.style.marginRight = '50px';
list.style.display = 'flex';
list.style.flexWrap = 'column-reverse';
list.style.listStyle = 'none';
list.style.gap = '30px';
list.style.justifyContent = 'center';


console.log(list.getAttribute("width"));
console.log(pic.style);


  