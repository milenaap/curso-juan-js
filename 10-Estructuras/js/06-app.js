const usuario = false;
const puedePagar = true;

if(usuario && puedePagar) {
    console.log('Si puedes comprar')
} else if(!usuario && puedePagar) {
    console.log('No puede comprar')
}  else if(!usuario) {
    console.log('Inicia sesión o crea una cuenta')
}else if(!puedePagar) {
    console.log('Fondos induficientes')
} 