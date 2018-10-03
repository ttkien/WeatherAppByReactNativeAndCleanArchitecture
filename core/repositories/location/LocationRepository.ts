import { Observable } from 'rxjs';
import { Location, LocationUsecaseInterface } from '../../domain';
import { createClient } from '@google/maps';

export class LocationRepository implements LocationUsecaseInterface {
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

                        for (const prediction in response.json.predictions) {

                           console.log(prediction)
                        }
        
                        observer.next(response)
                    } else {
                        console.log(err)

                        observer.next(err)
                    }
                })
        })
    }
}


console.log("1")

var repository = new LocationRepository()
repository.searchCity("Ho")
    .subscribe((e) => {
        console.log(e)
    },
        error => {
            console.log(error)
        }
    )