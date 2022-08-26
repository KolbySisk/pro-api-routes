import { Handler } from '../types';

export const withErrors = <RequestT>(handler: Handler<RequestT>): Handler<RequestT> => {
  return async (req, res) => {
    try {
      return handler(req, res);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Server error!' });
    }
  };
};
