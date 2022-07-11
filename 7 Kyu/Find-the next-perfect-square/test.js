describe("findNextSquare", function() {
    it("should return the next square for perfect squares", function() {
      Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
      Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
      Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
      Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
    });
    
    it("should return -1 for numbers which aren't perfect squares", function() {
      Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
      Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");
    });
    
    it("should work for random inputs", function() {    
      function solution(sq) {
        let root = Math.sqrt(sq);
        
        return root % 1 == 0 ? (root+1) ** 2 : -1;
      }
      
      for (let i = 0; i < 40; ++i) {
        let sq = ~~(Math.random() * 10**5);
        
        if (Math.random() > 0.5) sq = sq*sq;
        
        let message = `Wrong output for ${sq}`;
        Test.assertEquals(findNextSquare(sq), solution(sq), message);
      }
    });
  });