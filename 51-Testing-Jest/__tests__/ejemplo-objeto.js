
const cliente = {
    nombre: 'Milena',
    balance: 500
}


describe('Test cliente', () => {
    
    test('Es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Milena', () => {
        expect(cliente.nombre).toBe('Milena');
    });

    test('No es Milena', () => {
        expect(cliente.nombre).not.toBe('Dorian');
    });



       
});