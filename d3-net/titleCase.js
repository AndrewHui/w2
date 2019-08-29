const titleCase = function(inputString) {
  if (inputString.length === 0) {
    return "";
  }

  inputString = inputString.split(" ");
  let result = "";

  for (let i of inputString) {
    result += i[0].toUpperCase() + i.slice(1,).toLowerCase() + " ";

  }
  result = result.substring(0, result.length - 1);

  return result;
};
