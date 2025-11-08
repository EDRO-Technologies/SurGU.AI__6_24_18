import type { Job } from 'bullmq';

import axios from 'axios';

import config from '@/config';

import type { GetAnalyzeData } from './types/analyze.types';

import { MLDI } from './ml';

export const getAnalyze = async (job: Job<GetAnalyzeData, any>) => {
  const chatId = job.data.chatId;
  const message = job.data.message;
  const payload = {
    chatId,
    message,
    stream: false
  };

  const response = await axios.post(config.external.chat.url, payload, {
    headers: {
      Authorization: `${config.external.chat.token}`,
      'Content-Type': 'application/json'
    },
    timeout: 30000
  });

  const result = response.data;
  MLDI.mlQueue.addJob('done_analyse', result);
};
