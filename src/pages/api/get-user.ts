import type { NextApiRequest, NextApiResponse } from 'next';

import { NextApiRequestWithUser, User, addUser, allowMethods, captureErrors } from '../../middleware';
import { use } from 'next-api-route-middleware';

const handler = async (req: NextApiRequestWithUser, res: NextApiResponse<User>) => {
  res.status(200).json({ userId: req.userId });
};

export default use(captureErrors, allowMethods(['GET']), addUser, handler);
