import { Observable } from "rxjs";
import { Location } from '../entities';

export interface LocationRepository {
    searchCity: (searchText: string) => Observable<Location>
}