const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChildChild);
// console.log(navegacion.childNodes); // los espacios en blanco son considerados elementos
// console.log(navegacion.children); // te van a mostrar elementos reales

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom'

// console.log(card.children[1].children[1].textContent);

// card.children[0].scr = 'img/hacer3.jpg';
// console.log(card.children[0]);


// console.log(card.parentNode);
// console.log(card.parentElement.card.parentElement.card.parentElement);

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);
