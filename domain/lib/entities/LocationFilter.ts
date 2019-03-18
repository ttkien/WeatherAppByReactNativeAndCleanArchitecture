import CityModel from "./CityModel";
import { LocationCoordinate2D } from "./LocationCoordinate2D";


export class LocationFilter {
    public city?: CityModel
    public location?: LocationCoordinate2D

    constructor(city?: CityModel, location?: LocationCoordinate2D) {
        this.city = city
        this.location = location
    }
}