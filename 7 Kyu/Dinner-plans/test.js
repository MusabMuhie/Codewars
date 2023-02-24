const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
console.log('Test cases');
console.log('--------------------');
console.log('Running commonGround("aa bb", "aa bb cc") ...');
Test.assertEquals(commonGround("aa bb", "aa bb cc"), "aa bb");
console.log('Running commonGround("aa bb cc", "bb cc") ...');
Test.assertEquals(commonGround("aa bb cc", "bb cc"), 'bb cc');
console.log('Running commonGround("aa bb", "cc dd") ...');
Test.assertEquals(commonGround("aa bb", "cc dd"), 'death');

console.log('Random test cases');
console.log('--------------------');

function randWord(){
    let s = "";
    let length= Math.floor(Math.random()*5)+3;
    while(s.length<length){
        let r = Math.random();
        s+= (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)));
    }
    return s;
}

function randStrings(){
  let n = Math.floor(Math.random()*4)+1;
  let a = "";
  let b = "";
  let answer = "";
  for(let i = 0; i<n; i++){
    let word = randWord();
    a = a + word + " ";
    if (Math.floor(Math.random()*3)+1 == 1){
      b = b + word + " ";
      answer = answer + word + " ";
      }
    else{
      b = b + randWord() + " ";
    }
  }
  a = a.substring(0, a.length - 1);
  b = b.substring(0, b.length - 1);
  if (answer != ""){
    answer = answer.substring(0, answer.length - 1);
    return [a,b,answer];
  }else{
    return [a,b,"death"];
  }
}

let numberOfTests = Math.floor(Math.random()*10)+10;
for (let i = 0; i < numberOfTests; i++){
  let str = randStrings();
  console.log('Running commonGround("'+ str[0] +'", "'+ str[1] +'") ... ');
  Test.assertEquals(commonGround(str[0], str[1]), str[2]);
}

  });
});
