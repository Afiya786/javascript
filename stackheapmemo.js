 let myyotube = "hitesh"
 let anothername = myyotube
 anothername = "chai" //you give copy of the original variable

 console.log(myyotube)
 console.log(anothername)

 //primitive data type moves in stack and non-primitive goes in heap memory

//  non primitive directly change the value in heap whereas primitive only gives the copy of the original 
// that's why when we assign myyoutube to anothername we give it only the copy of myyoutube to anothername and when we change anothername value the original wont get affected

// --------now comes heap/non-primitive---

let userone ={
    name:"afiya",
    phone: 323444
}

let usertwo = userone

usertwo.phone = 9456

console.log(userone.phone)
console.log(usertwo.phone)

//both the original and assigned value gets changed as the non-primitive data type directly takes value from heap and changed directly into the heap