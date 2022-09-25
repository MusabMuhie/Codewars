const { assert } = require('chai');

describe("Fixed tests", function() {
  it("Testing for [1, 2, 3, 1, 3, 3]", function() {
    assert.deepEqual(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
  });
  it("Testing for [75, 68, 75, 47, 68]", function() {
    assert.deepEqual(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
  });
  it("Testing for [42, 72, 32, 4, 94, 82, 67, 67]", function() {
    assert.deepEqual(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);
  });
  it("Testing for [100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]", function() {
    assert.deepEqual(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]), [100, 100, 100, 100]);
  });
  it("Testing for [82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]", function() {
    assert.deepEqual(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]), [44, 79, 50, 44, 79, 50]);
  });
});

describe("Random tests", function() {
  const sol = nums => nums.filter(x => nums.filter(n => n == x).length % 2 == 0);
  
  for (let i = 0; i < 200; i++) {
    const numberOfDigits = Math.floor((Math.random() * 14) + 3);
    const digits = [];
    for (let n = 0; n < numberOfDigits; n++) {
      digits.push(Math.floor(Math.random() * 100) + 1);
    }
    
    const argument = [];
    const totalLength = Math.floor((Math.random() * 100) + 10);
    for (let n = 0; n < totalLength; n++) {
      argument.push(digits[Math.floor(Math.random() * digits.length)]);
    }
    
    const exp = sol(argument);
    
    it("Testing for [" + argument.toString() + "] should equal: [" + exp.toString() + "]", function() {
      assert.deepEqual(oddOnesOut(argument), exp);
    });
  }
  
  
  /*
  const randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const sol = nums => nums.filter(x => nums.filter(n => n == x).length % 2 == 0);
  for (let i = 0; i < 200; i++) {
    const argument = Array.from({length: randint(3, 14)}, () => randint(1, 100));
    const exp = sol(argument);
    
    it("Testing for [" + argument.join(', ') + "] should equal: [" + exp.join(', ') + "]", function() {
      assert.deepEqual(oddOnesOut(argument), exp);
    });
  }
  */
});