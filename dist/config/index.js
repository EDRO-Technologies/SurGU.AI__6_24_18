"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
const isProduction = env_1.env.NODE_ENV === 'prod';
const isLocale = env_1.env.LOCALE === 'true';
exports.default = {
    app: {
        name: env_1.env.APPNAME,
        isProduction,
        isLocale,
        port: env_1.env.PORT || 8080,
        productionUrl: env_1.env.PRODUCTION_URL || `localhost:${env_1.env.PORT}`
    },
    cors: {
        origin: ['http://localhost:8000', 'http://127.0.0.1:8000', env_1.env.CLIENT_BASE_URL],
        credentials: true
    },
    database: {
        postgres: {
            host: env_1.env.DATABASE_HOST,
            port: env_1.env.DATABASE_PORT,
            user: env_1.env.DATABASE_USER,
            password: env_1.env.DATABASE_PASSWORD,
            database: env_1.env.DATABASE_NAME,
            url: env_1.env.DATABASE_URL
        },
        redis: {
            host: env_1.env.REDIS_HOST,
            port: env_1.env.REDIS_PORT,
            password: env_1.env.REDIS_PASSWORD
        }
    },
    external: {
        chat: {
            token: env_1.env.CHAT_API_TOKEN,
            url: env_1.env.CHAT_API_URL
        }
    }
};
