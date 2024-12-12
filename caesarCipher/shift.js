function shift(letter,shift,stringArr){
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let index;
  let originalCase;

  if(letter == letter.toLowerCase()){
    index = letters.indexOf(letter.toUpperCase())
    originalCase = "lower"
  }
  index == letters.indexOf(letter);
  originalCase = "upper";

  let moves = 0;
  for(let i=0; i<shift; i++){
    if(moves == letters.length - 1){
      moves = 0;
    }
    moves++;
  }

  if(originalCase == "lower"){
    return letters[moves].toLowerCase();
  }else{
    return letters[moves].toUpperCase();
  }

}
module.exports = shift;