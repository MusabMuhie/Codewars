const chai = require("chai");
const assert = chai.assert;

describe("Your function", function() {
  it("should work for basic tests", function() {
    assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
    assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
    assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
    assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
    assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
  });
  it("should work for more fixed tests as well", function() {
    assert.strictEqual(sumTwoSmallestNumbers([243,546,745,123,978]), 366);
    assert.strictEqual(sumTwoSmallestNumbers([1948,456,1265,7896,9986]), 1721);
    assert.strictEqual(sumTwoSmallestNumbers([1,876,234234,45345,34435]), 877);
    assert.strictEqual(sumTwoSmallestNumbers([5,4,1,2,3]), 3);
    assert.strictEqual(sumTwoSmallestNumbers([10,343445353,3453445,3453545353453]), 3453455);
    assert.strictEqual(sumTwoSmallestNumbers([1000,2,3, 5]), 5);
    assert.strictEqual(sumTwoSmallestNumbers([1,2,3,4]), 3);
  });
  it("should finally work for <b><i><u>random</u></i></b> tests", function() {
    function solution(numbers) {
      numbers.sort(function (a, b) { 
        return a - b;
      });
      return numbers[0] + numbers[1];
    }
    function randomNumber(a, b) {
      return Math.floor(Math.random() * b - a + 1);
    }
    for (let i = 0; i < 100; i++) {
      var randArr = [randomNumber(0, 1000),randomNumber(0, 100),randomNumber(0, 100),randomNumber(0, 100),randomNumber(0, 1000)];
      assert.strictEqual(sumTwoSmallestNumbers(randArr.slice()), solution(randArr));
    }
  });
});