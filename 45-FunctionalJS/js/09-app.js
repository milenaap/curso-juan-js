//Dividir la funcion en dos partes
const suma = (a,b,c) => a + b + c;

const parcial = (a) => (b,c) => suma(a,b,c);

const primerNumero = parcial(5);
const resultado = primerNumero(4,3);
console.log(resultado);

//Dividir la funcion en tres partes
const parcial2 = a => b => c => suma(a,b,c)

// const primerN = parcial2(5);
// const segundoN = primerN(4);
// const resultado2 = segundoN(3);

// Resumir las divisiones de las funciones anteriores (aplicar curryl y parcial)

const resultado2 = parcial2(5)(4)(3);
console.log(resultado2);




