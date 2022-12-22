var string1 = "I AM Learning JavaScript, The Language of internet";
var string2 = "My favorite movie is LAggAn";

function countCharA(arg) {
    var counter = 0;
    for (let index = 0; index < arg.length; index++) {
        var char = arg.charAt(index);
        if (char == 'a' || char == 'A') {
            counter = counter + 1;
        }
    }
    console.log(`The Given String is:: ${arg}`);
    console.log(`Total a or A in given string is : ${counter}`);
}
countCharA(string1);
console.log(`------------------------------------------------------------`);
countCharA(string2);