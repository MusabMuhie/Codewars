const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("Fixed tests", () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
    assert.strictEqual(removeExclamationMarks("Hello World!!!"), "Hello World");
    assert.strictEqual(removeExclamationMarks("Hi! Hello!"), "Hi Hello");
  })
  
  it("Random tests", () => {

    function solution(s) {
      return s.replace(/!/g, '');
    }

    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz";
    const getRandomString = () => Array.from({ length: 10 }).map(x => abc[~~(Math.random() * abc.length)]).join('');

    let rs = getRandomString() + '!' + getRandomString() + ' ' + getRandomString() + '!' + getRandomString();
    assert.strictEqual(removeExclamationMarks(rs), solution(rs), `Testing for s = ${JSON.stringify(rs)}`);
    });
});