//  console.log("f")
//     console.log("i")
// }
// saymyName()
// function saymyName(){
//     console.log("a")
   
//NOTE -> here in function callinqqqq if you only type saymyName without parenthesis then it would be a refrence but with parenthes it woulb be function call
 
// function new4(num1,num2){
    
//     console.log(num1+num2)

// }
// const hello = new4(3,4)
// console.log(hello)

//here when you print the hello variable it will print undefined AS YOU HAVE USED CONSOLE LOG INSIDE FUNCTION DECLARATION

function func(num2,num3){
    
    let fans = num2+num3
    return fans
    //anything after return will not get executed
}
const by = func(4,4)
console.log(by)

//note: fans we have declared under func and by we have declared outside our function.
//YOU CAN ONLY PUT THE FUNCTION INSIDE A VARIABLE IF YOU HAVE RETURN THAT FUNCTION INSIDE THE FUNCTION DECLARATION (ONLY RETURN WILL WORK NOT CONSOLELOG)
 
function hiee(username="hammad"){
    return `${username} just loggin`
}
 func2 = hiee("saif")
 console.log(func2)
//  second username overwrites the first one 