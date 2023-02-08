const {assert,config} = require("chai"); config.truncateThreshold = 0;

describe("zipWith", ()=>{
  const refZipWith = (fn,[head0,...tail0],[head1,...tail1]) =>
    head0!==undefined && head1!==undefined
    ? [ fn(head0,head1), ...refZipWith(fn, tail0, tail1) ]
    : []
  ;
  const plus  = (v,w) => v+w ;
  const minus = (v,w) => v-w ;
  const times = (v,w) => v*w ;
  const precision = p => n => ( p => Math.round(n*p)/p ) ( Math.pow(10,p) );
  const uncurry = fn => (...a) => ( fnApplied => fnApplied instanceof Function && a.length>fn.length ? uncurry(fnApplied)(...a.slice(fn.length)) : fnApplied ) ( fn(...a.slice(0, fn.length)) ) ;
  it("Sanity checks", ()=>{
    let a3 = [0,0,0], a4 = [1,2,3,4], a2 = [1,2];
    function exists(v,w) { if ( v===undefined || w===undefined ) throw new RangeError("argument doesn't exist"); else return null; }
    assert(zipWith instanceof Function,"-- zipWith is not a Function\n");
    zipWith(plus,a3,a4);
    zipWith(plus,a3,a2);
    assert.deepEqual(a3,[0,0,0],"-- 1st array argument was modified\n");
    assert.deepEqual(a4,[1,2,3,4],"-- 2nd array argument was modified\n");
    assert.deepEqual(a2,[1,2],"-- 2nd array argument was modified\n");
    assert.doesNotThrow(()=>zipWith(plus,[],[]));
    assert.doesNotThrow(()=>zipWith(plus,[],[1]));
    assert.doesNotThrow(()=>zipWith(plus,[1],[]));
    assert.doesNotThrow(()=>zipWith(exists,[],[null]));
    assert.doesNotThrow(()=>zipWith(exists,[null],[]));
  });
  it("Static tests", ()=>{
    assert.deepEqual(zipWith(plus,[0,1,2,3,4,5],[6,5,4,3,2,1]),[6,6,6,6,6,6]);
    assert.deepEqual(zipWith(plus,[0,1,2,3,4  ],[6,5,4,3,2,1]),[6,6,6,6,6  ]);
    assert.deepEqual(zipWith(plus,[0,1,2,3,4,5],[6,5,4,3,2  ]),[6,6,6,6,6  ]);
    assert.deepEqual(zipWith( Math.pow, [10,10,10,10], [0,1,2,3] ), [1,10,100,1000]);
    assert.deepEqual(zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] ), [4,7,7,4,7,7]);
    assert.deepEqual(zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] ), [0,2,4,6]);
    assert.deepEqual(zipWith( (a,b) => a+b, [0,1,2,3], [0,1,2,3] ), [0,2,4,6]);
    assert.deepEqual(zipWith(Math.pow,[10,10,10,10,10,10,10],[0,1,2,3,4,5,6]),[1e0,1e1,1e2,1e3,1e4,1e5,1e6]);
    assert.deepEqual(zipWith((a,b)=>a-b,[0,1,2,3,4,5],[6,5,4,3,2,1]),[-6,-4,-2,0,2,4]);
    assert.deepEqual(zipWith(Map.call.bind("".repeat),["a","b","c","d","e","f"],[6,5,4,3,2,1]),["aaaaaa","bbbbb","cccc","ddd","ee","f"]);
    assert.deepEqual(zipWith(uncurry(precision),[11,7,4,3],[Math.PI,Math.E,Math.SQRT2,Math.SQRT1_2]),[3.14159265359,2.7182818,1.4142,0.707]);
  });
  it("Random tests", ()=>{
    const FNS = [plus,minus,times,Math.pow,Math.exp,Math.hypot];
    for ( let i=0; i<50; i++ ) {
      const fn = FNS[Math.floor(Math.random()*FNS.length)];
      const a0 = Array.from({length:Math.floor(Math.random()*20)},()=>Math.random()*10);
      const a1 = Array.from({length:Math.floor(Math.random()*20)},()=>Math.random()*10);
      assert.deepEqual(zipWith(fn,[...a0],[...a1]),refZipWith(fn,a0,a1));
    }
  });
});