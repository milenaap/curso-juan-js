const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// console.log(encabezado.innerText); // si en CSS - visibily: hidden; no lo va encontrar
// console.log(encabezado.textContent);
// console.log(encabezado.innerHTML);

// const nuevoHeading = 'Nuevo Heading';
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';