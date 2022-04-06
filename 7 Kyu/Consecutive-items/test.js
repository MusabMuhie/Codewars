const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

function solution(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;
}

describe("Fixed tests", function() {
  it("Test 1", function() {
    assert.deepEqual(consecutive([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 8), false);
  });
  it("Test 2", function() {
    assert.deepEqual(consecutive([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 3), true);
  });
  it("Test 3", function() {
    assert.deepEqual(consecutive([1, 4, 5, 3, 2, 7, 6, 23, 76, 11, 0], 2, 3), true);
  });
  it("Test 4", function() {
    assert.deepEqual(consecutive([1, -4, -5, 3, -2, 11, 23, -76, 6, -7, 2], 2, 3), false);
  });
  it("Test 5", function() {
    assert.deepEqual(consecutive([1, 2, 3, 4, 5], 1, 5), false);
  });
  it("Test 6", function() {
    assert.deepEqual(consecutive([1, 2, 3, 4, 5], 5, 1), false);
  });
});

describe("Targeted tests", function() {
  for (let i = 1; i < 7; i++) {
    it("Test " + i, function() {
      let a = Math.floor(Math.random() * 2000001) - 1000000;
      let b = Math.floor(Math.random() * 2000001) - 1000000;
      while (a === b) {
        b = Math.floor(Math.random() * 2000001) - 1000000;
      }
      let arrLen = Math.floor(Math.random() * 249) + 2;
      let c = [];
      for (let j = 0; j < arrLen; j++) {
        c.push(Math.floor(Math.random() * 2000001) - 1000000);
      }
      c = c.filter(x => ![a, b].includes(x));
      let arr = [a].concat(c.concat([b]));
      let expected = solution(arr, a, b);
      let actual = consecutive(arr, a, b);
      assert.deepEqual(actual, expected);
    });
  }
});

describe("Random tests", function() {
  for (let i = 1; i < 501; i++) {
    it("Test " + i, function () {
      let arr = [];
      let num;
      let range = Math.floor(Math.random() * 249) + 2;
      for (let j = 0; j < range; j++) {
        num = Math.floor(Math.random() * 2000001) - 1000000;
        if (!arr.includes(num)) {
          arr.push(num);
        }
      }
      let b;
      let a = Math.floor(Math.random() * arr.length);
      let answer = Math.round(Math.random());
      if (answer != 0) {
        let infront = Math.round(Math.random());
        if (infront != 0) {
          if (a !== 0) {
            b = arr[a - 1];
          }
          else {
            b = arr[0];
            a = 1;
          }
        }
        else {
          if (a !== arr.length - 1) {
            b = arr[a + 1];
          }
          else {
            b = arr[arr.length - 1];
            a = arr.length - 2;
          }
        }
      }
      else {
        let fOrS = Math.round(Math.random());
        if ([0, arr.length - 1].includes(a)) {
          b = [1, arr.length - 2];
        }
        else {
          b = [Math.floor(Math.random() * a), Math.floor(Math.random() * ((arr.length - 1) - (a + 1) + 1)) + a + 1];
        }
        if (fOrS != 0) {
          b = arr[b[0]];
        }
        else {
          b = arr[b[1]];
        }
      }
      a = arr[a];
      let expected = solution(arr, a, b);
      let actual = consecutive(arr, a, b);
      assert.deepEqual(actual, expected);
    });
  }
});