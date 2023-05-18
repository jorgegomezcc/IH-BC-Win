// Uso de métodos básicos de array
// Instrucciones
// Usando el siguiente array de strings, realiza las siguientes tareas:

const favorites = ["javascript", "html", "css"];

// Elimina el primer elemento
// Elimina el último elemento
// Agrega el string "react" al principio del array
// Agrega el string "node" al final del array
// Elimina el elemento en la posición 2 y agrega el string "express" en su lugar
// Elimina los elementos en las posiciones 2 y 3 y agrega el string "mongodb" en su lugar

favorites.shift();
console.log(favorites);

favorites.pop()
console.log(favorites);

favorites.unshift("react");
console.log(favorites);

favorites.push("node");
console.log(favorites);

favorites.splice(1, 1, "express");
console.log(favorites);

favorites.splice(1, 2, "mongodb");
console.log(favorites);

// Iterar sobre matrices
// Instrucciones
// Itera sobre el array proporcionado de fruits de las siguientes maneras:

// Usando el bucle for, imprime cada elemento del array
// Usando el método .forEach(), imprime el valor de cada elemento y su índice junto al propio elemento.
// Copy

const fruits = ["apple", "plum", "strawberries"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
};

fruits.forEach(function (elem, index) { 
    console.log(`${elem} -> ${index}`);
});


// tipo flecha:
// fruits.forEach((elem, index) => console.log(`${elem} -> ${index}`));