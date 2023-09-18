const new1 ={}
new1.name = "afiya"
new1.age =21
new1.address = "colony"
console.log(new1)

const new2 = {
    name : "hammad",
    age : 24,

    new3: {
        password:"hello",
        city: "delhi"

    }
}

console.log(Object.keys(new2)) // the output must be in array can be used many in many ways 
//and vice-versa with values ; Object.values(new2)

//one more : entries console.log(Object.entries(new2))
//this will give each value as array i.e array insie array


console.log(new2.name , new1.name)

// ----combining two or more objects---//

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
// //you cant choose concat method
// const obj3 = Object.assign({},obj1,obj2)//here empty bracket serve as a target and obj1 and obj2 are served as source
// console.log(obj3)


// //second method i.e spread method

const obj4 = {...obj1,...obj2}
console.log(obj4);