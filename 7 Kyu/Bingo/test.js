describe("BINGO!",()=>{
    it("Fixed tests",()=>{
      Test.assertEquals(bingo([1,2,3,4,5,6,7,8,9,10]), "LOSE");
      Test.assertEquals(bingo([20,12,23,14,6,22,12,17,2,26]), "LOSE");
      Test.assertEquals(bingo([1,2,3,7,5,14,7,15,9,10]), "WIN");
      Test.assertEquals(bingo([5,2,13,7,5,14,17,15,9,10]), "WIN");
    });
    const refBingo = a => [2,7,9,14,15].every( v => a.includes(v) ) ? "WIN" : "LOSE" ;
    it("Random tests",()=>{
      for ( let i=200; i--; ) {
        const a = Math.random()*i<20 ? Array.from( "1234567890", () => Math.floor(Math.random()*26) + 1 ) : Test.randomize([2,7,9,14,15].concat( Array.from( "12345", () => Math.floor(Math.random()*26) + 1 ) )) ;
        Test.assertEquals( bingo([...a]), refBingo([...a]) );
      }
    });
  });