"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerRouter = void 0;
class WorkerRouter {
    constructor() {
        this.processorList = [];
    }
    add(opts) {
        if (this.processorList.find((p) => p.prefix === opts.prefix)) {
            throw new Error(`Processor with prefix \"${opts.prefix}\" already exists`);
        }
        this.processorList.push(opts);
    }
    getProcessor(prefix) {
        const found = this.processorList.find((item) => item.prefix === prefix);
        if (!found) {
            throw new Error(`No processor found for prefix: ${prefix}`);
        }
        return found.func;
    }
    getDynamicProcessor() {
        return async (job) => {
            const prefix = job.data.prefix;
            if (!prefix) {
                throw new Error('Job does not contain prefix field');
            }
            const processor = this.getProcessor(prefix);
            return processor(job);
        };
    }
    listProcessors() {
        return this.processorList.map((p) => p.prefix);
    }
}
exports.WorkerRouter = WorkerRouter;
exports.default = WorkerRouter;
