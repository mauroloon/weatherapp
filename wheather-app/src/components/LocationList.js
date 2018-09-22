import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city="Santiago"/>
        <WeatherLocation city="Washington"/>
        <WeatherLocation city="Londres"/>
    </div>
)

export default LocationList;