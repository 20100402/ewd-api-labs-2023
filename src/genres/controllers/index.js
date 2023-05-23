import genresService from "../services";

export default (dependencies) => {

    const getGenres = async (request, response, next) => {
        //input
        const query = request.params.id;
        // Treatment
        const genres = await genresService.getGenres(query, dependencies);
        //output
        response.status(200).json(genres);
    };

    return {
        getGenres
    };
};
