import {Location, LocationRepository} from "weather-domain";
import * as RxJs from "rxjs";
import * as RxJsOperators from "rxjs/operators";

export default class MockLocationRepository implements LocationRepository {

    constructor() {
    }

    public searchCity(searchText: string): RxJs.Observable<Location[]> { 
        let locations = [1,2,3,4,5,6,7,8].map(val => {
            return new Location(searchText + val, "country's searchText" + val)
        });
       return RxJs.of(locations)
    }
}