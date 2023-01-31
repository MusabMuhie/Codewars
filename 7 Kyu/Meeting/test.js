const Test = require('@codewars/test-compat');

function testing(s, exp) {
    console.log("Testing:\n", s)
    let ans = meeting(s)
    console.log("Actual:\n", ans)
    console.log("Expect:\n", exp)
    Test.assertEquals(ans, exp)
}

describe("Basic tests",function() {
    it("meeting",function() {
        testing("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn", 
            "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");
        testing("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell", 
            "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)");
        testing("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern", 
            "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)");
        testing("Anna:Wahl;Grace:Gates;James:Russell;Elizabeth:Rudd;Victoria:STAN;Jacob:Wahl;Alex:Wahl;Antony:Gates;Alissa:Meta;Megan:Bell;Amandy:Stan;Anna:Steve", 
            "(BELL, MEGAN)(GATES, ANTONY)(GATES, GRACE)(META, ALISSA)(RUDD, ELIZABETH)(RUSSELL, JAMES)(STAN, AMANDY)(STAN, VICTORIA)(STEVE, ANNA)(WAHL, ALEX)(WAHL, ANNA)(WAHL, JACOB)");
        testing("Ann:Russel;John:Gates;Paul:Wahl;Alex:Tolkien;Ann:Bell;Lewis:Kern;Sarah:Rudd;Sydney:Korn;Madison:Meta", 
            "(BELL, ANN)(GATES, JOHN)(KERN, LEWIS)(KORN, SYDNEY)(META, MADISON)(RUDD, SARAH)(RUSSEL, ANN)(TOLKIEN, ALEX)(WAHL, PAUL)");
        testing("Paul:Arno;Matthew:Schwarz;Amandy:Meta;Grace:Meta;Ann:Arno;Alex:Schwarz;Jacob:Rudd;Amber:Cornwell", 
            "(ARNO, ANN)(ARNO, PAUL)(CORNWELL, AMBER)(META, AMANDY)(META, GRACE)(RUDD, JACOB)(SCHWARZ, ALEX)(SCHWARZ, MATTHEW)");
        testing("Abba:Bell;Lewis:Cornwell;Jacob:STAN;Matthew:Schwarz;Ann:STAN;Sophia:Gates;Victoria:Korn;Anna:Bell;Paul:Kern;Alissa:Tolkien", 
            "(BELL, ABBA)(BELL, ANNA)(CORNWELL, LEWIS)(GATES, SOPHIA)(KERN, PAUL)(KORN, VICTORIA)(SCHWARZ, MATTHEW)(STAN, ANN)(STAN, JACOB)(TOLKIEN, ALISSA)");
        testing("Victoria:Thorensen;Ann:Arno;Alexis:Wahl;Emily:Stan;Anna:STAN;Jacob:Korn;Sophia:Gates;Amber:Kern", 
            "(ARNO, ANN)(GATES, SOPHIA)(KERN, AMBER)(KORN, JACOB)(STAN, ANNA)(STAN, EMILY)(THORENSEN, VICTORIA)(WAHL, ALEXIS)");
        testing("Andrew:Arno;Jacob:Russell;Anna:STAN;Antony:Gates;Amber:Korn;Lewis:Dorries;Ann:Burroughs;Alex:Kern;Anna:Arno;Elizabeth:Kern;John:Schwarz;Sarah:STAN", 
            "(ARNO, ANDREW)(ARNO, ANNA)(BURROUGHS, ANN)(DORRIES, LEWIS)(GATES, ANTONY)(KERN, ALEX)(KERN, ELIZABETH)(KORN, AMBER)(RUSSELL, JACOB)(SCHWARZ, JOHN)(STAN, ANNA)(STAN, SARAH)");
        testing("Megan:Wahl;Alexis:Arno;Alex:Wahl;Grace:STAN;Amber:Kern;Amandy:Schwarz;Alissa:Stan;Paul:Kern;Ann:Meta;Lewis:Burroughs;Andrew:Bell", 
            "(ARNO, ALEXIS)(BELL, ANDREW)(BURROUGHS, LEWIS)(KERN, AMBER)(KERN, PAUL)(META, ANN)(SCHWARZ, AMANDY)(STAN, ALISSA)(STAN, GRACE)(WAHL, ALEX)(WAHL, MEGAN)");

})})

describe("Random tests",function() {
    it("meeting",function() {
        function randint(a, b) { 
            return Math.floor(Math.random() * (b - a + 1) + a); 
        }
        var fnams=["Emily", "Sophia", "Anna", "Anna", "Sarah", "Michael", "Jacob", "Alex", "Alex", "Alex", "Antony", "John", "Matthew", "Andrew", "Paul", "Paul", "Ann", "Ann", "Ann", "Ann", "Robert", 
               "Megan", "Alissa", "Alexis", "Grace", "Madison", "Elizabeth", "James", "Amandy", "Abba", "Victoria", "Amber", "Sydney", "Haley", "Lewis"]
        var names=["Korn", "Arno", "Arno", "Bell", "Bell", "Kern", "Kern", "Kern", "Russel", "Meta", "Meta", "Meta", "Cornwell", "Cornwell", "Wahl", "Wahl", "Wahl", "Wahl", "Dorny", "Dorries", 
               "Stan", "STAN", "STAN", "Thorensen", "Schwarz", "Schwarz", "Gates", "Steve", "Tolkien", "Burroughs", "Gates", "Bell", "Korn", "Russell", "Rudd"]
        function shuffle38(arr) {
                for (var i = arr.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
                return arr;
        }
        function compose38(k) {
            var k = Math.max(8, k);
            var f = shuffle38(fnams)
            var n = shuffle38(names)
            var res = ""; var i = 0;
            while (i < k) {
                res += f[i] + ":" + n[i] + ";"
                i += 1
            }
            return res.substring(0, res.length - 2)
        }
        function meeting38(s) {
            function comp(a, b) {
                if (a[1] == b[1]) {
                    return a[0] < b[0] ? -1 : 1;
                }
                return a[1] < b[1] ? -1 : 1;
            }
            let w = s.toUpperCase().split(";").map(a => a.split(":")).sort((a, b) => comp(a, b));
            return w.map(a => "(" + a[1] + ", " + a[0] + ")").join("");
        }
    
        function random_tests(nb) {
            let j = 0
            while (j < nb) {
                let rn = randint(6, 12)
                s = compose38(rn)
                sol = meeting38(s)
                testing(s, sol)
                j += 1;
            }
        }
        random_tests(100);
})})

