

function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}


describe('Test funciones', () => {
    
    test('Suma 20  y 30', () => {
        expect(suma(20,30)).toBe(50);
    });

    
});