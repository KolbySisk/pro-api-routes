import { NextApiRequest } from 'next';

export type User = { userId: string };

export type NextApiRequestWithUser = NextApiRequest & User;
