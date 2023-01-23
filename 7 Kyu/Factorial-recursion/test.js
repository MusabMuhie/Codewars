const { assert } = require('chai');

const factorialTable = [1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368000];

describe(`Basic tests`, () => {
  factorialTable.forEach((v,i) => {
    it(`factorial(${i})`, () => {
      assert.strictEqual(factorial(i), v);
    });
  });
});

describe(`Anti-cheating`, () => {
  //remove comments
  const functionAsString = factorial
      .toString()
      .replace(/\/\/.+/g, '')
      .replace(/\/\*[\s\S]*?\*\//g, '');
  
  it(`No hardcoded values`, () => {
    factorialTable.slice(4).forEach(v => {
      assert.isNotOk(new RegExp(v, 'g').test(functionAsString));
    });
  });
  
  it(`No loops needed`, () => {
    const loops = ['for', 'while', 'reduce', 'map', 'filter'];
    
    loops.forEach(v => {
      assert.isNotOk(new RegExp(v, 'g').test(functionAsString), `Found "${v}".`);
    });
  });
  
  it(`It has to call itself`, () => {
    assert.isOk(/factorial\s?\(/.test(functionAsString));
  });
});