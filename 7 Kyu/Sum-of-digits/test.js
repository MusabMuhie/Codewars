function getSumOfDigitsValid(integer) {
    let sum = 0;
    let digits =  Math.abs(integer).toString();
    for(let ix = 0; ix < digits.length; ix++) {
      sum += Number(digits[ix]);
    }
    return sum;
  }
  
  // Fixed test cases
  describe("Fixed tests", () =>{
    Test.assertEquals(getSumOfDigits(123), 6, '123 => 6');
    //Test.assertEquals(getSumOfDigits(-223), 7, '-223 => 7'); // description says "positive integer"
    Test.assertEquals(getSumOfDigits(223), 7, '223 => 7');
    Test.assertEquals(getSumOfDigits(0), 0, '0 => 0');
  });
  
  // Random test cases
  describe("Random tests", () =>{
    for (let ix = 0; ix <99; ix++) {
      let int = 1e3 + ~~(Math.random()*1e6);
      let expected = getSumOfDigitsValid(int);
      Test.assertEquals(getSumOfDigits(int), expected, `${int} should return ${expected}` );
    }
  });