import * as RxJs from "rxjs";
import * as RxJsOperators from "rxjs/operators";
import Axios, * as axios from "axios";
import * as Domain from "weather-domain";

export class CityRepository implements Domain.CityRepositoryInterface {
    private googleAPIKey: string;

    public constructor(googleAPIKey: string) {
        this.googleAPIKey = googleAPIKey;
    }
    public searchCity(searchText: string): RxJs.Observable<Domain.CityModel> {
        return RxJs.Observable.create((observer) => {
            const key = this.googleAPIKey;
            const endcodedSearchText = encodeURI(searchText);
            const uri = "https://maps.googleapis.com/maps/api/place/autocomplete/json?key=" + key
            + "&input=" + endcodedSearchText + "&types=(cities)";

            // axios.default.defaults.headers["referer"] = "http://kienhiepsi.com"
            axios.default.get(uri)
            .then( (response) => {
                if (response.status === 200 && !response.data.error_message) {
                    const results: Domain.CityModel[] = [];
                    console.info(response.data);
                    for (const prediction of response.data.predictions) {
                                    const structured_formatting = prediction.structured_formatting;
                                    const mainText = structured_formatting.main_text;
                                    const secondaryText = structured_formatting.secondary_text;

                                    results.push(new Domain.CityModel(
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
        });
    }

    public searchCityWithLocation(location: Domain.LocationCoordinate2D) : RxJs.Observable<Domain.CityModel | null> {
        return RxJs.throwError(Error("Not implemnet"))
    }

}

// var repository = new DefaultLocationRepository()
// repository.searchCity('ho').subscribe(
//     locations => console.log(locations),
//     error => console.log(error)
// )
