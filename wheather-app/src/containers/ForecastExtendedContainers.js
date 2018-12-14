import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import { connect } from 'react-redux';


class ForecastExtendedContainers extends Component {
    render () {
        return (
            this.props.city && // valida que haya algo
            <ForecastExtended city = {this.props.city}/>
        );
    }
}

ForecastExtendedContainers.propTypes = {
    city: PropTypes.string.isRequired
}


//para conectarla a los estados, escha el cambio de estado y lo pasa a las propiedades
//const mapStatetoProps = state =>({city: state.city});
//es lo mismo que arriba pero mejor destructurado ya que toma solamente city del state
const mapStatetoProps = ({ city }) =>({ city });
//entrega el state con las propiedades que se van a utilizar, a la vez esta las inyecta como propiedades por eso te puede ocupar el this.props.city
export default connect(mapStatetoProps,null)(ForecastExtendedContainers);