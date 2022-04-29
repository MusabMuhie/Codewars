const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Well of Ideas - Harder Version", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]), 'Fail!');
    assert.deepEqual(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]), 'Publish!');
    assert.deepEqual(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'I smell a series!');
  });

  it("Random tests",() =>{
    
    const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
    
    function mywell(x){return x.map(x=>x=(x.map(x=>x=x.toString()))).join(' ').toLowerCase().match(/good/g)==null?'Fail!':x.map(x=>x=(x.map(x=>x=x.toString()))).join(' ').toLowerCase().match(/good/g).length<3?'Publish!':'I smell a series!';} 
    
    let names=[['good', 'bad', 'bad', 'bad', 'bad', 'bad', 6, 3, 'cheat', 'TEST'],['GOOD', 'CAPS', 'RAD', 'DAB', 'six','BAD', '8', 8, 'BAD', 'BAD', 'BAD', 'GOOD'],['gOOd', 6, '6', 'CoNcenTraTe', 'bAd', 'bAd', 16, 'bAd', 'bAd', 'bAd']];

    for (let i=0;i<100;i++){
      let x=[], r=[], a=[], e=[], len=randint(1,5);

      for (let k=0;k<len;k++) {
      let t = randint(0, names.length-1);
      e.push(names[t][randint(0,names[t].length-1)]);  
      }
      len=randint(1,7);
      for (let k=0;k<len;k++) {
      let t = randint(0, names.length-1);
      r.push(names[t][randint(0,names[t].length-1)]);
      }
      len=randint(1,6);
      for (let k=0;k<len;k++) {
      let t = randint(0, names.length-1);
      a.push(names[t][randint(0,names[t].length-1)]);
      }
      x.push(e);
      x.push(r);
      x.push(a);
      assert.deepEqual(well(x.slice()),mywell(x.slice()), `Testing for ${JSON.stringify(x)}`);
    }
  })
})