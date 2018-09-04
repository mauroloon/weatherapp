import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, WINDY } from './../../constants/weather';
import './styles.css';

const data1 = {
        temperature: 20,
        weatherState: SUN,
        humidity: 10,
        wind: '10 m/s',
};

const data2 = {
    temperature: 10,
    weatherState: WINDY,
    humidity: 3,
    wind: '20 m/s',
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
        this.setState({ // se setea
            //city: 'Valdivia', //Se puede setear sin todas las variables
            data: data2
        });
        console.log("actualizar");
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