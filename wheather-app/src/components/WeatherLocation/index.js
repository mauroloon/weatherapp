import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import transforWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';



class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const { city } = props;

        this.state =  {//se asigna
            city,
            data: null,
        };
        //console.log("constructor");
    }

    //CUANDO SE INICIA
    componentDidMount() {
        //console.log("componentDidMount");
        this.handleUpdateClick();
    }

    //CUANDO SE ACTUALIZA ALGO
    componentDidUpdate(prevProps, prevState) {
        //console.log("componentDidUpdate");
    }
    
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( data => {
            return data.json();
        }).then( data =>{
            //console.log("resultado del handleUpdateClick");
            const newWeather = transforWeather(data);
            //console.log(newWeather);
            this.setState({
                data : newWeather
            });
        });
    }

    render = () => {
        //destructuring
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={ city }></Location>
                {data ? 
                    <WeatherData data={ data }></WeatherData> :
                    <CircularProgress size={50}/> /* para el loading */
                }
                {/* <button onClick={ this.handleUpdateClick }>Actualizar</button> */}
            </div>
        );
    };
} 
    
    WeatherLocation.propTypes = {
        city : PropTypes.string.isRequired,
    }
export default WeatherLocation;