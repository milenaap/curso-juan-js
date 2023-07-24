//Diferencias entre estas dos maneras de crear funciones

// Declaración de función  ( Funtion Declaration)
sumar(); // Este si se llama antes de crear la función
function sumar() {
    console.log( 2 + 2);
}




//Expresión de Función (Funtion Expression)
sumar2(); // Aquí no se puede hacer porque no se ha creado la función
const sumar2 = function() {
    console.log( 3 + 3 )
}

