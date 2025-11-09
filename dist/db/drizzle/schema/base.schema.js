"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseSchema = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.baseSchema = {
    uid: (0, pg_core_1.uuid)('uid').defaultRandom().primaryKey().notNull(),
    createdAt: (0, pg_core_1.date)('created_at').defaultNow().notNull(),
    updatedAt: (0, pg_core_1.date)('updated_at')
        .$onUpdate(() => new Date().toISOString())
        .notNull()
};
