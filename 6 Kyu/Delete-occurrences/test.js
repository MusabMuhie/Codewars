const { assert, config } = require("chai");
config.truncateThreshold = 0;
const _ = require('lodash');

describe("Tests", () => {
  
  function dotest(arr, x, expected) {
    let actual = deleteNth([...arr], x);
    assert.sameOrderedMembers(actual, expected, `Incorrect answer for:\n  arr=[${arr}]\n  x=${x}\n`)
  }
  
  it("Basic tests",function(){
    dotest([20,37,20,21],       1, [20,37,21])
    dotest([1,1,3,3,7,2,2,2,2], 3, [1, 1, 3, 3, 7, 2, 2, 2])
    dotest([1,1,1,1,1],         5, [1,1,1,1,1])
    dotest([],                  5, [])
    dotest([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1],3, [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5])
  });

  it("Random tests",function(){

    function sol_nth(arr,x){
      let count = {};
      return arr.filter(function(a){
        count[a] = ~~count[a]+1;
        return count[a]<=x;
      })
    }

    for (let t=0;t<40;t++){
      let order=[];
      let orderlen=_.random(3,10);
      for (let i=0;i<orderlen;i++){
        let item=_.random(1,50)
        let repeats=_.random(1,10)
        for (let j=0;j<repeats;j++){
          order.push(item);
        }
      }
      order = _.shuffle(order);
      let max_e=_.random(1,10);
      let expected = sol_nth(order, max_e);
      dotest(order,max_e, expected);
    }
  });
});