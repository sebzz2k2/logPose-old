const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf, json } = format;

require("dotenv").config({
  path: "../.env",
});

let logger;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const devLogger = () => {
  return createLogger({
    level: "info",
    format: combine(
      label({ label: "monitor-server" }),
      timestamp({ format: "HH:mm:ss" }),
      myFormat
    ),
    transports: [new transports.Console()],
  });
};

const debugLogger = () => {
  return createLogger({
    level: "info",
    format: combine(
      label({ label: "monitor-server" }),
      timestamp({ format: "HH:mm:ss" }),
      myFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({
        filename: "../logs/debug.log",
        level: "debug",
      }),
    ],
  });
};

const prodLogger = () => {
  return createLogger({
    format: combine(label({ label: "monitor-server" }), timestamp(), json()),
    transports: [
      new transports.File({
        filename: "../logs/error.log",
        level: "error",
      }),
    ],
  });
};

const DEBUG_LEVEL = process.env.DEBUG_LEVEL;
if (DEBUG_LEVEL === "debug") {
  logger = debugLogger();
} else if (DEBUG_LEVEL === "prod") {
  logger = prodLogger();
} else if (DEBUG_LEVEL === "dev") {
  logger = devLogger();
}

module.exports = logger;
