describe("Tests", function() {
    it("Fixed Tests", function() {
      Test.assertDeepEquals(number([]), []);
      Test.assertDeepEquals(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"]);
      Test.assertDeepEquals(number(["", "", "", "", ""]), ["1: ", "2: ", "3: ", "4: ", "5: "]);
    });
    
    
    function genRandomTests(){
      let test=[];
      for (let i=0;i<100;i++){
        test.push(String.fromCharCode(97 + Math.floor(Math.random()*74)));
      }
      let res=[];
      for (let i=0;i<test.length;i++){
        res.push((i+1).toString()+": "+test[i]);
      }
      
      return {test:test.slice(),res:res.slice()};
    }
    
    it("Random Tests", function() {
      for(let x=0;x<100;x++){
        let test = genRandomTests();
        Test.assertDeepEquals(number(test.test), test.res);
      }
    });
  });