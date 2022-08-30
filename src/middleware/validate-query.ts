import * as z from 'zod';
import { Middleware } from 'next-api-route-middleware';

export const validateQuery = (zodSchema: z.ZodSchema): Middleware => {
  return async function (req, res, next) {
    const validation = zodSchema.safeParse(req.query);

    if (!validation.success) {
      res.status(400).send({
        message: validation.error,
      });
    }

    next();
  };
};
