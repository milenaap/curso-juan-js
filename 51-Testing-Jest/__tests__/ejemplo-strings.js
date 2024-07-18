

const password = "123456";


describe('Validar 6 caracteres', () => {
    
    test('Que el password tenga 6 catacteres', () => {
        expect(password).toHaveLength(6);
    });

    test('Password no vacio', () => {
        expect(password).not.toHaveLength(0);
    });

   
});


