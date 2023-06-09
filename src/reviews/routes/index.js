import express from 'express';
import ReviewController from '../controller'


const createReviewsRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const reviewController = ReviewController(dependencies);



    /**
     * @swagger
     * /api/reviews/{id}:
     *   get:
     *     summary: Get reviews by movie ID
     *     tags: [Reviews]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: movie Id
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: List of reviews for the movie Id
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   Author:
     *                     type: string
     *                   Excerpt:
     *                     type: string
     */
    router.route('/:id')
        .get(reviewController.getMovieReviews);

    return router;
};
export default createReviewsRouter;