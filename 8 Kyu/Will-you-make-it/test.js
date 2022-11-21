const assert = require("chai").assert;
const sol = (distance, mpg, fuelLeft) => distance <= mpg * fuelLeft;

describe("zeroFill", function() {
  it("Sample Tests", function() {
    assert.equal(zeroFuel(50, 25, 2), true);
    assert.equal(zeroFuel(100, 50, 1), false);
  });
  it("Basic Tests", function() {
    assert.equal(zeroFuel(60, 30, 3), true);
    assert.equal(zeroFuel(70, 25, 1), false);
    assert.equal(zeroFuel(100, 25, 3), false);
  });
  it("Random Tests", function() {
    for (let i = 0; i < 100; ++i) {
      let d = ~~(Math.random() * 90 + 10),
          m = ~~(Math.random() * 20 + 10),
          f = ~~(Math.random() * 5 + 1);
          
      assert.equal(zeroFuel(d, m, f), sol(d, m, f));
    }
  });
});