let diaDeLaSemana = {
 0: "Domingo",
 1: "Lunes",
 2: "Martes",
 3: "Miercoles",
 4: "Jueves",
 5: "Viernes",
 6: "Sabado",
}

console.log(diaDeLaSemana[6]);

const regresaTrue = () => {
    console.log(regresaTrue)
    return true;
}

const regresaFalse = () => {
    console.log(regresaFalse);
    return false;
}

console.log("Not o negación:")


console.log(true); //true

console.log(!true); //false

console.log(false); //false

console.log(!false); //true

console.log(regresaTrue()); //true

console.log(!regresaTrue()); //false

console.log(regresaFalse()); //false

console.log(!regresaFalse()); //true

console.log("AND")

console.log( true && true ); //true

console.log( true && false ); //false

console.log( true && !false ); //true

