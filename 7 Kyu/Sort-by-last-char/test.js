const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sort by Last Char", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
    assert.deepEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
    assert.deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to']); 
    assert.deepEqual(last('massage yes massage yes massage'), ['massage', 'massage', 'massage', 'yes', 'yes']); 
    assert.deepEqual(last('take bintang and a dance please'), ['a', 'and', 'take', 'dance', 'please', 'bintang']); 
  })

  it("Random tests",() =>{
    const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
    function mylast(x){
      x = x.split(' ')
      let letter = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':10, 'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 'p':16, 'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25, 'z':26};

      return x.sort((a, b)=> letter[a.charAt(a.length-1)] - letter[b.charAt(b.length-1)]);
      }

    let names=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    for (let i=0;i<100;i++){
      let x=[], b=[], a=[], c=[], d=[], e=[], f=[], g=[], h=[], len=randint(0,31);

      for (let k=0;k<len;k++) {
        a.push(names[randint(0,names.length-1)]);
        b.push(names[randint(0,names.length-1)]);
        c.push(names[randint(0,names.length-1)]);
        d.push(names[randint(0,names.length-1)]);
        e.push(names[randint(0,names.length-1)]);
        f.push(names[randint(0,names.length-1)]);
        g.push(names[randint(0,names.length-1)]);
        h.push(names[randint(0,names.length-1)]);
    }
      x.push(a.join(''), b.join(''), c.join(''), d.join(''));
      x=x.join(' ');
      assert.deepEqual(last(x),mylast(x), `Testing for ${JSON.stringify(x)}`);
    }
  })
})

