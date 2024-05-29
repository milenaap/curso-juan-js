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

const milena = new Cliente('Milena', 400);
    console.log(milena.mostrarInformacion());
    console.log(milena);

    console.log(Cliente.bienvenida());



const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const milena2 = new Cliente2('Milena', 400);
console.log(milena2);



