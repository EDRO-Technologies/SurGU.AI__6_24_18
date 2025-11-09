"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnalyze = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
const ml_1 = require("./ml");
const getAnalyze = async (job) => {
    const chatId = job.data.chatId;
    const message = job.data.message;
    const payload = {
        chatId,
        message,
        stream: false
    };
    const response = await axios_1.default.post(config_1.default.external.chat.url, payload, {
        headers: {
            Authorization: `${config_1.default.external.chat.token}`,
            'Content-Type': 'application/json'
        },
        timeout: 30000
    });
    const result = response.data;
    ml_1.MLDI.mlQueue.addJob('done_analyse', result);
};
exports.getAnalyze = getAnalyze;
