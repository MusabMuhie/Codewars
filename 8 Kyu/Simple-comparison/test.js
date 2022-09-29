describe("add", () => {
    it("should work for fixed tests", () => {
       Test.assertEquals(add('1', 1), true);
       Test.assertEquals(add(1, '1'), true);
       Test.assertEquals(add(1, '0'), false);
       Test.assertEquals(add('11', 11), true);
       Test.assertEquals(add(12, 12), true);
       Test.assertEquals(add(120, '021'), false);
    });
    it("should work for random tests as well", () => {
      function add2(a, b){
    return a == b 
  }
      var testOptions = [1,2,3,4,5,'1','2','3','4','5']
      for (let i = 0; i < 100; i++) {
        var optionA = testOptions[Math.floor((Math.random() * 10) / 5)];
        var optionB = testOptions[Math.floor((Math.random() * 10) / 5)];
        Test.assertEquals(add(optionA, optionB), add2(optionA, optionB));
      }
    });
  });