console.log('Iteración #1: Encontrar el máximo');

// Iteración #1: Encontrar el máximo
// Implementa la función maxOfTwoNumbers que toma dos números como argumentos y devuelve el mayor.

const maxOfTwoNumbers = (a, b) => {
    if (a > b) {
        console.log(`${a} es mayor que ${b}`)
        return a;
    } else {
        console.log(`${b} es mayor que ${a}`)
        return b;
    }
};

maxOfTwoNumbers(14, 54)

console.log('Iteración nº 2: Encontrar la palabra más larga');

// Iteración nº 2: Encontrar la palabra más larga
// Implementa la función findLongestWord que toma como argumento un array de palabras y devuelve la más larga. Si hay 2 con la misma longitud, debería devolver la primera ocurrencia.

// Puede utilizar el siguiente array para probar su solución:

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

const findLongestWord = (arrayDePalabras) => {
    if (arrayDePalabras === 0) return null;
    let palabraMasLarga = ""
    for (let i = 0; i < arrayDePalabras.length; i++) {
        if (palabraMasLarga.length < arrayDePalabras[i].length)  {
            palabraMasLarga = arrayDePalabras[i]
        }
    }
    return palabraMasLarga
}

console.log(findLongestWord(words))

console.log('Iteración #3: Calcular la suma');

// Iteración #3: Calcular la suma
// Calcular una suma puede ser tan sencillo como iterar sobre un array y sumar cada uno de los elementos.

// Implementa la función llamada sumNuumbers que toma un array de números como argumento, y devuelve la suma de todos los números del array. Más adelante en el curso aprenderemos a hacer esto utilizando el método de reduce de arrays, lo que facilitará mucho el trabajo. Por ahora, vamos a practicar la forma "declarativa" de sumar valores, utilizando bucles.

// Puedes usar el siguiente array para probar tu solución:

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const sumNumbers = (arrayNumeros) => {
    if (arrayNumeros === 0) return null;
    let sumaTotal = 0
    for (let i = 0; i < arrayNumeros.length; i++) {
        sumaTotal += arrayNumeros[i]
    }
    return sumaTotal
}

console.log(sumNumbers(numbers));

console.log('Bono - Iteración #3.1: Una función genérica sum()');

// Bono - Iteración #3.1: Una función genérica sum()
// El objetivo: Aprender a refactorizar tu código. 💪

// En la iteración 3, has creado una función que devuelve la suma de un array de números. Pero, ¿y si quisiéramos saber cuánto es la suma de la longitud de todas las palabras de un array? ¿Y si quisiéramos añadir valores booleanos a la mezcla? No podríamos usar la misma función anterior, o mejor dicho, tendríamos que retocarla un poco para que pueda ser reutilizada sin importar lo que haya en el array que se pasa como argumento cuando se llama a la función sumNumbers().

// Aquí estamos aplicando un concepto que llamamos polimorfismo, es decir, tratar la entrada de una función independientemente de los tipos que se le pasen.

// Vamos a implementar la función sum() que calcula la suma para un array lleno de_(casi)_ cualquier tipo de datos. Tenga en cuenta que las cadenas deben tener su longitud añadida al total, y los valores booleanos deben ser coaccionados en sus correspondientes valores numéricos. Consulte las pruebas para obtener más detalles.

// Puede utilizar la siguiente matriz para probar su solución:

const mixedArr = [6, 12, 'miami', 1, true, false, 'barca', '200', 'lisboa', 8, 10];

const sum = (arrayMixto) => {
    if (arrayMixto === 0) return null; //Condicionar la matriz en caso de matriz vacia
        let sumaMixta = 0; //creamos la variable inicializada en cero que contendra la suma del array de numeros
    for (let i = 0; i < arrayMixto.length; i++) {  //creamos el loop
        let elemento = arrayMixto[i];
        if (typeof elemento === 'string') { //Nos encargamos de asignar un valor numerico a los strings
            sumaMixta += elemento.length;
        }
        else if( typeof elemento === true ) { //Nos encargamos de dar un valor numerico al booleano
        sumaMixta += 1
        }
        else if (typeof elemento === Object && elemento !== null) { // Nos encargamos de devolver un error en caso de que nos introduzcan un objeto en la array
            throw new Error("No aceptamos objetos dentro de esta operacion")
        }else { //Ahora nos encargamos de los numeros
            sumaMixta += elemento;
        }
    }
    return sumaMixta; //retornamos la variable de la suma
};

console.log(sum(mixedArr)); //imprimimos la funcion

console.log('Iteración #4: Calcular la media');

// Iteración #4: Calcular la media
// Calcular una media es una tarea muy común. Vamos a practicarla un poco.

// La lógica detrás de esto:

// Encuentra la suma como hicimos en el primer ejercicio (¿o qué tal si reutilizas el sumNumbers()?)
// Toma esa suma y divídela entre el número de elementos de la lista.

// Nivel 1: Matriz de números
// Implementa la función averageNumbers que espera un array de números y devuelve la media de los mismos:

// Puedes usar el siguiente array para probar tu solución:

const numbers1 = [2, 6, 9, 10, 7, 4, 1, 9];

console.log(sumNumbers(numbers1) / numbers1.length); //sin funcion

const averageNumbers = (arrayNumeros2) => { //creamos la funcion tipo flecha
    let resultado1 = arrayNumeros2.length;   //creamos la variable resultado que sea igual al "lenght" del array de numeros que queramos añadir
    // return resultado1 / arrayNumeros2   // una forma de obtener el resultado: dividimos la variable resultado por el array de numeros que queremos añadir
    return sumNumbers(numbers1) / resultado1;  /// Otra forma de obtener el resultado: Llamamos a la funcion con el array que queramos añadir y lo dividimos por la variable resultado
}

console.log(averageNumbers(numbers1))

console.log("Usando bucles")

const averageNumbers1 = (arrayNumeros2) => {
    if (arrayNumeros2.length === 0) return null;
    if (arrayNumeros2.length === 1) return arrayNumeros2[0];

    let resultado2= 0;

    for (let i = 0; i < arrayNumeros2.length; i++) {
        resultado2 += arrayNumeros2[i]
    }
    console.log(resultado2 / arrayNumeros2.length);
    return resultado2 / arrayNumeros2.length;
};


averageNumbers1(numbers1)


console.log("Matriz de cadenas");

// Nivel 2: Matriz de cadenas
// Implementa la función llamada averageWordLength que recibe como único argumento una matriz de palabras y devuelve la longitud media de las mismas:

// Puedes utilizar el siguiente array para probar tu solución:

const words1 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

const averageWordLength = (arrayDePalabras1) => {
    if ( arrayDePalabras1 === 0 ) return null;
    let sumaCaracteres = 0;
    for (let i = 0; i < arrayDePalabras1.length; i++) {
        sumaCaracteres += arrayDePalabras1[i].length
    }
    let resultadoTotal = sumaCaracteres / arrayDePalabras1.length;
    console.log(resultadoTotal);
    // return sumaCaracteres / arrayDePalabras1.length
};

averageWordLength(words1)

// Bonus - Iteración #4.1: Una función genérica avg ()
// Cree la función avg(arr) que recibe cualquier matriz mixta y calcula el promedio. Considere como array mixto un array lleno de números y/o cadenas y/o booleanos. Seguimos una lógica similar a la aplicada en la iteración 4.1. del bono 😉

console.log('Bonus - Iteración #4.1: Una función genérica avg ()');

const mixedArr1 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

const avgArr = (arrayMixto1) => { //Creamos la funcion tipo flecha
    if (arrayMixto1 === 0 ) return null;    
    let mediaTotal = arrayMixto1.length;    //Creamos una variable en la que contamos la cantidad de datos que hay dentro
    console.log( sum(mixedArr1) / mediaTotal) // Llamamos a la funcion creada anteriormente donde calculabamos la suma total de valores dentro del array y la dividimos por la variable creada antes
}

avgArr(mixedArr1)   //Llamamos a la funcion y nos da el resultado

console.log('Iteración #5: Arreglos únicos'); 

// Iteración #5: Arreglos únicos

// Tome el siguiente array, elimine los duplicados y devuelva un nuevo array. Es más que probable que quieras comprobar el método indexOf Array.

// Hazlo en forma de una función uniquifyArray que reciba un array de palabras como argumento.

// Puede utilizar el siguiente array para probar su solución:

const words2 = ['crab','poison','contagious','simple','bring','sharp','playground','poison','communion','simple','bring'];

function uniquifyArray(wordsArray) {
    if(wordsArray.length === 0) return null;
    let uniqueArray = [];
    let x = 0;
    for(let i = 0 ; i < wordsArray.length ; i++){
      if(uniqueArray.indexOf(wordsArray[i]) === -1){
        uniqueArray[x] = wordsArray[i];
        x++;
      }
    }
    return uniqueArray;
  }
  console.log(uniquifyArray(words2))


console.log('Iteración #6: Buscar elementos');

  // Iteración #6: Buscar elementos
// Vamos a crear una simple búsqueda en el array.

// Declare una función llamada doesWordExist que recibirá un array de palabras como un argumento, y una palabra a buscar como el otro. Devuelve true si existe, en caso contrario, devuelve false. No utilice indexOf para esta función.

// Puede utilizar el siguiente array para probar su solución:

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsArray, wordToFind) {
    let result = false;
    for(let i = 0 ; i < wordsArray.length ; i++){
      if(wordToFind === wordsArray[i]){
        result = true;
      }
    }
    return result;
  }
  console.log(doesWordExist(wordsFind, "matter"))


console.log('Iteración #7: Contar la repetición');

// Iteración #7: Contar la repetición
// Declare una función llamada howManyTimes que tomará un array de palabras como primer argumento, y una palabra a buscar como segundo argumento. La función devolverá el número de veces que esa palabra aparece en el array.

// Puede utilizar la siguiente matriz para probar su solución:

const wordsCountRepeat = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function howManyTimes(wordsArray, wordToFind) {
    let result = 0;
    for(let i = 0 ; i < wordsArray.length ; i++){
      if(wordToFind === wordsArray[i]){
        result++;
      }
    }
    return result;
  }
  console.log(howManyTimes(wordsCountRepeat, "trouble"))