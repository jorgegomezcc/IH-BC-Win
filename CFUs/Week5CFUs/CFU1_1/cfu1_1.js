// DOM #2
// Instrucciones
// Crea un nuevo documento HTML y pega el código inicial HTML proporcionado a continuación.
// Crea un nuevo archivo Javascript y vincúlalo a la página HTML usando la etiqueta script. Escribirás tus consultas y lógica DOM en este archivo.
// Usa el objeto document para seleccionar el elemento <h1> del archivo HTML y cambia su texto a “Cat”.
// Usa el objeto document para seleccionar el elemento con la clase “mouse” y cambia su color de fondo a “gray”.
// Usa el objeto document para crear un nuevo elemento <p> y añádelo al elemento con el identificador cat.

const h1 = document.querySelector("h1");
h1.innerText = "Cat";
document.body.appendChild(h1);

const mouseClass = document.getElementsByClassName("mouse");
for (let i = 0; i < mouseClass.length; i++) {
    mouseClass[i].style.backgroundColor = "gray";
}

const paragraphs = document.createElement("p")
paragraphs.innerText = "Hello from DOM"
const catId = document.getElementById("cat")
catId.appendChild(paragraphs)