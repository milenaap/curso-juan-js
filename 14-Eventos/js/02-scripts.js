

const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('click', () => {
    console.log('click al nav')
});


nav.addEventListener('mouseout', () => {
    console.log('saliendo');

    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mouseenter', () => {
    console.log('entrando');

    nav.style.backgroundColor = 'white';
});
