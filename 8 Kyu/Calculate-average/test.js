const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

if (typeof findAverage !== 'function')
  findAverage = find_average;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findAverage([1,1,1]), 1);
    assert.strictEqual(findAverage([1,2,3]), 2);
    assert.strictEqual(findAverage([1,2,3,4]), 2.5);
  });
});  

describe("Random tests", () => {  
    
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  for(let i = 0; i < 100; i++){
    let arr = Array.from({length: randint(0, 15)}, (_, i) => randint(1, 100))
    let expected = !arr.length ? 0 : arr.reduce((a, b) => a + b, 0) / arr.length
    it(`findAverage(${JSON.stringify(arr)}) should equal ${expected}`, () => {
      assert.strictEqual(findAverage(arr), expected);
    });
  }
})