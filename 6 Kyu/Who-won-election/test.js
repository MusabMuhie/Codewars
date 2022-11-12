const Test = require('@codewars/test-compat');

describe("Who won the election", function() {  
  it("Test 01", function() {
    Test.assertEquals(getWinner(["A"]), "A", "\"A\" expected");
  });
  it("Test 02", function() {
    Test.assertEquals(getWinner(["A", "A", "A", "B", "B", "B", "A"]), "A", "\"A\" expected");
  });
  it("Test 03", function() {
    Test.assertEquals(getWinner(["A", "A", "A", "B", "B", "B"]), null, "NULL expected");
  });
  it("Test 04", function() {
    Test.assertEquals(getWinner(["A", "A", "A", "B", "C", "B"]), null, "NULL expected");
  });
  it("Test 05", function() {
    Test.assertEquals(getWinner(["A", "A", "B", "B", "C"]), null, "NULL expected");
  }); 
  
  
  it("Test 06", function() {
    let ballotBox = [];
    
    for (let i = 0; i < 300000; i++) {
        ballotBox.push("Z");
    }

    for (let i = 0; i < 300000; i++) {
        ballotBox.push("XY");
    }

    for (let i = 0; i < 299999; i++) {
        ballotBox.push("U");
    }

    for (let i = 0; i < 300000; i++) {
        ballotBox.push("XY");
    }  
    Test.assertEquals(getWinner(ballotBox), "XY", "\"XY\" expected");
  });
  
  it("Test 07", function() {
    let ballotBox = [];
    
    for (let i = 0; i < 300000; i++) {
        ballotBox.push("Z");
    }

    for (let i = 0; i < 299999; i++) {
        ballotBox.push("XY");
    }

    for (let i = 0; i < 299999; i++) {
        ballotBox.push("U");
    }

    for (let i = 0; i < 300000; i++) {
        ballotBox.push("XY");
    }  
  
    Test.assertEquals(getWinner(ballotBox), null, "NULL expected");
  });
  
  it("Test 08", function() {
    let ballotBox = [];
    
    for (let i = 0; i < 600000; i++) {
        ballotBox.push("XY");
    }

    for (let i = 0; i < 300000; i++) {
        ballotBox.push("Z");
    }

    for (let i = 0; i < 299999; i++) {
        ballotBox.push("U");
    }
    Test.assertEquals(getWinner(ballotBox), "XY", "\"XY\" expected");
  });
  
  it("Test 09", function() {
   let ballotBox = [];
    
    for (let i = 0; i < 300000; i++) {
        ballotBox.push("Z");
    }

    for (let i = 0; i < 300000; i++) {
        ballotBox.push("XY");
    }

    for (let i = 0; i < 300000; i++) {
        ballotBox.push("U");
    }

    for (let i = 0; i < 300000; i++) {
        ballotBox.push("XY");
    }  
    Test.assertEquals(getWinner(ballotBox), null, "NULL expected");
  });   
}); 


describe("Random tests",function(){
base=["Koji Kabuto","Tetsuya Tsurugi","Duke Fleed","Sayaka Yumi","Jun Hono","Maria Fleed","Hikaru Makiba","Boss"];
function randint(a,b){return Math.floor(Math.random()*(b-a+1)+a)};
function getSol(l) {
  let counter={};
  for (let i=0;i<l.length;i++){
    counter[l[i]]=(counter[l[i]]||0)+1;
    if (counter[l[i]]>l.length/2) return l[i];
  }
  return null;
}
Array.prototype.shuffle=function(){
  let i=this.length, j, k;
  for (i;i;){
    j=Math.floor(Math.random()*this.length);
    k=this[--i];this[i]=this[j];this[j]=k;
  }
}
for (let _=0;_<40;_++){
  let testmat=[], testlen=randint(1,4);
  for (let j=0;j<testlen;j++){
    item=base[randint(0,base.length-1)];
    repeats=randint(1,8);
    for (let k=0;k<repeats;k++){
      testmat.push(item);
    }
  }
  testmat.shuffle();
  it("Testing for ["+testmat.join(", ")+"]",function(){
  Test.assertEquals(getWinner(testmat),getSol(testmat),"It should work for random inputs too")
  })
}
})