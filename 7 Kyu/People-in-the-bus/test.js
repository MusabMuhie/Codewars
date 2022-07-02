const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Number of People in the Bus", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(number([[10,0],[3,5],[5,8]]),5);
    assert.strictEqual(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
    assert.strictEqual(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
    assert.strictEqual(number([[0,0]]),0);
  });

  it("Random Tests", () => {    
    const randint = (a,b) => Math.floor((Math.random() * b) + a);

    const randomTest = function(){
      let n = randint(0,100);
      let arr = [[n,0]];
      for(let i = 0; i < randint(0,100);i++){
        let x = randint(0,100);
        let y = randint(0,n);
        arr.push([x,y]);
        n += x - y;
      }
      return [arr, n];
    };
    
    for(let i = 0; i < 100; i++){
      let [arr, n] = randomTest()
      assert.strictEqual(number(arr.slice()),n, `Testing for busStops = ${JSON.stringify(arr)}`);
    }
  })
})