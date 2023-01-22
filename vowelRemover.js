// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//     don't worry about uppercase vowels
//     y is not considered a vowel for this kata

function shortcut (string) {
    let strings= string.split('')
    let stringNew=strings.filter(e=>{
      return ['a','e','i','o','u'].indexOf(e)==-1;
    }).join('')
    return stringNew
    }
    
    function shortcut(str) {
        return str.split('').filter(function(e) {
          return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
        }).join('')
      }