describe("Test Cases", function() {
    Test.assertDeepEquals(ballCollector([58, 68, 62, 69, 58]), { weight: 116 }, "Should return the combined weight of just the tennis balls!");
    Test.assertDeepEquals(ballCollector([60,66,71,68,62]), { weight: 0 }, "Should return the combined weight of just the tennis balls!");
    Test.assertDeepEquals(ballCollector([58]), { weight: 58 }, "Should return the combined weight of just the tennis balls!");
    Test.assertDeepEquals(ballCollector([58, 58, 58]), { weight: 174 }, "Should return the combined weight of just the tennis balls!");
  });
  
  function ballCollectorCheck(detritus) {
    let sack = { weight: 0 };
    let tennisBalls = detritus.filter(x => x == 58);
  
    if (tennisBalls.length !== 0) {
      let totalWeight = tennisBalls.reduce((sum, value) => sum + value);
      sack.weight = totalWeight;
    }
  
    return sack;
  }
  
  for(let i = 0; i < 500; i++) {
    let r1 = Math.floor(Math.random() * 3 + 58);
    let r2 = Math.floor(Math.random() * 3 + 58);
    let r3 = Math.floor(Math.random() * 3 + 58);
    let r4 = Math.floor(Math.random() * 3 + 58);
    Test.assertDeepEquals(ballCollector([r1,r2,r3,r4]), ballCollectorCheck([r1,r2,r3,r4]));
  }