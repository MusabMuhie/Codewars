describe("Basic tests", function(){
    Test.assertEquals(solve([[1,2],[4],[5,6]]),4);
    Test.assertEquals(solve([[1,2],[4,4],[5,6,6]]),4);
    Test.assertEquals(solve([[1,2],[3,4],[5,6]]),8);
    Test.assertEquals(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);
    });
    
    describe("Random tests", function(){
    for (let i = 0; i < 100; i++) {
        arr = [];
        L = [];
        r = Math.floor((Math.random() * 3) + 2);
        for (let j = 0; j < r; j++) {
            a = Math.floor((Math.random() * 6) + 1);
            for (let m = 0; m < a; m++) {
                b = Math.floor(Math.random() * 10);
                        L.push(b);
            }
            arr.push(L);
        }
        Test.assertEquals(solve(arr), solve_41xM(arr));
    }
    });
    
    function solve_41xM(arr) {
    L = [];
    for (let i = 0;  i< arr.length; i++){
      let a = Array.from(new Set(arr[i]));
      L.push(a);
    };
     return L.reduce((a, b) => a.map(x => b.map(y => x.concat(y))) .reduce((a, b) => a.concat(b), []), [[]]).length;
    };