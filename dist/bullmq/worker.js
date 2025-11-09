"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerFactory = void 0;
const bullmq_1 = require("../bullmq");
const loger_1 = require("../lib/loger");
class WorkerFactory {
    constructor(name, processor, opts, workerOptions) {
        this.name = name;
        this.opts = opts;
        this.worker = new bullmq_1.Worker(this.name, async (job) => {
            try {
                return await processor(job);
            }
            catch (err) {
                loger_1.logger.error(`[Worker:${this.name}] job failed:`, err);
                throw err;
            }
        }, {
            connection: opts.redis,
            ...workerOptions
        });
        this.worker.on('error', (err) => {
            loger_1.logger.error(`[Worker:${this.name}] error:`, err);
        });
        this.worker.on('completed', (job) => {
            loger_1.logger.info(`[Worker:${this.name}] completed job ${job.id}`);
        });
        this.worker.on('failed', (job, err) => {
            loger_1.logger.warn(`[Worker:${this.name}] failed job ${job?.id}:`, err.message);
        });
    }
    async close() {
        await this.worker.close();
    }
}
exports.WorkerFactory = WorkerFactory;
