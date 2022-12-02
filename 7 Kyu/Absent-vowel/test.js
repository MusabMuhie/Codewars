const {assert,config} = require("chai"); config.truncateThreshold = 0;

describe("Duplicate sandwich", function() {
  it("example tests", function() {
    assert.deepEqual( duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]), [2, 3, 4, 5, 6] );
    assert.deepEqual( duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"]), ["Hello", "Example", "hello"] );
    assert.deepEqual( duplicateSandwich([0, 0]), [] );
    assert.deepEqual( duplicateSandwich( [true, false, true]), [false] );
    assert.deepEqual( duplicateSandwich("example"), "xampl" );
  });
  it("fixed tests", function() {
    assert.deepEqual( duplicateSandwich( [null,null]), [] );
    const symbol = Symbol();
    assert.deepEqual( duplicateSandwich( [symbol,symbol]), [] );
  });
  function refDuplicateSandwich(a) {
    const dup = function findDup(s) {
      for ( const v of a )
        if ( s.has(v) )
          return v;
        else
          s.add(v);
    } ( new Set ) ;
    return a.slice( a.indexOf(dup)+1, a.lastIndexOf(dup) );
  }
  const rnd = n => Math.random() * n | 0 ;
  const elements = a => a[rnd(a.length)] ;
  const uniq = a => Array.from(new Set(a)) ;
  function insertDuplicate(a) { const i = rnd(a.length); return a.slice(0,i).concat( elements(a), a.slice(i) ); }
  const rndList = () => elements([ () => [null,null]
                                 , () => insertDuplicate( elements([[false,true],[true,false]]) )
                                 , () => insertDuplicate( uniq( Array.from( { length: rnd(50) + 1 }, () => elements("qwertyuiopasdfghjklzxcvbnm") ).join("") ) ).join("")
                                 , () => insertDuplicate( uniq( Array.from( { length: rnd(50) + 1 }, () => Array.from( { length: rnd(5) + 1 }, () => elements("qwertyuiopasdfghjklzxcvbnm") ).join("") ) ) )
                                 , () => insertDuplicate( uniq( Array.from( { length: rnd(50) + 1 }, () => rnd(100) ) ) )
                                 , () => insertDuplicate( Array.from( { length: rnd(50) + 1 }, Symbol ) )
                                 ]) () ;
  it("random tests", function() {
    for ( let i=200; i--; ) {
      const xs = rndList();
      const expected = refDuplicateSandwich(xs);
      // console.log("<hr>",xs,"=>",expected);
      assert.deepEqual( duplicateSandwich(xs), expected );
    }
  });
});