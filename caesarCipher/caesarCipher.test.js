const encrypt = require("./caesarCipher");
test("Hello, World! with a shift of 3 should be encrypted to Khoor, Zruog! ",() => {
  expect(encrypt("Hello, World!",3)).toBe("Khoor, Zruog!")
})
