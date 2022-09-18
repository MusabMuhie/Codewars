const chai = require("chai");
const assert = chai.assert;
const _ = require("lodash");
chai.config.truncateThreshold = 0;

describe("Fixed Tests", () => {
  const arr1 = [1, 2, 2, 3, 4],
        arr2 = [2, 1, 2, 4, 3],
        arr3 = [1, 1, 2],
        arr4 = [4, 3, 2, 1, 1],
        arr5 = [1, 2, 2, 3],
        arr6 = [3, 3, 2, 1],
        arr7 = [1, 2],
        arr8 = ['1', 2]
  
  it("Should return true for similar arrays", () => {
    assert.isTrue(arraysSimilar(arr1, arr2), "Should return true with [1, 2, 2, 3, 4] and [2, 1, 2, 4, 3]");
    assert.isTrue(arraysSimilar(arr2, arr1), "Should return true with [2, 1, 2, 4, 3] and [1, 2, 2, 3, 4]");
  });
  it("Should return false for different arrays", () => {
    assert.isFalse(arraysSimilar(arr2, arr3), "Should return false with [2, 1, 2, 4, 3] and [1, 1, 2]");
    assert.isFalse(arraysSimilar(arr3, arr4), "Should return false with [1, 1, 2] and [4, 3, 2, 1, 1]");
    assert.isFalse(arraysSimilar(arr5, arr6), "Should return false with [1, 2, 2, 3] and [3, 3, 2, 1]");
    assert.isFalse(arraysSimilar(arr7, arr8), "Should return false with [1, 2] and ['1', 2]");
  })
});

describe("Random Tests", () => {
  const baseArr = Array.from({length: 100}, (v,i) => i);
  
  function mutateArr(arr, n) {
    while (n > 0) { 
      let randIndex = arr.length * Math.random() | 0;
      let randFloat = Math.random();
      if (randFloat > 0.5) {
        arr[randIndex] = arr[randIndex].toString();
      } else {
        arr[randIndex] = arr[randIndex] + _.sample([-1,1]);
      }
      n--;
    }
  }
  
  it("Should return true for similar arrays", () => {
    for (let i = 0; i < 100; i++) {
      let arr1 = _.shuffle(baseArr).slice(_.random(1, 100));
      let arr2 = _.shuffle(arr1);
      let arr1Str = JSON.stringify(arr1);
      let arr2Str = JSON.stringify(arr2);
      assert.isTrue(arraysSimilar(arr1, arr2), `arr1: ${arr1Str}\narr2: $${arr2Str}`)
    }
  })
  it("Should return false for different arrays", () => {
    for (let i = 0; i < 100; i++) {
      let arr1 = _.shuffle(baseArr).slice(0, _.random(1, 100));
      let arr2 = _.shuffle(arr1);
      mutateArr(arr2, _.random(1, arr2.length));
      let arr1Str = JSON.stringify(arr1);
      let arr2Str = JSON.stringify(arr2);
      assert.isFalse(arraysSimilar(arr1, arr2), `arr1: ${arr1Str}\narr2: ${arr2Str}`)
    }
  })
})
