
function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error) {
                resolve('Listado de Clientes');
            }else {
                reject('Error en la conexión');
            }
        }, 3000);
    })

    
}



//Async / Await


const ejecutar = async () => {
    try {
      console.log(1 + 1);  
      const respuesta = await descargarClientes();

      console.log(2 + 2);
      console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar()