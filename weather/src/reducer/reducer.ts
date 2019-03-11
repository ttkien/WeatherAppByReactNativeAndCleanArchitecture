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
  text: string;
  error: Error | null;
}

export function reducer(
  state: ISearchLocationState = {
    locations: [],
    text: "",
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
        text: action.text,
        isLoading: false,
        error: null
      };
    case WILL_SEARCH_LOCATION:
      return {
        ...state,
        isLoading: true,
        error: null,
        text: action.text
      };
    case DID_SEARCH_LOCATION_ERROR:
      return {
        ...state,
        text: action.text,
        error: action.error
      };
    default:
      return state;
  }
}
