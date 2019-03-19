import { Observable } from "rxjs";
import { CityModel, LocationCoordinate2D } from "..";

export interface CityRepositoryInterface {
    searchCity(searchText: string) : Observable<CityModel>
    searchCityWithLocation(location: LocationCoordinate2D) : Observable<CityModel|null>
}