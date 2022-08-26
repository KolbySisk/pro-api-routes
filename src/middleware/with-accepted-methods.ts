import { Handler } from '../types';

export const withAcceptedMethods = <RequestT>(
  acceptedMethods: string[],
  handler: Handler<RequestT>
): Handler<RequestT> => {
  return (req, res) => {
    if (!acceptedMethods.includes(req.method!)) {
      return res.status(405).send({ message: 'Method not allowed.' });
    } else return handler(req, res);
  };
};
