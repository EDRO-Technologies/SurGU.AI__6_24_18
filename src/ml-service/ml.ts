import config from '@/config';

import type { RedisConnectionOptions } from '../bullmq/types/options';

import { QueueFactory } from '../bullmq/queue';
import { WorkerFactory } from '../bullmq/worker';
import WorkerRouter from '../bullmq/worker-router';

export const MLDI = {} as {
  mlQueue: QueueFactory;
  mlWorker: WorkerFactory;
  workerRouter: WorkerRouter;
};

export const initMl = async () => {
  const redisConnectionOptions: RedisConnectionOptions = {
    host: config.database.redis.host,
    port: +config.database.redis.port,
    password: config.database.redis.password
  };
  MLDI.workerRouter = new WorkerRouter();
  MLDI.mlQueue = new QueueFactory('ml', { redis: redisConnectionOptions });
  MLDI.mlWorker = new WorkerFactory('ml', MLDI.workerRouter.getDynamicProcessor(), {
    redis: redisConnectionOptions
  });
};
