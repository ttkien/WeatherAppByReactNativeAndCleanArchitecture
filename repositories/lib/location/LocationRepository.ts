import * as RxJs from 'rxjs';
import * as RxJsOperators from 'rxjs/operators'

import { Location, LocationRepository } from 'weather-domain';
import Axios, * as axios from "axios";
import { createClient } from 'react-native-google-maps-services';
// import { map, flatMap } from 'rxjs/operators';
// import {} from '@reactivex/rxjs'
// import 'rxjs/Rx'
export class DefaultLocationRepository implements LocationRepository {
    searchCity(searchText: string): RxJs.Observable<Location> {
        return RxJs.Observable.create(function (observer) {
            const key = "AIzaSyBO35s72ZQbDBabY1y9JsW59SBsHKcIfC8"
            const uri = "https://maps.googleapis.com/maps/api/place/autocomplete/json?key="+ key +"&input=" + searchText + "&types=(cities)"

            
            // axios.default.defaults.headers["referer"] = "http://kienhiepsi.com"
            axios.default.get(uri)
            .then( response => {
                if (response.status == 200) {
                    var results: Array<Location> = []
                    console.log(response.data)
                                for (const prediction of response.data["predictions"]) {
                                    var structured_formatting = prediction.structured_formatting
                                    var mainText = structured_formatting.main_text
                                    var secondaryText = structured_formatting.secondary_text
        
                                    results.push(new Location(
                                        mainText, secondaryText
                                    ))
                                }
        
                                observer.next(results)
                }
                // console.log(response); // Show the JSON response object.
            })
            .catch( error => {
                console.log(error); // Show the JSON response object.

                observer.error(error)
            })

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
        })
    }
    
}


// var repository = new DefaultLocationRepository()
// repository.searchCity('ho').subscribe(
//     locations => console.log(locations),
//     error => console.log(error)
// )