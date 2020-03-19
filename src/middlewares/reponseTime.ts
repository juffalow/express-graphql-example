export default function logResponseTime(req, res, next) {
  const startHrTime = process.hrtime();

  res.on('finish', () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    // tslint:disable-next-line:no-console
    console.log(`${req.path}: ${elapsedTimeInMs}ms`);
  });

  next();
};
