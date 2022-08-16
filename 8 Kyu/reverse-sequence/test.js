const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("reverseSeq", function() {
  it("Sample Test", function() {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
  it("Basic Tests", function() {
    assert.deepEqual(reverseSeq(6), [6, 5, 4, 3, 2, 1]);
    assert.deepEqual(reverseSeq(100), new Array(100).fill(0).map((_, i) => 100 - i));
    assert.deepEqual(reverseSeq(10000), new Array(10000).fill(0).map((_, i) => 10000 - i));
  });
  it("Random Tests", function() {
    for (let i = 0; i < 100; ++i) {
      let n = ~~(Math.random() * 99 + 1);
      
      assert.deepEqual(reverseSeq(n), new Array(n).fill(n).map((_, i) => n - i));
    }
  });
});