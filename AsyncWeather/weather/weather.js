const request = require('request');

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/7325f0e7f077ebf08415e33b060b1abb/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      callback('Unable to connect to Forecast.io server')
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather');
    }
    else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;

// dark sky - 7325f0e7f077ebf08415e33b060b1abb
