const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');


fetchMyIP((error1, ip) => {
  if (error1) {
    console.log("It didn't work!" , error1);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

  fetchCoordsByIP(ip, (error2, coordinates) => {
    if (error2) {
      console.log("It didn't work!", error2);
      return;
    }

    console.log("It worked! Returned coordinates:", coordinates);

    fetchISSFlyOverTimes(coordinates, (error3, flyOver) => {
      if (error3) {
        console.log("It didn't work!", error3);
      }
      console.log(flyOver.response);
    });
  

  });


  return;
});

