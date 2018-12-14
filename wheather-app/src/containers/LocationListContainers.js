import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    handleSelectionLocation = city => {
        console.log(`handleSelectionLocation ${city}`);
    
        this.props.setCity(city);
      }



    render () {
        return (
            <LocationList cities={this.props.cities} 
                onSelectedLocation = {this.handleSelectionLocation}>  </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
}

//setea el estado de redux
const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
});

//el mapDispatchToPropsActions es un objeto con funciones que se inyectan al componente "LocationListContainer"
export default connect(null, mapDispatchToPropsActions)(LocationListContainer);