const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed Tests", () => {
  it("Tests", () => {
    assert.strictEqual(select(['banana','rose','orange','apple'], ['carrot','nectarines','cucumber','ananas']),'nectarines')
    assert.strictEqual(select(['attack','defense','fight','retreat'], ['fist','punch','break']),'fist');
    assert.strictEqual(select(['banana','bruxel','varza','ceapa'], ['rosie','carnat','hot','ureche']),'ureche');
    assert.strictEqual(select(['banana','rose','orange','apple'], ['carrot','nectarines','cucumber','ananas']),'nectarines')
    assert.strictEqual(select(['banana','rose','orange','apple'], ['carrot','punch','cucumber','ananas']),'Nothing here')
  })
})

describe('Random Tests', function() {
  let arrSearch, arrTake;
  function testSolution(a, b) {
    var c = arrSearch.slice().sort().reverse()[2][2];
    return arrTake.find(s => s.startsWith(c)) || 'Nothing here';
  }
  function makestring(l) {
    var array = [];
    var possible = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0; i<l; i++) array.push(possible[(Math.floor(Math.random() * possible.length))]);
    return array.join("");
  }
  function arrays() {
    var c = [];
    for(let x=0;x<25;x++) c.push(makestring(8));
    return c;
  }
  it("Tests", () => {
    for(let e=0;e<100;e++){
      arrSearch = arrays();
      arrTake = arrays();
      assert.strictEqual(select([...arrSearch],[...arrTake]), testSolution([...arrSearch],[...arrTake]), 'Should work for both');
    }
  })
});