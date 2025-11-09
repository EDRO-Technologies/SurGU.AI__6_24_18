"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ml_1 = require("./ml");
const ml_processor_1 = require("./ml.processor");
ml_1.MLDI.workerRouter.add({
    prefix: 'ml_analyze',
    func: ml_processor_1.getAnalyze
});
