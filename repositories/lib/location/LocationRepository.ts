import { Observable } from 'rxjs';
import { Location, LocationRepository } from 'weather-domain';
import {RxHR} from "@akanass/rx-http-request";
import {createClient} from 'react-native-google-maps-services';

export class DefaultLocationRepository implements LocationRepository {
    searchCity(searchText: string): Observable<Location> {
        return Observable.create(function (observer) {

            const client = createClient({
                key: "AIzaSyDyp4K2oq2GDsHRIzy7Qpt87gGmlCRnvuI"
            })
            let query = {
                input: searchText
            }

            client.placesAutoComplete(query,
                function (err, response) {
                    if (response) {

                        var results:Array<Location> = []
                        for (const prediction of response.json.predictions) {
                            var structured_formatting = prediction.structured_formatting
                            var mainText = structured_formatting.main_text
                            var secondaryText = structured_formatting.secondary_text
                        
                            results.push(new Location(
                                mainText, secondaryText
                            ))
                        }

                        observer.next(results)
                    } else {
                        console.log(err)

                        observer.error(err)
                    }
                })
        })
    }
}