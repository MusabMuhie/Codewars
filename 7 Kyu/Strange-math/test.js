const {assert} = require('chai');

function _strangeMath(n, k){
  let arr = [];
  for (let i = 1; i <= n; i++){
    arr.push(i)
  }
  arr.sort();
  return arr.indexOf(k) + 1
}

describe("Fixed tests",()=>{
   it(`Testing for (11, 2): received ${strangeMath(11, 2)}`,()=>{
      assert.equal(strangeMath(11, 2), 4);
   });
   it(`Testing for (15, 5): received ${strangeMath(15, 5)}`,()=>{
      assert.equal(strangeMath(15, 5), 11);
   });
   it(`Testing for (15, 15): received ${strangeMath(15, 15)}`,()=>{
      assert.equal(strangeMath(15, 15), 7);
   });
});
describe("Random tests for values less than 1000",()=>{
  for (let i = 0; i < 50; i++){  
    let n = Math.trunc(Math.random() * 1000) + 1; 
    let dif = Math.random(); 
    let k = Math.trunc(n * dif); 
    let expected = _strangeMath(n, k);
    let actual = strangeMath(n, k); 
    it(`Testing for (${n}, ${k}): received ${actual}`,()=>{
       assert.equal(actual, expected);
    });
  }
}); 
describe("Random tests for values from 1 to 100000",()=>{
  for (let i = 0; i < 50; i++){  
    let n = Math.trunc(Math.random() * 100000) + 1; 
    let dif = Math.random(); 
    let k = Math.trunc(n * dif); 
    let expected = _strangeMath(n, k);
    let actual = strangeMath(n, k); 
    it(`Testing for (${n}, ${k}): received ${actual}`,()=>{
       assert.equal(actual, expected);
    });
  }
});  