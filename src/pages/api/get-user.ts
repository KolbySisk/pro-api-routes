import type { NextApiResponse } from 'next';
import { use } from 'next-api-route-middleware';

import { addUser, allowMethods, captureErrors } from '../../middleware';
import { NextApiRequestWithUser, User } from '../../types';

const handler = async (req: NextApiRequestWithUser, res: NextApiResponse<User>) => {
  res.status(200).json({ userId: req.userId });
};

export default use(captureErrors, allowMethods(['GET']), addUser, handler);
