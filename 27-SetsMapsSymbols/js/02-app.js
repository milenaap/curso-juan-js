
const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

const nombre = 'Juan';

weakset.add(cliente);


console.log(cliente.size);

console.log(weakset);