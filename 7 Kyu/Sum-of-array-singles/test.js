describe("Basic tests", function(){
    Test.assertEquals(repeats([4,5,7,5,4,8]),15);
    Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
    Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
    Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
    Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);
    });
    
    describe("Random tests", function(){
    for (let i = 0; i < 100; i++){
       arr = randomAry()    
       Test.assertEquals(repeats(arr),repeats_52kui(arr),"It should work for random inputs too"); 
      }
    });
    
    function repeats_52kui(arr){
        let x = arr[0]; let a = 0; let b = 0;
        for (let i = 1; i < arr.length; i++){
          x ^= arr[i]
        };
        t = x & ~(x-1)
        for (let i = 0; i <arr.length; i++){
          if(arr[i] & t){
            a ^= arr[i]
          }
          else{
            b ^= arr[i]
          }
        }
        return a + b
    };
    
    function randomAry(){
        let S = new Set();
        let arrLen = Math.floor(Math.random() * 500) + 1000; 
        for (let i = 0; i < arrLen; i++){
            let r = Math.floor(Math.random() * 1000);
            S.add(r)
        };
        let L = Array.from(S);    
        let c = 0;
        while (true){
            let a = Math.floor(Math.random() * 1000);
            let len = S.size;
            S.add(a);
            if (S.size > len) c++;
            if (c == 2) break;
        };
        return shuffle(Array.from(S).concat(L)) 
    };
    function shuffle(L) {
        for(let j, x, i = L.length; i; j = parseInt(Math.random() * i), x = L[--i], L[i] = L[j], L[j] = x);
        return L;
    }