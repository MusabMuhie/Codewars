describe("Fixed tests", function() {
    it("should pass fixed tests", function() {
      Test.assertSimilar(distinct([1]), [1]);
      Test.assertSimilar(distinct([1,2]), [1,2]);
      Test.assertSimilar(distinct([1,1,2]), [1,2]);
      Test.assertSimilar(distinct([1,1,1,2,3,4,5]), [1,2,3,4,5]);
      Test.assertSimilar(distinct([1,2,2,3,3,4,4,5,6,7,7,7]), [1,2,3,4,5,6,7]);
    });
  });
  
  describe("Random tests", function() {
    it("should pass random tests", function() {
    
      function random(max) {
        return Math.floor(Math.random() * max) + 1;
      }
    
      function generateRandomArr() {
        let length = random(50),
            arr = [];
        for (let i = 0; i < length; i++) {
          arr = arr.concat(new Array(random(50)).fill(random(5000000)));
        }
        return Test.randomize(arr);
      }
      
      function solution(arr) {
        return [...new Set(arr)];
      }
    
      for (let i = 0; i < 100; i++) {
        let arr = generateRandomArr(),
            expected = solution(arr);
        Test.assertSimilar(distinct(arr), expected);
      }
    });
  });
  