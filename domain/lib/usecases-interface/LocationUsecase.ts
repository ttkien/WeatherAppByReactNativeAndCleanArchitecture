import {Observable} from 'rxjs'
import { Location} from '../entities/Location'

export interface LocationUsecaseInterface {
     searchCity: (searchText:string) => Observable<Location>
}