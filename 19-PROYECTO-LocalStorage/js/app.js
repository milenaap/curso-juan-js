/**********************************
 **********************************
 * 
 *            Variables
 * 
 **********************************
 **********************************/

 const formulario = document.querySelector('#formulario');
 const listaTweets = document.querySelector('#lista-tweets');

 let tweets = [];




 /**********************************
 **********************************
 * 
 *             Eventos
 * 
 ***********************************
 ***********************************/

eventListeners()
function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}





 /***********************************
 ***********************************
 * 
 *            Funciones
 * 
 ***********************************
 ***********************************/

function agregarTweet(e) {
    e.preventDefault();
   
    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    

    // validación
    if(tweet === '') {
        mostrarError('Un mensaje no puede ir vacio')

        return; // evita que se ejecuten mas lineas de código
    }



    console.log('agregando tweet');
}

// Mostrar mensaje de error

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Eliminar la alerta en 3 segundos
    setTimeout(()=> {
        mensajeError.remove();
    }, 3000);
}




