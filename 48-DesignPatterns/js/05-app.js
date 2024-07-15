//Module Pattern

const modulo1 = (function () {
    const nombre = 'Milena';
    function hola() {
        console.log('hola')
    }
    
    return {
        nombre,
        hola
    }
})()




// const mostrarCliente = nombre => {
//     console.log(nombre);
// }

// export default mostrarCliente;

