import React from 'react';
import WeatherIcon from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD,  
    SUN, 
    RAIN, 
    SNOW,
    THUNDER,
    DRIZZLE} from './../../../constants/weather';
import './styles.css';


const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers",
}

const getweatherIcon = weatherState =>{
    const icon = icons[weatherState];
    return (<WeatherIcon className='wicon' name={icon} size="4x"/>);
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