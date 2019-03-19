import { LocationFilter } from "../entities/LocationFilter";
import { Observable } from "rxjs";
import { PredictionResult, TodayWeatherResult, WeekWeatherResult, MonthWeatherResult } from "..";

export default interface PredictionUseCaseInterface {
    getCurrentWeather(location: LocationFilter) : Observable<PredictionResult| null>
    getTodayWeather(location: LocationFilter): Observable<TodayWeatherResult | null>
    getWeekWeather(location: LocationFilter): Observable<WeekWeatherResult| null>
    getMonthWeather(location: LocationFilter): Observable<MonthWeatherResult| null>

}