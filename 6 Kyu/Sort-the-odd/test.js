const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed Tests", () => {
  it("should pass some fixed tests", () => {
    assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4, 11]), [1, 3, 2, 8, 5, 4, 11]);
    assert.deepEqual(sortArray([2, 22, 37, 11, 4, 1, 5, 0]), [2, 22, 1, 5, 4, 11, 37, 0]);
    assert.deepEqual(sortArray([1, 111, 11, 11, 2, 1, 5, 0]),[1, 1, 5, 11, 2, 11, 111, 0]);
    assert.deepEqual(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    assert.deepEqual(sortArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(sortArray([0, 1, 2, 3, 4, 9, 8, 7, 6, 5]),[0, 1, 2, 3, 4, 5, 8, 7, 6, 9]);
  });
});
    
    
describe("Random Tests", () => {
  it("should pass some random tests", () => {   
    
    function getArray(length){
      var arr = [];
      
      while (length--)
        arr.push(Math.floor(Math.random() * 101) - 50);
      
      return arr;
    }
    
    function solution(array) {
      var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
      return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
    }
    
    for (let i = 0; i < 100; i++) {
      let a = getArray(Math.floor(Math.random() * 30));
      let result = solution(a);
      assert.deepEqual(sortArray(a), result);
    }
  });
});