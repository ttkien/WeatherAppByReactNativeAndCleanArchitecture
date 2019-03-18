import { WindModel } from "./WindModel";
import { HumidityModel } from "./HumidityModel";
import CloudinessModel from "./CloudinessModel";
import { TemperatureModel } from "./TemperatureModel";
import { WeatherModel } from "./WeatherModel";


export class DailyPredictionResult {
    public predictAtDay: Date
    public wind?: WindModel
    public humidity?: HumidityModel
    public cloudiness?: CloudinessModel
    public temperature?: TemperatureModel
    public weather?: WeatherModel

    constructor(predictADay: Date, 
        wind?: WindModel, 
        humidity?: HumidityModel,
        cloudiness?: CloudinessModel,
        temperature?: TemperatureModel,
        weather?: WeatherModel
        ) {
            this.predictAtDay = predictADay
            this.wind = wind
            this.humidity = humidity
            this.cloudiness = cloudiness
            this.temperature = temperature
            this.weather = weather
        }
}