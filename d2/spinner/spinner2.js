
let array = ["|", "/", "-", "\\",  "|", "/", "-", "\\", "|"];

let timerFunc = function(i) { 
  process.stdout.write("\r" + array[i % 9])
  if (i < 100) setTimeout(() => { timerFunc(i+1) }, 100)

}


timerFunc(0);