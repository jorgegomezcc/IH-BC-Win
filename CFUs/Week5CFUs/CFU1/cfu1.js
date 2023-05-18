// DOM #1
// Instrucciones
// Crea un nuevo documento HTML y pega el código inicial HTML proporcionado a continuación.
// Crea un nuevo archivo de Javascript y vincúlalo a la página HTML usando la etiqueta script. Escribirás tus consultas y lógica del DOM en este archivo.
// Usa el objeto document para seleccionar todos los elementos con la clase “box” y cambia su color de fondo a “purple”.
// Usa el objeto document para seleccionar todos los elementos con el nombre de etiqueta “p” y cambia su tamaño de fuente a “20px”.
// Usa el objeto document para crear un nuevo elemento <h2> con el texto “Hola Mundo” y añádelo al cuerpo del documento HTML.
// Alternativamente, puedes abrir un nuevo editor en CodePen y pegar en la ventana HTML todo lo que está dentro de la etiqueta body (en el archivo HTML proporcionado) y luego no es necesario establecer una conexión con el archivo JS (ventana en el editor) ya que se hace por defecto. Si estás utilizando CodePen, una vez que hayas copiado el contenido HTML en la ventana HTML, puedes empezar a trabajar en las tareas de la sección JS del editor.

const classBox = document.getElementsByClassName("box")
console.log(classBox)

const paragraphs = document.getElementsByTagName("p")
console.log(paragraphs)


for (let i = 0; i < classBox.length; i++) {
    classBox[i].style.backgroundColor = "purple";
};

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = "20px";
};

const h2 = document.createElement("h2")

h2.innerText = "Hola mundo"

document.body.appendChild(h2);



