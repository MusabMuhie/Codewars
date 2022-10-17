const Test = require('@codewars/test-compat');

describe( "Narcissistic Function", function() {
  it("should find small numbers are all narcissistic", function() {
    Test.assertEquals(narcissistic( 1 ), true, "1 is narcissistic");
    Test.assertEquals(narcissistic( 5 ), true, "5 is narcissistic");
    Test.assertEquals(narcissistic( 7 ), true, "7 is narcissistic");
  });
  
  it("should find these numbers are narcissistic", function() {
    Test.assertEquals(narcissistic( 153 ), true, "153 is narcissistic");
    Test.assertEquals(narcissistic( 370 ), true, "370 is narcissistic");
    Test.assertEquals(narcissistic( 371 ), true, "371 is narcissistic");
    Test.assertEquals(narcissistic( 1634 ), true, "1634 is narcissistic");
  });

  it( "should find these numbers are not narcissistic", function() {
    const tests = Math.floor(Math.random() * 10) + 5;
    for(let i = 0; i <= tests; ++i ) {
      value = Math.floor(Math.random() * 42000 ) + 9475;
      Test.assertEquals(narcissistic( value ), false, value + " is not narcissistic");
    }
  });

  let bigguns = [8208, 9474, 54748, 92727, 93084, 548834, 1741725, 4210818, 9800817, 9926315, 24678050, 24678051];
  
  it( "should find that some of these are narcissistic", function() {
    let tests = Math.floor( Math.random() * 10 ) + 15;
    
    for( let i = 0; i <= tests; ++i ) {
      let is = Math.random() > 0.5;
      value = is ? bigguns[Math.floor( Math.random() * (bigguns.length-1))] : Math.floor( Math.random() * 1400000 ) + 9926316;
      Test.assertEquals(narcissistic( value ), is, value + " may be..." );
    }
  });
});