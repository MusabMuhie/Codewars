const {assert} = require("chai");
const sol = arr => arr.map(v => typeof v === "number" ? v : sumNested(v)).reduce((p, c) => p + c, 0);
const makeNestedList = (limit = 0) => [...new Array(~~(Math.random() * 30))].map(_ => Math.random() * 10 > 9 && limit != 15 ? makeNestedList(++limit) : ~~(Math.random() * 100));

describe("sumNested", function() {
  it("should handle non-nested lists", function() {
    assert.strictEqual(sumNested([1]), 1);
    assert.strictEqual(sumNested([1, 2, 3, 4]), 10);
    assert.strictEqual(sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55);
  });
  it("non-nested edge case", function() {
    assert.strictEqual(sumNested([]), 0);
  });
  it("should handle simple nestings", function() {
    assert.strictEqual(sumNested([[1], []]), 1);
    assert.strictEqual(sumNested([[1, 2, 3, 4]]), 10);
  });
  it("should handle more complex nestings", function() {
    assert.strictEqual(sumNested([1, [1], [[1]], [[[1]]]]), 4);
    assert.strictEqual(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]]), 8);
  });
  it("complex nesting edge case", function() {
    assert.strictEqual(sumNested([[[[], [], [[[[[[[[[[]]]]]]]]]]], [], [], [[[], [[]]]]], []]), 0);
  });
  it("should handle random test cases", function() {
    for (let i = 0; i < 100; ++i) {
      let arr = makeNestedList();
      assert.strictEqual(sumNested(arr), sol(arr));
    }
  });
});