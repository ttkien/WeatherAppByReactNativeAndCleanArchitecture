import { DailyPredictionResult } from ".";

export class WeekWeatherResult {
    public dailyPredictionItem: [DailyPredictionResult]
    constructor(dailyPredictionItem: [DailyPredictionResult]) {
        this.dailyPredictionItem = dailyPredictionItem
    }
}