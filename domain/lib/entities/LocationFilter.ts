import { CityModel, LocationCoordinate2D } from "..";

export class LocationFilter {
    public city?: CityModel
    public location?: LocationCoordinate2D

    constructor(city?: CityModel, location?: LocationCoordinate2D) {
        this.city = city
        this.location = location
    }
}