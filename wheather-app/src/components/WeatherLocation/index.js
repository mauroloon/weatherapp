import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weather';
import './styles.css';

const location = "Santiago";
const api_key = "0b2796afb46e67815b2b056c9ecf2f20";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${ api_key }`;

const data1 = {
        temperature: 20,
        weatherState: SUN,
        humidity: 10,
        wind: '10 m/s',
};


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = { //se asigna
            city: 'Santiago',
            data: data1
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            console.log(data);
            return data.json();
        }).then( weather_data =>{
            debugger;
            console.log(weather_data);
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