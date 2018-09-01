import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) => {
    // Destructuring
    //no es necesario hacer props.city si city esta dentro de { }
    //const { city } = props;
    return (
        <div className="LocationCont">
            <h1>
                { city }
            </h1>
        </div>
    );
};
    

Location.propTypes = {
    city: PropTypes.string.isRequired,
};
export default Location;