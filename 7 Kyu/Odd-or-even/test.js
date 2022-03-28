const {assert} = require("chai");

describe("Odd or even?",()=>{
  it("example tests",()=>{
    assert.strictEqual( oddOrEven(1), EITHER, "For input 1" );
    assert.strictEqual( oddOrEven(6), ODD, "For input 6" );
    assert.strictEqual( oddOrEven(8), EVEN, "For input 8" );
  });
  it("fixed tests",()=>{
    assert.strictEqual( oddOrEven(0), EVEN, "For input 0" );
    assert.strictEqual( oddOrEven(2), ODD, "For input 2" );
    assert.strictEqual( oddOrEven(3), EITHER, "For input 3" );
    assert.strictEqual( oddOrEven(4), EVEN, "For input 4" );
    assert.strictEqual( oddOrEven(5), EITHER, "For input 5" );
    assert.strictEqual( oddOrEven(7), EITHER, "For input 7" );
    assert.strictEqual( oddOrEven(9), EITHER, "For input 9" );
    assert.strictEqual( oddOrEven(10), ODD, "For input 10" );
    assert.strictEqual( oddOrEven(11), EITHER, "For input 11" );
    assert.strictEqual( oddOrEven(12), EVEN, "For input 12" );
  });
  it("random tests",()=>{
    const rnd = (m,n=0) => Math.floor( Math.random() * (n-m) + m ) ;
    const clamp = (min,n,max) => Math.max( min, Math.min( n, max ) ) ;
    const odd = n => Boolean(n%2) ;
    const refOddOrEven = n => n%2 ? EITHER : n%4 ? ODD : EVEN ;
    for ( let i=0; i<100; i++ ) {
      const n = rnd( 2**(clamp(0,i/2,53)) );
      // console.log(n);
      assert.strictEqual( oddOrEven(n), refOddOrEven(n), `For input ${ n }` );
    }
  });
});