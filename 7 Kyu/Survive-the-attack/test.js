const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomArray(){
  // let size = randomInt(0, 30);
  return [...Array(10)].map((_, i) => randomInt(1, 100));
}

const zip = (a, b) => Array.from(Array(Math.min(b.length, a.length)), (_, i) => [a[i], b[i]]);

function reference(attackers, defenders) {
  const plus = (x,y) => y+x , sum = xs => xs.reduce(plus,0) ;
  const survivors = defenders.length - attackers.length + 
          sum( zip(attackers, defenders).map(t => Number(t[0] < t[1]) - Number(t[0] > t[1])));
  return survivors ? survivors > 0 : sum(defenders) >= sum(attackers) ;
}

describe("Solution", function() {
  it("Basic Tests", function() {
    assert.strictEqual(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
    assert.strictEqual(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
    assert.strictEqual(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true);
    assert.strictEqual(hasSurvived([], [1, 2, 3]), true);
    assert.strictEqual(hasSurvived([1, 2, 3], []), false);
    assert.strictEqual(hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]), false);
  });
  it("Random Tests", function() {
    for(let i = 0; i < 100; i++) {
      let a = randomArray();
      let d = randomArray();
      const expected = reference(a,d);
      const message = `hasSurvived(${ JSON.stringify(a) },${ JSON.stringify(d) })`;
      const actual = hasSurvived(a,d);
      assert.strictEqual(actual,expected,message);
    }
  });
  it("Input mutation tests", function() {
    for(let i = 0; i < 100; i++) {
      let a = randomArray();
      let d = randomArray();
      let aClone = a.slice();
      let dClone = d.slice();
      assert.strictEqual(hasSurvived(a, d), reference(aClone,dClone),`hasSurvived(${ JSON.stringify(aClone) },${ JSON.stringify(dClone) })`);
      assert.deepEqual(a,aClone,`testing attackers argument after calling hasSurvived`);
      assert.deepEqual(d,dClone,`testing defenders argument after calling hasSurvived`);
    }
  });
});