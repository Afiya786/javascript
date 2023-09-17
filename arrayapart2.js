marvel = ["afia","siraj","azaz"]
marvel1 = ["alia","aniya"]
const all = [...marvel, ...marvel1] //spread operator
console.log(all)
console.log(typeof(all))

const all1 = marvel.concat(marvel1)// concat works when you put the array in another var
console.log(all)

const arr4 = [1,2,3,[1,2,3],4,5,6,[7,8,9]]
const real = arr4.flat(Infinity)
console.log(real)

console.log(Array.from("hitesh"))


