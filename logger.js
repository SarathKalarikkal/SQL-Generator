import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    colorize(),
    timestamp(),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

export default logger;
