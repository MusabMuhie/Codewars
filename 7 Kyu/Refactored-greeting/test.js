describe("Tests", () => {
    it("test", () => {
  jack = new Person("Jack")
  jill = new Person("Jill")
  
  Test.assertEquals(jack.greet("Jill"), "Hello Jill, my name is Jack")
  Test.assertEquals(jack.greet("Mary"), "Hello Mary, my name is Jack")
  
  Test.assertEquals(jill.greet("Jack"), "Hello Jack, my name is Jill")
  Test.assertEquals(jill.name, 'Jill', "Person's name could not be retrieved")
    });
  });