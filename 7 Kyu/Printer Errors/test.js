describe("printerError",function() {
    it("Basic tests",function() {   
        let s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
        Test.assertEquals(printerError(s), "3/56")
        s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
        Test.assertEquals(printerError(s), "6/60")
        s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"
        Test.assertEquals(printerError(s) , "11/65")
        s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm"
        Test.assertEquals(printerError(s), "0/53")
    })})
    
    describe("Random tests",function() {
    
        function randint(a, b) { 
            return Math.floor(Math.random() * (b - a + 1) + a); 
        }
        function do_ex() {
            let i = 0, res = "";
            let k = randint(10, 500);
            while (i < ~~3*k/2) {
                let n = randint(97, 109);
                res += String.fromCharCode(n);
                i++;
            }
            while (i < 2 * k) {
                if (i % 17 === 0) n = randint(110, 122); else n = randint(97, 109);
                res += String.fromCharCode(n);
                i++;
            }
            return res;
        }    
        //................
        function printerErrorSol(s) {
            let cnt = 0, l = s.length;
            for(let i = 0; i < l; i++) {
                let c = s.charCodeAt(i);
                if (c > 109 && c <= 122) cnt++;
            }
            return +cnt + "/" +l;
        }   
        //................
        
        for (let i = 0; i < 200; i++) {
            let s = do_ex();
            it("Testing printerError: ", function() {
                Test.assertEquals(printerError(s), printerErrorSol(s));
            }
        )}
    })