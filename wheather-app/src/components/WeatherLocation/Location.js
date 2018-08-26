import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => {
    // Destructuring
    //no es necesario hacer props.city si city esta dentro de { }
    //const { city } = props;
    return (
        <div>
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