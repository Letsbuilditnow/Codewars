// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.


var number = function(busStops){
    // Good Luck!
  //  P:first number is number of people get on the bus and the second number is number of people leaving the bus
  // R:number of people left in the bus at the last stop 
  // E:[[10,0],[3,5],[5,8]]),5
  //   P:declare a variable called count;
  //    :map through the array and add the first element to the count and subtract the second element
  //    count
     let count = 0;
    busStops.forEach(stop=>{
     count=count+(stop[0]-stop[1])
    })
    return count;
  }