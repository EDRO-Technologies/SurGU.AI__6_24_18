"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
exports.default = {
    schema: './src/db/drizzle/schema/**/schema.ts',
    out: './src/db/drizzle/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: config_1.default.database.postgres.url
    },
    migrations: {
        schema: 'public',
        table: 'migrations'
    }
};
