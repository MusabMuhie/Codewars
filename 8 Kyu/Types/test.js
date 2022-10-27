function solution(variable, type) {
    return typeof variable === type; 
  }
  
  let a = [42, "42", true, [ 42 ], { a: 42 }, null, undefined, new TestClass(1)], b = ["number", "string", "boolean", "object", "undefined"];
  
  describe("Basic Tests", function() {
    Test.assertEquals(typeValidation(a[0], b[0]), true);
    Test.assertEquals(typeValidation(a[1], b[0]), false);
  });
  
  describe("Advanced Tests", function() {
    Test.assertEquals(typeValidation(a[0], b[0]), true);
    Test.assertEquals(typeValidation(a[0], b[1]), false);
    Test.assertEquals(typeValidation(a[1], b[1]), true);
    Test.assertEquals(typeValidation(a[1], b[0]), false);
    Test.assertEquals(typeValidation(a[2], b[2]), true);
    Test.assertEquals(typeValidation(a[2], b[0]), false);
    Test.assertEquals(typeValidation(a[3], b[3]), true);
    Test.assertEquals(typeValidation(a[3], b[1]), false);
    Test.assertEquals(typeValidation(a[4], b[3]), true);
    Test.assertEquals(typeValidation(a[4], b[2]), false);
    Test.assertEquals(typeValidation(a[5], b[3]), true);
    Test.assertEquals(typeValidation(a[5], b[0]), false);
    Test.assertEquals(typeValidation(a[6], b[4]), true)
    Test.assertEquals(typeValidation(a[6], b[0]), false);
    Test.assertEquals(typeValidation(a[7], b[3]), true);
    Test.assertEquals(typeValidation(a[7], b[1]), false);
  });
  
  describe("Random Tests", function() {
    for (let i = 0; i < 100; i++) {
      let v = Math.floor(Math.random() * 7), t = Math.floor(Math.random() * 4);
          
      Test.assertEquals(typeValidation(a[v], b[t]), solution(a[v], b[t]));
    }
  });