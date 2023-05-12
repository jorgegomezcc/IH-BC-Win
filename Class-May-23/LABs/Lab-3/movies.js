// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let mappingDirectors = (moviesArray.map(x => x.director));
  console.log(mappingDirectors)
  return mappingDirectors;
}

getAllDirectors(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filteredStevenSMovies = moviesArray.filter(x => x.director === "Steven Spielberg" && x.genre.includes("Drama"));
  console.log(filteredStevenSMovies);
  return filteredStevenSMovies;
}

howManyMovies(movies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0; 
  let scoresTotal = moviesArray.reduce((scoreAccum, movieScore) => scoreAccum + movieScore.score, 0);
  let mathAvgOfMovies = (scoresTotal / moviesArray.length).toFixed(2);
//  console.log(mathAvgOfMovies);
  return mathAvgOfMovies;
}

console.log(scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if ( moviesArray.length === 0 ) return 0;
  let dramaMovies = moviesArray.filter(movies => movies.genre.includes("Drama"));
  console.log(scoresAverage(dramaMovies));
  return scoresAverage(dramaMovies);
}

dramaMoviesScore(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  if (moviesArray.length === 0) return 0;
  let filteredMoviesByYear = moviesArray.filter(movies => movies.year)
  let sortByYear = filteredMoviesByYear.sort((a, b) => a.year - b.year)
  console.table(sortByYear)
  return sortByYear
}

orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  if (moviesArray.length === 0) return 0;
  let filteredMoviesByName = moviesArray.map((movies => movies.title));
  let sortByName = filteredMoviesByName.sort();
  let first20Movies = sortByName.slice(0, 20);
  console.table(first20Movies);
  return first20Movies;
}

orderAlphabetically(movies)

// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {
//   if (moviesArray-length === 0) return 0;

// }

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
