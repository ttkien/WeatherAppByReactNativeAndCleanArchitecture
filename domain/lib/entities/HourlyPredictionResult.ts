import { WindModel } from "./WindModel";

import { HumidityModel } from "./HumidityModel";

import CloudinessModel from "./CloudinessModel";

import { TemperatureModel } from "./TemperatureModel";

import { WeatherModel } from "./WeatherModel";

export class HourlyPredictionResult {
    public predictAtHour: Date 
    public wind?: WindModel
    public humidity?: HumidityModel
    public cloudiness?: CloudinessModel
    public temperature?: TemperatureModel
    public weather?: WeatherModel

    constructor(predictAtHour: Date, 
        wind?: WindModel, 
        humidity?: HumidityModel,
        cloudiness?: CloudinessModel,
        temperature?: TemperatureModel,
        weather?: WeatherModel
        ) {
            this.predictAtHour = predictAtHour
            this.wind = wind
            this.humidity = humidity
            this.cloudiness = cloudiness
            this.temperature = temperature
            this.weather = weather
        }
}