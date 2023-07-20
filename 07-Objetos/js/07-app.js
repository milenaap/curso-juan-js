const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}


// const nombreProducto = "Monitor";

// nombreProducto = 'Tablet';

// console.log(nombreProducto);

producto.disponible = false;

delete producto.precio;

console.log(producto);