const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (key === '\u0003') {
    process.stdout.write('\nThanks for using me, ciao!\n');
    process.exit();
  }
  if (key === "b") {
    process.stdout.write('\x07');
  }
  if (Number(key) === numArray[key -1]) {
    process.stdout.write("setting time for " + key + " seconds \n")

    setTimeout( () => process.stdout.write('\x07'), Number(key) * 1000)

  }

});

console.log('after callback');