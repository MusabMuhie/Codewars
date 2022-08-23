const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("CodeWarrior"),"()(((())())");
    assert.strictEqual(duplicateEncode("Supralapsarian"),")()))()))))()(","should ignore case");
    assert.strictEqual(duplicateEncode("iiiiii"),"))))))","duplicate-only-string")
  });

  it( "Tests with '(' and ')'", () => {
    assert.strictEqual(duplicateEncode("(( @"),"))((");
    assert.strictEqual(duplicateEncode(" ( ( )"),")))))(")
  });

  it( "And now... some random tests !", () => {
    let rndEncode = function(){
      let chars = "abcdeFGHIJklmnOPQRSTuvwxyz() @!".split('').sort(function(){return (Math.random()>.5)? 1:-1}).join('');
      let enc = "", src = "", count = 0, len = 10+~~(Math.random()*10), dup = chars[chars.length-1];
      for(let c=0; c<len; c++){
        if(Math.random()>.5){
          enc += "(";
          src += chars[c];
        }else{
          enc += ")";
          src += dup;
          count++;
        }
      }
      // Chrono79's intent to fix the random quirk    
      // It happened because the duplicate char was inserted only once so it wasn't a duplicate at all.    
      // So I add it once more to fix it
      if (count === 1) {
        enc += ")";
        src += dup;
      }  
      return {src:src, res:enc}
    };

    let t = 5;
    while(t--){
      let tst = rndEncode();
      assert.strictEqual(duplicateEncode(tst.src),tst.res,"should encode '"+tst.src+"'")
    }
  })
});