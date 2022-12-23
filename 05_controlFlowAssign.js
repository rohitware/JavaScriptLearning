var string = "I am very good IT Developer";
function vowelCount(arg) {
    var count = 0;
    for (let index = 0; index < arg.length; index++) {
        
        var char = arg.charAt(index);
        var charCopy = char.toLowerCase();
        if (charCopy == `a` || charCopy == `e` || charCopy == `i` || char == `O`||  charCopy == `u` ) {
            count = count + 1;
        }

    } console.log(`Total vowels in given String is ${count}`);
}
vowelCount(string);

console.log(`-------------------------------------------------------------`);




function sumOfCube() {
    var sum = 0;
    for (let index = 1; index <= 5; index++) {
        let cube = index * index * index;
        var sum = sum + cube;
    } console.log(`Sum of Cube from 1 to 5 is ${sum}`);
}
sumOfCube();
console.log(`-------------------------------------------------------------`);


var string1 = `Hard work always pays back`;
var string2 = `Soon I will be Angular IT champ`;
function oddPositionedChars(string) {
    let result = "";
    let spaceRemovedStr = string.split(" ").join("");
    for (let index = 0; index < spaceRemovedStr.length; index++) {
        if (index % 2 != 0) {
            result = result + spaceRemovedStr[index];
        }
    }
    console.log(`Odd positioned chars in the string is: ${result}.`);
}
oddPositionedChars(string1);
oddPositionedChars(string2);
console.log(`-------------------------------------------------------------`);

function fact(num) {
    if (num == 0) {
        return 1;
    }
    else {
        return num * fact(num - 1);
    }
    
}
let res = fact(0);
console.log(`Factorial number of given number is ${res}`);

let res4 = fact(11);
console.log(`Factorial number of given number is ${res4}`);

let res5 = fact(2);
console.log(`Factorial number of given number is ${res5}`);

let res1 = fact(7);
console.log(`Factorial number of given number is ${res1}`);

let res2 = fact(8);
console.log(`Factorial number of given number is ${res2}`);

let res3 = fact(12);
console.log(`Factorial number of given number is ${res3}`);

console.log(`-------------------------------------------------------------`);



function Factorial(n) {
    var ans=1;
     
    for (var i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}
   
let fact1 = Factorial(0);
console.log(`Factorial number of given number is ${fact1}`);

let fact2 = Factorial(7);
console.log(`Factorial number of given number is ${fact2}`);

let fact3 = Factorial(8);
console.log(`Factorial number of given number is ${fact3}`);

let fact4 = Factorial(12);
console.log(`Factorial number of given number is ${fact4}`);

let fact5 = Factorial(1);
console.log(`Factorial number of given number is ${fact5}`);
