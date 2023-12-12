import { createLogger, format, transports, Logger } from "winston";
const { combine, timestamp, label, printf, json } = format;
const SERVICE_NAME: string = process.env.NAKAMA_NAME as string;
const ROOT_DIR = process.env.ROOT_DIR;
const LOG_DIR = `${ROOT_DIR}/logs`;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const devLogger = (): Logger => {
  return createLogger({
    level: "info",
    format: combine(
      label({ label: SERVICE_NAME }),
      timestamp({ format: "HH:mm:ss" }),
      myFormat
    ),
    transports: [new transports.Console()],
  });
};

const debugLogger = (): Logger => {
  return createLogger({
    level: "info",
    format: combine(
      label({ label: SERVICE_NAME }),
      timestamp({ format: "HH:mm:ss" }),
      myFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({
        filename: `${LOG_DIR}/${SERVICE_NAME}/debug.log`,
        level: "debug",
      }),
    ],
  });
};

const prodLogger = (): Logger => {
  return createLogger({
    format: combine(label({ label: SERVICE_NAME }), timestamp(), json()),
    transports: [
      new transports.File({
        filename: `${LOG_DIR}/error.log`,
        level: "error",
      }),
    ],
  });
};

let logger: Logger = devLogger();
const DEBUG_LEVEL = process.env.DEBUG_LEVEL;
if (DEBUG_LEVEL === "debug") {
  logger = debugLogger();
} else if (DEBUG_LEVEL === "prod") {
  logger = prodLogger();
}
export default logger;
