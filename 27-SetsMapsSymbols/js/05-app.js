
const sym = Symbol();
const sym2 = Symbol();

if(sym == sym2) {
    console.log('Son iguales!!');
}else {
    console.log('Son diferentes');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {

}

// Agregar npmbre y apellido 

persona[nombre] = 'Milena';
persona[apellido] = 'Aguilar';
persona.tipoCliente = 'Premiun';
persona.saldo = 500;


console.log(persona);
