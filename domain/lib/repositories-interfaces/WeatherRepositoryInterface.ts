import { LocationFilter } from "../entities/LocationFilter";
import { Observable } from "rxjs";
import { DailyPredictionResult } from "../entities/DailyPredictionResult";
import { HourlyPredictionResult } from "../entities/HourlyPredictionResult";
import {PredictionResult} from "../entities/PredictionResult";

export default interface WeatherRepositoryInterface {
  getDailyWeather(numbersOfNextDays: number, locationFilter: LocationFilter): Observable<[DailyPredictionResult]>
  getHourlyWeather(hourInterval: number, limit: number, lcoationFilter: LocationFilter): Observable<[HourlyPredictionResult]>
  getCurrentWeather(locationFilter: LocationFilter): Observable<PredictionResult|null>
}