const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] );
  });
});

describe("Random tests", () => {  
  
  let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const solution = function (word) {
    return word.split('').reduce(function (result, char, index) {
      let code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        result.push(index);
      }

      return result;
    }, []);
  };

  it("Testing for 20 random tests", () => {
    for (let i = 0; i < 20; i++) {
      let shuffled = alphabet.split('').sort(function () { return Math.random() - .5; });
      let word = shuffled.slice(0, 10).join('');
      assert.deepEqual(capitals(word), solution(word), `Testing for word = ${JSON.stringify(word)}`);
    }
  })
})