const solution = function() { try { return sumPairs; } catch(_) { return sum_pairs; } } () ;

describe("Sum of Pairs", function(){
  it("Fixed Tests", function(){
    assert.deepEqual(solution([1, 4, 8, 7, 3, 15], 8), [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
    assert.deepEqual(solution([1, -2, 3, 0, -6, 1], -6), [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
    assert.deepEqual(solution([20, -13, 40], -7), undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
    assert.deepEqual(solution([1, 2, 3, 4, 1, 0], 2), [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
    assert.deepEqual(solution([10, 5, 2, 3, 7, 5], 10), [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
    assert.deepEqual(solution([4, -2, 3, 3, 4], 8), [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
    assert.deepEqual(solution([0, 2, 0], 0), [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
    assert.deepEqual(solution([5, 9, 13, -3], 10), [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");
  });
  it("Excruciatingly Long List Tests", function(){
    let l9 = Array(5000000).fill(1);
    l9[0] = 13;
    l9[1] = 3;
    l9[2499999] = 6;
    l9[2500000] = 7;
    l9[4999998] = 8;
    l9[4999999] = -3;
    assert.deepEqual(solution(l9, 13), [6, 7], "Five Million Numbers With Middle Pair: Should terminate with a valid pair output");
    assert.deepEqual(solution(l9, 5), [8, -3], "Five Million Numbers With Pair At End: Should terminate with a valid pair output");
    assert.deepEqual(solution(l9, 16), [13, 3], "Five Million Numbers With Pair At Start: Should terminate with a valid pair output");
    assert.deepEqual(solution(l9, 31), undefined, "Five Million Numbers With No Match: Should return undefined in a decent time period");
  });
});