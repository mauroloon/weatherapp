import React, { Component } from 'react';
import transforWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url'; //se ocupan las llaves porque no esta la exportación en default
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weather';
import './styles.css';

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

    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            console.log(data);
            return data.json();
        }).then( data =>{
            const newWeather = transforWeather(data);
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