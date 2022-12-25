const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",()=>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(index([1, 2, 3, 4],2),9);
    assert.strictEqual(index([1, 3, 10, 100],3),1000000);
    assert.strictEqual(index([1, 2],3),-1);
    assert.strictEqual(index([1,1,1,1,1,1,1,1,1,1], 9),1);
    assert.strictEqual(index([1,1,1,1,1,1,1,1,1,2], 9),512);
    assert.strictEqual(index([29,82,45,10], 3),1000);
    assert.strictEqual(index([6,31], 3),-1);
    assert.strictEqual(index([75,68,35,61,9,36,89,0,30], 10),-1);
  });
});

describe("Random tests",()=>{
  
  const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
  const sol=(arr, n)=>arr.length>n ? Math.pow(arr[n],n) : -1;
  
  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      const arr=Array.from({length:randint(1,5)},a=>randint(1,10)),n=randint(1,5);
      assert.strictEqual(index(arr,n),sol(arr,n),`Testing for ${JSON.stringify(arr)} and ${n}`);
    }
  });
});
