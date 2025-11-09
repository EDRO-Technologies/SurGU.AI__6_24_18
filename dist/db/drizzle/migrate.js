"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_js_1 = require("drizzle-orm/postgres-js");
const migrator_1 = require("drizzle-orm/postgres-js/migrator");
const node_path_1 = __importDefault(require("node:path"));
const postgres_1 = __importDefault(require("postgres"));
const config_1 = __importDefault(require("../../config"));
const db_migrate = async () => {
    const migrationClient = (0, postgres_1.default)(config_1.default.database.postgres.url, { max: 1 });
    const migrationsFolder = config_1.default.app.isProduction && config_1.default.app.isLocale
        ? node_path_1.default.join(__dirname, '../../../dist/db/drizzle/migrations')
        : node_path_1.default.join(__dirname, '../../../src/db/drizzle/migrations');
    await (0, migrator_1.migrate)((0, postgres_js_1.drizzle)(migrationClient), {
        migrationsFolder
    });
    await migrationClient.end();
    process.exit(0);
};
db_migrate();
