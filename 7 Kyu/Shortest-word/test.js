
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
    assert.strictEqual(findShort("lets talk about javascript the best language"), 3); 
    assert.strictEqual(findShort("i want to travel the world writing code one day"), 1); 
    assert.strictEqual(findShort("Lets all go on holiday somewhere very cold"), 2); 
    assert.strictEqual(findShort("Test where final word shortest see"), 3); 
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  })
})

describe("Random tests",() =>{
  
  const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
  const sol=s=>Math.min.apply(this, s.split(" ").map(a=>a.length));
  let names=["Bitcoin", "LiteCoin", "Ripple", "Dash", "Lisk", "DarkCoin", "Monero", "Ethereum", "Classic", "Mine", "ProofOfWork", "ProofOfStake", "21inc", "Steem", "Dogecoin", "Waves", "Factom", "MadeSafeCoin", "BTC"];

  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      let s=[], len=randint(1,20);
      for (let k=0;k<len;k++) s.push(names[randint(0,names.length-1)]);
      s=s.join(" ");  
      assert.strictEqual(findShort(s),sol(s),`Testing for ${JSON.stringify(s)}`);
    }
  })
})