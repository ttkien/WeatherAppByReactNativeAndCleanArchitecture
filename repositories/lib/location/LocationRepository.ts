import * as RxJs from "rxjs";
import * as RxJsOperators from "rxjs/operators";

import Axios, * as axios from "axios";
import { createClient } from "react-native-google-maps-services";
import { Location, LocationRepository } from "weather-domain";
// import { map, flatMap } from 'rxjs/operators';
// import {} from '@reactivex/rxjs'
// import 'rxjs/Rx'
export class DefaultLocationRepository implements LocationRepository {
    public searchCity(searchText: string): RxJs.Observable<Location> {
        return RxJs.Observable.create((observer) => {
            const key = "AIzaSyDz8iOOAc-1NqzKRLl5n1qJFYY39NoL6EY";
            const endcodedSearchText = encodeURI(searchText);
            const uri = "https://maps.googleapis.com/maps/api/place/autocomplete/json?key=" + key
            + "&input=" + endcodedSearchText + "&types=(cities)";

            // axios.default.defaults.headers["referer"] = "http://kienhiepsi.com"
            axios.default.get(uri)
            .then( (response) => {
                if (response.status === 200 && !response.data.error_message) {
                    const results: Location[] = [];
                    console.info(response.data);
                    for (const prediction of response.data.predictions) {
                                    const structured_formatting = prediction.structured_formatting;
                                    const mainText = structured_formatting.main_text;
                                    const secondaryText = structured_formatting.secondary_text;

                                    results.push(new Location(
                                        mainText, secondaryText,
                                    ));
                                }

                    observer.next(results);
                } else {
                    const error = new Error(response.data.error_message);
                    observer.error(error);
                }
                // console.log(response); // Show the JSON response object.
            })
            .catch( (error) => {
                console.info(error); // Show the JSON response object.

                observer.error(error);
            });

            // RxHR.get(uri, options).subscribe(
            //     data => {
            //         if (data.response.statusCode === 200) {
            //             var results: Array<Location> = []
            //             for (const prediction of data.body.predictions) {
            //                 var structured_formatting = prediction.structured_formatting
            //                 var mainText = structured_formatting.main_text
            //                 var secondaryText = structured_formatting.secondary_text

            //                 results.push(new Location(
            //                     mainText, secondaryText
            //                 ))
            //             }

            //             observer.next(results)
            //         }
            //     },
            //     error => {

            //     }
            // )
        // })
        });
    }

}

// var repository = new DefaultLocationRepository()
// repository.searchCity('ho').subscribe(
//     locations => console.log(locations),
//     error => console.log(error)
// )
