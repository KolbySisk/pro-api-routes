import { NextApiRequest } from 'next';
import { Handler } from '../types';
import { getUserByCookie } from '../utils';

export type User = { userId: string };

export type NextApiRequestWithUser = NextApiRequest & User;

export const withUser = (handler: Handler<NextApiRequestWithUser>): Handler<NextApiRequestWithUser> => {
  return async (req, res) => {
    const authCookie = await getUserByCookie();

    if (authCookie) {
      req.userId = authCookie.userId;
      return handler(req, res);
    } else {
      return res.status(401).send({ message: 'Invalid auth cookie.' });
    }
  };
};
