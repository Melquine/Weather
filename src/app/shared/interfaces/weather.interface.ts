interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

interface Rain {
    oneHour: number;
}

interface Clouds {
    all: number;
}

interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface WeatherData {
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    rain: Rain;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface Coord {
    longitude: number;
    latitude: number;
}

// nuevas coordenadas

export interface Coodinates {
    accuracy: number,
    altitude: number | null,
    altitudeAccuracy: number | null,
    heading: number | null,
    latitude: number,
    longitude: number,
    speed: number | null
}

export interface Position {
    coords: Coodinates,
    timestamp: number
}

export interface PositionError {
    PERMISSION_DENIED: number,
    POSITION_UNAVAILABLE: number,
    TIMEOUT: number,
    code: number,
    message: string,
}

export interface MuchaLLuvia {
    vientosMaximos: number,
    vientosMinimos: number,
    presipitacion: number
}