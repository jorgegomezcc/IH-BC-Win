// DOM Manipulation #1 - Estableciendo atributos de elementos
// Instrucciones
// Crea un nuevo documento HTML y pega el código inicial de HTML proporcionado a continuación.
// Crea un nuevo archivo Javascript y vincúlalo a la página HTML usando la etiqueta script. Escribirás tus consultas DOM y lógica en este archivo.
// Usa el objeto document para seleccionar el elemento a con el id “google-link” y establece su atributo href en “http://www.google.com”.


let googleLink = document.getElementById("google-link")

googleLink.href = "http://www.google.com"

// Manipulación del DOM #2 - Creación del atributo de un nuevo elemento
// Instrucciones
// Continúa utilizando el HTML proporcionado en el ejercicio anterior. Esta vez, tu tarea es acceder al mismo elemento a y actualizar su atributo target. Establece el valor del atributo target en "_blank" para abrir la nueva página en una nueva pestaña de tu navegador cuando se haga clic en el enlace.

googleLink.target = "_blank"

// Manipulación DOM #3 - Eliminar el atributo de un elemento existente
// Instrucciones
// Dado el código HTML proporcionado, ¿cómo eliminaría el atributo class del elemento <p>?

// <div>
//   <p class="example-class">This is a sample paragraph.</p>
// </div>

let contentP = document.querySelector("p");
contentP.removeAttribute("class")

// Instrucciones

// Crea dos nodos en tu archivo de JavaScript:
// Un elemento p.
// Un nodo de texto, con el valor de texto “Hi there! I am using JavaScript” ("¡Hola! Estoy usando JavaScript").
// Agrega el nodo de texto al elemento p y luego agrega el elemento p al DOM para que se muestre en la página.

let createP = document.createElement("p")

let textNode = document.createTextNode("¡Hola! Estoy usando JavaScript")

createP.appendChild(textNode)

document.body.appendChild(createP)

// ¿cómo insertaría un elemento input antes del button con el id “add-item-button”?

let buttonId = document.getElementById("add-item-button");
let input = document.createElement("imput");

input.setAttribute("type", "text");
input.setAttribute("placeholder", "enter an item");

let parent = buttonId.parentNode;

parent.insertBefore(input, buttonId);

// Agrega un escuchador de evento de clic al button con el id add-item-button.
// Cuando se haga clic en el botón, se debe agregar un nuevo elemento li al DOM que contenga el número de orden como contenido de texto. Por ejemplo, la primera vez que se haga clic en el botón, aparecerá el primer elemento <li> en la lista con el texto “Item number 1” (“Número de artículo 1”). La segunda vez que se haga clic en el botón, se debe agregar otro elemento <li> con el texto “Item number 2” (“Número de artículo 2”) a la lista, y así sucesivamente.

let itemList = document.getElementById("items-list"); // Creamos una variable a la que asignamos el elemento con el id indicado

let itemNumber = 1; // creamos una variable para el numero a añadir a cada linea de la lista que creamos

buttonId.addEventListener("click", () => {                       //añadimos el event listener a la variable del elemento al que queremos manioular
    const newItem = document.createElement("li");                   // creamos una variable con la que crearemos el elemento para añadirlo 
    newItem.textContent = `Número de articulo ${itemNumber}`;           //a dicha variable le aplicamos el metodo textContent para ñadir el texto que queremos 
    itemList.appendChild(newItem);                                          //hacemos un appendChild a la variable de la lista con el argumento con la variable que contiene el texto creado
    itemNumber++;                                                               // a la variable itembumber le añadimos un "++" para que sume uno por cada linea que se agrega
});

// El objetivo de este ejercicio es agregar un event listener de clic a cada uno de los elementos li en una lista de compras. Cuando se hace clic en cualquier elemento li, deberíamos ver el texto del elemento impreso en la consola.

// Iteración 1: Identificar el elemento(s) objetivo

// En su HTML, localice “My Shopping List” (“Mi lista de compras”). Como tiene varias listas de compras, no puede simplemente apuntar a todos los elementos li. En su lugar, debe apuntar a la lista desordenada con un nombre de clase shopping-list. Puede utilizar querySelector() para hacer esto.


// Iteración 2: Adjuntar el evento de clic a los elementos hijos

// Una vez que haya localizado el elemento objetivo, puede adjuntar un event listener de clic a cada uno de los elementos li dentro de la lista. Puede utilizar el método querySelectorAll para seleccionar todos los elementos li dentro de la clase shopping-list. Itere sobre estos elementos usando un bucle y adjunte un event listener de clic a cada uno de ellos.


// Iteración 3: Registrar el contenido de texto del elemento

// Una vez que se hace clic en un elemento li, use la propiedad textContent para acceder al texto dentro de ese elemento y regístrelo en la consola utilizando el método console.log().


// Bonus

// Trate de modificar el código anterior y, en lugar de imprimir el texto del elemento clickeado, elimine ese elemento del DOM.

let shoppingList = document.querySelector(".shopping-list")

let listElements = shoppingList.querySelectorAll("li")

listElements.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(item.textContent);
    });
});

// BONUS

listElements.forEach((item) => {
    item.addEventListener("click", () => {
        item.remove();
    });
});

