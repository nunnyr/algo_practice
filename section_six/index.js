//edit 
function sameFrequency(first, second){
    //split both number 
    //make it into a map (only the first one)
    //subtract value from the map. if the map has a value of 1 remaining........it does not have the same frequency of digits
  // good luck. Add any arguments you deem necessary.
  
  let strOne = first.toString()
  let strTwo = second.toString()
  let arrOne = strOne.split(" ")
  let arrTwo = strTwo.toString(" ")
  
  console.log("this is arr:", arrOne)


}

console.log(sameFrequency(814, 418))