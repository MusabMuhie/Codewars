const fibonacciTable = [1,1,2,3,5,8,13,21,34,55,89,144,233,377,610];

describe(`Basic tests`, () => {
  fibonacciTable.forEach((v,i) => {
    it(`fibonacci(${i+1})`, () => {
      Test.assertEquals(fibonacci(i+1), v);
    });
  });
});

describe(`Anti-cheating`, () => {
  //remove comments
  const functionAsString = fibonacci
      .toString()
      .replace(/\/\/.+/g, '')
      .replace(/\/\*[\s\S]*?\*\//g, '');
  
  it(`No hardcoded values`, () => {
    fibonacciTable.slice(4).forEach(v => {
      Test.expect(!new RegExp(v, 'g').test(functionAsString));
    });
  });
  
  it(`No loops needed`, () => {
    const loops = ['for', 'while', 'reduce', 'map', 'filter'];
    
    loops.forEach(v => {
      Test.expect(!new RegExp(v, 'g').test(functionAsString), `Found "${v}".`);
    });
  });
  
  it(`It has to call itself`, () => {
    Test.expect(/fibonacci\s?\(/.test(functionAsString.replace('fibonacci','otherName')));
  });
});