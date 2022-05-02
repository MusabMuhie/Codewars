const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(isDivisible(3,3,4),false);
    assert.strictEqual(isDivisible(12,3,4),true);
    assert.strictEqual(isDivisible(8,3,4),false);
    assert.strictEqual(isDivisible(48,3,4),true);
    assert.strictEqual(isDivisible(100,5,10),true);
    assert.strictEqual(isDivisible(100,5,3),false);
    assert.strictEqual(isDivisible(4,4,2),true);
    assert.strictEqual(isDivisible(5,2,3),false);
    assert.strictEqual(isDivisible(17,17,17),true);
    assert.strictEqual(isDivisible(17,1,17),true);
  })
})

describe("Random tests", () =>{
  
  function randint(a,b){return Math.floor(Math.random()*(b-a+1)+a);}
  
  function check(n,x,y) {return n%x==0 && n%y==0;}
  
  it("Testing for 40 random tests", () => {
    
    for (let i=0;i<40;i++){    
      let n=randint(1,100), x=randint(1,5), y=randint(1,10);
      assert.strictEqual(isDivisible(n,x,y),check(n,x,y),`Testing for isDivisible(${n}, ${x}, ${y})`)
    }
  })
})