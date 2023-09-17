// how you store and manage data

// javascript array copy operation create shallow copy not deep copy
// shallow copy : of an object is a copy whose properties share the same Reference point to the same underlying values  as those of the source object original gets change directly


// const array = [0,1,2,3,4,5]
// const myHero = ["shaktiman", "batman"]

const array2 = new Array(1,2,3,4,5,6)
// array2.pop()
// console.log(array2.pop())

//slice , splice difference

const myn = array2.slice(1,3) //include 1 exclude 3 return [1,2]index
console.log(myn)
console.log(array2)

const myn2 = array2.splice(1,3)
console.log(myn2)
 console.log(array2) 

//slice does not change the original array it just gives the value accordingly but splice manipulates the original array

array2.push(9) //include the value in the last
console.log(array2) 
array2.pop() // remove the value
// array2.unshift(9) //will include 9 in the begining
// console.log(array2)

// array2.shift() //unshift 9
// console.log(array2)




