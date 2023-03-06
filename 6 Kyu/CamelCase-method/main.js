/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/


//My Solution
if(this!=''){
    let arr=this.split(' ')
  return arr.map(el=>el[0].toUpperCase()+el.slice(1)).join('')
  }else{
    return ''
  }