
let DB;

document.addEventListener('DOMContentLoaded', () => {
     cmrDB();

     setTimeout(() => {
        crearCliente();
     }, 5000);
});


function cmrDB() {
    // Crear base de datos version 1.0
    let cmrDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    cmrDB.onerror = function() { // funcion anonima sin nombre
        console.log('Hubo un error a la hora de crear la BD');
    }


    // Si se creo bien
    cmrDB.onsuccess = function() {
        console.log('Base de datos Creada!');

        DB = cmrDB.result;
    }


    // Configuración de la base de datos

    cmrDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false});
        objectStore.createIndex('email', 'email', { unique: true});
        objectStore.createIndex('telefono', 'telefono', { unique: false});

        console.log('Columnas Creadas');
    }

}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function() {
        console.log('Transaccion Completada');
    }

    transaction.onerror = function() {
        console.log('Hubo un error en la transacción');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 55555555,
        nombre: 'Milena',
        email: 'darimile@gmail.com'
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}






