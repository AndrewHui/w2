
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
}



const handleUserInput = function(x) {
  x.on('data', (key) => {
    if (key === '\u0003') {
      process.stdout.write('\nThanks for using me, ciao!\n');
      process.exit();
  }
}
  );
}


module.exports = {setupInput}
