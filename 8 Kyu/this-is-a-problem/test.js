describe("Tests", () => {
    it("test", () => {
  var n = new NameMe('John', 'Doe');
  Test.expect((typeof n.firstName != undefined && n.firstName == "John"), "Verifying First name. Object returned should contain the firstname: John");
  Test.expect((typeof n.lastName != undefined && n.lastName == "Doe"), "Verifying Last name. Object returned should contain the lastname: Doe");
  Test.expect((typeof n.name != undefined && n.name == "John Doe"), "Verifying full name. Object returned should contain full name: John Doe");
  n = new NameMe('Johnny', 'Bravo');
  Test.expect((typeof n.firstName != undefined && n.firstName == "Johnny"), "Verifying First name. Object returned should contain the firstname: Johnny");
  Test.expect((typeof n.lastName != undefined && n.lastName == "Bravo"), "Verifying Last name. Object returned should contain the lastname: Bravo");
  Test.expect((typeof n.name != undefined && n.name == "Johnny Bravo"), "Verifying full name. Object returned should contain full name: Johnny Bravo");
  n = new NameMe('Jack', 'Sparrow');
  Test.expect((typeof n.firstName != undefined && n.firstName == "Jack"), "Verifying First name. Object returned should contain the firstname: Jack");
  Test.expect((typeof n.lastName != undefined && n.lastName == "Sparrow"), "Verifying Last name. Object returned should contain the lastname: Sparrow");
  Test.expect((typeof n.name != undefined && n.name == "Jack Sparrow"), "Verifying full name. Object returned should contain full name: Jack Sparrow");
  
    });
  });