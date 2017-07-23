var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <p>Its {tmp} degrees in {location}!!!</p>
    );
};

module.exports = WeatherMessage;
