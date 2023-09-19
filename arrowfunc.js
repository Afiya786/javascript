//this displays the current context
// const user ={
//     username:"afiya",
//     price:250,

//     age: function() {
//         console.log(`hello ${this.username}`)
//         console.log(this);
       
//     }
// }
// user.age()
// user.username="afi"
// user.age()

// function chai(){
//     let userfname ="afiya"
//     console.log(this.userfname)
// }
// chai()

//-----ARROW FUNCTION-----//

// const chai = () => {
//     let username ="hitesh"
//     console.log(this)
// }
// chai() // here with parenthesis you can use return but withour parentheses you dont need to use return

const two = (username) => (`hello ${username}`)
console.log(two("afiya"))