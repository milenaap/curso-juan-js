const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },

    pausar: function() {
        console.log('pausando...')
    },

    borrar: function(id) {
        console.log(`Borrando canción...${id}`)
    },

    crearPlaylist: function(nombre) {
        console.log(`Creando playlist de ${nombre}`)
    },

    reproducirPlaylist: function(nombre) {
        console.log(`Reproducir la playlist de ${nombre}`)
    }




}



reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar(20);
reproductor.borrar(30);
reproductor.crearPlaylist('Salsa');
reproductor.crearPlaylist('Trance');
reproductor.reproducirPlaylist('Trance');