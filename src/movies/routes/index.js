import express from 'express';
import MoviesController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);
    const accountsController = AccountsController(dependencies);




    router.get('/', moviesController.find);

    router.get('/upcoming', moviesController.getUpcoming);

    router.get('/topRated', moviesController.getTopRated);

    router.get('/popular', moviesController.getPopular);

    router.get('/:id', accountsController.verify, moviesController.getMovie);

    return router;
};
export default createMoviesRouter;
