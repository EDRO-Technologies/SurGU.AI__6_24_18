"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
const http_messages_1 = require("./http_messages");
class CustomError extends Error {
    constructor(statusCode, customMessage) {
        const defaultMessage = http_messages_1.httpMessages[statusCode];
        const message = customMessage ? `${defaultMessage}: ${customMessage}` : defaultMessage;
        super(message);
        this.statusCode = statusCode;
    }
}
exports.CustomError = CustomError;
