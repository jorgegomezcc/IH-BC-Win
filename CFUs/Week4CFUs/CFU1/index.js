// Instrucciones
// Escribe una función anónima que tome dos argumentos, x y y, y devuelva la suma de los dos números. Asigna esta función a una variable llamada add.
// Escribe otra función anónima que tome dos argumentos, x y y, y devuelva el producto de los dos números. Asigna esta función a una variable llamada multiplicar.
// Escribe una tercera función anónima que tome dos argumentos, x y y y devuelva el cociente de los dos números (x dividido por y). Asigna esta función a una variable llamada divide.


const add = function (x, y) {
    return x + y;
};
console.log(add(8, 10));

const multiplicar = function (x, y) {
    return x * y;
};
console.log(multiplicar(4, 5));

const divide = function (x, y) {
    return x / y;
};
console.log(divide(15, 5));

// Función Expresión
// Instrucciones
// Crea una expresión de función llamada printMessage que, al ser invocada, imprima (devuelva) el mensaje “Soy una expresión de función” en la consola.
// Crea una función llamada useFuncExpression que toma como argumento una función callback y la ejecuta. Pasa la función printMessage como argumento. Cuando useFuncExpression es invocada debería registrar el mensaje “I am a function expression” en la consola.
// Bonus: intenta refactorizar useFuncExpression para usar funciones flecha y observa la diferencia.

const printMessage = () => {
    return "Soy una expresión de función";    
};
console.log(printMessage());

// function useFuncExpression (callback) {
//     return callback();
// };
// console.log(useFuncExpression(printMessage));

const useFuncExpression = (callback) => {
    return callback();
};
console.log(useFuncExpression(printMessage));

// Instrucciones
// Crea una función processArray que reciba un array y una función callback como parámetros. La función callback debe ser invocada en cada elemento del array y devolver un nuevo array con los resultados de la función callback.

// La función processArray debe utilizar el método map

function processArray(arr, callback) {
    return arr.map(callback);
  }
   
  function addTwo(num) {
    return num + 2;
  }
   
  const nums = [10, 22, 33, 44];
  console.log(processArray(nums, addTwo));

  
