import { Location, PlaceUsecaseInterface, CityRepositoryInterface } from 'weather-domain'
import { Observable} from 'rxjs'

export class PlaceUseCase implements PlaceUsecaseInterface {
    private locationRepository: CityRepositoryInterface

    constructor(locationRepository: CityRepositoryInterface) {
        this.locationRepository = locationRepository
    }

    searchCity(searchText: string): Observable<Location> {
        return this.locationRepository.searchCity(searchText)
    }
}