import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Coord, WeatherData, MuchaLLuvia } from "@app/shared/interfaces/weather.interface";
import { environment } from "@env/environment";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class WeatherService {
    private readonly API_URL = environment.openWeather.url

    public lluvia$!: Observable<MuchaLLuvia>

    constructor(private readonly http: HttpClient) {

    }

    public getWeatherByName(city: string): Observable<WeatherData> {
        const params = new HttpParams()
        .set('q', city)
        return this.http.get<WeatherData>(`${this.API_URL}/weather`, {params})
    }

    public getWeatherByCoords(latitude:number, longitude:number): Observable<WeatherData> {
        const params = new HttpParams()
        .set('lat', latitude)
        .set('lon', longitude)
        return this.http.get<WeatherData>(`${this.API_URL}/weather`, {params})
    }

    
}