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