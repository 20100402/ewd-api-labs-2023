import dotenv from 'dotenv';
import express from 'express';
//import genresRouter from './src/genres';
import createAccountsRouter from './src/accounts/routes';
import buildDependencies from "./src/config/dependencies";
import createMoviesRouter from './src/movies/routes';
import createGenresRouter from './src/genres/routes';
import createReviewsRouter from './src/reviews/routes';
import db from './src/config/db';
import { swaggerDocSetup } from './swagger';
import errorHandler from './src/utils/ErrorHandler';

dotenv.config();

db.init();

const app = express();

const port = process.env.PORT;

const dependencies = buildDependencies();

swaggerDocSetup(app);

app.use(express.json());

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Movie API endpoints
 */
app.use('/api/movies', createMoviesRouter(dependencies));

/**
 * @swagger
 * tags:
 *   name: Genres
 *   description: Genre API endpoints
 */
app.use('/api/genres', createGenresRouter(dependencies));

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review API endpoints
 */
app.use('/api/reviews', createReviewsRouter(dependencies));

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: Account API endpoints
 */
app.use('/api/accounts', createAccountsRouter(dependencies));

app.use(errorHandler);

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});
