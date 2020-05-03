import { Router } from 'express';

import userController from './controllers/userController';

const routes = Router();

routes.get('/', userController.index);
routes.get('/users/create', userController.create);

export default routes;