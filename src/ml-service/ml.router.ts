import type { GetAnalyzeData } from './types/analyze.types';

import { MLDI } from './ml';
import { getAnalyze } from './ml.processor';

MLDI.workerRouter.add<GetAnalyzeData, any>({
  prefix: 'ml_analyze',
  func: getAnalyze
});
