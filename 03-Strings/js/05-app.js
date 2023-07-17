const producto = 'Monitor 20 Pulgadas ';

console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// .slide para cortar
console.log(producto.slice(0, 10) )
// console.log(producto.slice(8) );
// console.log(producto.slice(2, 1) );



//Alternativa a slide

console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

const usuario = "Milena";
console.log(usuario.substring(0,10))
console.log(usuario.charAt(0));