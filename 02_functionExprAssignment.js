var square = function (num) {
    console.log("Square of the given number is:", num * num);
}
square(5);
square(6);
square(25);
square(100);
console.log("\n");
console.log("Type Of square is:", typeof square);
console.log("\n");

var plot = function (num1, num2) {
    return num1 * num2;
}
var result = plot(499, 917);
console.log("Area of rectangle is:", result);
console.log("\n");

swapValues = function (num1, num2) {
    console.log("Values Before swap: ", num1, num2)
    temp = num1;
    num1 = num2;
    num2 = temp;
    console.log("Values After swap: ", num1, num2)
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log("\n");

var str = "JS the most popular language";
console.log("Given String:", str);
var TotalLength = str.length;
console.log("Total Character available in string:", TotalLength);
console.log("Character at index 6 is: ", str.charAt(6));
console.log("Character at index 11 is: ", str.charAt(11));
console.log("Last Character:", str.charAt(TotalLength - 1));
console.log("First Character: ", str.charAt(0));

let strLenSqr = function(num){
return num*num;
}
result= strLenSqr(TotalLength);
console.log("Square of the given string length is: ",result)