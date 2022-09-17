const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
  it("test", () => {
    const pairs = keysAndValues({d: 4, e: 5, f: 6, g: 7})
    assert.isOk(pairs, 'function did not return a value')
    assert.isTrue(pairs.length == 2, 'function did not return an array with 2 arrays')
    assert.isTrue(pairs[0].length == 4, 'function did not return enough keys')
    assert.isTrue(pairs[1].length == 4, 'function did not return enough values')
    assert.isTrue(pairs[0][1] == 'e', 'function did not return correct keys')
    assert.isTrue(pairs[1][2] == 6, 'function did not return correct values')
  });
});