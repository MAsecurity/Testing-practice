class encrypt{
  constructor(string,shift){
    this.stringArr = string.split("");
    this.shift = shift;
  }
  encryption(){
    let newArr = [];
    for(let i=0; i<this.stringArr.length; i++){
      let re = new RegExp("[a-zA-Z]")
      if(!re.test(this.stringArr[i])){
        newArr.push(this.stringArr[i]);
      }else{
        let shiftedLetter = this.shiftLetters(this.stringArr[i],this.shift);
        newArr.push(shiftedLetter);
      }

    }
    return newArr.join("")
  }
  shiftLetters(letter,shift){
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let index;
    let originalCase;
  
    if(letter == letter.toLowerCase()){
      index = this.theIndex(letter.toUpperCase(),letters)
      originalCase = "lower"
    }else{
      originalCase = "upper";
      index = this.theIndex(letter, letters);
    }
  
    let moves = index;
    for(let i=0; i<shift; i++){
      if(moves == letters.length - 1){
        moves = 0;
      }
      moves++;
    }
  
    if(originalCase == "lower"){
      let newArr = [...letters];
      let toLower = newArr.join("").toLowerCase().split("");
      return toLower[moves];
    }else{
      return letters[moves];
    }
  
  }
  theIndex(letter, letters){
    for(let i=0; i<letters.length; i++){
      if(letters[i] == letter){
        return i;
      }
    }
  }
}
module.exports = encrypt;
