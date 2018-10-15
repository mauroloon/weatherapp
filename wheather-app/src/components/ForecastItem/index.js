import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData/index';


const ForecastItem = ({ weekDay, hour, data }) => (
    <div>
        <div>{weekDay} Hora: {hour}</div>
        <WeatherData data={data}/>
    </div>
);

ForecastItem.PropTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({ //ES UN OBJETO
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}
export default ForecastItem;