const { assert, config } = require('chai');

config.truncateThreshold = 1001;

before("######Security Tests######", function() {
  if(Math.random == undefined)
    assert.strictEqual(false,true,'Math Object must contain random Method!')
  if(Math.floor == undefined)
    assert.strictEqual(false,true,'Math Object must contain floor Method!')
  if(Math.random.toString().indexOf('[native code]')==-1||Math.random.toString().length!=35)
    assert.strictEqual(false,true,'Math.random method must be Native!')
  if(Math.floor.toString().indexOf('[native code]')==-1||Math.floor.toString().length!=34)
    assert.strictEqual(false,true,'Math.floor method must be Native!')
});


describe('Fixed Tests', () => {
  it("Test", () => {
    assert.sameOrderedMembers(preFizz(1), [1], `Array should be from 1 to 1`);
    assert.sameOrderedMembers(preFizz(2), [1,2], `Array should be from 1 to 2`);
    assert.sameOrderedMembers(preFizz(3), [1,2,3], `Array should be from 1 to 3`);
    assert.sameOrderedMembers(preFizz(4), [1,2,3,4], `Array should be from 1 to 4`);
    assert.sameOrderedMembers(preFizz(5), [1,2,3,4,5], `Array should be from 1 to 5`);
  });
});

describe('Random Tests', () => {
  it("Test", () => {
    for(let i=0;i<100;i++){
      let num = Math.floor(Math.random()*1000)+1;
      assert.sameOrderedMembers(preFizz(num),new Array(num+1).join('0').split('').map((a,i)=>i+1), `Array should be from 1 to ${num}`);
    }
  });
});