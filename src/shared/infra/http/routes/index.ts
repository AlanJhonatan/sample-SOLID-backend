import { Router } from 'express';

import { alertRoutes } from './alert.routes';
import { imagesRoutes } from './images.routes';

const router = Router();

router.use('/images', imagesRoutes);
router.use('/alerts', alertRoutes);

export { router };
