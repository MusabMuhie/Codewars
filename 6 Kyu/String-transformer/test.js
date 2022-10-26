const Test = require('@codewars/test-compat');

const _ = require('lodash')

describe("Your Solution", function () {
  it("should work for fixed tests", function () {
    Test.assertEquals(stringTransformer('Example Input'), 'iNPUT eXAMPLE', 'Should convert Example Input');
    Test.assertEquals(stringTransformer(''), '', 'Should handle empty string');
    Test.assertEquals(stringTransformer('To be OR not to be That is the Question'), 'qUESTION THE IS tHAT BE TO NOT or BE tO');
    Test.assertEquals(stringTransformer('You Know When  THAT  Hotline Bling'), 'bLING hOTLINE  that  wHEN kNOW yOU', 'Should handle multiple spaces');
    Test.assertEquals(stringTransformer(' A b C d E f G '), ' g F e D c B a ', 'Should handle leading space');
  });
  
  it("should work for random tests", function () {
    function generateRandomInput() {
      let length = Test.randomNumber() % 10;
      let words = [];
      
      for(let index = 0; index < length; index++) {
        if (_.random(0,10) < 5) words.push(" ")
        let word = Test.randomToken().replace(/[^a-zA-Z]/g,'');
        word = word.charAt(0).toUpperCase() + word.slice(1);
        words.push(word);
        if (_.random(0,10) < 5) words.push(" ")
      }
      
      return words.join(' ');
    }
  
    function changeCase(match, lower, upper) {
      return lower ? lower.toUpperCase() : upper.toLowerCase();
    }
    
    for (let i = 0; i < 100; i++) {
      let randomInput = generateRandomInput();
      let expected = randomInput.replace(/([a-z]+)|([A-Z]+)/g, changeCase).split(' ').reverse().join(' ');
      let actual = stringTransformer(randomInput);
      
      Test.assertEquals(actual, expected);
    }
  });
});