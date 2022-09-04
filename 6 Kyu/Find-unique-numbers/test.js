const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed Tests", () => {
  it ("Basic tests ", () => {
    assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]),2);
    assert.strictEqual(findUniq([ 0, 0, 0.55, 0, 0 ]),0.55);  
    assert.strictEqual(findUniq([ 4, 4, 4, 3, 4, 4, 4, 4 ]),3);
    assert.strictEqual(findUniq([ 5, 5, 5, 5, 4, 5, 5, 5 ]),4);
    assert.strictEqual(findUniq([ 6, 6, 6, 6, 6, 5, 6, 6 ]),5);
    assert.strictEqual(findUniq([ 7, 7, 7, 7, 7, 7, 6, 7 ]),6);
  })
  it ("The last item", () => {
    assert.strictEqual(findUniq([ 8, 8, 8, 8, 8, 8, 8, 7 ]),7);
    assert.strictEqual(findUniq([ 3, 3, 2, 3, 3, 3, 3, 3 ]),2);
    assert.strictEqual(findUniq([ 2, 1, 2, 2, 2, 2, 2, 2 ]),1);
  })
  it ("The first item", () => {
    assert.strictEqual(findUniq([ 0, 1, 1, 1, 1, 1, 1, 1 ]),0);
  })

  it ("Very big number", () => {
    assert.strictEqual(
      findUniq(generateTestArr(Math.pow(2, 40), Math.pow(2, 50), 100)) , Math.pow(2, 40)
    );
  })
  it ("Negative number", () => {
    assert.strictEqual(
      findUniq(generateTestArr(-1, 1, 1000)) , -1
    );  
  })
  it ("Float number", () => {
    assert.strictEqual(
      findUniq(generateTestArr(0.0000001, 0.0010001, 1000)) , 0.0000001
    );  
  })
  it ("Very long array", () => {
    assert.strictEqual(
      findUniq(generateTestArr(42, 24, 10000000)),42
    );  
  })
  it ("Infinity and -Infinity", () => {
    assert.strictEqual(
      findUniq(generateTestArr(-Infinity, Infinity, 1000)) , -Infinity
    );  
  })
})
describe ("Random Tests", () => {
  it("Tests", () => {
    for (let i = 0; i < 50; i++) {
      let a = Math.random();
      let b = Math.random();
      // Added by Chrono79 to make sure a and b are different
      while (b === a)
        b = Math.random();
      assert.strictEqual(
        findUniq(generateTestArr(a, b, 1000)) , a
      );
    }
  })
})

function generateTestArr(answer, mass, length) {
  let arr = [];
  // Generate random integer in [0, length)
  let answerIndex = Math.floor(Math.random() * length);
  
  // Fill the array with mass and answer
  for (let i = 0; i < length; i++) {
    // Answer will be on answerIndex
    arr.push(i === answerIndex ? answer : mass);
}

return arr;
}
