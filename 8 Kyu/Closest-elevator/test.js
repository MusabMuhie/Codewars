describe("call from 0:", function() {
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(0,0,0), 'right');
    });
    it("Should return 'left'", function() {
      Test.assertEquals(elevator(0,1,0), 'left');
    });
    it("Should return 'left'", function() {
      Test.assertEquals(elevator(0,2,0), 'left');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(1,0,0), 'right');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(1,1,0), 'right');
    });
    it("Should return 'left'", function() {
      Test.assertEquals(elevator(1,2,0), 'left');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(2,0,0), 'right');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(2,1,0), 'right');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(2,2,0), 'right');
    });
  });
  describe("call from 1:", function() {
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(0,0,1), 'right');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(0,1,1), 'right');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(0,2,1), 'right');
    });
    it("Should return 'left'", function() {
      Test.assertEquals(elevator(1,0,1), 'left');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(1,1,1), 'right');
    });
    it("Should return 'left'", function() {
      Test.assertEquals(elevator(1,2,1), 'left');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(2,0,1), 'right');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(2,1,1), 'right');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(2,2,1), 'right');
    });
  });
  describe("call from 2:", function() {
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(0,0,2), 'right');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(0,1,2), 'right');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(0,2,2), 'right');
    });
    it("Should return 'left'", function() {
      Test.assertEquals(elevator(1,0,2), 'left');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(1,1,2), 'right');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(1,2,2), 'right');
    });
    it("Should return 'left'", function() {
      Test.assertEquals(elevator(2,0,2), 'left');
    });
    it("Should return 'left'", function() {
      Test.assertEquals(elevator(2,1,2), 'left');
    });
    it("Should return 'right'", function() {
      Test.assertEquals(elevator(2,2,2), 'right');
    });
  });
  
  function elevatorReference(left, right, call){
     return (Math.abs(right-call)<=Math.abs(left-call))? 'right' : 'left';
  }
  
  function generator() {
    var left = randInt(0,2)
    var right = randInt(0,2)
    var call = randInt(0,2)
    return [left,right,call]
  }
  
  function randInt(a, b) { return Math.random() * (b - a + 1) + a | 0 }
  
  function randomAssertSimilar(generator, userSolution, referenceSolution, tests){
    tests = tests || 100;
    var user, reference, values;
    while( tests --> 0){
      values = generator();
      reference = referenceSolution.apply(this, values);
      user      = userSolution.apply(this,      values);
      Test.assertEquals(user, reference, "didn't work on the following argument array: " + values);
    }
  }
  
  describe("Random tests", function () {  
    randomAssertSimilar(generator, elevator, elevatorReference);
  });
  