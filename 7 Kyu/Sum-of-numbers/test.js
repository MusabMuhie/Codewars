const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

if (typeof getSum === "function") {
  GetSum = getSum;
}

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {       
    assert.strictEqual(GetSum(5,-1),14);
    assert.strictEqual(GetSum(505,4),127759);
    assert.strictEqual(GetSum(321,123),44178);
    assert.strictEqual(GetSum(-50,0),-1275);
    assert.strictEqual(GetSum(-1,-5),-15);
    assert.strictEqual(GetSum(-5,-5),-5);
    assert.strictEqual(GetSum(-505,4),-127755);
    assert.strictEqual(GetSum(-321,123),-44055);
    assert.strictEqual(GetSum(0,0),0);
    assert.strictEqual(GetSum(-5,-1),-15);
    assert.strictEqual(GetSum(5,1),15);
    assert.strictEqual(GetSum(-17,-17),-17);
    assert.strictEqual(GetSum(17,17),17);
  });
})

describe("Random Tests:", function(){
    
    function Get_Sum( a,b )
    {
      let sum=0;
      if(a>b) //Swapping Values to make a<b
      {
        a=a+b;
        b=a-b;
        a=a-b;
      }
      if(a==b) return a;
      for( let i=a; i<=b; i++ ) sum+=i;
      return sum;
    }
    
    function randInt(min, max) {
      return Math.floor(Math.random() * (max-min+1)+min);
    }
  
    it("Testing for 100 random tests", () => {
      for(let i = 1; i < 100; i++) {
        let a = randInt(-600,600);
        let b = randInt(-600,600);
        assert.strictEqual(GetSum(a,b),Get_Sum(a,b), "Testing for a="+a+" & b="+b);
      }
    })
});