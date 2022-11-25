const {assert} = require("chai");

it("example tests", ()=>{
  assert.strictEqual(sumArray(null), 0);
  assert.strictEqual(sumArray([ ]), 0);
  assert.strictEqual(sumArray([ 3 ]), 0);
  assert.strictEqual(sumArray([ 3, 5 ]), 0);
  assert.strictEqual(sumArray([ 6, 2, 1, 8, 10 ]), 16);
  assert.strictEqual(sumArray([ 0, 1, 6, 10, 10 ]), 17);
  assert.strictEqual(sumArray([ -6, -20, -1, -10, -12 ]), -28);
  assert.strictEqual(sumArray([ -6, 20, -1, 10, -12 ]), 3);
});

it("random tests", ()=>{
  const rnd = (m,n=0) => Math.random() * (n-m) + m | 0 ;
  const rndMaybeList = size => rnd(5) ? Array.from( { length: rnd(size) }, () => rnd(-size,size) ) : null ;
  const refSumArray = xs => xs?.length > 1 ? xs.reduce( (x,y) => y+x , 0 ) - Math.min(...xs) - Math.max(...xs) : 0 ;
  for ( let i=1; i<100; i++ ) {
    let xs = rndMaybeList(i);
    const expected = refSumArray(xs);
    assert.strictEqual( sumArray(xs?.slice()), expected );
  }
});