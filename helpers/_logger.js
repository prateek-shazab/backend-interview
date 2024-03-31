require('dotenv').config();

const path = require('path');
const util = require('util');
const winston = require('winston');

require('winston-daily-rotate-file');

const ARGS_CONCAT = ', ';
const DATE_PATTERN = 'YYYY-MM-DD';
// ** Format shall be: { hello: 'hello' }
const LOGGING_LEVELS = Object.keys(winston.config.syslog.levels).reduce(
  (acc, logLevel) => ({
    ...acc,
    [logLevel]: logLevel,
  }),
  {}
);
const { LOG_PATH } = process.env;

const WinFormat = winston.format;
const WinTransports = winston.transports;

/**
 * This filter helps ensure that we maintain log files for log levels we want. Ex.: errors only go in error-*.log and not also in debug-*.log
 * @param {Array<string>} reqLevel
 * @returns
 */
const WinFormatFilter = (reqLevel) =>
  WinFormat((info) => (reqLevel.includes(info.level) ? info : false));

/**
 * Defines the format for the log
 * @param {Array<string>} reqLevel
 * @returns
 */
const logFormat = (reqLevel = []) => {
  return WinFormat.combine(
    WinFormatFilter(reqLevel)(),
    WinFormat.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    WinFormat.prettyPrint(),
    WinFormat.align(),
    WinFormat.printf((info) => {
      const infoLevel =
        info.level === LOGGING_LEVELS.warning
          ? LOGGING_LEVELS.warning.slice(0, 4)
          : info.level;
      return `[${info.timestamp}] [${infoLevel}]: ${info.message}`;
    })
  );
};

const COMMON_CONFIG = {
  datePattern: DATE_PATTERN,
  lazy: true,
  maxSize: '20m',
};

const logger = winston.createLogger({
  level: 'debug',
  levels: winston.config.syslog.levels,
  transports: [
    // ** error
    new WinTransports.DailyRotateFile({
      ...COMMON_CONFIG,
      filename: path.join(LOG_PATH, 'error-%DATE%.log'),
      format: logFormat([LOGGING_LEVELS.error]),
      level: LOGGING_LEVELS.error,
    }),
    // ** warning
    new WinTransports.DailyRotateFile({
      ...COMMON_CONFIG,
      filename: path.join(LOG_PATH, 'warning-%DATE%.log'),
      format: logFormat([LOGGING_LEVELS.warning]),
      level: LOGGING_LEVELS.warning,
    }),
    // ** debug => debug + info logs
    new WinTransports.DailyRotateFile({
      ...COMMON_CONFIG,
      filename: path.join(LOG_PATH, 'debug-%DATE%.log'),
      format: logFormat([LOGGING_LEVELS.debug, LOGGING_LEVELS.info]),
      level: LOGGING_LEVELS.debug,
    }),
    // ** console
    new WinTransports.Console({
      format: logFormat(Object.values(LOGGING_LEVELS)),
      level: LOGGING_LEVELS.debug,
    }),
  ],
  exceptionHandlers: [
    new WinTransports.DailyRotateFile({
      ...COMMON_CONFIG,
      filename: path.join(LOG_PATH, 'exception-%DATE%.log'),
    }),
  ],
  rejectionHandlers: [
    new WinTransports.DailyRotateFile({
      ...COMMON_CONFIG,
      filename: path.join(LOG_PATH, 'rejection-%DATE%.log'),
    }),
  ],
});

logger.error = (errorSource, error, ...args) => {
  const errArg = error?.stack || error?.message || error || '';
  const errorMessage = `${errorSource} ${errArg} ${args.join(ARGS_CONCAT)}`;
  logger.log('error', errorMessage);
};

logger.info = (infoSource, ...args) => {
  const infoMessage = `${infoSource} ${args.join(ARGS_CONCAT)}`;
  logger.log('info', infoMessage);
};

logger.debug = (debugSource, ...args) => {
  const debugMessage = `${debugSource} ${args.join(ARGS_CONCAT)}`;
  logger.log('debug', debugMessage);
};

logger.warn = (warnSource, ...args) => {
  const warnMessage = `${warnSource} ${args.join(ARGS_CONCAT)}`;
  logger.log('warn', warnMessage);
};

logger.info('Winston logger initialized');

process.on('uncaughtException', (error) => {
  const _ = util.inspect(error, { showHidden: false }); // ** errorDetails: Not needed at the moment
  logger.error('Uncaught exception: ', error);
});

// ** _promise is not being used
process.on('unhandledRejection', (reason, _promise) => {
  const _ = util.inspect(reason, { showHidden: false }); // ** errorDetails: Not needed at the moment
  logger.error('Unhandled rejection: ', reason);
});

module.exports = logger;
