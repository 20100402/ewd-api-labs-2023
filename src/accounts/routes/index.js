import express from 'express';
import AccountsController from '../controllers';
import ValidationController from '../controllers/ValidationController';



const createRouter = (dependencies) => {
    const router = express.Router();
    // load controller with dependencies
    const accountsController = AccountsController(dependencies);

    const validationController = ValidationController(dependencies);

    /**
     * @swagger
     * /api/accounts:
     *   post:
     *     summary: Creating a new user account
     *     description: Create a new user account with the provided details
     *     tags: [Accounts] 
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *              type: object
     *              properties: 
     *                  firstName:
     *                      type: String
     *                  lastName:
     *                      type: String
     *                  email:
     *                      type String
     *                  password:
     *                      type: String
     *              example:
     *                 firstName: Arbaz
     *                  lastName: Ahmed
     *                  email: abz@gmail.com
     *                  password: Arbaz@95
     *     responses:
     *       201:
     *         description: User Account registered successfully
     */
    router.route('/')
        .post(validationController.validateAccount, accountsController.createAccount);

    /**
    * @swagger
    * /api/accounts:
    *   get:
    *     summary: Retrieve the list of accounts
    *     description: Get a list of all user accounts
    *     responses:
    *       200:
    *         description: A list of accounts retrieved successfully
    *         content:
    *           application/json:
    *             schema:
    *               $ref: 'src/entities/Accounts'
    *       500:
    *         description: Internal server error
    */
    router.route('/')
        .get(accountsController.listAccounts)


    /**
     * @swagger
     * /api/accounts/{id}:
     *   post:
     *     summary: Updating a new user account
     *     description: Create a new user account with the provided details
     *     tags: [Accounts] 
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *              type: object
     *              properties: 
     *                  firstName:
     *                      type: String
     *                  lastName:
     *                      type: String
     *                  email:
     *                      type String
     *                  password:
     *                      type: String
     *              example:
     *                 firstName: Arbaz
     *                  lastName: Ahmed
     *                  email: abz@gmail.com
     *                  password: Arbaz@95
     *     responses:
     *       201:
     *         description: User Account registered successfully
     */
    router.route('/:id')
        .post(validationController.validateAccount, accountsController.updateAccount);

    /**
    * @swagger
    * /api/accounts:
    *   post:
    *     summary: Creating a new user account
    *     description: Create a new user account with the provided details
    *     tags: [Accounts] 
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *              type: object
    *              properties: 
    *                  firstName:
    *                      type: String
    *                  lastName:
    *                      type: String
    *                  email:
    *                      type String
    *                  password:
    *                      type: String
    *              example:
    *                 firstName: Arbaz
    *                  lastName: Ahmed
    *                  email: abz@gmail.com
    *                  password: Arbaz@95
    *     responses:
    *       201:
    *         description: User Account registered successfully
    */
    router.route('/:id')
        .get(accountsController.getAccount)

    /**
     * @swagger
     * /api/accounts:
     *   post:
     *     summary: Creating a new user account
     *     description: Create a new user account with the provided details
     *     tags: [Accounts] 
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *              type: object
     *              properties: 
     *                  firstName:
     *                      type: String
     *                  lastName:
     *                      type: String
     *                  email:
     *                      type String
     *                  password:
     *                      type: String
     *              example:
     *                 firstName: Arbaz
     *                  lastName: Ahmed
     *                  email: abz@gmail.com
     *                  password: Arbaz@95
     *     responses:
     *       201:
     *         description: User Account registered successfully
     */
    router.route('/security/token')
        .post(accountsController.authenticateAccount);

    /**
    * @swagger
    * /api/accounts:
    *   post:
    *     summary: Creating a new user account
    *     description: Create a new user account with the provided details
    *     tags: [Accounts] 
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *              type: object
    *              properties: 
    *                  firstName:
    *                      type: String
    *                  lastName:
    *                      type: String
    *                  email:
    *                      type String
    *                  password:
    *                      type: String
    *              example:
    *                 firstName: Arbaz
    *                  lastName: Ahmed
    *                  email: abz@gmail.com
    *                  password: Arbaz@95
    *     responses:
    *       201:
    *         description: User Account registered successfully
    */
    router.route('/:id/favourites')
        .get(accountsController.getFavourites);

    /**
     * @swagger
     * /api/accounts:
     *   post:
     *     summary: Creating a new user account
     *     description: Create a new user account with the provided details
     *     tags: [Accounts] 
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *              type: object
     *              properties: 
     *                  firstName:
     *                      type: String
     *                  lastName:
     *                      type: String
     *                  email:
     *                      type String
     *                  password:
     *                      type: String
     *              example:
     *                 firstName: Arbaz
     *                  lastName: Ahmed
     *                  email: abz@gmail.com
     *                  password: Arbaz@95
     *     responses:
     *       201:
     *         description: User Account registered successfully
     */
    router.route('/:id/favourites')
        .post(accountsController.addFavourite)


    router.route('/getId')
        .get(accountsController.getId)

    return router;
};

export default createRouter;
