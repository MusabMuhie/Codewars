const Test = require('@codewars/test-compat');

let u = require('lodash');

describe("Full suite", function() {
  it("Fixed cases from examples", function() {
    Test.assertSimilar(keepOrder([1, 2, 3, 4, 7], 5), 4);
    Test.assertSimilar(keepOrder([1, 2, 3, 4, 7], 0), 0);
    Test.assertSimilar(keepOrder([1, 1, 2, 2, 2], 2), 2);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], 5), 4);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], -1), 0);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], 2), 1);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], 0), 0);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], 1), 0);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], 2), 1);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], 3), 2);
  }); 
  it("More fixed cases", function() {
    Test.assertSimilar(keepOrder([], 1), 0);
    Test.assertSimilar(keepOrder([], 0), 0);
    Test.assertSimilar(keepOrder([1, 1, 1, 1], 2), 4);
    Test.assertSimilar(keepOrder([1, 1, 1, 1], 1), 0);
    Test.assertSimilar(keepOrder([1, 1, 1, 1], 0), 0);
    Test.assertSimilar(keepOrder([1, 3, 5, 6], 0), 0);
    Test.assertSimilar(keepOrder([1, 3, 5, 6], 2), 1);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], -1), 0);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], -2), 0);
    Test.assertSimilar(keepOrder([1, 2, 3, 4], -3), 0);
  });
  for(let i = 0; i < 50; i++) {
      let nl = [];
      for(let j = 0; j < u.random(4, 10); j++)
        nl.push(u.random(-5, 5));
      r = u.random(-7, 7);
      nl = u.sortBy(nl);
      it(`Random test: ary = [${nl.join(', ')}]; val = ${r}`, function(){
        Test.assertSimilar(keepOrder(nl, r), u.sortedIndex(nl, r));
      });
  };
});