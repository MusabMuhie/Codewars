const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(rowWeights([80]), [80,0]);
    assert.deepEqual(rowWeights([100,50]), [100,50]);
    assert.deepEqual(rowWeights([50,60,70,80]), [120,140]);
    assert.deepEqual(rowWeights([13,27,49]), [62,27]);
    assert.deepEqual(rowWeights([70,58,75,34,91]), [236,92]);
    assert.deepEqual(rowWeights([29,83,67,53,19,28,96]), [211,164]);
    assert.deepEqual(rowWeights([0]), [0,0]);
    assert.deepEqual(rowWeights([100,51,50,100]), [150,151]);
    assert.deepEqual(rowWeights([39,84,74,18,59,72,35,61]), [207,235]);
    assert.deepEqual(rowWeights([0,1,0]), [0,1]);
  })
})

describe("Random tests",() =>{
  
  const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
  const sol=arr=>arr.reduce((a,b,i)=>i%2?[a[0],a[1]+b]:[a[0]+b,a[1]],[0,0]);

  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      const arr=Array.from({length:randint(1,35)},_=>randint(1,10**randint(1,3)));
      assert.deepEqual(rowWeights(arr.slice()),sol(arr.slice()),`Testing for [${arr.join(", ")}]`);
    }
  })
})