
var string = "I am very goog IT Developer";
function vowelCount(arg) {
    var count = 0;
    for (let index = 0; index < arg.length; index++) {
        
        var char = arg.charAt(index);

        if (char == `a` || char == `A` || char == `e` || char == `E`|| char == `o` || char == `O`|| char == `i` || char == `I` || char == `u` || char == `U`) {
            count = count + 1;
        }

    } console.log(`Total vowels in given String is ${count}`);
}
vowelCount(string);