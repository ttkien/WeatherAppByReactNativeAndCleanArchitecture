import { DailyPredictionResult } from ".";

export class MonthWeatherResult {
    public dailyPredictionItem: [DailyPredictionResult]
    constructor(dailyPredictionItem: [DailyPredictionResult]) {
        this.dailyPredictionItem = dailyPredictionItem
    }
}