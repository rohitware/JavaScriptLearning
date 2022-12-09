var sweety = "Sweety";
var cutie = "Cutie";
console.log("==== Before Swap ====");
console.log(sweety, cutie);

var temp = sweety;
sweety = cutie;
cutie = temp;

console.log("==== After Swap ====");
console.log(sweety, cutie);
console.log();
console.log();

var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log("==== Before Swap ====");
console.log(num1, num2, num3);

num1 = num1 + num2 + num3;
num3 = num1 - (num2 + num3);
num2 = num1 - (num2 + num3);
num1 = num1 - (num2 + num3);

console.log("==== After Swap ====");
console.log(num1, num2, num3);
