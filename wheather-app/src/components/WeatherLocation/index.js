import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import transforWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url'; //se ocupan las llaves porque no esta la exportación en default
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';



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
        //console.log("render");
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
    

export default WeatherLocation;