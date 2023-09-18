// ... these three dots are called spread operator and also rest operator  
// rest operator is used to add multiple value or give ultiple values in function


// function calculatepricen(...num1){
//     return num1
// }
// console.log(calculatepricen(200,300,400,500))


function handleobject(anyobject){
    console.log(`username is: ${anyobject.username} and price is: ${anyobject.price}`)
}

handleobject({
    username:"afiya",
    price:230
    
})
//function with objecr

//FUNCTION WITH ARRAY

const array1 = [100,200,300,400]

function numer(getArray){
    return getArray[1]


}
console.log(numer(array1))




