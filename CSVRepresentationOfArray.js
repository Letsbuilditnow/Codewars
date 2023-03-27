// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// Array's length > 2.




function toCsvText(array) {
    // good luck
 //   P:convert a two dimensional array into csv presentation;
 //   Arrays length is greater than 2
 //   R:a csv text presentation
 //   E:input:
 //    [[ 0, 1, 2, 3, 4 ],
 //     [ 10,11,12,13,14 ],
 //     [ 20,21,22,23,24 ],
 //     [ 30,31,32,33,34 ]] 
     
 // output:
 //      '0,1,2,3,4\n'
 //     +'10,11,12,13,14\n'
 //     +'20,21,22,23,24\n'
 //     +'30,31,32,33,34'
 //  
 //  P:Join the array with ("\n")
   return array.join('\n')}