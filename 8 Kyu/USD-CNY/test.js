const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("USD => CNY", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(usdcny(15), '101.25 Chinese Yuan');
    assert.strictEqual(usdcny(465), '3138.75 Chinese Yuan');
  });

  it("Tests Random Test Cases", () => {    
    function randNum(min, max) {
      return Math.ceil((Math.random()*(max-min))+min);
    }
    
    function myUSDCNY(usd) {
      return `${(usd*6.75).toFixed(2)} Chinese Yuan`
    }
    
    for(let i = 0; i < 100; i++) {
      let randCurr = randNum(0, 10000);
      assert.strictEqual(usdcny(randCurr), myUSDCNY(randCurr), `Testing for usd = ${randCurr}`);
    }
  })
});

