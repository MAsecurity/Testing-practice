const calculate = require("./calculator");
test("add 2 + 2",() => {
  expect(calculate.add(2,2)).toBe(4);
})
test("subtract 2 - 2",() => {
  expect(calculate.subtract(2,2)).toBe(0);
})
test("multiply 3 * 4",() => {
  expect(calculate.multiply(3,4)).toBe(12);
})
test("divide 10 / 2",() => {
  expect(calculate.divide(10,2)).toBe(5);
})