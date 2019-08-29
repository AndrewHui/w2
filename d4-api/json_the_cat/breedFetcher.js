const request = require('request');
const input = process.argv.splice(2)[0];
const URL = `https://api.thecatapi.com/v1/breeds/search/?q=${input}`;

request(URL, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Requested breed not found");
    return;
  }
  console.log(data[0].description);
  //console.log(typeof data);

  //console.log("err", error);
  //console.log("response", response);
  //console.log("body", body);

});

