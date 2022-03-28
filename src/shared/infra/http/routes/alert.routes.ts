import { Request, Response, Router } from 'express';

const alertRoutes = Router();

alertRoutes.get(
  '/alerts',
  async (request: Request, response: Response): Promise<Response> => {
    return response.json({ route: 'alerts' });
  }
);

export { alertRoutes };
