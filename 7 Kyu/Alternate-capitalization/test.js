describe("Basic tests", function(){
    Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
    Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
    Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
    Test.assertDeepEquals(capitalize("indexinglessons"),['InDeXiNgLeSsOnS', 'iNdExInGlEsSoNs']);
    Test.assertDeepEquals(capitalize("codingisafunactivity"),['CoDiNgIsAfUnAcTiViTy', 'cOdInGiSaFuNaCtIvItY']);
    });
    
    describe("Random tests", function(){
     var letters = "abcdefghijklmnopqrstuvwxyz"
    for (let i=0;i<100;i++){
      r  = Math.floor((Math.random() * 10) + 10);  
      if (r > 25){
      letters += letters;
      };
      s = letters.slice(1,r)  
      Test.assertDeepEquals(capitalize(s),capitalize521R(s),"It should work for random inputs too"); 
    }
    });
    
    function capitalize521R(s){
      a = s.split('').map(function(c,i) {
        return !(i & 1) ? c.toUpperCase() : c.toLowerCase();
      }).join('');
      b = s.split('').map(function(c,i) {
        return i & 1 ? c.toUpperCase() : c.toLowerCase();
      }).join('');
      
      return [a,b];
    };
    