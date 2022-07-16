const { assert, config } = require('chai'); config.truncateThreshold = 0;

describe("Wealth equality", function(){
  it ("example tests", function(){
    const wealthEqual = [5,5,5,5,5]; // already equal
    assert.strictEqual(redistributeWealth(wealthEqual),undefined,"do not return anything");
    assert.deepEqual(wealthEqual, [5,5,5,5,5], "wealth in input array should have been unaffected");
    const wealthUnequal = [0, 10]; // unequal
    assert.strictEqual(redistributeWealth(wealthUnequal),undefined,"do not return anything");;
    assert.deepEqual(wealthUnequal, [5, 5], "wealth in input array should have been redistributed");
    const wealthSingle = [5]; // single citizen
    assert.strictEqual(redistributeWealth(wealthSingle),undefined,"do not return anything");
    assert.deepEqual(wealthSingle, [5], "wealth in input array should have been unaffected");
    const wealthFloat = [3,2,2]; // floating point result
    assert.strictEqual(redistributeWealth(wealthFloat),undefined,"do not return anything");
    assert.deepEqual(wealthFloat, [2.3333333333333335,2.3333333333333335, 2.3333333333333335], "wealth in input array should have been redistributed");
  });
  it("random tests", function(){
    const rnd = (m,n=0) => Math.random() * (n-m) + m | 0 ;
    const rndList1 = size => Array.from( { length: rnd(1,size) }, () => rnd(size) ) ;
    const eq = x => y => x===y ;
    const avg = xs => xs.reduce( (x,y) => x+y , 0 ) / xs.length ;
    for ( let i=1; i<=100; i++ ) {
      const wealths = rndList1(i);
      const numWealths = wealths.length;
      const avgWealth = avg(wealths);
      assert.strictEqual(redistributeWealth(wealths),undefined,"do not return anything");
      assert.strictEqual(wealths.length,numWealths,"length of input aray should be unchanged");
      assert(wealths.every(eq(avgWealth)),"wealth in input array should have been equalised");
    }
  });
});