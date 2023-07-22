// const meses = [ 'Enero', 'Febrero', 'Marzo'];

// meses[3] = 'Abril';

// meses.push('Abril');
// meses.push('Mayo');

// // Agregar al final del arreglo

// console.table(meses);


const carrito = [];

// Definir un producto

const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}


const producto2 = {
    nombre: 'Celular',
    precio: 800
}

// pus agrega al final de un arreglo

carrito.push(producto);
carrito.push(producto2);


const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3);


console.table(carrito);