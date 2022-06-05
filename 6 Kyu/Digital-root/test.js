describe('Basic tests', function() {
    it('Should pass basic tests', function() {
      Test.assertEquals( digital_root(16), 7 )
      Test.assertEquals( digital_root(195), 6 )
      Test.assertEquals( digital_root(992), 2 )
      Test.assertEquals( digital_root(999999999999), 9 )
      Test.assertEquals( digital_root(167346), 9 )
      Test.assertEquals( digital_root(10), 1 )
      Test.assertEquals( digital_root(0), 0 )
    })
  })
  
  describe('Random tests', function() {
    it('Should pass random tests', function() {
    
      function digital_root_sol(n) {
        return n>0 ? 1 + ((parseInt(n) - 1) % 9) : 0
      }
      
      for (let i = 0; i < 100; i++) {
        let n = Math.floor(Math.random() * 1000000);
        Test.assertEquals( digital_root(n), digital_root_sol(n) )
      }
      
    })
  })