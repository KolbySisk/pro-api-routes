import { Middleware } from 'next-api-route-middleware';
import { NextApiRequestWithUser } from '../types';
import { getUserByCookie } from '../utils';

export const addUser: Middleware<NextApiRequestWithUser> = async (req, res, next) => {
  const authCookie = await getUserByCookie();

  if (authCookie) {
    req.userId = authCookie.userId;
    next();
  } else {
    res.status(401).send({ message: 'Invalid auth cookie.' });
  }
};
