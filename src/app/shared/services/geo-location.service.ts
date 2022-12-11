import { Injectable } from "@angular/core";

import { Coodinates, Position, PositionError } from "@shared/interfaces/weather.interface"

@Injectable({providedIn: 'root'})
export class GeoLocationService {
    
    public getCurrentLocation(): Promise<Coodinates> {

        const options = {
            enableHigAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
        return new Promise<Coodinates>((resolve, reject) => {

            const resolver = (position: Position):void => {
                console.log("ddddddddddddddddd")
                const {latitude, longitude} = position.coords
                resolve(position.coords)
                // return position.coords
            }
            const rejected = (err:PositionError):void => {
                console.log("xxxxxxxxxxxxxx")
                reject(err)
            }
            navigator.geolocation.getCurrentPosition(resolver, rejected, options)
        })
    }
}