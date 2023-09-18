// variable written under function is local and outside of function is global 
let a = 10
if (true) {
    let a = 20
    const b =30
    console.log("this is local", a);
}
// console.log(a)