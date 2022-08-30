import { NextApiRequest } from 'next';
import { Middleware } from 'next-api-route-middleware';

import { getUserByCookie } from '../utils';

export type User = { userId: string };

export type NextApiRequestWithUser = NextApiRequest & User;

export const addUser: Middleware<NextApiRequestWithUser> = async (req, res, next) => {
  const authCookie = await getUserByCookie();

  if (authCookie) {
    req.userId = authCookie.userId;
    next();
  } else {
    res.status(401).send({ message: 'Invalid auth cookie.' });
  }
};
