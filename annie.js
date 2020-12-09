// //given an array it is divded by n size, so n is the maximum amount
// //one element arrays are valid here
// // [subarrays]
// //return a new array of subarrays


// //chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// //chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]

function chunk(array, num) {
    let empty = []
    //handles if its empty
    if(array.length < 0) {
        return empty
    }
    //outer array declared
    let finalArr = [];
    for(let i =0; i < array.length; i++){
        let last = finalArr[finalArr.length - 1] 
        console.log("this is last:", last)
        //if last element does not exist or if matches the num size
        if(!last || last.length === num ){
            let newArr = [array[i]]
                finalArr.push(newArr)
        } else {
            last.push(array[i])
        }
    }
    return finalArr
}
console.log(chunk([1, 2, 3, 4, 5], 2))


given an array, takes an input that depicts the grid 
//   matrix(2)
    [[1, 2],
    [4, 3]]

 matrix(4)
    [[1,  2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]]
ask what the return value is an array with spirals 


insertion sort 
give an array of semi sorted items
[2,1,4,5,3,16]
return an array that is fully sorted using insertion sort


hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10) ==>  [[-1, 11], [3, 7]]]
length 2
an array element + array element = value
duplicate values are okay, depending on their order [-1. 11] [11, -1]
if initial array is empty, then return an empty array

//declare a variable that will store my answers [], will become nested
//create a variable/ counter that i manually increase in a for loop
//wrote a for loop to iterate through given array, arr[i]
//if(arr[i] + arr[j] === value)
//hold that element 

// function hasTargetSum(array, value) {
//     //edge case
//     if(array.length === 0) {
//         return []
//     }
//     let finalArr = []
//     let elements = {}
//     let j = 1

//     for(let i = 0; i < array.length; i++) {
//         if(!elements[array[i]]) {
//             elements[array[i]] = 1
//         }
//         j++
//     }

//     for(let key in elements) {
//         let found = []
//         let diff = value - key

//         if(elements[diff]){
//             found.push(diff, key)
//             finalArr.push(found)
//         }
//     }
//     return finalArr
// }

// console.log(hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10))

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// (y2 - y1)/ (x2 - x1)

// rise over run 
// slope 

// function areYou(coordinates) {
// let first = coordinates[0]
// let same = []

//     for (let i = 0; i < coordinates.length-1; i++) {

//         let xOne = coordinates[i][0]
//         let yOne = coordinates[i][1]

//         let top = coordinates[i+1][1] - yOne
//         let bottom = coordinates[i+1][0] - xOne

//         let slope = (top/bottom)
//         same.push(slope)
//         console.log("this is the slope:", slope)
//     }
//     return (same.every((slope) => slope === same[0]))
// }

// console.log(areYou([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]))

// function reverseInt(num) {
//     //123 => 321
//     // final.push([1,2,3].pop())

//     let str = num.toString()
//     let arr = str.split("")
//     let final = []

//     for(let elem in arr) {
//       //  let goodbye = arr.pop()
//         final.unshift(arr[elem])
//         // final.(arr[elem])
//     }
   
//     return parseInt(final.join(""))

// }

//console.log(reverseInt(123))


// function findJewel(jewel, stone) {

    
//     //let splitStone = stone.split("")

//     let stoneMap = {}


//     for(let i=0; i < stone.length; i++) {
//         if(!stoneMap[stone[i]]) {
//             stoneMap[stone[i]] = 1
//         } else {
//             stoneMap[stone[i]] = stoneMap[stone[i]] + 1
//         } 

//     }
//     console.log("map", stoneMap)
//     return present(jewel, stoneMap)
// }

// function present(jewel, obj) {
//     let count = 0
//     let jewelSplit = jewel.split("") // ["a", "A"]
//     console.log("before", jewelSplit)
//     for(let key in obj) {
//         if(jewelSplit.includes(key)) {
//             console.log("jewelSplit", jewelSplit)
//             console.log("key?", key)
            
//             count += obj[key]
//         }
//     }
//     return count
// }

// console.log(findJewel("aA", "aAAbbbb" ))

// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Input: J = "z", S = "ZZ"
// Output: 0















