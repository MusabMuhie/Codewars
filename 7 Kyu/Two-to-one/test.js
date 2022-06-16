describe("longest",function() {
    it("Basic tests",function() {
        Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
        Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
        Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
        Test.assertEquals(longest("lordsofthefallen", "gamekult"), "adefghklmnorstu")
        Test.assertEquals(longest("codewars", "codewars"), "acdeorsw")
        Test.assertEquals(longest("agenerationmustconfrontthelooming", "codewarrs"), "acdefghilmnorstuw")
    })})
    
    describe("Random tests",function() {
    
        function randint(a, b) { 
            return Math.floor(Math.random() * (b - a + 1) + a); 
        }
        function longestSol(s1, s2) {
          let alpha_s1 = Array(27).join(1).split('').map(function(){return 0;});
          let alpha_s2 = Array(27).join(1).split('').map(function(){return 0;});
          let l1 = s1.length; let l2 = s2.length; let res = ""; 
          let i = 0; let c = 0;
          for(i = 0; i < l1; i++) {
            c = s1.charCodeAt(i);
            if (c >= 97 && c <= 122)
              alpha_s1[c - 97]++;
          }
          for(i = 0; i < l2; i++) {
            c = s2.charCodeAt(i);
            if (c >= 97 && c <= 122)
              alpha_s2[c - 97]++;
          }
          for(i = 0; i < 26; i++) {
            if (alpha_s1[i] !== 0) {
              res += String.fromCharCode(i + 97);
              alpha_s2[i] = 0;
            }
          }
          for(i = 0; i < 26; i++) {
            if (alpha_s2[i] !== 0)
              res += String.fromCharCode(i + 97);
          }
          return res.split("").sort().join("");
        }
        //................
        function doEx(k) {
          let i = 0, res = "";
          while (i < 15) {
            let sm = String.fromCharCode(randint(97+k, 122));
            for (let j = 0; j < randint(1, 5); j++)
                res += sm;
            i++;
          }
          return res;
        }    
        //................
        for (let i = 0; i < 200; i++) {
            let s1 = doEx(randint(0, 10));
            let s2 = doEx(randint(0, 8));
            it("Testing longest: ", function() {
                Test.assertEquals(longest(s1, s2), longestSol(s1, s2),"It should work for random tests too")
            }
        )}
    })