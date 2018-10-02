import { LocationUsecaseInterface } from '../../domain/usecases-interface/LocationUsecase';
import { Observable } from 'rxjs';
import { Location } from '../../domain/entities/Location';
import { createClient } from '@google/maps';

export class LocationRepository implements LocationUsecaseInterface {
    searchCity(searchText: string): Observable<Location> {
        return Observable.create(function (observer) {
            const client = createClient({ 
                key: "AIzaSyDyp4K2oq2GDsHRIzy7Qpt87gGmlCRnvuI"
           })

            client.placesQueryAutoComplete(
                {
                    input: searchText
                },
                function(err, response) {

                    if (response) {
                        
                        console.log(response.json.predictions)

                        response.predictions.forEach(element => {
                            console.log(element)
                        });

                        
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