import { Middleware } from 'next-api-route-middleware';

export const allowMethods = (allowedMethods: string[]): Middleware => {
  return async function (req, res, next) {
    if (allowedMethods.includes(req.method!) || req.method == 'OPTIONS') {
      next();
    } else {
      res.status(405).send({ message: 'Method not allowed.' });
    }
  };
};
