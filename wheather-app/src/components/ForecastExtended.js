import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import trasnformForecast from './../services/transformForecast';
import './styles.css';
/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
]

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'snow',
    wind: 'normal',
}
*/

const api_key = "0b2796afb46e67815b2b056c9ecf2f20";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    //cuando se renderiza
    componentDidMount(){
        //fetch o axios
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data =>{
                console.log(weather_data);
                const forecastData = trasnformForecast(weather_data);
                console.log(forecastData);
                this.setState({
                    forecastData
                })
            }
        );
    }

    renderForecastItemDays(forecastData){
        return forecastData.map(forecast => (
                <ForecastItem 
                    key={`${forecast.weekDay}${forecast.hour}`}
                    weekDay={forecast.weekDay} 
                    hour={forecast.hour} 
                    data={forecast.data}>
                </ForecastItem>
            )
        );
    }

    renderProgress = () => {
        return <h3>Cargando Prónistico extendido...</h3>;
    }

    render(){
        //parametros que se pasan
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico extendido para { city }</h2>
                { forecastData ? 
                    this.renderForecastItemDays(forecastData) : 
                    this.renderProgress()
                }
            </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;