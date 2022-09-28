const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Tests example test cases", () => {
    assert.strictEqual(sumStr("4","5"), "9");
    assert.strictEqual(sumStr("34","5"), "39");
  });

  it("Tests empty string cases", () => { 
    assert.strictEqual(sumStr("","8"), "8");
    assert.strictEqual(sumStr("9",""), "9");
    assert.strictEqual(sumStr("",""), "0");
  });

  it("Tests random cases", () => {
    
    // random number generator
    let randNum = function(min,max) {
      let diff = max-min;
      return Math.ceil((Math.random()*diff)+min);
    };
    // my solution
    function mySumStr(a,b) {
      if(a == '') {
        if(b == '') {
          return "0";
        }
        else {
          return b.toString();
        }
      }
      else if(b == '') {
        if(a == '') {
          return "0";
        }
        else {
          return a.toString();
        }
      }
      else {
        return (parseInt(a) + parseInt(b)).toString();
      }
    }
    
    for(let i = 0; i < 50; i++) {
      let randA = randNum(0,500).toString();
      let randB = randNum(0,500).toString();
      assert.strictEqual(sumStr(randA,randB),mySumStr(randA,randB), `Testing for a = ${JSON.stringify(randA)}, b = ${JSON.stringify(randB)}`);
    }
  })
});