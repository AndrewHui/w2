
const net = require('net');

const conn = net.createConnection({ 
  host: '192.168.88.32', // change to IP address
  port: 3000

  
});

// client.js
conn.on('data', (data) => {
  console.log('Server says: ', data);
});


conn.on('connect', () => {
  conn.write('Hello from client!');
});

conn.setEncoding('utf8'); // interpret data as text