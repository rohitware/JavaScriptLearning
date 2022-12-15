var greaterNumCheck = function (num1, num2) {
    var res = num1 > num2 ? num1 : num2;
    console.log(`Greater number from ${num1} and ${num2} is: ${res}`);
}
greaterNumCheck(10, -10);
greaterNumCheck(800, 810);
console.log(`========================================`);


var isEvenOrOddNum = function (arg) {
    var newResult = arg % 2 == 0 ? `The number ${arg} is even Number.` : `The number ${arg} is odd Number.`;
    return newResult;
}
let num1 = isEvenOrOddNum(29);
console.log(num1);
let num2 = isEvenOrOddNum(44);
console.log(num2);
let num3 = isEvenOrOddNum(0);
console.log(num3);
let num4 = isEvenOrOddNum(101);
console.log(num4);
console.log(`========================================`);


var checkEvenOddLength = function (value) {
    var newValue = value.length;
    var resultEvenOdd = newValue % 2 == 0 ? "EVEN" : "ODD"
    return `Length of the word "${value}" is: ${resultEvenOdd}`;
}
var word1 = checkEvenOddLength("JavaScript");
console.log(word1);
var word2 = checkEvenOddLength("Developer");
console.log(word2);
var word3 = checkEvenOddLength("Google");
console.log(word3);
