Test.assertEquals(consecutive([4,8,6]),2);
Test.assertEquals(consecutive([1,2,3,4]),0);
Test.assertEquals(consecutive([]),0);
Test.assertEquals(consecutive([1]),0);

function sol(arr) {
    arr.sort(function (a, b) { return a - b; });
    return (arr[arr.length - 1] - arr[0]) - (arr.length - 1) || 0;
}

describe('Random tests', function () {
    
        var rand = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min) }
        var i = 0, arr = [];
        var times = 100;
        while (--times >= 0) {
            arr = [];
            i=0;
            while (i < 100) {
                var rnd = rand(i - 50, 1000);
                if (arr.indexOf(rnd) == -1) {
                    arr.push(rnd);
                    ++i;
                }
            }
            Test.assertEquals(consecutive(JSON.parse(JSON.stringify(arr.slice()))),sol(JSON.parse(JSON.stringify(arr.slice()))));
        }
    
});
