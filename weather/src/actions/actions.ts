import { Observable } from "rxjs";
import { Location } from "weather-domain";
import {DefaultLocationRepository} from "weather-repositories";
import { GOOGLE_API_KEY} from "../../constants";
import MockLocationRepository from "../mockRepository/MockLocationRepository";

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

export function didSearchLocation(text: string, locations: Location[]) {
    return {
        type: DID_SEARCH_LOCATION,
        locations,
        text
    };
}

export function didSearchLocationError(text: string, error: Error) {
    return {
        type: DID_SEARCH_LOCATION_ERROR,
        error,
        text
    };
}

export function searchLocation(text: string) {
    return (dispatch) => {
        dispatch(willSearchLocation(text));
        const repository = new MockLocationRepository();

        repository.searchCity(text)
            .subscribe((locations) => {
                dispatch(didSearchLocation(text, locations));
            },
                (error) => {
                    dispatch(didSearchLocationError(text, error));
                }
            );
    };
}
