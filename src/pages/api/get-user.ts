import type { NextApiResponse } from 'next';
import { withErrors, withUser, withAcceptedMethods, NextApiRequestWithUser, User } from '../../middleware';

const handler = async (req: NextApiRequestWithUser, res: NextApiResponse<User>) => {
  return res.status(200).json({ userId: req.userId });
};

export default withErrors(withAcceptedMethods(['GET'], withUser(handler)));
