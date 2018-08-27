import React from 'react';
import WeatherIcon from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, 
    CLOUDY, 
    SUN, 
    RAIN, 
    SNOW, 
    WINDY} from './../../../constants/weather';
import './styles.css';


const stateToIconNmae = weatherState =>{
    switch(weatherState){
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        case WINDY:
            return "windy";
        default:
            return "day-sunny";
    }
};

const getweatherIcon = weatherState =>{
    return (<WeatherIcon className='wicon' name={stateToIconNmae(weatherState)} size="4x"/>);
};

const WeatherTemperature = ({ temperature, weatherState}) => (
    <div className='weatherTemperatureCont'>
        { getweatherIcon(weatherState) }
        <span className='temperature'>
            { `${temperature}` }
        </span>
        <span className='temperatureType'>
                C°
        </span>
    </div>
);

//para validar los datos
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};
export default WeatherTemperature;