const request = require('request');

const fetchBreedDescription = function(input, callback) {

  const URL = `https://api.thecatapi.com/v1/breeds/search/?q=${input}`;

  request(URL, (error, response, body) => {
    if (error) {
      return callback(error);
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      return callback("Requested breed not found");
    }
    callback(error, data[0].description.trim());
  });

};



module.exports = {fetchBreedDescription};
