const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sequenceSum(2, 6, 2), 12)
    assert.strictEqual(sequenceSum(1, 5, 1), 15)
    assert.strictEqual(sequenceSum(1, 5, 3), 5)
    assert.strictEqual(sequenceSum(0, 15, 3), 45)
    assert.strictEqual(sequenceSum(16, 15, 3), 0)
    assert.strictEqual(sequenceSum(2, 24, 22), 26)
  })
})

describe("Random tests", () => {  
  const checkSequenceSum = (begin, end, step) => {
    if (begin > end) {
      return 0;
    }
    return begin + sequenceSum(begin + step, end, step);
  };

  function returnRand() {
    return Math.round(Math.random() * 1000);
  }

  function returnStep() {
    return Math.round(Math.random() * 100);
  }
  
  it("Testing for 50 random tests", () => {
    for (let i = 0; i < 50; i++) {
      let bF = returnRand(),
         eF = returnRand(),
         sF = returnStep();
      assert.strictEqual(sequenceSum(bF, eF, sF),checkSequenceSum(bF, eF, sF), `Testing for ${bF}, ${eF}, ${sF}`);
     }
  });
});