class Cliente {

    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const milena = new Cliente();
milena.setNombre('Milena')
console.log(milena.getNombre());

// console.log(milena.#nombre);