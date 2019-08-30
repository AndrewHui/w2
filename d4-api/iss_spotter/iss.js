const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */


const ipURL = "https://api.ipify.org?format=json";

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(ipURL, (error, response, body) => {
    if (error) {
      return callback(error);
    }
    const data = JSON.parse(body);
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    return callback(error, data.ip);


  });
};




const fetchCoordsByIP = function(IP, callback) {
  const coordinatesURL = `https://ipvigilante.com/${IP}`;

  request(coordinatesURL, (error, response, body) => {
    if (error) {
      return callback(error);
    }
    const data = JSON.parse(body);
  
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response: ${body}`;
      callback(Error(msg), null);
      return;
      
    }

    let coordinates = {
      latitude: data.data.latitude,
      longitude: data.data.longitude
    };

    return callback(error, coordinates);

  });

};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
const fetchISSFlyOverTimes = function(coords, callback) {
  const la = coords.latitude;
  const lo = coords.longitude;
  const flyOverURL = `http://api.open-notify.org/iss-pass.json?lat=${la}&lon=${lo}`;

  request(flyOverURL, (error, response, body) => {
    if (error) {
      return callback(error);
    }

    const data = JSON.parse(body);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }


    return callback(error, data);

  });

};


const nextISSTimesForMyLocation = function(callback) {

  fetchMyIP((error1, ip) => {
    if (error1) {
      console.log("It didn't work! (error1)" , error1);
      return callback(error1);
    }


    fetchCoordsByIP(ip, (error2, coordinates) => {
      if (error2) {
        console.log("It didn't work! (error2)", error2);
        return callback(error2);
      }

  
 

      fetchISSFlyOverTimes(coordinates, (error3, flyOver) => {
        if (error3) {
          console.log("It didn't work! (error3)", error3);
          return callback(error3);
        }
        return callback(error3, flyOver.response);

      });
    });
  });


};


module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes , nextISSTimesForMyLocation};

