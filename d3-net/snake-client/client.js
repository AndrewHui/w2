const net = require('net');
const { IP, PORT } = require('./constants');


const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
    
  });
  // interpret incoming data as text

  conn.on("connect", () => {
     //setTimeout(() => conn.write("Move: up"), 1000);
     //setInterval(() => conn.write("Move: left"), 3000)
     conn.write("Name: AH")

    
    console.log("Successfully connected to game server")
  })

  conn.on('data', (data) => {

    console.log('you died');
  });

  conn.setEncoding('utf8'); 

  return conn;
}


module.exports = { connect };