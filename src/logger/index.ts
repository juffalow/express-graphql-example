import winston, { format } from 'winston';
import namespace from '../services/cls';
import config from '../config';

const hookedFormat = format((info) => {
  const traceId = namespace.get('traceId');

  if (typeof traceId !== 'undefined') {
    info.traceId = traceId;
  }

  return info;
});

const redactedFormat = format((info) => {
  if (typeof info['password'] !== 'undefined') {
    info.password = '******';
  }

  if (typeof info['email'] !== 'undefined') {
    const [ name, domain ] = info.email.split('@');
    info.email = `${name.substring(0, 2)}${'*'.repeat(name.length - 2)}@${'*'.repeat(domain.length - 2)}${domain.substring(domain.length - 2)}`;
  }

  return info;
});

const logger = winston.createLogger({
  level: config.logger.level.toLowerCase(),
  transports: [
    new winston.transports.Console({
      level: config.logger.level.toLowerCase(),
      format: winston.format.combine(
        hookedFormat(),
        redactedFormat(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.json(),
        winston.format.errors({ stack: true }),
      ),
    }),
  ],
});

export default logger;
