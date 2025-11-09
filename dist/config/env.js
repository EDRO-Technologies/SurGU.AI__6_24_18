"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
require("dotenv/config");
const envSchema = zod_1.z.object({
    APPNAME: zod_1.z.string(),
    PORT: zod_1.z.string(),
    NODE_ENV: zod_1.z.string(),
    LOCALE: zod_1.z.string(),
    LOGIN_RATE_LIMITER_ATTEMPTS: zod_1.z.string(),
    LOGIN_RATE_LIMITER_TIMER_M: zod_1.z.string(),
    PRODUCTION_URL: zod_1.z.string(),
    CLIENT_BASE_URL: zod_1.z.string().url(),
    DATABASE_HOST: zod_1.z.string(),
    DATABASE_PORT: zod_1.z.string(),
    DATABASE_USER: zod_1.z.string(),
    DATABASE_PASSWORD: zod_1.z.string(),
    DATABASE_NAME: zod_1.z.string(),
    DATABASE_URL: zod_1.z.string().startsWith('postgresql://'),
    REDIS_HOST: zod_1.z.string(),
    REDIS_PORT: zod_1.z.string(),
    REDIS_PASSWORD: zod_1.z.string(),
    CHAT_API_URL: zod_1.z.string(),
    CHAT_API_TOKEN: zod_1.z.string()
});
exports.env = envSchema.parse(process.env);
