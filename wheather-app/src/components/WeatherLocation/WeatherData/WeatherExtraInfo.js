import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind}) => (
    <div className='weatherExtraInfoCont'>
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