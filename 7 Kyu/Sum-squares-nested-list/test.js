const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
let l = [1,2,3];
Test.assertEquals(SumSquares(l),14)
l = [[1,2],3]
Test.assertEquals(SumSquares(l),14)
l = [[[[[[[[[1]]]]]]]]]
Test.assertEquals(SumSquares(l),1)
l = [10,[[10],10],[10]]
Test.assertEquals(SumSquares(l),400)
l = [1,[[3],10,5,[2,[3],[4],[5,[6]]]],[10]]
Test.assertEquals(SumSquares(l),325)


for(let i = 0; i < 50; i++){
    let tests = [0];
    for(let i2 = 0; i2< 4; i2++){
        tests.push(Math.floor(Math.random()*50))
        for(let i3 = 0; i3< 4; i3++){
            tests.push([Math.floor(Math.random()*50)])
        }
    }
Test.assertEquals(SumSquares(tests),mysoqw(tests))
}
  });
});