import { DailyPredictionResult } from "./DailyPredictionResult";

export default class MonthWeatherResult {
    public dailyPredictionItem: [DailyPredictionResult]
    constructor(dailyPredictionItem: [DailyPredictionResult]) {
        this.dailyPredictionItem = dailyPredictionItem
    }
}