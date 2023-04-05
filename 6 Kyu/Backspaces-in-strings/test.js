const {assert} = require('chai');

if (typeof cleanString != 'function' && typeof clean_string == 'function') cleanString = clean_string;

describe('cleanString', () => {
  it('should pass fixed tests', () => {
    assert.strictEqual(cleanString('abjd####jfk#'), 'jf');
    assert.strictEqual(cleanString('gfh#jds###d#dsd####dasdaskhj###dhkjs####df##s##d##'), 'gdasda');
    assert.strictEqual(cleanString('831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##'), '6+yqw8hfklsd-=-f');
    assert.strictEqual(cleanString('######831###dhkj####jd#dsfsdnjkf###d####dasns'), 'jdsfdasns');
    assert.strictEqual(cleanString(''), '');
    assert.strictEqual(cleanString('#######'), '');
    assert.strictEqual(cleanString('####gfdsgf##hhs#dg####fjhsd###dbs########afns#######sdanfl##db#####s#a'), 'sa');
    assert.strictEqual(cleanString('#hskjdf#gd'), 'hskjdgd');
    assert.strictEqual(cleanString('hsk48hjjdfgd'), 'hsk48hjjdfgd');
    assert.strictEqual(cleanString('fjnwui#NI#(*N#ION#Onfjen################Io4f'), 'Io4f');
    assert.strictEqual(cleanString('####6d87hbaskjdnf###$$%W#$@#$2332fr#f'), '6d87hbaskj$$%$$2332ff');
    assert.strictEqual(cleanString('#9#9#9#9o#9#9#9#Oooooo#OOOooO#OO######'), '9OooooO');
    assert.strictEqual(cleanString('0###0###0'), '0');
    assert.strictEqual(cleanString('904rfn#jlkcn#####Djva2###*(#fsdgfd####fsdg###09849###mfenf##dnjn##kmfd;l#mg03###'), '904rfDj*fsf09mfednkmfd;m');
  });
  it('should pass random tests', () => {
    function clean_string_std_code(s) {
      let stack = [];
      for (let i = 0; i < s.length; ++i) {
        s[i] != '#' ? stack.push(s[i]) : stack.pop()
      }
      return stack.join('')
    }
    const r = _ => ~~((Math.random() * 1000) % 28 + 95);
    const g = _ => [r(), r(), r(), r(), r()].map(x => [96, 95].includes(x) ? 35 : x);
    const m = _ => [].concat.apply([], [g(), g(), g(), g(), g()]);
    const n = _ => [].concat.apply([], [m(), m(), m(), m()]);
    for (let _ = 0; _ < 100; _++) {
      let s = String.fromCharCode(...n());
      assert.strictEqual(cleanString(s), clean_string_std_code(s));
    }
  });
});