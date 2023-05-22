import express from 'express';
import GenresController from '../controllers';

const createGenresRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const genresController = GenresController(dependencies);

    router.route('/')
        .get(genresController.getGenres);

    return router;
};
export default createGenresRouter;
