"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, statusCode, message) => {
    res.status(statusCode).json({ statusCode, message });
};
exports.sendResponse = sendResponse;
