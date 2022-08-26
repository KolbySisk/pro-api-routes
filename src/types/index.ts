import { NextApiRequest, NextApiResponse } from 'next';

export type Handler<RequestT = void> = (req: NextApiRequest & RequestT, res: NextApiResponse) => void;
