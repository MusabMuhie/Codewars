describe("Basic tests", () => {
    it("Testing for [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]", () => assert.strictEqual(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9));
    it("Testing for [[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]", () => assert.strictEqual(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76));
  });
  
  describe("Random tests", () => {
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const sol = arr => arr.reduce((a, b) => a + Math.min(...b), 0);
    for (let i = 0; i < 100; i++) {
      const cols = rand(2, 8);
      const arr = Array.from({ length: rand(2, 8) }, () => Array.from({ length: cols }, () => rand(1, 150)));
      it("Testing for [" + arr.map(x => `[${x.join(', ')}]`).join(', ') + ']', () => assert.strictEqual(sumOfMinimums(arr), sol(arr)));
    }
  });