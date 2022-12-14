function squareOfWordLength(arg) {
    var lenOFword = arg.length;
    console.log(`length of Word "${arg}" is: ${lenOFword}`);
    let sqr = lenOFword * lenOFword;
    console.log(`Square of ${lenOFword} is: ${sqr}`)
}
squareOfWordLength("javascript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`================================================`);

let str = `I am Angular Developer`;
let strlen = str.length;
console.log(`String length is: ${strlen}`);

var wordInStr = str.split(" ");
console.log(`Total words in string is: ${wordInStr.length}`);

console.log(`String Length Divided by string words is = ${strlen / wordInStr.length}`);

console.log(`String Length Multiply by string words is = ${strlen * wordInStr.length}`);

console.log(`================================================`);


