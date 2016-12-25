let axios = require('axios');

const OPEN_WEATHER_MAP_API_KEY = 'b0ef2a4a540547023c0ca12d0bd81ba1';
const OPEN_WEATHER_MAP_URL =
    `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${OPEN_WEATHER_MAP_API_KEY}`;

module.exports = {
    getTemp: function(location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            }

            return res.data.main.temp;
        }, function(err) {
            throw new Error('Unable to fetch weather for that location.');
        });
    }
};