describe("Tests", () => {
    it("test", () => {
  function check(str, ending, expected){
    var result = solution(str, ending)
    Test.assertEquals(result, expected, "Expected solution('" + str + "', '" + ending + "') to return " + expected)
  }
  
  check("samurai", "ai", true)
  check("sumo", "omo", false)
  check("ninja", "ja", true)
  check("sensei", "i", true)
  check("samurai", "ra", false)
  check("abc", "abcd", false)
  check("abc", "abc", true)
  check("abcabc", "bc", true)
  check('ails', 'fails', false)
  check('fails', 'ails', true)
  check('this', 'fails', false)
  check("abc", "", true)
  check(":-)", ":-(", false)
  check("!@#$%^&*() :-)", ":-)", true)
    });
  });