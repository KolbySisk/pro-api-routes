import type { NextApiResponse } from 'next';
import { withErrors, withUser, withAcceptedMethods, NextApiRequestWithUser, withValidBody } from '../../middleware';
import * as z from 'zod';

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(4),
    passwordConfirm: z.string().min(4),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
  });

const handler = async (req: NextApiRequestWithUser, res: NextApiResponse<{ message: string }>) => {
  return res.status(200).json({ message: 'request was good!' });
};

export default withErrors(withAcceptedMethods(['POST'], withUser(withValidBody(formSchema, handler))));
