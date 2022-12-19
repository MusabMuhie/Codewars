const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
    assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")
    assert.strictEqual(DNAStrand("AAGG"),"TTCC", "String AAGG is")
    assert.strictEqual(DNAStrand("CGCG"),"GCGC", "String CGCG is")
    assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    assert.strictEqual(DNAStrand("GTATCGATCGATCGATCGATTATATTTTCGACGAGATTTAAATATATATATATACGAGAGAATACAGATAGACAGATTA"),"CATAGCTAGCTAGCTAGCTAATATAAAAGCTGCTCTAAATTTATATATATATATGCTCTCTTATGTCTATCTGTCTAAT")
  })
})

describe("Random tests",function(){
  
  const base=["A","C","G","T"];
  function randint(a,b){return Math.floor(Math.random()*(b-a+1)+a);}

  function DNASol(dna){
    let res="";
    for (let nuc=0;nuc<dna.length;nuc++){
      if (dna[nuc]=="A") res+="T";
      else if (dna[nuc]=="T") res+="A";
      else if (dna[nuc]=="C") res+="G";
      else res+="C";
    }
    return res
  }

  it("Testing for 40 random tests", () => {
    for (let _=0;_<40;_++){
      let testdna="";
      let testlen=randint(5,30);
      for (let j=0;j<testlen;j++) testdna+=base[randint(0,3)]
      assert.strictEqual(DNAStrand(testdna),DNASol(testdna),`Testing for ${JSON.stringify(testdna)}`);
    }
  })
})