import { Request, Response, Router } from 'express';
import multer from 'multer';

import config from '../../../../config/upload';
import { InsertImageController } from '../../../../modules/alert/useCases/insertImage/InsertImageController';

const imagesRoutes = Router();

const insertImageController = new InsertImageController();

const upload = multer(config);

imagesRoutes.post(
  '/insert',
  upload.array('images'),
  insertImageController.handle
);

export { imagesRoutes };
