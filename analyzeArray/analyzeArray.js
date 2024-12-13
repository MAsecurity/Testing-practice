function analyzeArray(arr){
  let obj = {};
  let max = arr[0];
  let min = arr[0];
  let curSum = 0;
  let length = arr.length;
  for(let i=0; i<arr.length; i++){
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
    curSum += arr[i]
  }
  let avg = curSum / length;
  obj.maximum = max;
  obj.minimum = min;
  obj.average = avg;
  obj.len = length;
  return obj
}
module.exports = analyzeArray;
