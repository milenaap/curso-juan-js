
const carrito = ['Producto1', 'Producto2', 'Producto3'];


describe('Test carrito', () => {
    
    test('Probar 3 elementos', () => {
        expect(carrito).toHaveLength(3);
    });

    test('Verificar carrito vacio', () => {
        expect(carrito).not.toHaveLength(0);
    });

       
});