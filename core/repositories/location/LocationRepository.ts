import { Observable } from 'rxjs';
import { Location, LocationRepository } from '../../domain';
import { createClient } from '@google/maps';

export class DefaultLocationRepository implements LocationRepository {
    searchCity(searchText: string): Observable<Location> {
        return Observable.create(function (observer) {
            const client = createClient({
                key: "AIzaSyDyp4K2oq2GDsHRIzy7Qpt87gGmlCRnvuI"
            })
            let query = {
                input: searchText,
                sessiontoken: "kienhiepsi"
            }
            client.placesAutoComplete(query,
                function (err, response) {
                    if (response) {

                        var results = []
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