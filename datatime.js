//date object starts from january 1, 1970

// let myDate = new Date()
// console.log(myDate.toLocaleString());
// console.log(typeof myDate) //object

// let mycreate = new Date(2023, 0 ,23)
// console.log(mycreate)  

let newDate = new Date()
newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate)