const sentence = "hello there from lighthouse labs";

let count = 1000;
for (const char of sentence) {
  count += 50
  setTimeout(() => {
    process.stdout.write(char + '\n');    
  }, count) 
}
