import express from 'express';
import MoviesController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);
    const accountsController = AccountsController(dependencies);


    router.route('/:id')
        .get(accountsController.verify, moviesController.getMovie);

    router.route('/')
        .get(moviesController.find);

    router.route('/upcoming')
        .get(moviesController.getUpcomingMovies);

    router.route('/topRated')
        .get(moviesController.getTopRatedMovies);

    router.route('/popular')
        .get(moviesController.getPopularMovies);

    return router;
};
export default createMoviesRouter;
