//Convert Number into string
var muStr = 65;
console.log(typeof String(muStr));
console.log(typeof (muStr + ""))




//Convert String into Number
var mynumber = "Zain";
console.log(mynumber);
console.log(typeof +mynumber);


//Boolean Practice
var myName = -9;
if (myName) {
    console.log("This is is truth Value")
}
else {
    console.log("It is false")
}


//ParseInt and Parse Float are JavaScript functions that are used for converting to numbers

//  1-ParseInt => ParseInt is used to parse a string and convert into an integer (Whole Number).

const myNumber = "34";
console.log(parseInt(myNumber))
console.log(typeof parseInt(myNumber));




//  2-ParseFloat => ParseFloatt is used to parse a string and convert into an floating-point-number (Whole Number).

const myNum = "34.56";
console.log(parseFloat(myNum))
console.log(typeof parseFloat(myNum));



//More Examples

console.log(parseInt("123"));
console.log(parseInt("123" , 10));
console.log(parseInt("0123"));
console.log(parseInt("1.8"));


console.log(parseFloat("123"));
console.log(parseFloat("123" , 10));
console.log(parseFloat("0123"));
console.log(parseFloat("1.8"));


// !When we will get not an input

console.log(parseInt("&123"))
console.log(parseInt("-123"))
console.log(parseInt("asv"))

//NaN stand for "Not A Number" it is returned when mathematical operation not yeild a number
//It is used when I check a varriable its a number or not?

console.log(isNaN("5"))
console.log(isNaN(5))
console.log(isNaN("Zain"))


if(NaN === NaN){
    console.log('Equal')
}else{
    console.log("Not Equal")
}
//NaN === NaN are not equal because both has differnet values(origin) like =>......... console.log(isNaN("jkk"))  ...............    console.log(isNaN("@#@$"))


if(null === null){
    console.log('Equal')
}else{
    console.log("Not Equal")
}


console.log("Hello" + "" + "World")