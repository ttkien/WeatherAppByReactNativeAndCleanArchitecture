import { Location, PlaceUsecaseInterface, PlaceRepository } from 'weather-domain'
import { Observable} from 'rxjs'

export class PlaceUseCase implements PlaceUsecaseInterface {
    private locationRepository: PlaceRepository

    constructor(locationRepository: PlaceRepository) {
        this.locationRepository = locationRepository
    }

    searchCity(searchText: string): Observable<Location> {
        return this.locationRepository.searchCity(searchText)
    }

}