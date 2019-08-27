const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let result = "";
rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              console.log(answer + " loves to " + answer2 + ". " + "Also loves to listen to " + answer3 + " while also enjoying " + answer4 + ". Also loves eating " + answer5 + ". They love " + answer6 + " and believe " + answer7 + " is the superpower they have." );
              console.log(`Thank you for your valuable feedback ${answer}`);
              rl.close();
            })
          })
        })
      })
    })
  })
  
  

}

);
