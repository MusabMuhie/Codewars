const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
    assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
    assert.deepEqual(friend(["Hell", "Is", "a", "badd", "word"]), ["Hell", "badd", "word"])
    assert.deepEqual(friend(["Issa", "Issac", "Issacs", "ISISS"]), ["Issa"])
    assert.deepEqual(friend(["Robot", "Your", "MOMOMOMO"]), ["Your"])
    assert.deepEqual(friend(["Hello", "I", "AM", "Sanjay", "Gupt"]), ["Gupt"])
    assert.deepEqual(friend(["This", "IS", "enough", "TEst", "CaSe"]), ["This", "TEst", "CaSe"])
    assert.deepEqual(friend([]), [])
  })
})

describe("Random tests",function(){
  
  function randint(a,b){return Math.floor(Math.random()*(b-a+1)+a)}
  
  Array.prototype.shuffle=function(){
    let i=this.length, j, k;
    for (i;i;){
      j=Math.floor(Math.random()*this.length);
      k=this[--i];this[i]=this[j];this[j]=k;
    }
   }
  
  function sol(friends){return friends.filter(function(a){return a.length==4;});}
  
  let base=["Alex","Arnold","Bart","Boris","Bruce","Chris","Claire","Dick","Frank","James","JoJo","Kyle","Ivan","Lisa","Max","Nikola","Omar","Rachel","Ryan","Tim"];

  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      base.shuffle();
      let friends=base.slice(0,randint(0,base.length-1)); 
      assert.deepEqual(friend(friends.slice()),sol(friends.slice()),"Testing for "+(friends.length>0 ? friends.join(", ") : "no friends"))
    }
  })
})