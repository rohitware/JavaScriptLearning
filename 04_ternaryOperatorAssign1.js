var greaterNumCheck = function (num1, num2) {
    var res = num1 > num2 ? num1 : num2;
    console.log(`Greater number from ${num1} and ${num2} is: ${res}`);
}
greaterNumCheck(10, -10);
greaterNumCheck(800, 810);
console.log(`========================================`);


var isEvenOrOddNum = function (arg) {
    var newResult = arg % 2 == 0 ? `The number ${arg} is even Number.` : `The number ${arg} is odd Number.`;
    console.log(newResult);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
console.log(`========================================`);


var checkEvenOddLength = function (value) {
    var newValue = value.length;
    var resultEvenOdd = newValue % 2 == 0 ? "EVEN" : "ODD"
    console.log(`Length of the word "${value}" is: ${resultEvenOdd}`);
}
checkEvenOddLength("JavaScript");
checkEvenOddLength("Developer");
checkEvenOddLength("Google");
