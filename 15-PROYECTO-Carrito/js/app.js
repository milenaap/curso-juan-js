// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito-tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const  listaCursos = document.querySelector('#lista-cursos');

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

    console.log(infoCurso);
}


