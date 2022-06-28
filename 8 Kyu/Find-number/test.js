describe("Fixed tests", function() {
    it("should pass fixed tests", function() {
      Test.assertSimilar(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
      Test.assertSimilar(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
      Test.assertSimilar(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
    })  
  })  
  
  describe("Random tests", function() {
    it("should pass random tests", function() {
      for (let i = 0; i < 20; i++) {
        let randomDivisor = Math.floor(Math.random() * 10) + 1;
        Test.assertSimilar(divisibleBy([0,1,2,3,4,5,6,7,8,9,10], randomDivisor), (function(numbers, divisor){
          return numbers.filter(number => number % divisor === 0);
        })([0,1,2,3,4,5,6,7,8,9,10], randomDivisor));
      }  
    })  
  }) 