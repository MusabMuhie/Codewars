const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(minValue([1, 3, 1]), 13);
    assert.strictEqual(minValue([4, 7, 5, 7]), 457);
    assert.strictEqual(minValue([4, 8, 1, 4]), 148);
    assert.strictEqual(minValue([5, 7, 9, 5, 7]), 579);
    assert.strictEqual(minValue([6, 7, 8, 7, 6, 6]), 678);
    assert.strictEqual(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
    assert.strictEqual(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
    assert.strictEqual(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
    assert.strictEqual(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);
  });
})

describe("Random tests",() =>{
  
  const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
  const sol=n=>+Array.from(new Set(n)).sort().join("");

  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      const n=Array.from({length:randint(3, 45)},_=>randint(1,9));   
      assert.strictEqual(minValue(n.slice()),sol(n.slice()),`Testing for [${n.join(", ")}]`);
    }
  })
});