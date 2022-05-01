const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Ironman Triathlon", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(iTri(36),{'Bike':'104.60 to go!'});
    assert.deepEqual(iTri(103),{'Bike':'37.60 to go!'});
    assert.deepEqual(iTri(0),'Starting Line... Good Luck!');
    assert.deepEqual(iTri(2),{'Swim':'138.60 to go!'});
    assert.deepEqual(iTri(151),"You're done! Stop running!");
  });

  it("Random tests",() =>{
    const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
    function myiTri(s){
      if (s == 0) return 'Starting Line... Good Luck!';
      else if (s > 0 && s <= 2.4) {
        let myObj = new Object;
        let a = 'Swim';
        let b = (140.6-s).toFixed(2) + ' to go!';
        myObj[a] = b;
        return myObj;
        }
      else if (s > 2.4 && s <= 114.4) {
        let myObj = new Object;
        let a = 'Bike';
        let b = (140.6-s).toFixed(2) + ' to go!';
        myObj[a] = b;
        return myObj;
        }
      else if (s > 114.4 && s < 130.6) {
        let myObj = new Object;
        let a = 'Run';
        let b = (140.6-s).toFixed(2) + ' to go!';
        myObj[a] = b;
        return myObj;
        }
      else if (s > 130.6 && s <= 140.6) {
        let myObj = new Object;
        let a = 'Run';
        let b = 'Nearly there!';
        myObj[a] = b;
        return myObj;
        }
      else if (s > 140.6) return "You're done! Stop running!";
    }
    
    for (let i=0;i<40;i++){
      let s=randint(0,170);

      assert.deepEqual(iTri(s),myiTri(s),`Testing for ${s}`);
    }
  })
})