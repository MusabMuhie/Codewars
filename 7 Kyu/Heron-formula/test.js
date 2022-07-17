const chai = require("chai");
const assert = chai.assert;

function dotest(a, b, c, expected) {
    assert.approximately(heron(a, b, c), expected, 0.01, `With a = ${a}, b = ${b}, c = ${c}`);
}

function referenceSolution(a, b, c) {
  const s = (a + b + c) / 2;  
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function randFloat(min, max) {
  return min + Math.random() * (max - min);
}

describe("Solution", function() {
  it("Fixed tests", function() {
    dotest(3, 4, 5, 6);
    dotest(6, 8, 10, 24);
  });
  it("Random tests", function() {
    for (let i = 0 ; i < 200 ; i++) {
      const c = randFloat(10, 200)
      let a, b
      if (Math.random() < 0.5) {
        a = randFloat(1, 50);
        b = a + c - Math.random();
      } else {
        a = c + randFloat(1, 10);
        b = c + randFloat(1, 10);
      }
      dotest(a, b, c, referenceSolution(a, b, c));
    }
  });
});