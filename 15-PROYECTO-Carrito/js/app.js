// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const  listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // cuando agregas un curso presionando " Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}


// Funciones

function agregarCurso(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        const cursosSeleccionado = e.target.parentElement.parentElement;
        console.log(cursosSeleccionado);
        leerDatosCursos(cursosSeleccionado);
    }
    
}

//Lee el contenido del HTML al que le dimos click  y extrae la información

function leerDatosCursos(curso) {

    console.log(curso);



    // Crear un objeto

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if(existe) {
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            }else {
                return curso;// retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];

    }else {
        //Agregamos el curso al carrito
        articulosCarrito = [...articulosCarrito, infoCurso]; 
    }

    // Agrega elementos al arreglo de carrito
    

    
    console.log(articulosCarrito);

    carritoHTML();
    
}

// Muestra el Carrito de compras en el HTML

function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}> X </a>

            </td>

        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}


// Elimina los cursos del tdbody

function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild) {
    
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

}

