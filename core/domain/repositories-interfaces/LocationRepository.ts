import { Observable } from "rxjs";

export interface LocationRepository {
    searchCity: (searchText: string) => Observable<Location>
}