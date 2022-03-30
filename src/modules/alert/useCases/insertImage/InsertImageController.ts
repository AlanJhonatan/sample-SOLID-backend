import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { InsertImageUseCase } from './InsertImageUseCase';

interface IFiles {
  filename: string;
}

class InsertImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const images = (request.files as IFiles[]) || ([] as IFiles[]);

    const imagesName = images.map((image) => image.filename);

    const insertImageUseCase = container.resolve(InsertImageUseCase);
    const links = await insertImageUseCase.execute(imagesName);

    return response.status(201).json(links);
  }
}

export { InsertImageController };
