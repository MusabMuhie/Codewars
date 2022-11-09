const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(angle(3), 180);
    assert.strictEqual(angle(4), 360);
  });
})

describe("Random tests",() =>{
  const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
  const sol=n=>(n-2)*180;

  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      const n=randint(3,Math.pow(10,randint(1,2)));
      assert.strictEqual(angle(n),sol(n),`Testing for ${n}`);
    }
  })
});