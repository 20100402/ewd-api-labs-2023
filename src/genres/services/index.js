import axios from 'axios';

export default {
    getGenres: async (movieId) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}`
        );
        return response.data;
    },
};
