
const aplicarDescuento = new Promise((resolve, reject) => {
    
    const descuento = true;

    if(descuento) {
        resolve('Descuento Aplicado')
    }else {
        reject('No se pudo aplicar el descuento')
    }
})

aplicarDescuento
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    })




// Hay 3 valores posibles...
// fulfilled - El promise se cumplió
// reject - El Promise no cumplió
// pending - No se ha cumplido y tampoco fue rechazado