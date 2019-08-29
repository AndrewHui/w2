const fs = require('fs');
const request = require('request');
const readline = require('readline');

let userInput = process.argv.splice(2)
let URL = userInput[0];
let fileCreation = userInput[1];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


request(URL, (error, response, body) => {
  if (response.statusCode >= 300 || response.statusCode < 200) {
    console.log("ERROR, check error number", response.statusCode);
    return;
  }
  if (fileCreation) {
    rl.question("Overwrite file? Y/N \n", (answer) => {
      rl.close();
      if (answer !== "Y") {
        console.log("FILE NOT REWRITTEN. END.")
        return;
        
      }
      fs.writeFile(fileCreation, body, (error) => {
        if (error) {
          throw error;
          return;
        }
      
        let sizeObject = fs.statSync(fileCreation);

        console.log("Downloaded and saved" , sizeObject.size, "bytes to", fileCreation);
      });

    });

  }


});

