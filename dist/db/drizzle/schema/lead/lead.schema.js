"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sales = exports.clients = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const base_schema_1 = require("../base.schema");
exports.clients = (0, pg_core_1.pgTable)('clients', {
    ...base_schema_1.baseSchema,
    name: (0, pg_core_1.text)('name').notNull(),
    phone: (0, pg_core_1.text)('phone'),
    companyName: (0, pg_core_1.text)('company_name'),
    email: (0, pg_core_1.text)('email'),
    percentageOfAgreement: (0, pg_core_1.integer)('percentage_of_agreement').default(0)
}, (table) => ({
    clientsPhoneUnique: (0, pg_core_1.unique)('clients_phone_unique').on(table.phone),
    clientsEmailUnique: (0, pg_core_1.unique)('clients_email_unique').on(table.email)
}));
exports.sales = (0, pg_core_1.pgTable)('sales', {
    ...base_schema_1.baseSchema,
    clientId: (0, pg_core_1.uuid)('client_id')
        .references(() => exports.clients.uid, { onDelete: 'cascade' })
        .notNull(),
    status: (0, pg_core_1.text)('status').notNull(),
    name: (0, pg_core_1.text)('name').notNull(),
    price: (0, pg_core_1.integer)('price').notNull(),
    reasonOfRefusal: (0, pg_core_1.text)('reason_of_refusal'),
    createDate: (0, pg_core_1.date)('create_date').defaultNow().notNull()
});
