import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind}) => (
    <div>
        <span>{ `${humidity} % - `}</span>
        <span>{ `${wind} viento` }</span>
    </div>
);

//git prueba utem
WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;