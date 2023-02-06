const chai = require('chai');
const assert = chai.assert;
const _ = require('lodash');

describe("Number of Occurrences", () => {
  function refNumberOfOccurrences(arr, element) {
    var count = 0;
    var idx = arr.indexOf(element);
    while (idx != -1) {
      count++;
      idx = arr.indexOf(element, idx + 1);
    }
    return count;
  }
  
  it("Fixed tests", () => {
    assert.strictEqual([0, 1, 2, 2, 3].slice().numberOfOccurrences(0), 1, `Incorrect answer for 0, arr = [0, 1, 2, 2, 3]`);
    assert.strictEqual([0, 1, 2, 2, 3].slice().numberOfOccurrences(4), 0, `Incorrect answer for 4, arr = [0, 1, 2, 2, 3]`);
    assert.strictEqual([0, 1, 2, 2, 3].slice().numberOfOccurrences(2), 2, `Incorrect answer for 2, arr = [0, 1, 2, 2, 3]`);
    assert.strictEqual([0, 1, 2, 2, 3].slice().numberOfOccurrences(3), 1, `Incorrect answer for 3, arr = [0, 1, 2, 2, 3]`);
    assert.strictEqual([1, 0, 8, 7, 11].slice().numberOfOccurrences(11), 1, `Incorrect answer for 11, arr = [1, 0, 8, 7, 11]`);
    assert.strictEqual([0, "abc", "a", 0.88, "a"].slice().numberOfOccurrences("a"), 2, `Incorrect answer for "a", arr = [0, "abc", "a", 0.88, "a"]`);
    assert.strictEqual(["a", "a", "a", "a", "ab"].slice().numberOfOccurrences("a"), 4, `Incorrect answer for "a", arr = ["a", "a", "a", "a", "ab"]]`);
    assert.strictEqual([0, 5, 5, 2, "c", "a", "aba", "a"].slice().numberOfOccurrences(0), 1, `Incorrect answer for 0, arr = [0,5,5,2,"c","a","aba","a"]`);
    assert.strictEqual([0, 5, 5, 2, "c", "a", "aba", "a"].slice().numberOfOccurrences(4), 0, `Incorrect answer for 4, arr = [0,5,5,2,"c","a","aba","a"]`);
    assert.strictEqual([0, 5, 5, 2, "c", "a", "aba", "a"].slice().numberOfOccurrences(5), 2, `Incorrect answer for 5, arr = [0,5,5,2,"c","a","aba","a"]`);
    assert.strictEqual([0, 5, 5, 2, "c", "a", "aba", "a"].slice().numberOfOccurrences("c"), 1, `Incorrect answer for "c", arr = [0,5,5,2,"c","a","aba","a"]`);
    assert.strictEqual([0, 5, 5, 2, "c", "a", "aba", "a"].slice().numberOfOccurrences("a"), 2, `Incorrect answer for "a", arr = [0,5,5,2,"c","a","aba","a"]`);
  });
  
  it("Random tests", () => {
    for (let arrayNum = 0; arrayNum < 10; arrayNum++) {
      const arrayLen = _.random(0, 20);
      const randomArr = [...new Array(arrayLen)]
                       .map(() => _.random(-100, 100));
      for (let testNum = 0; testNum < 10; testNum++) {
        const randCheck = _.random(0, 1, true); // if randCheck < 0.5, then random,
                                                // else taking from randomArr
        const element = randCheck < 0.5 ? _.random(-100, 100) : _.sample(randomArr);
        const expected = refNumberOfOccurrences(randomArr.slice(), element);
        const actual = randomArr.slice().numberOfOccurrences(element);
        assert.strictEqual(actual, expected, `Incorrect answer for ${element}, arr = [${randomArr}]`);
      }
    }
  })
});