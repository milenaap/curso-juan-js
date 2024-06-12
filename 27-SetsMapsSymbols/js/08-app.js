

const ciudades = ['Londres', 'New York', 'Paris'];
const ordenes = new Set([!123, 321, 131, 132]);
const datos = new Map();

datos.set('nombre', 'Milena');
datos.set('profesion', 'Desarrollador Web');


//Default

for (let ciudad of ciudades.values()) {
    console.log(ciudad);
}



//Keys Iterador

for (let keys of ciudades.values()) {
    console.log(keys);
}

for (let keys of ordenes.values()) {
    console.log(keys);
}

for (let keys of datos.values()) {
    console.log(keys);
}


//Values Iterador

for (let value of ciudades.values()) {
    console.log(value);
}

for (let value of ordenes.values()) {
    console.log(value);
}

for (let value of datos.values()) {
    console.log(value);
}


//Entries Iterador
for (let entry of ciudades.entries()) {
    console.log(entry);
}

for (let entry of ordenes.entries()) {
    console.log(entry);
}

for (let entry of datos.entries()) {
    console.log(entry);
}
