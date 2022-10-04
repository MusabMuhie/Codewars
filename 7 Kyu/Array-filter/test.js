const assert = require("chai").assert;

describe("Fixed tests", () => {
    it('should return an empty array if there are no even numbers', function(){
      assert.deepEqual(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
      assert.deepEqual(getEvenNumbers([1,2]), [2])
      assert.deepEqual(getEvenNumbers([12,14,15]), [12,14])
      assert.deepEqual(getEvenNumbers([13,15]), [])
      assert.deepEqual(getEvenNumbers([1,3,9]), [])
    });
  })
  
describe("Random tests", () => {
  const generate = () => {
    const length = Math.random() * 50 | 0;
    return Array.from({length}).map((_) => Math.random() * 100 | 0)
  };
    
  for (let i = 0; i < 100; i++) {
    const arr = generate();
    const copy = [...arr];
      
     it("Given arr = " + arr, () => {
       assert.deepEqual(getEvenNumbers(arr.slice()), copy.filter(e => e % 2 === 0))
      })
    }
  })