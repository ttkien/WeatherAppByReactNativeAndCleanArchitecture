import { WindModel, HumidityModel, CloudinessModel, TemperatureModel, WeatherModel } from ".";

export class PredictionResult {
    public wind?: WindModel
    public humidity?: HumidityModel
    public cloudiness?: CloudinessModel
    public temperature?: TemperatureModel
    public weather?: WeatherModel
    public sunrise?: Date 
    public sunset?: Date
    public feelLike?: number 
    public precipatation?: number
    public pressure?: number
    public visibility?: number
    public uvIndex?: number 
    
}