const encrypt = require("./caesarCipher");
test("Hello, World! with a shift of 3 should be encrypted to Khoor, Zruog! ",() => {
  let encrypted = new encrypt("Hello, World!",3)
  expect(encrypted.encryption()).toBe("Khoor, Zruog!")
})
