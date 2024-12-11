function capitalize(string){
  let stringArr = string.split("");
  let firstChar = stringArr[0].toUpperCase();
  let remainingChar = stringArr.slice(1).join("").toLowerCase();
  let resultingString = firstChar+remainingChar;
  return resultingString;

};
module.exports = capitalize;