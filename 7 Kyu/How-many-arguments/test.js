describe("Tests", function() {
    it("Standard Tests", function() {
      Test.assertEquals(args_count(1, 2), 2);
      Test.assertEquals(args_count(), 0);
      Test.assertEquals(args_count('A', 'B', 'C'), 3);
      Test.assertEquals(args_count(["foo", "bar"]), 1);
    });
    it("Random Tests", function() {
      for (let i = 0; i < 100; i++) {
        const numArgs = Math.floor(Math.random() * 100);
        Test.assertEquals(args_count(...Array(numArgs).fill(1)), numArgs);
      }
    });
  });