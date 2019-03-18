import { DailyPredictionResult } from "./DailyPredictionResult";

export default class WeekWeatherResult {
    public dailyPredictionItem: [DailyPredictionResult]
    constructor(dailyPredictionItem: [DailyPredictionResult]) {
        this.dailyPredictionItem = dailyPredictionItem
    }
}