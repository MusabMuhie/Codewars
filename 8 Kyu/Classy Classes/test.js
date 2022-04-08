let GetName = function(){
    let p = ['john','matt','alex','cam','vinny','joe','steve','mary',
    'ash','joel','henry','brendan','roger','don','whimpy','chosen one',
    'master','frog','horse','cat','blop','god','morgan',
    'freeman','sean','shaun','dick','jeff','leroy','lee', 'santa'];
  
     return p[Math.floor((Math.random() * 30))]
  };
  
  describe('Fixed Tests', () => {
    let a = ['john','matt','alex','cam'];
    let b = [16,25,57,39];
    for(let i=0;i<4;i++){
      let name = a[i], age = b[i];
      let person = new Person(name, age);
      Test.assertEquals(person.info, name+'s age is '+age)
    }
  });
  
  describe('Random Tests', () => {
    for(let i=1;i<=100;i++){
      let name = GetName(), age = Math.floor((Math.random() * 30));
      let person = new Person(name, age);
      Test.assertEquals(person.info, name+'s age is '+age)
    }
  });