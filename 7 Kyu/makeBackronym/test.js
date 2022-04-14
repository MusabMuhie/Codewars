const assert = require('chai').assert;
describe("Basic tests", () => {
  const testCases = [
    ['adh', 'awesome disturbing hippy'],
    ['dgm', 'disturbing gregarious mustache'],
    ['lmnop', 'literal mustache newtonian oscillating perfect'],
    ['lkj', 'literal klingon joke'],
    ['wyv', 'weird yogic volcano'],
    ['interesting', 'ingestable newtonian turn eager rant eager stylish turn ingestable newtonian gregarious'],
    ['codewars', 'confident oscillating disturbing eager weird awesome rant stylish'],
    ['privet', 'perfect rant ingestable volcano eager turn'],
    ['paka', 'perfect awesome klingon awesome'],
    ['', ''],
    ['ppp', 'perfect perfect perfect'],
    ['abcdefghijklmnopqrstuvwxyz','awesome beautiful confident disturbing eager fantastic gregarious hippy ingestable joke klingon literal mustache newtonian oscillating perfect queen rant stylish turn underlying volcano weird xylophone yogic zero']
  ];
  for(const [input, expected] of testCases)
    it(`Testing for ${JSON.stringify(input)}`, () => assert.strictEqual(makeBackronym(input), expected));
});

describe("Random tests", () => {
  const randint = (a,b) => Math.floor(Math.random()*(b-a+1)+a);
  const sol = s => s.split("").map(a => dict[a.toUpperCase()]).join(" ");
  const base = "abcdefghijklmnopqrstuvwxyz";
  
  it("should work for random inputs", () => {
    for (let _ = 0; _ < 40; _++) {
      let input = [...Array(randint(1,20))].map(_ => base[randint(0, base.length-1)]).join("");
      assert.strictEqual(makeBackronym(input), sol(input), `Testing for ${JSON.stringify(input)}`);
    }
  });
});