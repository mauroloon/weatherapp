import React from 'react';

const WeatherExtraInfo = ({ humidity, wind}) => (
    <div>
        <span>{ `${humidity} % - `}</span>
        <span>{ `${wind} viento` }</span>
    </div>
);

//git prueba utem
export default WeatherExtraInfo;