const suma = require('./suma');
const assert = require('assert');

it('it should return 4', () => {
    const resultado = suma(1,3);
    expect(resultado).toBe(4);
});

// it('it should return error message when I add 1 and -3', () => {
//     const resultado = suma(1,-3);
//     expect(resultado.error.message).toBe("It can't add negative numbers");
// })

// it('it should return error message when I add 1.5 and 3', () => {
//     const resultado = suma(1.5,3);
//     expect(resultado.error.message).toBe("It can't add float numbers");
// })

// it('it should return error message when I add an string and 3', () => {
//     const resultado = suma("x",3);
//     expect(resultado.error.message).toBe("It can't add strings");
// })

// it('it should return error message when I add null and 3', () => {
//     const resultado = suma(null,3);
//     expect(resultado.error.message).toBe("It can't add null values");
// })

// it('it should return error message when I send no params', () => {
//     const resultado = suma();
//     expect(resultado.error.message).toBe("Params are required");
// })

// it('it should return error message when I add an object and 3', () => {
//     const resultado = suma({},3);
//     expect(resultado.error.message).toBe("It can't add objects");
// })

// it('it should return error message when I add a function and 3', () => {
//     const resultado = suma(() => {}, 3);
//     expect(resultado.error.message).toBe("It can't add functions");
// })