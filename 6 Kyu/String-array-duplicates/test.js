describe("Basic tests", function(){
    Test.assertDeepEquals(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
    Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
    Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
    Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
    Test.assertDeepEquals(dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']);
    Test.assertDeepEquals(dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']);
    Test.assertDeepEquals(dup(["putteellinen","keenness"]), ['putelinen','kenes']);
    Test.assertDeepEquals(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']);
    });
    
    describe("Random tests", function(){
    for (let i = 0; i < 100; i++){
       arr = randArray();
       Test.assertDeepEquals(dup_mxJS12(arr),dup(arr),"It should work for random inputs too"); 
      }
    });
    
    function dup_mxJS12(arry) {
        let res = [];
        for (let k = 0; k < arry.length; k++) {
            let arr = arry[k].split("");    
            let j = 0;
            for (let i = 1; i < arr.length; i++)
            {
                if (arr[j] != arr[i])
                {
                    j++;
                    arr[j] = arr[i];
                }
            }
            j++;
            res.push(arr.slice(0, j).join(""));
        }
        ;
        return res;
    }
    ;
    
    function randArray() {
        let letters = "abcdefghijklmnopqrstuvwxyz";
        let arrLen = Math.floor(Math.random() * 20) + 10;
        let len = Math.floor(Math.random() * 20) + 10;
        let c = 0;
        let arr = [];
        while (c < arrLen) {
            L = [];
            for (let i = 0; i < len; i++) {
                r = Math.floor(Math.random() * 25);
                L += letters[r]
                if (r % 2 == 0) {
                    L += letters[r]
                }
            }
            ;
            arr.push(L)
            c++;
        }
        ;
        return arr;
    }
    ;