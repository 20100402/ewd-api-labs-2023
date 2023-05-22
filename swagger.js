const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        info: {
            title: 'MoviePedia',
            version: '2.0.0',
            description: 'API documentation for MoviePedia',
        },
        servers: [
            {
                yrl: 'http://localhost:8080',
            },
        ],
    },
    apis: ['./index.js', './src/movies/routes/index.js', './src/genres/routes/index.js', './src/reviews/routes/index.js', './src/accounts/routes/index.js'], // Path to the API routes
};

const specs = swaggerJsDoc(options);

export const swaggerDocSetup = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};