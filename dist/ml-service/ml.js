"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMl = exports.MLDI = void 0;
const config_1 = __importDefault(require("../config"));
const queue_1 = require("../bullmq/queue");
const worker_1 = require("../bullmq/worker");
const worker_router_1 = __importDefault(require("../bullmq/worker-router"));
exports.MLDI = {};
const initMl = async () => {
    const redisConnectionOptions = {
        host: config_1.default.database.redis.host,
        port: +config_1.default.database.redis.port,
        password: config_1.default.database.redis.password
    };
    exports.MLDI.workerRouter = new worker_router_1.default();
    exports.MLDI.mlQueue = new queue_1.QueueFactory('ml', { redis: redisConnectionOptions });
    exports.MLDI.mlWorker = new worker_1.WorkerFactory('ml', exports.MLDI.workerRouter.getDynamicProcessor(), {
        redis: redisConnectionOptions
    });
};
exports.initMl = initMl;
