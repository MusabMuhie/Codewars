const chai = require('chai');
const assert = chai.assert;
const _ = require('lodash');

describe("Sample tests",() => {
  
  it("2 is even", () => {
    assert.strictEqual(even_or_odd(2), "Even");
  });
  it("7 is odd", () => {
    assert.strictEqual(even_or_odd(7), "Odd");
  });
  it("-42 is even", () => {
    assert.strictEqual(even_or_odd(-42), "Even");
  });
  it("-7 is odd", () => {
    assert.strictEqual(even_or_odd(-7), "Odd");
  });
  it("0 is even", () => {
    assert.strictEqual(even_or_odd(0), "Even");
  });
});

describe("Random tests", () => {

  let generateCases = (odd, sign, count) => {
    return Array.from(
      { length: count }, 
      _ => [ sign * (~~(Math.random() * 500) * 2 + odd), odd ? "Odd" : "Even"]
    );
  }
  
  let generateTestCases = () => [
    ...generateCases(0, 1, 10),
    ...generateCases(0,-1, 10),
    ...generateCases(1, 1, 10),
    ...generateCases(1,-1, 10),
  ];
  
  
  let cases = _.shuffle(generateTestCases());
  for(let [input, expected] of cases) {
    it(`Should return "${expected}" for ${input}`, () => {
      let actual = even_or_odd(input);
      assert.strictEqual(actual, expected);
    });
  }  
});