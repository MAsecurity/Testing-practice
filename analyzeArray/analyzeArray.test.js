const analyzeArray = require("./analyzeArray");
let arr = [1,8,3,4,2,6]
let result = analyzeArray(arr);
test("return average of array",()=>{
  expect(result.average).toBe(4);
})
test("return min of array",()=>{
  expect(result.min).toBe(1);
})
test("return max of array",()=>{
  expect(result.max).toBe(8);
})
test("return length of array",()=>{
  expect(result.length).toBe(6)
})