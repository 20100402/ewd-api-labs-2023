import express from 'express';
import GenresController from '../controllers';

const createGenresRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const genresController = GenresController(dependencies);

    /**
    * @swagger
    * /api/genres:
    *   get:
    *     summary: Get the list of genres
    *     tags: [Genres]
    *     responses:
    *       200:
    *         description: List of genres
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
    *
    */
    router.route('/')
        .get(genresController.getGenres);

    return router;
};
export default createGenresRouter;
