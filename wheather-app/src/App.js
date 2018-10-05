import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col} from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';
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

  handleSelectionLocation = city => {
    this.setState({
      //city: city gracias a ecmascript se puede hacer lo de abajo
      city
    })
    console.log(`handleSelectionLocation ${city}`);
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
              <LocationList 
                cities={cities} 
                onSelectedLocation = {this.handleSelectionLocation}>
              </LocationList>
            </Col>  
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="details">
                  {
                    city === null ?
                    <h1>No se seleccionó ciudad</h1>
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
