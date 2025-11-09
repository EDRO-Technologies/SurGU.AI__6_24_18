"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.DI = exports.app = void 0;
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const queue_1 = require("./bullmq/queue");
const worker_1 = require("./bullmq/worker");
const worker_router_1 = __importDefault(require("./bullmq/worker-router"));
const config_1 = __importDefault(require("./config"));
const redis_1 = __importDefault(require("./db/redis"));
const loger_1 = require("./lib/loger");
const reponse_1 = require("./lib/reponse");
const ml_1 = require("./ml-service/ml");
const api_routes_1 = __importDefault(require("./modules/api.routes"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const custom_error_1 = require("./utils/custom_error");
const http_status_1 = require("./utils/enums/http-status");
exports.app = (0, express_1.default)();
const port = config_1.default.app.port;
exports.DI = {};
exports.init = (async () => {
    swagger_json_1.default.host =
        config_1.default.app.isProduction && !config_1.default.app.isLocale
            ? config_1.default.app.productionUrl
            : `localhost:${port}`;
    exports.app.use((0, cors_1.default)(config_1.default.cors));
    exports.app.use(express_1.default.json());
    exports.app.use((0, cookie_parser_1.default)());
    exports.app.use((0, morgan_1.default)('dev', { stream: new loger_1.LoggerStream() }));
    exports.app.use('/api', api_routes_1.default);
    exports.app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    exports.app.disable('x-powered-by');
    exports.app.disable('etag');
    exports.app.use((_req, res, next) => {
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('X-Frame-Options', 'deny');
        res.setHeader('Content-Security-Policy', "default-src 'none'");
        res.setHeader('Referrer-Policy', 'no-referrer');
        res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
        res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
        res.setHeader('Feature-Policy', "geolocation 'none'; microphone 'none'; camera 'none'");
        res.removeHeader('Server');
        next();
    });
    exports.app.use((_req, _res, next) => {
        next(new custom_error_1.CustomError(404, `endpoint ${_req.path} not found`));
    });
    exports.app.use((err, _req, res, _next) => {
        const statusCode = err.statusCode || 500;
        const message = err.message || 'Internal Server Error.';
        loger_1.logger.error(message);
        _next();
        (0, reponse_1.sendResponse)(res, statusCode, message);
    });
    exports.app.use((err, req, res, next) => {
        loger_1.logger.error(err.stack);
        next();
        (0, reponse_1.sendResponse)(res, http_status_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Something went wrong...');
    });
    redis_1.default.connect();
    exports.DI.workerRouter = new worker_router_1.default();
    const redisConnectionOptions = {
        host: config_1.default.database.redis.host,
        port: +config_1.default.database.redis.port,
        password: config_1.default.database.redis.password
    };
    const scrapperQueue = new queue_1.QueueFactory('scrapper', {
        redis: redisConnectionOptions
    });
    const mlQueue = new queue_1.QueueFactory('ml', { redis: redisConnectionOptions });
    const scrapperWorker = new worker_1.WorkerFactory('scrapper', exports.DI.workerRouter.getDynamicProcessor(), {
        redis: redisConnectionOptions
    });
    const mlWorker = new worker_1.WorkerFactory('ml', exports.DI.workerRouter.getDynamicProcessor(), {
        redis: redisConnectionOptions
    });
    exports.DI.server = exports.app.listen(port, () => loger_1.logger.info(`listening in port:${port}`));
    exports.DI.mlQueue = mlQueue;
    exports.DI.scrapperQueue = scrapperQueue;
    exports.DI.mlWorker = scrapperWorker;
    exports.DI.scrapperWorker = mlWorker;
    await (0, ml_1.initMl)();
})();
