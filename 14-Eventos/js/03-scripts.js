

const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () => {
//     console.log('escribiendo...');
// });

// busqueda.addEventListener('keyup', () => {
//     console.log('escribiendo...');
// });

// busqueda.addEventListener('blur', () => {
//     console.log('escribiendo...');
// });

// busqueda.addEventListener('input', (evt) => {
//     console.log(evt);
// });

// busqueda.addEventListener('input', (e) => {
//     console.log(e.target.value);
// });

busqueda.addEventListener('input', (e) => {
    if(e.target.value === '') {
        console.log('fallo la validación');
    }
    console.log(e.target.value);
});