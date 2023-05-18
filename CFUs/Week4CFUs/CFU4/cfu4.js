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
