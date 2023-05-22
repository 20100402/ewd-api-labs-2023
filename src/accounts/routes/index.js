import express from 'express';
import AccountsController from '../controllers';
import ValidationController from '../controllers/ValidationController';


const createRouter = (dependencies) => {
    const router = express.Router();
    // load controller with dependencies
    const accountsController = AccountsController(dependencies);

    const validationController = ValidationController(dependencies);


    router.route('/')
        .get(accountsController.listAccounts)
        .post(validationController.validateAccount, accountsController.createAccount);

    router.route('/:id')
        .get(accountsController.getAccount)
        .post(accountsController.updateAccount);

    router.route('/security/token')
        .post(accountsController.authenticateAccount);

    router.route('/:id/favourites')
        .post(accountsController.addFavourite)
        .get(accountsController.getFavourites);

    return router;
};

export default createRouter;
