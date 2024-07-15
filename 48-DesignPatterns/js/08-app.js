function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: comprador =>{
        console.log(`Vendido a ${comprador}`);
    }
}



function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre}: cantidad ${cantidad}`);
    },
    vendido: comprador =>{
        console.log(`Vendido a ${comprador}`);
    }
}




function Subasta() {
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}



// Crear Objetos

const milena = new Comprador('Milena');
const pablo = new Comprador('Pablo');
const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();

// Tienes que registrarlos
subasta.registrar(milena);
subasta.registrar(pablo);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300);

milena.oferta(350, milena);
pablo.oferta(450, pablo);
vendedor.vendido('Pablo');