const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
    assert.strictEqual(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
    assert.strictEqual(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
    assert.strictEqual(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);  
  });
});

describe("Random Tests", () => {
    const randomInteger = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
    
    const check = (array1, array2) => {
       let totalScore = 0;
       array2.forEach((item, index) => {
         item === array1[index] ? totalScore += 4 : item === '' ? totalScore += 0 : totalScore -= 1;  
       })
       return totalScore < 0 ? 0 : totalScore;
    }
    
    const correctAnswers = ['a', 'b', 'c'];
    const answers = ['a', 'b', 'c', ''];
    
    it("Testing for 96 random tests", () => {
      for (let i = 1; i <= 96; i++){

        const array1 = [];
        const array2 = [];
        const arrayLength = randomInteger(4,20);

        for (let i = 1; i <= arrayLength; i++){
          array1.push(correctAnswers[randomInteger(0,2)]);
          array2.push(answers[randomInteger(0,3)]);
        }        
        assert.strictEqual(checkExam(array1.slice(), array2.slice()), check(array1, array2), `Testing for array1 = ${JSON.stringify(array1)}, array2 = ${JSON.stringify(array2)}`);
      }
  });
})