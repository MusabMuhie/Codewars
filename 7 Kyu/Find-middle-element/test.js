const strictEqual = require('chai').assert.strictEqual;

function doTest (triplet, expected) {
  const actual = gimme(triplet);
  strictEqual(actual, expected);
}

describe("Basic Test", function () {
  it("Tests for integers", function () {
    doTest([2, 3, 1], 0);
    doTest([5, 10, 14], 1);
  });
  it("Tests for floats", function () {
    doTest([2.1, 3.2, 1.4], 0);
    doTest([5.9, 10.4, 14.2], 1);
  });
  it("Tests for negative numbers", function () {
    doTest([-2, -3, -1], 0);
    doTest([-5, -10, -14], 1);
  });
  it("Tests for mixed numbers", function () {
    doTest([-2, -3.2, 1], 0);
    doTest([-5.2, -10.6, 14], 0);
  });
});

describe("Random tests", function () {
  function randint (a, b) {
    return Math.ceil(Math.random() * (b - a) + 1);
  }

  const solution = function (inputArray) {
    return Array.prototype.slice.apply(inputArray).map(function (e, i) {
      return {
        e: e,
        i: i
      };
    }).sort(function (a, b) {
      return a.e - b.e;
    })[1].i;
  };

  for (let k = 0; k < 100; k++) {
    const triplet = [];

    while (triplet.length < 3) {
      const x = randint(0, 100) - 50;
      if (triplet.indexOf(x) == -1)
        triplet.push(x);
    }
    it("Testing for " + triplet, function () {
      doTest(triplet.slice(), solution(triplet.slice()));
    });  
  }
});