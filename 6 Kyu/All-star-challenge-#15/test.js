const Test = require('@codewars/test-compat');

function mySol(str){
  let output = [];
  for (let i = 0; i < str.length; i++){
    str = str.substring(1,str.length) + str[0]
    output.push(str);
  }
  return output
}

describe("testing rotate()", function(){
  function randSentence(){
    let output = "";
    let letters = "abcdefghijklmnopqrstuvwxyz 1234567890";
    function random(num = 200){
    //returns a random number between 0-200 by default
      return Math.floor(Math.random()*num)
    }
    
    let randCounter = random();
    
    while (randCounter>0){
      output=output+letters[random(letters.length)]
      randCounter--;
    }
    
    return output
  }

  it("should output list with all possible rotations included",function(){
    let testOut = rotate("Hello");
    Test.assertDeepEquals(testOut,["elloH", "lloHe", "loHel", "oHell", "Hello"], "Output should include the input string"); 
  });
  
  it("should ouput an array",function(){
    Test.assertEquals(Array.isArray(rotate("")), true, "Output is an array");
  });
  
  it("should ouput an array the same length as input string",function(){
    Test.assertEquals(rotate("testing").length, 7);
  });
  
  it("should return [''] when given '' as argument",function(){
    Test.assertEquals(rotate("").length, 0, "Returns [''] with '' as input");
  });
  
  it("should return [' '] when given ' ' as argument",function(){
    Test.assertDeepEquals(rotate(" "), [" "], "Returns [' '] with as ' ' input");
  });
  
  it("should output correct order of elements",function(){
    let counter = 10;
    let array, output, answer;
    while (counter > 0){
      array = randSentence();
      output = rotate(array);
      answer = mySol(array);
      counter--;
      Test.assertDeepEquals(output, answer, "Output elements were not in proper rotation order");
    }
  });
})