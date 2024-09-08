//Write a program that creates an array of your favorite movies. Add two more movies using push, remove the first movie using shift, and then use map to print each movie title in uppercase.

let movie = ["Inception", "The Nun", "Interstellar"];
movie.push("The Conjuring", "Hereditary");
movie.shift();
movie.map(movie => console.log(movie.toUpperCase()));
