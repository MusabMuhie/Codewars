describe("Who has the most money?", () => {
    it("Basic Tests", () => {
      const andy = new Student("Andy", 0, 0, 2);
      const stephen = new Student("Stephen", 0, 4, 0);
      const eric = new Student("Eric", 8, 1, 0);
      const david = new Student("David", 2, 0, 1);
      const phil = new Student("Phil", 0, 2, 1);
      const cam = new Student("Cameron", 2, 2, 0);
      const geoff = new Student("Geoff", 0, 3, 0);
      
      // "What happens if one student has the most money?"
      assert.strictEqual(mostMoney([andy, stephen, eric, david, phil]), "Eric");
      assert.strictEqual(mostMoney([cam, geoff, andy, stephen, eric, david, phil]), "Eric");
      
      // "What happens if there is only one student?"
      assert.strictEqual(mostMoney([andy]), "Andy");
      assert.strictEqual(mostMoney([stephen]), "Stephen");
      
      // "What happens if all students have the same amount of money?"
      assert.strictEqual(mostMoney([cam, geoff]), "all");
      assert.strictEqual(mostMoney([david, cam, geoff]), "all");
    });
    it("Random Tests", () => {
      const NAMES = "Mary Patricia Jennifer Linda Elizabeth Barbara Susan Jessica Sarah Karen Nancy Margaret Lisa Betty Dorothy Sandra Ashley Kimberly Donna Emily Michelle Carol Amanda Melissa Deborah James John Robert Michael William David Richard Joseph Thomas Charles Christopher Daniel Matthew Anthony Donald Mark Paul Steven Andrew Kenneth Joshua George Kevin Brian Edward".split(" ");
      let N = [...NAMES];
      const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
      const rn = (i = Math.floor(Math.random() * N.length), x = N[i]) => (N.splice(i, 1), x);
      for (let i = 0; i < 50; i++) {
        if (Math.random() < .3) {
          const [a, b, c] = [0, 0, 0].map(() => rand(0, 10));
          const students = Array.from({ length: rand(2, 5) }, () => new Student(rn(), a, b, c));
          assert.strictEqual(mostMoney(students), "all");
        } else {
          const students = Array.from({ length: rand(1, 10) }, () => new Student(rn(), rand(0, 10), rand(0, 10), rand(0, 10)));
          const totals = students.map(({ fives, tens, twenties }) => 5 * fives + 10 * tens + 20 * twenties);
          const most = Math.max(...totals);
          const i = totals.indexOf(most);
          let s = students[i];
          if (totals.filter(x => x == most).length > 1) {
            s = new Student(s.name, s.fives + rand(1, 3), s.tens + rand(1, 3), s.twenties);
            students[i] = s;
          }
          const exp = s.name;
          assert.strictEqual(mostMoney(students), exp);
        }
        N = [...NAMES];
      }
    });
  });
  