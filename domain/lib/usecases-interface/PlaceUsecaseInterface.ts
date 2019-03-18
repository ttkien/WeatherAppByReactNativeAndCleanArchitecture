import {Observable} from 'rxjs'
import { Location} from '../entities/Location'

export interface PlaceUsecaseInterface {
     searchCity: (searchText:string) => Observable<Location>
}