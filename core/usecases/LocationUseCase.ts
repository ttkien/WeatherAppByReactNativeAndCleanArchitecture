import { Location, LocationUsecaseInterface, LocationRepository } from '../domain'
import { Observable} from 'rxjs'

export class LocationUseCase implements LocationUsecaseInterface {
    private locationRepository: LocationRepository

    constructor(locationRepository: LocationRepository) {
        this.locationRepository = locationRepository
    }

    searchCity(searchText: string): Observable<Location> {
        return this.locationRepository.searchCity(searchText)
    }

}