const capitalize = require("./capitalize");
test("string should be String",() => {
  expect(capitalize("string")).toBe("String");
});
