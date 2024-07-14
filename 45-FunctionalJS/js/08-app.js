// const cliente = 'Milena';

// function mostrarCliente() {
//     const cliente = 'Kitty';
//     console.log(cliente);
// }

// mostrarCliente();


const obtenerCliente = () => {
    const nombre = 'Milena';

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
   
}

const cliente = obtenerCliente();

cliente();