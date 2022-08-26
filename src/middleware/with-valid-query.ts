import * as z from 'zod';
import { Handler } from '../types';

export const withValidBody = <RequestT>(zodSchema: z.ZodSchema, handler: Handler<RequestT>): Handler<RequestT> => {
  return async (req, res) => {
    const validation = zodSchema.safeParse(req.query);

    if (!validation.success) {
      return res.status(400).send({
        message: validation.error,
      });
    }

    return handler(req, res);
  };
};
