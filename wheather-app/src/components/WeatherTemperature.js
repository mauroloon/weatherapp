import React from 'react';
import WeatherIcon from 'react-weathericons';


const getweatherIcon = weatherState =>{
    switch (weatherState) {
        case 'cloud':
            return (<WeatherIcon name="cloud" size="2x"/>);
        default:
            return (<WeatherIcon name="sleet" size="2x"/>);
    }
};

const WeatherTemperature = ({ temperature, weatherState}) => (
    <div>
        { getweatherIcon(weatherState) }
        <span>
            { `${temperature} C°` }
        </span>
    </div>
);

export default WeatherTemperature;