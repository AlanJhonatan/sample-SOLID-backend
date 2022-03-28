import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SendSampleMailUseCase } from './SendSampleMailUseCase';

class SendSampleMailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const sendSampleMailUseCase = container.resolve(SendSampleMailUseCase);

    await sendSampleMailUseCase.execute();

    return response.send();
  }
}

export { SendSampleMailController };
