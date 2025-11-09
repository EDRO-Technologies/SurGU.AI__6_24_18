"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const config_1 = __importDefault(require("../../config"));
const pool = new pg_1.Pool({
    host: config_1.default.database.postgres.host,
    port: +config_1.default.database.postgres.port,
    user: config_1.default.database.postgres.user,
    password: config_1.default.database.postgres.password,
    database: config_1.default.database.postgres.database
});
exports.db = (0, node_postgres_1.drizzle)(pool);
