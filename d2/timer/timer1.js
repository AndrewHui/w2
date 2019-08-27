


let arrayList = process.argv.splice(2,)

for (let par of arrayList) {
  numPar = Number(par);
  console.log(typeof(numPar), numPar, par );
  if (arrayList.length === 0) {
    return;
  }

  else if (numPar < 0) {
    continue;
  }
  else if (typeof(numPar) !== "number" || isNaN(numPar)) {
    console.log("pass")
    continue;
  }
  
  setTimeout( () => process.stdout.write('\x07'), par * 1000)
}

