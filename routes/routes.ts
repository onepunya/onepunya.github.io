import { Router } from 'express';
import api from './api.js';
import path from 'path';

const routes = Router();
routes.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

routes.use('/v1', api);
routes.use((_, res) => res.status(404).json({ status: 'Error', message: 'There\'s nothing here ;_;' }));

export default routes;
