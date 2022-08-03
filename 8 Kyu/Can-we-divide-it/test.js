const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",function(){
  it("Testing for fixed tests", () => {
    assert.strictEqual(isDivideBy(8, 2, 4), true);
    assert.strictEqual(isDivideBy(12, -3, 4), true);
    assert.strictEqual(isDivideBy(8, 3, 4), false);
    assert.strictEqual(isDivideBy(5, 2, -2), false);
    assert.strictEqual(isDivideBy(-100, -25, 10), true);
    assert.strictEqual(isDivideBy(10000, 5, -3), false);
    assert.strictEqual(isDivideBy(4, 4, 2), true);
    assert.strictEqual(isDivideBy(5, 2, 3), false);
    assert.strictEqual(isDivideBy(-96, 25, 17), false);
    assert.strictEqual(isDivideBy(33, 1, 33), true);
  })
})

describe("Random Tests for positive integers", () => {
  const randomInt = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
  const check = (number, a, b) => number % a === 0 && number % b === 0;

  it("Testing for 10 random tests", () => {
    for (let i = 0; i < 10; i++){
      let number = randomInt(1, 10000);
      let a = randomInt(1, 4);
      let b = randomInt(1, 7);
      assert.strictEqual(isDivideBy(number, a, b), check(number, a, b), `Testing for isDivideBy(${number}, ${a}, ${b}`);
    }
  });
})

describe("Random Tests for negative integers", () => {
  const randomInt = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
  const check = (number, a, b) => number % a === 0 && number % b === 0;

  it("Testing for 10 random tests", () => {
    for (let i = 0; i < 10; i++){
      let number = randomInt(-10000, 1000);
      let a = randomInt(-4, -1);
      let b = randomInt(-7, -1);
      assert.strictEqual(isDivideBy(number, a, b), check(number, a, b), `Testing for isDivideBy(${number}, ${a}, ${b}`);
    }
  });
})