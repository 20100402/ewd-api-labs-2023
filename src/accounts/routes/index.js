import express from 'express';
import AccountsController from '../controllers';

const createRouter = (dependencies) => {
    const router = express.Router();
    // load controller with dependencies
    const accountsController = AccountsController(dependencies);

    router.route('/')
        .post(accountsController.createAccount)
        .get(accountsController.listAccounts);

    router.route('/:id')
        .get(accountsController.getAccount)
        .post(accountsController.updateAccount);

    return router;
};
export default createRouter;
