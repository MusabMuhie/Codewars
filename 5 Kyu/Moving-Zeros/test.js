const {assert, config} = require("chai");
config.truncateThreshold = 0;

const random = require("lodash/random");

describe("Tests", () => {
  it("Fixed tests", () => {
    assert.deepEqual(
      moveZeros([1,2,0,1,0,1,0,3,0,1]),
      [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
    );

    assert.deepEqual(
      moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]),
      [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
    );

    assert.deepEqual(
      moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]),
      ["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
    );

    assert.deepEqual(
      moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,{},0,0,9]),
      ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
    );

    assert.deepEqual(
      moveZeros([0,1,null,2,false,1,0]),
      [1,null,2,false,1,0,0]
    );
  });
  
  it("Random tests", () => {
    for (let i = 0; i < 100; i++) {
      let a = [];
      for (let j = random(0, 30); j; j--) {
        let choice = random(1, 10);
        if (choice <= 1) a.push(null);
        else if (choice <= 2) a.push([]);
        else if (choice <= 3) a.push({});
        else if (choice <= 4) a.push(!!random(0, 1));
        else if (choice <= 7) a.push(random(0, 9));
        else if (choice <= 10) a.push(random(0, 9)+"");
      }
      let expected = a.filter(x => x !== 0).concat(a.filter(x => x === 0));
      assert.deepEqual(moveZeros(a), expected);
    }
  });
});