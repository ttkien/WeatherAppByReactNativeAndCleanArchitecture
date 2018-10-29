import { Observable } from "rxjs";
import { Location } from "weather-domain";
import {DefaultLocationRepository} from "weather-repositories";

export const WILL_SEARCH_LOCATION = "weather/actions/WILL_SEARCH_LOCATION";
export const SEARCH_LOCATION = "weather/actions/SEARCH_LOCATION";
export const DID_SEARCH_LOCATION = "weather/actions/DID_SEARCH_LOCATION";
export const DID_SEARCH_LOCATION_ERROR = "weather/actions/DID_SEARCH_LOCATION_ERROR";

export function willSearchLocation(searchText: string) {
    return {
        type: WILL_SEARCH_LOCATION,
        text: searchText,
    };
}

export function didSearchLocation(locations: Location[]) {
    return {
        type: DID_SEARCH_LOCATION,
        locations,
    };
}

export function didSearchLocationError(error: Error) {
    return {
        type: DID_SEARCH_LOCATION_ERROR,
        error,
    };
}

export function searchLocation(text: string) {
    return (dispatch) => {
        dispatch(willSearchLocation(text));
        const repository = new DefaultLocationRepository("AIzaSyDz8iOOAc-1NqzKRLl5n1qJFYY39NoL6EY");
        repository.searchCity(text)
            .subscribe((locations) => {
                dispatch(didSearchLocation(locations));
            },
                (error) => {
                    dispatch(didSearchLocationError(error));
                }
            );
    };
}
