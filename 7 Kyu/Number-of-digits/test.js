describe("Solution", function(){
    it("Random tests", function(){
      for(let i = 0; i < 20; ++i) {
        const tc = Number(Math.floor(1+Math.random()*9) + '' + Array.apply(null, Array(1 + Math.floor(Math.random()*10))).map(d =>
          Math.floor(Math.random()*10)
        ).join(''));
        
        Test.assertEquals(digits(tc), String(tc).length);
      }
    });
    
    it("Boundary tests", function() {
      Test.assertEquals(digits(0), 1);
      Test.assertEquals(digits(1), 1);
      Test.assertEquals(digits(5), 1);
      Test.assertEquals(digits(9), 1);
      Test.assertEquals(digits(10), 2);
      Test.assertEquals(digits(11), 2);
      Test.assertEquals(digits(99), 2);
      Test.assertEquals(digits(100), 3);
      Test.assertEquals(digits(101), 3);
      Test.assertEquals(digits(12345), 5);
      Test.assertEquals(digits(9876543210), 10);
      Test.assertEquals(digits(Number.MAX_SAFE_INTEGER), 16);
    });
  });