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
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets') || []);

        console.log(tweets);

        crearHTML();
    });
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

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Añadir el arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez arreglado vamos a crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
    
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


// Muestra un listado de los tweets
function crearHTML() {
    limpiarHTML();
    if(tweets.length > 0) {
        tweets.forEach(tweet => {
            //Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //Crear el HTML

            const li = document.createElement('li');

            
            //añadir el texto
            li.innerText = tweet.tweet;

            // Asignar el boton
            li.appendChild(btnEliminar);

            // insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

// Agregar los Tweet actuales a localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);

    crearHTML();
}

// Limpiar el HTML
function limpiarHTML() {
    while( listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}






