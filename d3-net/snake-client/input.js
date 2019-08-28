// let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // connection = conn;
  handleUserInput(stdin, conn);
  return stdin;
}



const handleUserInput = function(x, conn) {
  x.on('data', (key) => {
    if (key === '\u0003') {
      process.stdout.write('\nThanks for using me, ciao!\n');
      process.exit();
  }
  if (key === "w") {
    conn.write("Move: up")
  }
  if (key === "a") {
    conn.write("Move: left")
  }
  if (key === "s") {
    conn.write("Move: down") 
  }
  if (key === "d") {
    conn.write("Move: right")
  }
}
  );
}


module.exports = {setupInput}
