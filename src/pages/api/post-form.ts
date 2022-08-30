import type { NextApiResponse } from 'next';
import * as z from 'zod';
import { addUser, allowMethods, captureErrors, NextApiRequestWithUser, validateBody } from '../../middleware';
import { use } from 'next-api-route-middleware';

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
  res.status(200).json({ message: 'request was good!' });
};

export default use(captureErrors, allowMethods(['POST']), validateBody(formSchema), addUser, handler);
