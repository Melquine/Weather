import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '@shared/interfaces/weather.interface';
import { WeatherService } from './pages/weather/services/weather.service';
import { GeoLocationService } from './shared/services/geo-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
  public weather$!: Observable<WeatherData>

  constructor(private readonly weatherSvc: WeatherService, 
    private readonly geoLocationSvc: GeoLocationService) {
      if(navigator.geolocation) {
        this.geoLocation()
      }

    }

  onSearch(city: string):void {
    // console.log("Recibiendo: ", valor)
    this.weather$ = this.weatherSvc.getWeatherByName(city)
  }

  private async geoLocation(): Promise<void> {
    
    // try {
      // const { latitude, longitude } = await this.geoLocationSvc.getCurrentLocation()
      this.geoLocationSvc.getCurrentLocation()
      .then((val) => {
        const { latitude, longitude } = val
        this.weather$ = this.weatherSvc.getWeatherByCoords(latitude, longitude)
        console.log("OK", val)
      })
      .catch((err) => console.log("EEEEERRRRR: ", err.message))

/*       this.weather$ = this.weatherSvc.getWeatherByCoords(latitude, longitude)
      console.log('Geo es: ', latitude, longitude) */
/*     }catch(e){
      console.log(e)
    } */
  }
}


