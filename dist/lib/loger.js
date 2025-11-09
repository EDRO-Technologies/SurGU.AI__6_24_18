"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerStream = exports.logger = void 0;
const winston_1 = require("winston");
const logFormat = winston_1.format.combine(winston_1.format.timestamp({
    format: () => {
        const date = new Date();
        const utcOffset = 5 * 60 * 60 * 1000;
        const localDate = new Date(date.getTime() + utcOffset);
        return localDate.toISOString().replace('T', ' ').substring(0, 19);
    }
}), winston_1.format.printf((info) => `[${info.timestamp}] - [${info.level.toUpperCase()}] - ${info.message}`), winston_1.format.colorize({ all: true }));
exports.logger = (0, winston_1.createLogger)({
    level: 'info',
    format: logFormat,
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({
            filename: 'app.log'
        })
    ]
});
class LoggerStream {
    write(message) {
        exports.logger.info(message.substring(0, message.lastIndexOf('\n')));
    }
}
exports.LoggerStream = LoggerStream;
