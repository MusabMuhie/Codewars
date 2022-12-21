const { assert } = require("chai")

describe("Public tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(isTriangle(1,2,2), true);
    assert.strictEqual(isTriangle(7,2,2), false);
  });

  it("Test 1", () => {  
     assert.strictEqual(isTriangle(1,2,3), false);
     assert.strictEqual(isTriangle(1,3,2), false);
     assert.strictEqual(isTriangle(3,1,2), false);
      
     assert.strictEqual(isTriangle(5,1,2), false);
     assert.strictEqual(isTriangle(1,2,5), false);
     assert.strictEqual(isTriangle(2,5,1), false);
  });

  it("Test 2", () => {
     assert.strictEqual(isTriangle(4,2,3), true);
     assert.strictEqual(isTriangle(5,1,5), true);
     assert.strictEqual(isTriangle(2,2,2), true);
  });

  it("Test for negative values", function() {
     assert.strictEqual(isTriangle(-1,2,3), false);
     assert.strictEqual(isTriangle(1,-2,3), false);
     assert.strictEqual(isTriangle(1,2,-3), false);       
     assert.strictEqual(isTriangle(-5,1,3), false);
     assert.strictEqual(isTriangle(0,2,3), false);
  });
})
  
describe("Random tests", () => {  
    
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function sol(a, b, c){
    return a+b > c && b+c >a && a+c > b
  }
  
  for(let i = 0; i < 100; i++){
    let arr = Array.from({length: 3}, (_, i) => randint(-2, 10))
    let expected = sol(...arr.slice())
    it(`isTriangle(${arr.join(",")}) should equal ${expected}`, () => {
      assert.strictEqual(isTriangle(...arr.slice()), expected);
    });
  }
})
