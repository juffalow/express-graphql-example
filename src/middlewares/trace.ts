import { Request, Response, NextFunction } from 'express';
import { v7 as uuidv7 } from 'uuid';
import namespace from '../services/cls';

export default function trace(req: Request, res: Response, next: NextFunction): void {
  if (req.method === 'OPTIONS') {
    next();
    return;
  }

  namespace.bind(req);
  namespace.bind(res);

  const traceId = uuidv7();

  req['traceId'] = traceId;

  namespace.run(() => {
    namespace.set('traceId', traceId);
    res.header('x-request-id', traceId)

    next();
  });
}
