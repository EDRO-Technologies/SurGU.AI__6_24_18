import type { Job } from 'bullmq';

import { db } from '@/db/drizzle/connect';
import { clients } from '@/db/drizzle/schema/lead/lead.schema';

import type { MlResponse } from './types/lead.types';

export const processMlResponse = async (job: Job<MlResponse[], any>) => {
  try {
    const data = job.data;
    console.log(`Получено ${data.length} записей от ML`);

    await Promise.all(
      data.map(async (client) => {
        const insertData = {
          clientId: client.client_id,
          firstName: client.first_name,
          lastName: client.last_name,
          phoneNumber: client.phone_number,
          email: client.email,
          features: client.features,
          purchaseProbability: client.purchase_probability,
          keyFactors: client.key_factors,
          recommendationText: client.recommendation_text
        };

        db.insert(clients).values(insertData);
      })
    );

    console.log('Обработка ML-ответа завершена успешно');
  } catch (error) {
    console.error('Ошибка при обработке ML-ответа:', error);
    throw error;
  }
};
