// Operador Mayor que y menor que

const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;

if( dinero >= totalAPagar) {
    console.log('Si podemos pagar');
}else if(tarjeta) {
    console.log('si tengo cheque');
}else if(tarjeta) {
    console.log('Si puedo pagar porque tengo la tarjeta')
}else {
    console.log('Fondos Insuficientes');
}