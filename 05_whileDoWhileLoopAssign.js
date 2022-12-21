console.log(`<-- Using While & doWhile loop-->`);
console.log(`Numbers fron 5 to 15 using while loop`);
var num = 5
while (num <= 15) {
    console.log(num);
    num++;
}


console.log(`Numbers fron 50 to 40 using while loop`);
var num1 = 50
while (num1 >= 40) {
    console.log(num1);
    num1--;
}


console.log(`First 15 odd numbers`);
var num = 0;
while (num <= 15) {
    if (num % 2 != 0) {
        console.log(num);
    }
    num++
}


console.log(`First 10 even numbers`);
var num = 0;
while (num <= 10) {
    if (num % 2 == 0) {
        console.log(num);
    }
    num++
}


console.log(`print table 5`);
var num = 5;
do {
    console.log(num);
    num = num + 5;

} while (num <= 50);


console.log(`print table 10`);
var num = 10;
var i = 1;
do {
    let result = i * num;
    i++;
    console.log(result);
} while (i <= 10);


console.log(`print table 10 reverse order`);
var num = 10;
var i = 10;
do {
    let result = i * num;
    i--;
    console.log(result);
} while (i >= 1);

