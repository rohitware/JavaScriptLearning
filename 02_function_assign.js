function demo() {
    console.log("Hello World!");
}
demo();

function showMessage() {
    console.log('Hello Everyone!');
}
showMessage();

console.log("--------------------------------------");

function personalDetails(firstName, lastName, collegeName) {
    console.log(firstName, lastName, collegeName);
}
personalDetails("Rohit", "Ware", "Wadia College");
console.log("--------------------------------------");


function swapValuesDude(val1, val2) {
    console.log("Values Before Swap:-", val1, val2)
    temp = val1;
    val1 = val2;
    val2 = temp;
    console.log("Values After Swap:-", val1, val2);
}
swapValuesDude("Virat", "Anushka");
swapValuesDude(1000, 2000);
console.log("--------------------------------------");


function addThreeValues(val1, val2, val3) {
    return val1 + val2 + val3;
}
let sum = addThreeValues(10.23, 600, 40);
console.log(sum);
let result = addThreeValues("Hello ", "Good ", "Morning");
console.log(result);