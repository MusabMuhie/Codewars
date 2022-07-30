const {assert} = require("chai");

describe("spacify", function() {
  it("basic tests", function() {
    assert.equal(spacify('hello world'),'h e l l o   w o r l d');
    assert.equal(spacify('12345'),'1 2 3 4 5');
  });
  it("random tests", function() {
    for (let i = 0; i <= 100; i += 1) {
      let str = Test.randomToken();
      assert.equal(spacify(str), str.split('').join(' '))
    }
  });
});

