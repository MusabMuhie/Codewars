const chai = require("chai");
const assert = chai.assert;
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const shuffleArray = a => a.sort(() => Math.random() - 0.5);
const randomLetter = () => [String.fromCharCode(random(97, 122)), String.fromCharCode(random(65, 90))][+(Math.random() - 0.5 > 0)];
const randomWord = () => Array.from(Array(random(1, 10)), x => randomLetter()).join``;
const randomWords = () => (randomWord() + ' ').repeat(random(1, 10)).trim();
const randomInput = () => shuffleArray(Array.from(Array(random(1, 20)), x => randomWords()).join` `.split` `).join` `
const _removeConsecutiveDuplicates = s => s.replace(/(\b\w+\b)(?:\s*\1(?=\s|$))+/g, '$1');

chai.config.truncateThreshold = 0;

describe('Example tests', () => {
  it('should handle example case', () => {
    assert.strictEqual(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta alpha beta gamma delta');
  });
});

describe('Random tests', () => {
  it('should handle random cases', () => {
    for (let i = 0; i < 99; i++) {
      const string = randomInput();
      assert.strictEqual(removeConsecutiveDuplicates(string), _removeConsecutiveDuplicates(string));
    }
  });
});