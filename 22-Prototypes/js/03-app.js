function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}


Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo: 'Gold'
    }else if(this.saldo > 5000) {
        tipo = 'Plantium'
    }else {
        tipo = 'Normal'
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.nombreClienteSaldo = function(retira) {
    this.saldo -= retira
}

// Instanciarlo

const milena = new Cliente('Milena', 6000);
console.log(milena.tipoCliente() ) ;
console.log(milena.nombreClienteSaldo() ) ;
milena.retiraSaldo(1000);
console.log(milena.nombreClienteSaldo());

console.log(milena);

// function Empresa(nombre, saldo, categoria) {
//     this.nombre = nombre;
//     this.saldo = saldo;
//     this.categoria = categoria;
// }

// const CCJ = new Empresa('Código con Juan', 4000, 'Cursos en Línea');
// console.log(CCJ);

