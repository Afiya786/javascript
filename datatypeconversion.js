// be cautious while comapring datatypes with comparion operators

console.log(null > 0) //false
console.log(null == 0) // false
console.log(null >= 0) //

// the reason is that equality check == and comparison > < >= works differently
// comaprison convert null to number , treating it like 0
// that's why null >= 0 is true and null > 0 is false 

console.log(undefined ===0)
console.log(2===2)

// == is for conversion appearance but === check data type

console.log("2" ===2)

NOTE:
// you should avoid comparison with null and undefined