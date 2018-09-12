import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weather';
import './styles.css';

const location = "Santiago";
const api_key = "0b2796afb46e67815b2b056c9ecf2f20";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ api_key }`;

const data = {
        temperature: 25,
        weatherState: SUN,
        humidity: 10,
        wind: '10 m/s',
};


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = { //se asigna
            city: 'Santiago',
            data: data
        };
    }

    getTemp = kelvin =>{
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }

    getWeatherState = weather_data =>{
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weatherState);
        const temperature = this.getTemp(temp);
        const data = {
            humidity,
            temperature, //cuando se setea si esta escrito igual no es necesario setear
            weatherState,
            wind: `${speed} m/s`,
        }

        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            console.log(data);
            return data.json();
        }).then( data =>{
            const newWeather = this.getData(data);
            console.log(newWeather);
            this.setState({
                data : newWeather
            });
        });
    }

    render = () => {
        //destructuring
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={ city }></Location>
                <WeatherData data= { data }></WeatherData>
                <button onClick={ this.handleUpdateClick }>Actualizar</button>
            </div>
        );
    };
} 
    

export default WeatherLocation;