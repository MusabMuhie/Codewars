const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    
    let results1 = twoOldestAges([1,5,87,45,8,8]);
    let results2 = twoOldestAges([6,5,83,5,3,18]);
  
    assert.strictEqual(results1[0], 45, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');
    assert.strictEqual(results1[1],87, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');
    
    assert.strictEqual(results2[0], 18, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
    assert.strictEqual(results2[1], 83, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');
    })  
  
  it("Random tests", () => {  
    
    function randint(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for(let i = 0; i < 100; i++){
      let age = Array.from({length: randint(2, 30)}, (_, i) => randint(0, 100))
      let expected = age.slice().sort((a, b) => a - b).slice(-2)
      assert.deepEqual(twoOldestAges(age.slice()), expected, `twoOldestAges(${JSON.stringify(age)}) should equal ${JSON.stringify(expected)}`);
    }
  })
})