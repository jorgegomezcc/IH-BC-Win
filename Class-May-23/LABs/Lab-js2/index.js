// Iteración #1: Encontrar el máximo
// Implementa la función maxOfTwoNumbers que toma dos números como argumentos y devuelve el mayor.
function maxOfTwoNumbers (a, b) {
    if (a > b) {
        console.log(`${a} es mayor que ${b}`);
    } else {
        console.log(`${b} es mayor que ${a}`);
    }
    
};
maxOfTwoNumbers (8, 15)




const maxOfTwoNumbers1 = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwoNumbers1 (101, 54))

// Iteración nº 2: Encontrar la palabra más larga
// Implementa la función findLongestWord que toma como argumento un array de palabras y devuelve la más larga. Si hay 2 con la misma longitud, debería devolver la primera ocurrencia.

// Puede utilizar el siguiente array para probar su solución:

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord (matrizDePalabras) {
    if (matrizDePalabras === 0) return null;
    let palabraMasLarga = "";
    for (let i = 0; i < matrizDePalabras.length; i++) {
        if (palabraMasLarga.length < matrizDePalabras[i].length) {
            palabraMasLarga = matrizDePalabras[i];
            }
        }
        return palabraMasLarga
    }
 
    console.log(findLongestWord(words));


// Iteración #3: Calcular la suma
// Calcular una suma puede ser tan sencillo como iterar sobre un array y sumar cada uno de los elementos.

// Implementa la función llamada sumNumbers que toma un array de números como argumento, y devuelve la suma de todos los números del array. Más adelante en el curso aprenderemos a hacer esto utilizando el método de reduce de arrays, lo que facilitará mucho el trabajo. Por ahora, vamos a practicar la forma "declarativa" de sumar valores, utilizando bucles.

// Puedes usar el siguiente array para probar tu solución:

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers (arrayNumeros) {
    if (arrayNumeros === 0) return null;
    let sumaTotal = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        sumaTotal += arrayNumeros[i];
    } 
    return sumaTotal;
}

console.log(sumNumbers(numbers))

// Iteración #4: Calcular la media
// Calcular una media es una tarea muy común. Vamos a practicarla un poco.

// La lógica detrás de esto:

// Encuentra la suma como hicimos en el primer ejercicio (¿o qué tal si reutilizas el sumNumbers()?)
// Toma esa suma y divídela entre el número de elementos de la lista.

// Nivel 1: Matriz de números
// Implementa la función averageNumbers que espera un array de números y devuelve la media de los mismos:

// Puedes usar el siguiente array para probar tu solución:

const numbers1 = [2, 6, 9, 10, 7, 4, 1, 9];



console.log(sumNumbers(numbers1) / numbers1.length);

function averageNumbers(mediaNumeros) {
    let resultado = mediaNumeros.length;
    return sumNumbers(numbers1) / resultado
}

console.log(averageNumbers(numbers1))

// Nivel 2: Matriz de cadenas
// Implementa la función llamada averageWordLength que recibe como único argumento una matriz de palabras y devuelve la longitud media de las mismas:

// Puedes utilizar el siguiente array para probar tu solución:

const palabras = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength (arrayPalabras) {
    if (arrayPalabras === 0) return null;
    let totalLetras = 0;
    for (let i = 0; i < arrayPalabras.length; i++) {
        totalLetras += arrayPalabras[i].length;
    } 
    let totalMedia = totalLetras / palabras.length;
    console.log(totalMedia);
};

averageWordLength(palabras)


// Bonus - Iteración #4.1: Una función genérica avg ()
// Cree la función avg(arr) que recibe cualquier matriz mixta y calcula el promedio. Considere como array mixto un array lleno de números y/o cadenas y/o booleanos. Seguimos una lógica similar a la aplicada en la iteración 4.1. del bono 😉

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avr(arrayMixto) {
    if (arrayMixto === 0) return null;
    let letrasArray = 0;
    // for (let i = 0; i < arrayMixto.length; i++) {
    //     letrasArray = arrayMixto[i].length;
    // } return letrasArray;
    if (typeof arrayMixto === true) {
        return 1;
    } else if (typeof arrayMixto === "string") {
    
    }
    
};

