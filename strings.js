const name ="afiya"
console.log(name[0])
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.charAt(2))
console.log(name.slice(-5,3))//reverse> start from back with 3 characters >>afi
console.log(name.substring(0,6))//include 1st digit but exclude the second digit ,will print >> afiya
console.log(name.slice(0,2)) //include both st and last digit ,will print >>af
//----------trim-//

let fname ="   saif   "
console.log(fname)
console.log(fname.trim()) //trim will delete the extra space between strings

//---replace----//

let url = "https://afiya.com20%malik"
console.log(url.replace('20%', '_')) //replace 20% ith _

let lname = "malik"
console.log(`heloo ${lname}`)//try to use this way of writing the code with new method using (` `) not with double quotes
