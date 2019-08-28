const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.151',
    port: 50541
    
  });
  // interpret incoming data as text

  conn.on('data', (data) => {
    console.log('you died');
  });

  conn.setEncoding('utf8'); 

  return conn;
}


module.exports = connect;