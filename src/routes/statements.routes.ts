import { Router } from 'express';

import { CreateStatementController } from '../modules/statements/useCases/createStatement/CreateStatementController';
import { CreateTransferStatementController } from '../modules/statements/useCases/createStatement/CreateTransferStatementController';
import { GetBalanceController } from '../modules/statements/useCases/getBalance/GetBalanceController';
import { GetStatementOperationController } from '../modules/statements/useCases/getStatementOperation/GetStatementOperationController';
import { ensureAuthenticated } from '../shared/infra/http/middlwares/ensureAuthenticated';

const statementRouter = Router();
const getBalanceController = new GetBalanceController();
const createStatementController = new CreateStatementController();
const createTransferStatementController = new CreateTransferStatementController()
const getStatementOperationController = new GetStatementOperationController();

statementRouter.use(ensureAuthenticated);

statementRouter.get('/balance', getBalanceController.execute);
statementRouter.post('/deposit', createStatementController.execute);
statementRouter.post('/transfers/:user_id', createTransferStatementController.execute);
statementRouter.post('/withdraw', createStatementController.execute);
statementRouter.get('/:statement_id', getStatementOperationController.execute);

export { statementRouter };
