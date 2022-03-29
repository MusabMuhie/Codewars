describe("accum",function() {
    it("Basic tests",function() {    
      Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
      Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
      Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
      Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
      Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
      Test.assertEquals(accum("VwhvtHtrxfE"), "V-Ww-Hhh-Vvvv-Ttttt-Hhhhhh-Ttttttt-Rrrrrrrr-Xxxxxxxxx-Ffffffffff-Eeeeeeeeeee");
      Test.assertEquals(accum("KurgiKmkphY"), "K-Uu-Rrr-Gggg-Iiiii-Kkkkkk-Mmmmmmm-Kkkkkkkk-Ppppppppp-Hhhhhhhhhh-Yyyyyyyyyyy");
      Test.assertEquals(accum("NctlfBlnmfH"), "N-Cc-Ttt-Llll-Fffff-Bbbbbb-Lllllll-Nnnnnnnn-Mmmmmmmmm-Ffffffffff-Hhhhhhhhhhh");
      Test.assertEquals(accum("WegunHvbdmV"), "W-Ee-Ggg-Uuuu-Nnnnn-Hhhhhh-Vvvvvvv-Bbbbbbbb-Ddddddddd-Mmmmmmmmmm-Vvvvvvvvvvv");
      Test.assertEquals(accum("VoywwSpqidE"), "V-Oo-Yyy-Wwww-Wwwww-Ssssss-Ppppppp-Qqqqqqqq-Iiiiiiiii-Dddddddddd-Eeeeeeeeeee");
      Test.assertEquals(accum("VbaixFpxdcO"), "V-Bb-Aaa-Iiii-Xxxxx-Ffffff-Ppppppp-Xxxxxxxx-Ddddddddd-Cccccccccc-Ooooooooooo");
      Test.assertEquals(accum("OlyqvYwkuzF"), "O-Ll-Yyy-Qqqq-Vvvvv-Yyyyyy-Wwwwwww-Kkkkkkkk-Uuuuuuuuu-Zzzzzzzzzz-Fffffffffff");
      Test.assertEquals(accum("JrhfdMtchiH"), "J-Rr-Hhh-Ffff-Ddddd-Mmmmmm-Ttttttt-Cccccccc-Hhhhhhhhh-Iiiiiiiiii-Hhhhhhhhhhh");
      Test.assertEquals(accum("JiwpcSwslvW"), "J-Ii-Www-Pppp-Ccccc-Ssssss-Wwwwwww-Ssssssss-Lllllllll-Vvvvvvvvvv-Wwwwwwwwwww");
      Test.assertEquals(accum("EagpiEvmabJ"), "E-Aa-Ggg-Pppp-Iiiii-Eeeeee-Vvvvvvv-Mmmmmmmm-Aaaaaaaaa-Bbbbbbbbbb-Jjjjjjjjjjj");
      Test.assertEquals(accum("RznlcEmuxxP"), "R-Zz-Nnn-Llll-Ccccc-Eeeeee-Mmmmmmm-Uuuuuuuu-Xxxxxxxxx-Xxxxxxxxxx-Ppppppppppp");
      Test.assertEquals(accum("OrggaExarzP"), "O-Rr-Ggg-Gggg-Aaaaa-Eeeeee-Xxxxxxx-Aaaaaaaa-Rrrrrrrrr-Zzzzzzzzzz-Ppppppppppp");
      Test.assertEquals(accum("DriraMtedfB"), "D-Rr-Iii-Rrrr-Aaaaa-Mmmmmm-Ttttttt-Eeeeeeee-Ddddddddd-Ffffffffff-Bbbbbbbbbbb");
      Test.assertEquals(accum("BjxseRxgtjT"), "B-Jj-Xxx-Ssss-Eeeee-Rrrrrr-Xxxxxxx-Gggggggg-Ttttttttt-Jjjjjjjjjj-Ttttttttttt");
      Test.assertEquals(accum("EquhxOswchE"), "E-Qq-Uuu-Hhhh-Xxxxx-Oooooo-Sssssss-Wwwwwwww-Ccccccccc-Hhhhhhhhhh-Eeeeeeeeeee");
    })})
    
    describe("Random tests",function() {
    
        function randint(a, b) { 
            return Math.floor(Math.random() * (b - a + 1) + a); 
        }
        
        //................
        function accumSol109(s) {
          function capitalize(s){
            return s.toLowerCase().replace( /\b./g, function(a) { return a.toUpperCase(); } );
          };
          var a = s.split(""), res = "";
          for (var i = 0; i < a.length; i++) {
           for (var j = 0; j < i + 1; j++)
            res += a[i];
           res += "-";
          }
          return capitalize(res.substr(0, res.length-1));
        }
        //................
    
        function doEx() {
          var i = 0;
          var res = "";
          while (i < 11) {
            if (i % 5 === 0) var n = randint(65, 90); else n = randint(97, 122);
            res += String.fromCharCode(n);
            i++;
          }
          return res;
        }
    
        for (var i = 0; i < 100; i++) {
            var s1 = doEx();
            it("Testing accum: ", function() {
                Test.assertEquals(accum(s1), accumSol109(s1),"It should work for random tests too")
            }
        )}
    })
