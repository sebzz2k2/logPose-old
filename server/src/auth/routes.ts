import {Router} from 'express';
import {login,register} from './controller'
const routes = Router();

routes.post('/login',login)
routes.post('/register',register)

export default routes;
