describe("the stringy function", function() {

    it('Should return a string', function() {
      Test.assertEquals(typeof stringy(3), 'string',
      'Make sure it\'s a string not a number (the function is called stringy after all!)');
    });
  
    it('Should start with a 1', function() {
      Test.assertEquals(stringy(3)[0], '1',
      'Whoops your string doesnt start with a 1?');
    });  
  
    it('Should have the correct length', function() {  
      for(let i = 0; i < 10; ++i){
        let parameter = (Math.random() * 50 + 1) | 0;
        Test.assertEquals(stringy(parameter).length, parameter, 'Wrong length on ' + parameter);
      }
    });
  
    it('Should return the correct string', function() {
      let strings = []
      for (let i = 0; i < 20; i++) {
        let parameter = (Math.random() * 50 + 1) | 0;
        strings.push(stringy(parameter))
      }
      var map = strings.map(function(str) {
          for (let i = 0; i < str.length; i++) {
            if (i%2 === 0) {
              if (str[i] !== '1') return false;
            }
            else {
              if (str[i] !== '0') return false;
            }
          }
          return true;
      });
      map.forEach(result => Test.expect(result, 'whoops try again'));
    });
  });