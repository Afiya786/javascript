//javascript execution context
//  whenever you give code to js ths will always generate and that is: global execution context 
// and under [THIS] this global execution context will be stored 
//    in browser the value for global execution context will be window
// there are three execution context ::
//global EC
//Function EC
//Eval EC

//here comes the javsciprt code run development::
// 1> memory creation phase
// 2> execution phase

// let val1 =10
// let val2 = 20
// function addnum(num1,num2){
//     let total = num1+num2
//     return total


// }
// let reuslt1 = addnum(val1, val2)
// let result2 = addnum(10,2)

//  1>firstly the code runs with  GLOBAL EXECUTION and it is located in THIS
//  2>Memory executon phase : in this all the variables are collected and stored
let val1 =10
let val2 = 20
function addnum(num1,num2){
    let total = num1+num2
    return total


}
let reuslt1 = addnum(val1, val2)
let result2 = addnum(10,2)

// firstly it takes val1 and val2 and put undefined value in val1 and val2 and in addnum it puts the value deifniton as we just define the underlying operation inside the addnum function
// AND THEN AGAIN IN RESULT1 AND RESULT2 IT PUTS THE VLUE UNDEFINED IN THESE