import { Location } from "../../../domain/lib/entities/Location";
import { searchLocation } from "../actions/actions";
import {
  DID_SEARCH_LOCATION,
  DID_SEARCH_LOCATION_ERROR,
  WILL_SEARCH_LOCATION
} from "../actions/actions";

export interface ISearchLocationState {
  locations: Location[];
  isLoading: boolean;
  error: Error | null;
}

export function reducer(
  state: ISearchLocationState = {
    locations: [],
    isLoading: false,
    error: null
  },
  action: any
) {
  switch (action.type) {
    case DID_SEARCH_LOCATION:
      return {
        ...state,
        locations: action.locations,
        isLoading: false,
        error: null
      };
    case WILL_SEARCH_LOCATION:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case DID_SEARCH_LOCATION_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
