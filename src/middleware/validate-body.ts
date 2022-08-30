import * as z from 'zod';
import { Middleware } from 'next-api-route-middleware';

export const validateBody = (zodSchema: z.ZodSchema): Middleware => {
  return async function (req, res, next) {
    const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);
    const validation = zodSchema.safeParse(body);

    if (!validation.success) {
      return res.status(400).send({
        message: validation.error,
      });
    }

    next();
  };
};
