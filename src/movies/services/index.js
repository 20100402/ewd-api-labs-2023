import axios from 'axios';

export default {
    getMovie: async (movieId) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_KEY}`
        );
        return response.data;
    },
    getUpcoming: async (page) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&$page=${page}`
        );
        return response.data;
    },
    getTopRated: async (page) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
        );
        return response.data;
    },
    getPopular: async (page) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
        );
        return response.data;
    },
    find: async (query) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
        );
        return response.data;
    },
};
