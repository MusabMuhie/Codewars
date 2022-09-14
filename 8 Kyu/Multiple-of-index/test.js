const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests",() => {
  it("Test", () => {
    assert.deepEqual(multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25]);
    assert.deepEqual(multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10]);
    assert.deepEqual(multipleOfIndex([11, -11]), [-11]);
    assert.deepEqual(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]), [-85, 72, 0, 68]);
    assert.deepEqual(multipleOfIndex([28,38,-44,-99,-13,-54,77,-51]), [38, -44, -99]);
    assert.deepEqual(multipleOfIndex([-1,-49,-1,67,8,-60,39,35]), [-49, 8, -60, 35]);
  })
});

describe("Random Tests", () => {
    const randomInteger = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
    
    const check = array => array.filter((item, index) => item % index === 0);
      
    for (let i = 1; i <= 94; i++){
      const array = [];
      const lengthArray = randomInteger(2, 20);
      
      for (let i = 1; i <= lengthArray; i++){
        array.push(randomInteger(-100, 100))
      }

      it(`Testing №${i + 3} for [${array}]`, () => {
        assert.deepEqual(multipleOfIndex(array.slice()), check(array), `It should work for random tests too`);
      })
    };
})
