class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;

    }


    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

// Herencia

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {
        return `Bienvenido al cajero de empresas`
    }

}

const milena = new Cliente('Milena', 400);
const empresa = new Empresa('Código con Milena', 500, 1233646, 'Aprendizaje en Linea');
console.log(empresa);
console.log(empresa.mostrarInformacion());


console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());

    