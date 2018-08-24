import React from 'react';

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
    


export default Location;