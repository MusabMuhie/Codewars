describe("Example test cases", function() {

    it ("Simple fractions", function() {
      Test.assertSimilar(reduce([60, 20]), [3, 1])
      Test.assertSimilar(reduce([80, 120]), [2, 3])
      Test.assertSimilar(reduce([4, 2]), [2, 1])
      Test.assertSimilar(reduce([45, 120]), [3, 8])
      Test.assertSimilar(reduce([1000, 1]), [1000, 1])
      Test.assertSimilar(reduce([1, 1]), [1, 1])
    })
  
    it ("Larger numbers", function() {
      Test.assertSimilar(reduce([10956590,13611876]), [30605,38022])
      Test.assertSimilar(reduce([35884747,5576447]), [76841,11941])
      Test.assertSimilar(reduce([24622321,24473455]), [42673,42415])
      Test.assertSimilar(reduce([4255316,11425973]), [17228,46259])
    })
    
    
    it ("Random test values", function(){
      for (i=0;i<20;i++){
        num = Math.floor(Math.random()*(1000-100))+100;
        den = Math.floor(Math.random()*(100-10))+10;
        Test.assertSimilar(reduce([num,den]), solution([num,den]), "It should work for random inputs too")
      }
      
      function gcd(num,den){
        return den ? gcd(den, num%den) : num;
      };
  
      function solution(fraction){
        var gcd = function gcd(num,den){
          return den ? gcd(den, num%den) : num;
        };
        gcd = gcd(fraction[0],fraction[1]);
        return [fraction[0]/gcd, fraction[1]/gcd];
      }
    })
})