
const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});


//MIS PRUEBAS
//Tarea 1

//Mis pruebas dividir
test('divides 10 / 2 to equal 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('divides 100 / 10 to equal 10', () => {
    expect(calculator.divide(100, 10)).toBe(10);
});

//Mis pruebas multiplicar
test('multiplies 5 * 5 to equal 25', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
});

test('multiplies 10 * 3 to equal 30', () => {
    expect(calculator.multiply(10, 3)).toBe(30);
});

//Tarea 3
test('throws an error when dividing by zero', () => {
  expect(() => calculator.divide(10, 0)).toThrow('No se puede dividir por cero');
});