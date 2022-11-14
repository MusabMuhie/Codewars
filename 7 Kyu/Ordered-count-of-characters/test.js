const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

let randomString = function (isEdge) {
    let length = Math.floor(Math.random() * 100);
    let digits = "0123456789";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let pl = possible.length;
    let rs = [];

    if (length === 0) {
        return "";
    }
    
    if (isEdge) {
        for (let i = 0; i < length; i++) {
            rs.push(digits.charAt(Math.floor(Math.random() * digits.length)));
        }
    }
    else {
        for (let i = 0; i < length; i++) {
            rs.push(possible.charAt(Math.floor(Math.random() * possible.length)));
        }
    }

    return rs.join("");
};

const fixed = [
  ["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
  ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
  ["233312", [['2', 2], ['3', 3], ['1', 1 ]]],
];

describe("Fixed Tests", function(){
    for (const [text, expected] of fixed) {
        it('text: ' + JSON.stringify(text), function() {
            assert.deepEqual(orderedCount(text), expected);
        });
    }
});

describe("Random Tests", function(){
  let solution = function (text) {
      let counter = {};
      let order = [];

      text.split('').forEach(char => {
          if(char in counter) {
              counter[char] += 1;
          } else {
              counter[char] = 1;
              order.push(char);
          }
      });

      return order.map(c => [c, counter[c]]);
  };

  let rs = "";
  for (let index = 0; index < 90; index++) {
      rs = randomString(false);
      it(`random test ${JSON.stringify(rs)}`, function() {
          assert.deepEqual(orderedCount(rs), solution(rs));
      });
  }
  
  for (let index = 0; index < 10; index++) {
      rs = randomString(true);
      it(`random test ${JSON.stringify(rs)}`, function() {
          assert.deepEqual(orderedCount(rs), solution(rs));
      });
  }
});