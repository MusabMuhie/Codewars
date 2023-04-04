/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/


//My Solution
function cleanString(s) {
    let res=''
    
    for(i=0;i<s.length;i++){
      if(s[i]!='#'){
        res+=s[i]
      }else{
        res=res.slice(0,res.length-1)
      }
    }
    return res
  }