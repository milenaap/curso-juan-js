const nombreCache = 'apv-v3';
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js',
    
];


// Cuando se instala el Service Worker

self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');
    
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando');
                cache.addAll(archivos)
            })
    )
});

// Activar el Service Worker

self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
    
    e.waitUntil(
        caches.keys()
            .then( keys => {
                // console.log(keys);
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                    .map( key => caches.delete(key))// borra los demas
                )
            })
    )
});

// Evento fetch 

self.addEventListener('fetch', e => {
    console.log('fetch', e);

    e.responWith(
        caches.match(e.request)
            .then( respuestaCache =>{
                return respuestaCache
            })
            .catch(() => caches.match('/error.html'))
    )
});

