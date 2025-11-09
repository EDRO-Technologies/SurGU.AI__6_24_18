"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const connect_1 = require("../../db/drizzle/connect");
const lead_schema_1 = require("../../db/drizzle/schema/lead/lead.schema");
const getAll = async () => {
    try {
        const result = await connect_1.db
            .select({
            name: lead_schema_1.clients.name,
            phone: lead_schema_1.clients.phone,
            companyName: lead_schema_1.clients.companyName,
            email: lead_schema_1.clients.email,
            percentageOfAgreement: lead_schema_1.clients.percentageOfAgreement,
            sales: (0, drizzle_orm_1.sql) `
            COALESCE(
                jsonb_agg(
                    jsob_build_object(
                    'status', ${lead_schema_1.sales.status},
                    'price', ${lead_schema_1.sales.price},
                    'reasonOfRefusal', ${lead_schema_1.sales.reasonOfRefusal},
                    'createDate', ${lead_schema_1.sales.createDate},
                    )
                )
            )
        `
        })
            .from(lead_schema_1.clients)
            .leftJoin(lead_schema_1.sales, (0, drizzle_orm_1.eq)(lead_schema_1.clients.uid, lead_schema_1.sales.clientId));
        return result;
    }
    catch (error) {
        throw error;
    }
};
exports.getAll = getAll;
