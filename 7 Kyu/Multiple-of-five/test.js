const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    [[0,0],[1,5],[-1,0],[-5,-5],[3,5],[5,5],[7,10],[20,20],[39,40],[990,990],[121,125],[555,555]].forEach(
      ([x,exp])=> assert.strictEqual(roundToNext5(x), exp, `Input: ${x}`)
    );
  })
});

describe("Random Tests.", ()=>{
  
  it("Testing for 50 random tests", () => {
    for( let t=0; t< 50; t++ ){
      let exp = ~~(Math.random()*1e6 - 5e5)*5;
      let inp = exp - ~~(Math.random()*4);
      assert.strictEqual(roundToNext5(inp), exp, `Input: ${inp}`)
    }
  })
})