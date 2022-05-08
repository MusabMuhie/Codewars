const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
    assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
    assert.strictEqual(twoSort(["lets", "talk", "about", "javascript", "the", "best", "language"]), 'a***b***o***u***t'); 
    assert.strictEqual(twoSort(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"]), 'c***o***d***e'); 
    assert.strictEqual(twoSort(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"]), 'L***e***t***s'); 
  })
})

describe("Random tests",() =>{
  
  const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
  
  function mytwoSort(s) {
    s = s.sort();
    return s[0].split('').join('***');
  }
  
  let names=["Bitcoin", "LiteCoin", "Ripple", "Dash", "Lisk", "DarkCoin", "Monero", "Ethereum", "Classic", "Mine", "ProofOfWork", "ProofOfStake", "21inc", "Steem", "Dogecoin", "Waves", "Factom", "MadeSafeCoin", "BTC"];

  it("Testing for 40 random tests", () => {
    
    for (let i=0;i<40;i++){
      let s=[], len=randint(1,20);
      for (let k=0;k<len;k++) s.push(names[randint(0,names.length-1)]);
      assert.strictEqual(twoSort(s.slice()),mytwoSort(s),`Testing for ${JSON.stringify(s)}`);
    }
  });
})