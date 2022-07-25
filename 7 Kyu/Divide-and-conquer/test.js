const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Divide and Conquer", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(divCon([9, 3, '7', '3']), 2);
    assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
    assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 
    assert.strictEqual(divCon(['1', '5', '8', 8, 9, 9, 2, '3']), 11); 
    assert.strictEqual(divCon([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7]), 61); 
  })

  it("Random tests",() =>{
    const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
    function mydivCon(x){

       let numtot = 0, stringtot=0;
      for (let i = 0; i < x.length; i++) {
         if (x[i] === Number(x[i])) numtot+=x[i];
        else stringtot+=Number(x[i]);
      }
      return numtot-stringtot;
    }
    let names=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i=0;i<100;i++){
      let x=[], len=randint(1,30);
      for (let k=0;k<len;k++) x.push(names[randint(0,names.length-1)]);
      assert.strictEqual(divCon(x.slice()),mydivCon(x), `Testing for ${JSON.stringify(x)}`);
    }
  })
})