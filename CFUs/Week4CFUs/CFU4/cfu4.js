// Map #1 - Capitalizar ciudades
// Instrucciones
// Dado un array de ciudades, devuelve un array con la primera letra del nombre de cada ciudad en mayúscula. Puedes usar sintaxis ES5 o ES6, con la que te sientas más cómodo en este punto.


// array of cities:
const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

console.log(cities.map((city) => {
    return city[0].toLocaleUpperCase() + city.slice(1);
}
));


// Map #2 - Proyectos de clasificación
// Instrucciones
// Imagina que eres un profesor de matemáticas y tienes que calificar a tus estudiantes según su desempeño en los proyectos (40% de la calificación final) y en el examen final (60% de la calificación final). Cada estudiante está representado por un objeto que se ve así:

// {
//   name: "Student Name",
//   projectsAvg: 80,
//   finalExam: 90
// }
// Entonces, toda la clase se representa como un array de objetos (cada objeto contiene datos sobre ese estudiante). Tu tarea es devolver un nuevo array de objetos, donde cada objeto contenga solo el nombre del estudiante y su calificación final.


// La fórmula para calcular la calificación final es:

// final grade = ( final exam * 0.6 ) + ( projects average * 0.4 )

// Aquí están los datos:




const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90,
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
    finalExam: 65,
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
    finalExam: 99,
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
    finalExam: 70,
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
    finalExam: 85,
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
    finalExam: 78,
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
    finalExam: 90,
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
    finalExam: 75,
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
    finalExam: 67,
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
    finalExam: 65,
  },
];

const studentFinalGrade = students.map((student) => {
    let projectAvg = (student.firstProject + student.secondProject) / 2;
    let finalGrade = student.finalExam * 0.6 + projectAvg * 0.4
    return {
        name: student.name,
        finalGrade: Math.round(finalGrade)
    } 
}
);

console.log(studentFinalGrade);

console.log(students.name)


// Instrucciones
// Dado el siguiente arreglo de objetos que representan alimentos, calcula el número promedio de calorías para toda la lista:


const menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 },
];

const avgCalories = menu.reduce((acumm, calValue) => totalCalories =  acumm + calValue.calories, 0);
const caloriesOperation = totalCalories / menu.length;
console.log(caloriesOperation);

const TotCalories = menu.reduce((acumm, calValue) => {
    return acumm + calValue.calories
    }, 0) / menu.length
    
    console.log(TotCalories)

    // Imagina que estás desarrollando un gran sitio web de comercio electrónico. Cada producto es un objeto que tiene la siguiente estructura:


// Como puedes ver, cada producto tiene algunos comentarios y reseñas de usuarios almacenados en un arreglo llamado reviews.


// Tarea:

// Tenemos que mostrar el producto en nuestro sitio web, pero no queremos mostrar todas las reseñas. En su lugar, solo queremos mostrar la calificación promedio.

// Usando el método reduce(), calcula la calificación promedio para el producto anterior y muestra el resultado con console.log.

const product = {
    name: "AmazonBasics Apple Certified Lightning to USB Cable",
    price: 7.99,
    manufacturer: "Amazon",
    reviews: [
      { user: "Pavel Nedved", comments: "Really good!", rate: 4 },
      { user: "Alvaro Trezeguet", comments: "It lasted 2 days", rate: 1 },
      { user: "David Recoba", comments: "Awesome", rate: 5 },
      { user: "Jose Romero", comments: "Good value for the money", rate: 4 },
      { user: "Antonio Cano", comments: "It broke really fast", rate: 2 }
    ]
  };
  
  const productReview = product.reviews
  const avgProdRate = productReview.reduce((acumm, rateVal) => {
    return acumm + rateVal.rate
  }, 0) / productReview.length 

  console.log(avgProdRate);

//   Filter #1 - Filtrar números impares menores de 100
// Instrucciones
// Dado un arreglo de números, filtra (remueve) los números impares que sean menores que 100.

const numbers = [1, 60, 112, 123, 100, 99, 73];

const filtNumbers = numbers.filter(number => number % 2 === 1  && number < 100)
console.log(filtNumbers);

// Filter #2 - Filtro mayores de 21
// Instrucciones
// A partir del array de personas dado, crea un nuevo array que contenga solo a las personas que tengan 21 años o más.


const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 20 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];
 

const olderThan21 = people.filter((age) => {
    return age.age >= 21;
} )

console.log(olderThan21);

// Imagina que estás trabajando en Airbnb como desarrollador, y necesitas añadir una función de filtro que permita a los usuarios filtrar los resultados.

// Es verano, y los clientes que están buscando habitaciones quieren que el lugar tenga una piscina.

// Usando el método filter() itera sobre el siguiente array places y devuelve un nuevo array que contenga sólo lugares con una piscina (pool):



const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelona´s center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "Room near Sagrada Familia",
    price: 170,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Great house next to Camp Nou",
    price: 140,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "New apartment with 2 beds",
    price: 2000,
    type: "Entire place",
    pool: false,
    garage: true,
  },
  {
    title: "Awesome Suite",
    price: 230,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];

const placesWithPool = places.filter((poolValue) => poolValue.pool === true
)

console.log(placesWithPool);
