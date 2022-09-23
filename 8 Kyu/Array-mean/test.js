describe('get average', function () {
    it('should find the average', function () {
      Test.assertEquals(findAverage([1]), 1)
      Test.assertEquals(findAverage([1, 3, 5, 7]), 4)
      Test.assertEquals(findAverage([-10, -5, -5, 0]), -5)
      Test.assertEquals(findAverage([0]), 0)
    })
    it('should work for random cases', function () {
      for (let i = 0; i < 50; i++) {
        let length = Math.floor(Math.random()*25)+10;
        let arr = [];
        for (let j = 0; j < length; j++) {
          arr.push(Math.floor(Math.random()*100)-10)
        }
        Test.assertEquals(findAverage(arr.slice()), solution(arr))
      }
    })
    function solution (nums) {
      return nums.reduce(function(c, n) { return c + n }) / nums.length
    }
  })