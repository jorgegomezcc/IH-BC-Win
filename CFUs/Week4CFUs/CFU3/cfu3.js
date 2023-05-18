// Instrucciones
// Utilizando la siguiente matriz de cadenas, realice las tareas que se indican a continuación:

const arrOfStrings = ["cat", "wolf", "is", "animal"];

// Crea una copia del arreglo arrOfStrings y nómbrala strings1.
// Ordena el arreglo strings1 desde la cadena más corta hasta la más larga.
// Crea otra copia del arreglo arrOfStrings y nómbrala strings2.
// Ordena el arreglo strings2 alfabéticamente.


// Usamos el operador "spread" para copiar el array dentro de una nueva variable
const strings1 = [...arrOfStrings];
console.log(strings1);


//con el metodo sort ordenamos en base a los operadores que le indiquemos, en este caso añadimos el metodo lenght a cada operador para poder incluirlos en el sort y que al compararlos los ordene en funcion del resultado de .lenght, es decir de la cantidad de caracteres que tienen
let strings1ByLenght = strings1.sort((a, b) => a.length - b.length);
console.log(strings1ByLenght);

//spread de nuevo para copiar
const strings2 = [...arrOfStrings];
console.log(strings2)


//El metodo sort, por defecto ordena alfabeticamente, pero no tiene en cuenta ni las mayusculas/minusculas ni el idioma o caracteres
console.log(strings2.sort());

//aqui somos mas especificos con el metodo sort, añadiendo en el mismo el metodo "localeCompare" que compara entre 2 argumentos cual va primero dependiendo de los caracteres de referencia, con este metodo podemos añadir ademas de los argumentos de array que vamos a comparar, los argumentos "locales" y "options", en este caso el solo añadimos el "locales" indicando que el idioma es Inglés
let strings2ByAlph = strings2.sort((a, b) => a.localeCompare(b, 'en'));
console.log(strings2ByAlph);


// Sort numbers
// Instrucciones
// Crea una función llamada sortNumbers que tome un arreglo de números como argumento. La función debería devolver un nuevo arreglo que sea una copia del arreglo original, conteniendo los mismos números en orden ascendente.

const numbers = [2, 5, 9, 7, 1, 8, 4, 3, 6];

const sortNumbers = (NumberArray) => {
    let arrayCopy = NumberArray.slice();
    arrayCopy.sort((a, b) => a - b);
    return arrayCopy;
}
console.log(sortNumbers(numbers));

// Reverse strings
// Instrucciones
// Invierta la cadena name proporcionada a continuación y console.log su valor después de haber sido invertida.

const name = "ivan";

//con .split, separo convierto el string en un array (reverse es un metodo de array) luego le aplico el metodo reverse y finalmente aplico el metodo join para convertir el array en un string 
let nameReverse = name.split("").reverse().join("");
console.log(nameReverse);


// Reverse numbers
// Instrucciones
// Usando la siguiente matriz de cadenas de texto, realiza las tareas que se enumeran a continuación:

const numbers1 = [3, 5, 6, 2];

// Copia y revierte el arreglo numbers.
// Copia y ordena el arreglo numbers y luego reviértelo.

let numbers1Reversed = [...numbers1]

console.log(numbers1Reversed.reverse())

let number1SortReversed = numbers1.sort().reverse()

console.log(number1SortReversed);