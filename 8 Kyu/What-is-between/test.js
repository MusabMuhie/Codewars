const sol = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => i + a);

describe("Basic tests", () => {
  it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
  it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
  it("between(-10, 10)", () => assert.deepStrictEqual(between(-10, 10), sol(-10, 10)));
  it("between(5, 100)", () => assert.deepStrictEqual(between(5, 100), sol(5, 100)));
});

describe("Random tests", () => {
  const R = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const C = a => a[R(0, a.length - 1)];
  for (let i = 0; i < 100; i++) {
    const a = R(-100, 100),
          b = a + R(1, C([5, 20, 50]));
    it(`between(${a}, ${b})`, () => assert.deepStrictEqual(between(a, b), sol(a, b)));
  }
});