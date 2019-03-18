import { Observable } from "rxjs";
import { Location } from '../entities';

export interface PlaceRepository {
    searchCity: (searchText: string) => Observable<Location>
}