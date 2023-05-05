let numero = 100;

for (let index = 0; index <= 100; index++) {
    console.log(index)
}

console.log("--------------------")
console.log("inversa")

for (let index1 = 100; index1 >=0; index1--) {
    console.log(index1)

}

console.log("--------------------")
console.log("prueba nombre deletreado")

let nombre = "Jorge";
let nombreSpell = "";
let nombrereverse = "";

for (let index = 0; index < nombre.length; index++) {
    nombreSpell += nombre[index] + " ";
}

console.log(nombreSpell)

console.log("--------------------")
console.log("Pureba nombre al reves")

for (let index = nombre.length -1; index >= 0; index-- ) {
    nombrereverse += nombre[index].toUpperCase() + " ";
}

console.log(nombrereverse)