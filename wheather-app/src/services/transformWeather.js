import convert from 'convert-units';
import { SUN } from './../constants/weather';

    const getTemp = kelvin =>{
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }

    const getWeatherState = weather_data =>{
        return SUN;
    }

    const transformWeather = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = getWeatherState(weatherState);
        const temperature = getTemp(temp);
        const data = {
            humidity,
            temperature, //cuando se setea si esta escrito igual no es necesario setear
            weatherState,
            wind: `${speed} m/s`,
        }

        return data;    
    }

    export default transformWeather;