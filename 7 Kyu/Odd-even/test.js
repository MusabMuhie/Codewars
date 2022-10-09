const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Fixed tests', () => {
  it('Edge tests', () => {
    assert.strictEqual(oddOrEven([0]), 'even')
    assert.strictEqual(oddOrEven([1]), 'odd')
    assert.strictEqual(oddOrEven([]), 'even')
  });
  
  it('Even tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 5]), 'even')
    assert.strictEqual(oddOrEven([0, 1, 3]), 'even')
    assert.strictEqual(oddOrEven([1023, 1, 2]), 'even')
  });
  
  it('Negative Even tests', () => {
    assert.strictEqual(oddOrEven([0, -1, -5]), 'even')
    assert.strictEqual(oddOrEven([0, -1, -3]), 'even')
    assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even')
  });
  
  it('Odd tests', () => {
    assert.strictEqual(oddOrEven([0, 1, 2]), 'odd')
    assert.strictEqual(oddOrEven([0, 1, 4]), 'odd')
    assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd')
  });
  
  it('Negative Odd tests', () => {
    assert.strictEqual(oddOrEven([0, -1, 2]), 'odd')
    assert.strictEqual(oddOrEven([0, 1, -4]), 'odd')
    assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd')
  });
});

describe('Random tests', () => {  
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randEven() {
    let num = rand(1,1000000);
    num = num % 2 == 0 ? num : num + 1;
    let sign = rand(0,9999999)%2?-1:1;
    return num * sign;
  }
  
  function generateEven() {
    let even = [];
    for(let i=0;i<10;i++)
      even.push(randEven());    
    return even;
  }
  
  it('Even tests', () => {
    for(let i=0;i<40;i++){
      let arr = generateEven()
      assert.strictEqual(oddOrEven(arr), 'even', )
    }
  });
  
  function randOdd() {
    let num = rand(1,1000000);
    num = num % 2 == 0 ? num + 1 : num;
    let sign = rand(0,9999999)%2?-1:1;
    return num * sign;
  }
  
  function generateOdd() {
    let odd = [randOdd()];
    for(let i=0;i<10;i++)
      odd.push(randOdd());
    return odd;
  }
  
  it('Odd tests', () => {
    for(let i=0;i<40;i++){
      let arr = generateOdd()
      assert.strictEqual(oddOrEven(arr), 'odd', `Testing for ${JSON.stringify(arr)}`)
    }
  });
  
  it('Mixed tests', () => {
    for(let i=0;i<40;i++) {
      let decision = rand(0,9999999)%2?'odd':'even';
      let arr = decision=='odd'?generateOdd():generateEven()
      assert.strictEqual(oddOrEven(arr), decision, `Testing for ${JSON.stringify(arr)}`)
    }
  });
});