class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}


const funcionPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`)
    },
    mostrarNombre() {
        console.log(`Nombre Persona: ${this.nombre}`)
    }

}

// Añadir funcionesPersona a la clase de Persona

Object.assign(Persona.prototype, funcionPersona);

const cliente = new Persona('Milena', 'correo@correo.com');


console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();