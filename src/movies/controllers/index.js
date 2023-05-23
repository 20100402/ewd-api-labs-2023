import moviesService from "./../services";

export default (dependencies) => {

    const getMovie = async (request, response, next) => {
        //input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovie(movieId, dependencies);
        //output
        response.status(200).json(movie);
    };
    const getUpcoming = async (request, response, next) => {
        //input
        const query = request.query;
        // Treatment
        console.log(query);
        const upcomingmovies = await moviesService.find(query, dependencies);
        // output
        response.status(200).json(upcomingmovies);
    };
    const getTopRated = async (request, response, next) => {
        //input
        const page = request.query.page;
        // Treatment
        const movies = await moviesService.getTopRated(page, dependencies);
        // output
        response.status(200).json(movies);
    };
    const getPopular = async (request, response, next) => {
        //input
        const page = request.query.page;
        // Treatment
        const movies = await moviesService.getPopular(page, dependencies);
        // output
        response.status(200).json(movies);
    };
    const find = async (request, response, next) => {
        //input
        const query = request.query;
        // Treatment
        const movies = await moviesService.find(query, dependencies);
        //output
        response.status(200).json(movies);
    };

    return {
        getMovie,
        getUpcoming,
        getTopRated,
        getPopular,
        find,
    };
};
