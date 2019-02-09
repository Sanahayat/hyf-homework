// ----Exercise 2----

//Fetching Movies

const fetchedMovies = new Promise(resolve => {
    fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
        .then(response => response.json())
        .then(movies => {
            resolve(movies);
        })

})


fetchedMovies.then((movies) => {                                         //Creating array of long movies!
        let longMovies = movies.filter(movie => movie.running_times > 20000);
        console.log(longMovies);
        return longMovies;
    }).then((longMoviesArray) => {                                          //creating array of only titles of long movies!
        let longMovieTitles = longMoviesArray.map( movie => movie.title);
        console.log(longMovieTitles);
    });

fetchedMovies.then((movies) => {                                           //Log out an array of bad movies
    let badMovies = movies.filter(movie => movie.rating < 5);
    console.log(badMovies);
    return badMovies;
}).then( (badMovies) => {                                                   //Log out an array of bad movies since year 2000
    let badMoviesSince2000 = badMovies.filter( movie => movie.year >= 2000 );
    console.log(badMoviesSince2000);
    return badMoviesSince2000;
}).then( (badMoviesSince2000) => {                                          //only log the titles of the bad movies since year 2000
    let TitlesOfBadMoviesSince2000 = badMoviesSince2000.map( movie => movie.title );
    console.log(TitlesOfBadMoviesSince2000);
})

