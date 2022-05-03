describe("Fixed tests", function() {
    Test.assertDeepEquals(playerManager("a, 5"), [{player: "a", contact: 5}]);
    Test.assertDeepEquals(playerManager("jane, 801, dave, 123"), [{player: "jane", contact: 801}, {player: "dave", contact: 123}]);
    Test.assertDeepEquals(playerManager("Amelia, 8165254325, Jessie, 9187162345, Marcus Kaine, 8018273245"), [{player: "Amelia", contact: 8165254325}, {player: "Jessie", contact: 9187162345}, {player: "Marcus Kaine", contact: 8018273245}]);
    Test.assertDeepEquals(playerManager(""), []);
    Test.assertDeepEquals(playerManager(null), []);
  });
  
  function solution(p) {
    p = p ? p.split(", ") : "";
    let r = [];
    for (let i = 0; i < p.length / 2; i++)
      r.push({player: p[i*2], contact: parseInt(p[i*2+1])});
    return r;
  }
  
  describe("Random tests", function() {
    const firstNames = "James David Christopher George Ronald John Richard Daniel Kenneth Anthony Robert Charles \
                        Paul Steven Kevin Michael Joseph Mark Edward Jason William Thomas Donald Brian Jeff Mary \
                        Jennifer Lisa Sandra Michelle Patricia Maria Nancy Donna Laura Linda Susan Karen Carol Sarah \
                        Barbara Margaret Betty Ruth Kimberly Elizabeth Dorothy Helen Sharon Deborah".split(/ +/);
  
    for (let _ = 0; _ < 100; _++) {
      if (Math.random() > 0.1) {
        let n = ~~(Math.random() * 16);
        let names = Test.randomize(firstNames.slice()).slice(0, n);
        let numbers = Array.from("_".repeat(n).split("").map(x => 10**9 + Math.abs(~~(Math.random() * (10**10-10**9)))));
        let string = Array.from("_".repeat(n).split("").map((_, i) => `${names[i]}, ${numbers[i]}`)).join(", ");
        const result = solution(string);
        Test.assertDeepEquals(playerManager(string), result);
      } else {
        Test.assertDeepEquals(playerManager(null), []);
      }
    }
  });