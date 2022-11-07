describe('leap year', function() {
    it('should detect leap years', function() {
      Test.assertEquals(isLeapYear(1000), false, 'Year 1000');
      Test.assertEquals(isLeapYear(1200), true, 'Year 1200');
      Test.assertEquals(isLeapYear(1234), false, 'Year 1234');
      Test.assertEquals(isLeapYear(1800), false, 'Year 1800');
      Test.assertEquals(isLeapYear(1900), false, 'Year 1900');
      Test.assertEquals(isLeapYear(1984), true, 'Year 1984');
      Test.assertEquals(isLeapYear(1990), false, 'Year 1990');
      Test.assertEquals(isLeapYear(2000), true, 'Year 2000');
      Test.assertEquals(isLeapYear(2004), true, 'Year 2004');
      Test.assertEquals(isLeapYear(2010), false, 'Year 2010');
      Test.assertEquals(isLeapYear(2013), false, 'Year 2013');
      Test.assertEquals(isLeapYear(2100), false, 'Year 2100');
    });
  });