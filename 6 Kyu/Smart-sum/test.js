const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed Tests", () => {
  it("Should pass fixed tests", () => {
    assert.strictEqual(smartSum(1,2,3),6, 'handles numbers');
    assert.strictEqual(smartSum(1,2,3,[4,5],6),21, 'handles arrays');
    assert.strictEqual(smartSum(1,[2,3],4,[[5],[6,7]],8),36, 'handles deeply nested arrays');
  });
});

describe('Random tests', function(){
  it('Sums random numbers correctly',function(){
    for(let i = 0; i < 100; i++){
      let args = [];
      let sum = 0;
      for(let j = 0; j < 20; j++){
        let random = getRandomIntInclusive(0,10000)
        args.push(random);
        sum += random;
      }
      assert.strictEqual(smartSum(...args),sum,' random sum');
    }
  });
  
  it('Sums random numbers, with nesting, correctly',function(){
    for(let i = 0; i < 100; i++){
      let args = [];
      let sum = 0;
      for(let j = 0; j < 20; j++){
        let random;
        if(j%2 == 0){
          random = getRandomIntInclusive(0,10000);
        } else {
          random = [getRandomIntInclusive(0,10000)];
        }
        args.push(random);
        if(Array.isArray(random)) sum += random[0];
        else sum += random;
      }
      assert.strictEqual(smartSum(...args),sum,' random nested sum');
    }
  });

  // helper function from MDN
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
