//There are main three Logial Operators Like ........... (1) And operator( && ) ,                    (2) Or Operator ( || )      ,     (3) Not Operator ( ! )







//  (1) And Operator =========>  Logical And operator ( && ) return true if bothh operands are true , otherwise it return false


var a = 7;
var b = 9;
// console.log(a > 0 && b > 0)
if (a >= 2 && b <= 10) {
    console.log('True');
}
else {
    console.log('false')
}








// (2) Logical Or Operator ( || ) =============> Logical opertor return true if at least one operand is true otherwise it return false.


const x = 12;
const y = 19;
console.log(x == 9 || y >= 12);
if (x == 9 || y >= 12) {
    console.log('True')
} else {
    console.log('false')
}




// (3) Logical Not Operator ( ! )  =========>  It return true if operand is false  , and false if operan is true.

const isOn = false;
console.log(!isOn)
// if( 12 ==! 12){
//     console.log('True')
// }else{
//     console.log('False')
// }

var myAge = 19;
var Licence = true;
if (myAge >= 18 && Licence ) {
    console.log('Eligible for driving');
} else {
    console.log('not eligible');
}
