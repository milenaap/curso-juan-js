const reproductor = {

    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),

    pausar: () => console.log('pausando...'),
   
    borrar: id => console.log(`Borrando canción...${id}`),

    crearPlaylist: nombre => console.log(`Creando playlist de ${nombre}`),

    reproducirPlaylist: nombre => console.log(`Reproducir la playlist de ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar(20);
reproductor.borrar(30);
reproductor.crearPlaylist('Salsa');
reproductor.crearPlaylist('Trance');
reproductor.reproducirPlaylist('Trance');