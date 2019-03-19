import {Observable} from 'rxjs'
import { CityModel } from '..';

export interface PlaceUsecaseInterface {
     searchCity: (searchText:string) => Observable<CityModel>
}