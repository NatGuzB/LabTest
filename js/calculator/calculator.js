const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
}

function multiply(a, b){
  return a * b;
}


module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply};