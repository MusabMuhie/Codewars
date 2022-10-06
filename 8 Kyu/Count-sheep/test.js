const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countSheep(0), "");
    assert.strictEqual(countSheep(1), "1 sheep...");
    assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
  });
});

describe("Random tests", () => {
  
  const solution = n => Array.from("_".repeat(n), (_, i) => `${i+1} sheep...`).join("");
  
  it("Testing for 100 random tests", () => {
    for (let i = 0; i < 100; i++){
      assert.strictEqual(countSheep(i), solution(i), `Testing for num = ${i}`)
    }
  });
});