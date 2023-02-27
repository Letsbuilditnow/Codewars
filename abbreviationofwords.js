// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){

    // code away
//   P:A name will be given and it should be converted to its initials using first letter of the two names
//   R:Return a string with a dot between them
//   E:Sam Harris => S.H
//     patrick feeney => P.F
// convert the words into array
//   select the first letter of the first two words from the array
//   using literal notation add . 
//   join them
let array = name.split(' ');
return `${(array[0][0]).toUpperCase()}.${(array[1][0]).toUpperCase()}`
}