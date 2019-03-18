import CityModel from "./CityModel";
import { Location } from "./Location";

export default class CloudinessModel {
    public cloudinessType: CloudinessType

    constructor(cloudinessType: CloudinessType) {
        this.cloudinessType = cloudinessType
    }
}

export enum CloudinessType {
    clear,
    sunny,
    partlyCloudy,
    mostlyCloudy,
    overcast,
    unknown
}

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

export class HumidityModel {
    public value: number

    constructor(value: number) {
        this.value = value
    }
}

export class WindModel {
    public direction: String
    public velocity: number

    constructor(direction: String, velocity: number) {
        this.direction = direction
        this.velocity = velocity
    }
}

export class LocationFilter {
    public city?: CityModel
    public location?: LocationCoordinate2D

    constructor(city?: CityModel, location?: LocationCoordinate2D) {
        this.city = city
        this.location = location
    }
}

export class LocationCoordinate2D {
    public readonly latitude: number
    public readonly longtitude: number 
    constructor(latitude: number, longtitude: number) {
        this.latitude = latitude
        this.longtitude = longtitude
    }
}

export class TemperatureModel {
    public minTemC?: number
    public maxTemC?: number
    public temC?: number
}

export class WeatherModel {
    public chanceOfRain?: number 
    public type: WeatherType

    constructor(type: WeatherType) {
        this.type = type
    }
}

export enum WeatherType {
    clear,
    fog,
    humidity,
    mostlyCloud,
    partlyCloud,
    rain,
    sunny,
    thunder,
    wind,
    snow,
    unknown
}