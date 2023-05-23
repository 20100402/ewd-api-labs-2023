import express from 'express';
import MoviesController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);
    const accountsController = AccountsController(dependencies);



    /**
    * @swagger
    * /api/movies:
    *   get:
    *     summary: Get the list of all movies
    *     tags: [Movies]
    *     responses:
    *       200:
    *         description: List of all movies
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 type: object
    *                 properties:
    *                   id:
    *                     type: integer
    *                   name:
    *                     type: string
    *                   imagePath:
    *                     type: string
    */
    router.get('/', moviesController.find);


    /**
    * @swagger
    * /api/movies/upcoming:
    *   get:
    *     summary: fetching the list of upcoming movies
    *     tags: [Movies]
    *     responses:
    *       200:
    *         description: List of upcoming movies
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 type: object
    *                 properties:
    *                   id:
    *                     type: integer
    *                     description: The unique identifier of the movie
    *                   name:
    *                     type: string
    *                     description: The name of the movie
    */
    router.get('/upcoming', moviesController.getUpcoming);


    /**
    * @swagger
    * /api/movies/topRated:
    *   get:
    *     summary: fetching the list of top rated movies
    *     tags: [Movies]
    *     responses:
    *       200:
    *         description: List of top rated movies
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 type: object
    *                 properties:
    *                   id:
    *                     type: integer
    *                     description: The unique identifier of the movie
    *                   name:
    *                     type: string
    *                     description: The name of the movie
    */
    router.get('/topRated', moviesController.getTopRated);


    /**
    * @swagger
    * /api/movies/popular:
    *   get:
    *     summary: fetching the list of popular movies
    *     tags: [Movies]
    *     responses:
    *       200:
    *         description: List of popular movies
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 type: object
    *                 properties:
    *                   id:
    *                     type: integer
    *                     description: The unique identifier of the movie
    *                   name:
    *                     type: string
    *                     description: The name of the movie
    */
    router.get('/popular', moviesController.getPopular);


    /**
    * @swagger
    * /api/movies/{id}:
    *   get:
    *     summary: Retrieve a movie by movie Id
    *     tags: [Movies]
    *     parameters:
    *       - in: path
    *         name: id
    *         required: true
    *         description: movie Id
    *         schema:
    *           type: integer
    *     responses:
    *       200:
    *         description: Movie retrieved successfully
    *         content:
    *           application/json:
    *             schema:
    *               type: object
    *               properties:
    *                 id:
    *                   type: integer
    *                 name:
    *                   type: string
    *                 imagePath:
    *                   type: string
    */
    router.get('/:id', accountsController.verify, moviesController.getMovie);

    return router;
};
export default createMoviesRouter;
