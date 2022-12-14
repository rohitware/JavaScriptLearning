console.log(`My dream company is "Microsoft"`);

var hobby1= "cooking";
var hobby2="Watching News";
var hobby3 = "reading";
function stringTemplateAssig(){
console.log(`My Hobbies Are: ${hobby1}, ${hobby2}, ${hobby3}`);
}
stringTemplateAssig();


let str = `     Hey you are doing good, keep it up     `;
let stringHandsOn = function(){
    console.log(`${str}`);
    let strLen = str.length;
    console.log(`2:- length of the string is : ${strLen}`);

    let trmResult = str.trim();
    console.log(`3:- ${trmResult}`);

    let spaceRemovedStrLen =trmResult.length;
    // console.log(`length of string after removing space is: ${spaceRemovedStrLen}`);

    let removeSpaces = strLen - spaceRemovedStrLen;
    console.log(`4:- Removed Extra spaces are: ${removeSpaces}`);

    let fCharacter = trmResult.charAt(0);
    let lCharacter = trmResult.charAt(trmResult.length-1);
    console.log(`5:- First character is ${fCharacter} and last character is ${lCharacter}`);

    var wordsInTrmStr = trmResult.split(" ");
    console.log("6:- Total words in sentence string is:", wordsInTrmStr.length);

    console.log(`7:- Index of word good from given string is: ${trmResult.indexOf("good")}`);

    console.log(`8:- Substring start fron index 22 using substring() is : ${trmResult.substring(22)}`);
    console.log(`8:- Substring start fron index 22 using slice() is : ${trmResult.slice(22)}`);

    console.log(`9:- String ends with word "up" is : ${trmResult.endsWith("up")}`);
    console.log(`10:- String starts with word "Hey" is : ${trmResult.startsWith("Hey")}`);
}
stringHandsOn();
