var myFavMovie = {
    title: 'Finding Neverland',
    duration: 160,
    stars: ['Johny Depp', 'Kate Winslet', 'Dustin Hofman']
};

function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    var starsString = 'Stars: ';
    for (var i = 0; i < movie.stars.length; i++) {
        starsString += movie.stars[i];
        if (i != movie.stars.length -1) {
            starsString += ', ';
        }
    }
    console.log(starsString);
}
