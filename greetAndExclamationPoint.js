// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    let array=name.split('')
    let arrayName=array.map(a=>{
      return array[0]==a?a.toUpperCase():a.toLowerCase()
    })
  let capitalizedAndExclamationPoint=`Hello ${arrayName.join('')}!`
  return capitalizedAndExclamationPoint
  };