var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=bb6910b738aee7a5703000a3e149f845&units=metric';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.message) {
                throw new Error(res.response.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.response.data.message);
        });
    }
}
