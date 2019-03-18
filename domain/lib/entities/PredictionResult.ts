import { WindModel } from "./WindModel";
import { HumidityModel } from "./HumidityModel";
import CloudinessModel from "./CloudinessModel";
import { TemperatureModel } from "./TemperatureModel";
import { WeatherModel } from "./WeatherModel";

export default class PredictionResult {
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