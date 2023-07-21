
// Object Literal
const producto1 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}


const producto2 = {
    nombre: "Tele",
    precio: 1000,
    disponible: true,
}







// Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto5 = new Producto('Monitor 24 Pulgadas', 500);
console.log(producto5);

const producto6 = new Producto('Television', 100);
console.log(producto6);



