"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processMlResponse = void 0;
const connect_1 = require("../../db/drizzle/connect");
const lead_schema_1 = require("../../db/drizzle/schema/lead/lead.schema");
const processMlResponse = async (job) => {
    try {
        const data = job.data;
        for (let i = 0; i <= data.length; i++) {
            const { sales: salesData, ...client } = data[i];
            const clientDB = await connect_1.db
                .insert(lead_schema_1.clients)
                .values({ ...client })
                .returning();
            const salesArr = salesData.map((item) => {
                return {
                    clientId: clientDB[0].uid,
                    ...item
                };
            });
            await connect_1.db.insert(lead_schema_1.sales).values(salesArr);
        }
    }
    catch (error) {
        throw error;
    }
};
exports.processMlResponse = processMlResponse;
