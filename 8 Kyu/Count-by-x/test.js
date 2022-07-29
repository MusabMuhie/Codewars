const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests",function(){
  it("Testing for fixed tests", () => {
    assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
    assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")
    assert.deepEqual(countBy(3,7), [3,6,9,12,15,18,21], "Array does not match")
    assert.deepEqual(countBy(50,5), [50,100,150,200,250], "Array does not match")
    assert.deepEqual(countBy(100,6), [100,200,300,400,500,600], "Array does not match")
  })

  it("Random Tests",() => {
  
    function randint(a,b){return Math.floor(Math.random()*(b-a)+a);}

    function countSol(x, n) {
        let z = [];
        for (let i = 1; i <= n; i++) {
            z.push(x * i);
        }
        return z;
    }
 
    for (let k=0;k<20;k++){
      let x=randint(1, 100);
      let n=randint(1, 20);
      assert.deepEqual(countBy(x, n), countSol(x,n),`Testing for result with count_by(${x},${n})`)
    }
  })
})