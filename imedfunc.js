// immediately invoked function
// sometimes global scope creates problem and due to that problem and to remove tht problem we use IFI immediately invoked function 
(function chai(){
    //named IFI
    console.log(`db connected`)
}) ();

((name) => {
    console.log(`db two`)
})
//upper program should end with semi coln