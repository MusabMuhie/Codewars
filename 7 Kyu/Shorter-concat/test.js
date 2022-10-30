const { assert } = require('chai');
const _ = require('lodash');

describe("Tests", () => {
  it("Fixed test", () => {
    assert.strictEqual(shorter_reverse_longer("first", "abcde"), "abcdetsrifabcde", 'Incorrect answer for a="first", b="abcde"');
    assert.strictEqual(shorter_reverse_longer("hello", "bau"  ), "bauollehbau"    , 'Incorrect answer for a="hello", b="bau"'  );
    assert.strictEqual(shorter_reverse_longer("fghi",  "abcde"), "fghiedcbafghi"  , 'Incorrect answer for a="fghi", b="abcde"' );
    assert.strictEqual(shorter_reverse_longer("hello", ""     ), "olleh"          , 'Incorrect answer for a="hello", b=""'     );
    assert.strictEqual(shorter_reverse_longer("",      "bau"  ), "uab"            , 'Incorrect answer for a="", b="bau"'       );
    assert.strictEqual(shorter_reverse_longer("",      ""     ), ""               , 'Incorrect answer for a="", b=""'          );
  });


  it('Random tests', () => {

    function random_string(len){
      let text = "";
      let possible = "abcdefghijklmnopqrstuvwxyz";
      for( let i=0; i < len; i++ ) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }

    let cases = [];
    for(let i=0; i < 30; i++ ) {
      let len = _.random(1, 20);
      let a = random_string(len);
      let b = random_string(len);
      let ans = b + a.split("").reverse().join("") + b;
      cases.push([a,b,ans]);
    }
    for(let i=0; i < 30; i++ ) {
      let len = _.random(1, 20);
      let a = random_string(len);
      let b = random_string(len + _.random(1,20));
      let ans = a + b.split("").reverse().join("") + a;
      cases.push([a,b,ans]);
    }
    for(let i=0; i < 30; i++ ) {
      let len = _.random(1, 20);
      let a = random_string(len + _.random(1, 20));
      let b = random_string(len);
      let ans = b + a.split("").reverse().join("") + b;
      cases.push([a,b,ans]);
    }
    for(let[a,b,exp] of _.shuffle(cases)) {
      assert.strictEqual(shorter_reverse_longer(a,b), exp, `Incorrect answer for a="${a}", b="${b}"`);
    }
  });
});