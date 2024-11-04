import type { Request, Response, NextFunction } from 'express';
import logger from '../logger';

export default function logResponseTime(req: Request, res: Response, next: NextFunction): void {
  const startHrTime = process.hrtime();

  res.on('finish', () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    logger.debug(`${req.path}: ${elapsedTimeInMs}ms`);
  });

  next();
}
