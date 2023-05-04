// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.



function highAndLow(numbers){
    // ...
  
  //   We are given a string of numbers and want to find highest and lowest numbers among them;
  //   Returns the highest numbers and lowest number in strings
  //  highAndLow("1 2 3 4 5");  // return "5 1"
  // highAndLow("1 2 -3 4 5"); // return "5 -3"
  // highAndLow("1 9 3 4 -5"); // return "9 -5"
    // convert the numbers into arrays;
    let array=numbers.split(" ");
  //   map the array and convert Strings into Numbers
    let NumberArray=array.map(item=>Number(item))
  // Sort The Array
    let sortedArray=NumberArray.sort((a,b)=>a-b);
    
    let FirstLastValue=`${sortedArray[sortedArray.length-1]} ${sortedArray[0]}`
    return(FirstLastValue)
    
  }
  highAndLow("1 2 3 4")