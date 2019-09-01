function test(description, cb) {
  console.log(`
  TEST: ${description}`)
  cb()
}

function expect(actual, expected, message) {
  if (actual === expected) {
    console.log('\x1b[42m%s\x1b[0m', ' ✓ SUCCESS  ', message)
  } else {
    console.log('\x1b[41m%s\x1b[0m', ' ✖ FAIL  ', message)
  }
}

module.exports = {
  test,
  expect
}
