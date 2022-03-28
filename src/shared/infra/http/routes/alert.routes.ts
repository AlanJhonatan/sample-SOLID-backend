import { SendSampleMailController } from '@modules/alert/useCases/sendSampleMail/SendSampleMailController';
import { Request, Response, Router } from 'express';

const alertRoutes = Router();

const sendSampleMail = new SendSampleMailController();

alertRoutes.get(
  '/alerts',
  async (request: Request, response: Response): Promise<Response> => {
    return response.json({ route: 'alerts' });
  }
);

export { alertRoutes };
