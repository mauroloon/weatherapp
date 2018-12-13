import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col} from 'react-flexbox-grid';
import './App.css';
import LocationListContainers from './containers/LocationListContainers';
import ForecastExtended from './components/ForecastExtended';


const cities = [
  'Santiago',
  'Madrid',
  'Bogota',
  'Londres',
  'Lima',
]

/* xs = pantalla chica, sm = pantalla Media, md = pantalla grande 
  fluid = para aprovechar la pantalla
  si se deja el xs solo es un autosize, no se bajan las columnas
*/

class App extends Component {

  constructor(){
    super();
    this.state = { city: null }
  }
  
  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid> 
          <Row>
            <Col xs={12}>
                <AppBar title="Weather App"/>
            </Col>                              
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainers 
                cities={cities} >
              </LocationListContainers>
            </Col>  
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="details">
                  {
                    city === null ?
                    null
                    :
                    <ForecastExtended city={ city }></ForecastExtended>
                  }                  
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}


export default App;