

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  const datetime = new Date(1567126947);
  
  for (let par in passTimes) {
    console.log(`Next pass at ${datetime} (Pacific Daylight Time) for ${passTimes[par].duration} seconds!`);
  }
});