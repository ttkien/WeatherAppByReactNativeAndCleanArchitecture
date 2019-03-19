import { WindModel, HumidityModel, CloudinessModel, TemperatureModel, WeatherModel } from ".";

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