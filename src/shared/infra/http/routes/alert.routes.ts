import { SendSampleMailController } from '@modules/alert/useCases/sendSampleMail/SendSampleMailController';
import { Router } from 'express';

const alertRoutes = Router();

const sendSampleMailController = new SendSampleMailController();

alertRoutes.get('/send', sendSampleMailController.handle);

export { alertRoutes };
