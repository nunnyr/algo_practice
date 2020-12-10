//edit 

// ############### FREQUENCY COUNTER ###########################################
function sameFrequency(first, second){
    //split both number 
    //make it into a map (only the first one)
    //subtract value from the map. if the map has a value of 1 remaining........it does not have the same frequency of digits
    // good luck. Add any arguments you deem necessary.
  let strOne = first.toString()
  let strTwo = second.toString()
  //console.log("this is str:", strOne)
  //let arrOne = strOne.split("")
  //let arrTwo = strTwo.toString("")
  
  //console.log("this is arr:", arrOne)

  let  objOne = {}
    //if they are different lengths; return false
  if(strOne.length !== strTwo.length){
     return false

  }

  for(let i = 0; i < strOne.length; i++) {
     objOne[strOne[i]] ? objOne[strOne[i]] += 1 : objOne[strOne[i]] = 1
     console.log("this is the obj:", objOne)
    }
    //edit
    for(let j = 0; j < strTwo.length; j++) {
        if(!objOne[strTwo[j]]) {
            return false
        } else {

         objOne[strTwo[j]] -= 1
        }

    }
    return true


    // for(let key in objOne) {
    //     if(objOne[key] === 0) {
    //        // console.log("this is first map:", objOne[key])
    //       // console.log("values are now empty")
    //        return true 
    //     } else {
    //         return false
    //     }
    // }

}

//console.log(sameFrequency(814, 413))

// ##############################################################################