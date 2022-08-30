import { NextApiRequest, NextApiResponse } from 'next';

export type Handler<RequestT = NextApiRequest> = (req: RequestT, res: NextApiResponse) => void;
