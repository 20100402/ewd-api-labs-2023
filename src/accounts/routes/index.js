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
     *                  firstName: xyz
     *                  lastName: abc
     *                  email: xyz@gmail.com
     *                  password: Xyz@12345
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
*   get:
*     summary: Get account by ID
*     tags: [Accounts]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: number
*         description: Account ID
*     responses:
*       200:
*         description: Success
*/
    router.route('/:id')
        .get(accountsController.getAccount)


    /**
  * @swagger
  * /api/accounts/security/token:
  *   post:
  *     summary: Authenticate account and generate token
  *     tags: [Accounts]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               email:
  *                 type: string
  *               password:
  *                 type: string
  *             example:
  *               email: xyz@xyz.com
  *               password: Test@123
  *     responses:
  *       200:
  *         description: Authenticated and token generated
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 token:
  *                   type: string
  *             example:
  *               token: ########
  *       401:
  *         description: Invalid credentials
  */
    router.route('/security/token')
        .post(accountsController.authenticateAccount);


    /**
   * @swagger
   * /api/accounts/{id}/favourites:
   *   get:
   *     summary: Get favourites of an account
   *     tags: [Accounts]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: number
   *         description: Account ID
   *     responses:
   *       200:
   *         description: List of favourites fetched
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: number
   *                 example: 52722
   *       401:
   *         description: Unauthorized
   */
    router.route('/:id/favourites')
        .get(accountsController.getFavourites);


    /**
   * @swagger
   * /api/accounts/{id}/favourites:
   *   post:
   *     summary: Add a movie to favourites
   *     tags: [Accounts]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: number
   *         description: Account ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               movieId:
   *                 type: number
   *             example:
   *               movieId: 52722
   *     responses:
   *       200:
   *         description: The movie has been added to favourites
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/accounts/entities/Account'
   *       500:
   *         description: Internal Server Error
   */
    router.route('/:id/favourites')
        .post(accountsController.addFavourite)


    router.route('/getId')
        .get(accountsController.getId)

    return router;
};

export default createRouter;
