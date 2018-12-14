import trasnformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload}); //por ecmacscript;
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

const api_key = "0b2796afb46e67815b2b056c9ecf2f20";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    // por thunk
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data =>{                
                const forecastData = trasnformForecast(weather_data);
                console.log(forecastData);

                //modificar el estado con el resultado de la promise(httprequest)
                dispatch(setForecastData({city: payload, forecastData}))
            }
        );
    };
};