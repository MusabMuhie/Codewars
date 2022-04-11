const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", function(){
  it("Test", () => {
    assert.deepEqual(vowelIndices("mmm"), []);
    assert.deepEqual(vowelIndices("apple"), [1,5]);
    assert.deepEqual(vowelIndices("super"), [2,4]);
    assert.deepEqual(vowelIndices("orange"), [1,3,6]);
    assert.deepEqual(vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
  })
});

describe("Random tests", function(){
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const sol=w=>[...w].reduce((a,b,i)=>/[aeiouy]/i.test(b)?a.concat(i+1):a,[]);
const base="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i=0;i<40;i++){
    const s=Array.from({length: randint(1,35)},a=>base[randint(0,base.length-1)]).join("");
    it(`Testing for '${s}'`,() =>{
     assert.deepEqual(vowelIndices(s),sol(s),"It should work for random inputs too");
    })
  }
});