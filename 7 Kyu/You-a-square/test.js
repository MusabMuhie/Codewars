describe("isSquare", function(){
    it("should work for some examples", function(){
      Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
      Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
      Test.assertEquals(isSquare( 3), false, "3 is not a square number");
      Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
      Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
      Test.assertEquals(isSquare(26), false, "26 is not a square number");
    });
    it("should work for random square numbers", function(){
      var r, i;
      for(i = 0; i < 100; ++i){
        r = (Math.random() * 0xfff0) | 0;
        Test.expect(isSquare(r*r),`${r*r} is a square number (${r} * ${r})`);
      }
    });
    it("should work for random numbers", function(){
      var r, i, solution = function(n){
        if(n < 0)
          return false;
        return n === Math.pow(Math.round(Math.sqrt(n)), 2);
      }
      r = Test.randomNumber();      
      Test.assertEquals(isSquare(r), solution(r), "Your answer was wrong for " + r);
      
      for(i = 0; i < 1000; ++i){
        r = Test.randomNumber();
        if(isSquare(r) !== solution(r)){
          // only post a single test, all 1000 take too much bandwith
          Test.assertEquals(isSquare(r), solution(r), "Your answer was wrong for " + r);
          break;
        }
      }
    });
  });