const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Total elements of arrays are: ${arrayNumbers.length}`);
console.log(`------------------------------------------------------------------------------------`);

console.log(`first element of array is: ${arrayNumbers[0]} and last element in the array is: ${arrayNumbers[arrayNumbers.length - 1]}`);
console.log(`------------------------------------------------------------------------------------`);


var last3 = arrayNumbers[arrayNumbers.length - 3];
console.log(`Third Last element is : ${last3}`);
console.log(`------------------------------------------------------------------------------------`);

console.log(`even numbers from array are: `);
let evenNumArray = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 2 == 0) {
        evenNumArray = evenNumArray.concat(element);
    }

}
console.log(evenNumArray);
console.log(`------------------------------------------------------------------------------------`);

let oddNumArray = [];
console.log(`Odd numbers from array are: `);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 2 != 0) {
        oddNumArray = oddNumArray.concat(element)
    }
}
console.log(oddNumArray);
console.log(`------------------------------------------------------------------------------------`);


console.log(`even index positions numbers are: `);
evenIndexPosition = [];
for (let index = 0; index < arrayNumbers.length; index = index + 2) {
    const element = arrayNumbers[index];
    evenIndexPosition = evenIndexPosition.concat(element)
}
console.log(evenIndexPosition);
console.log(`------------------------------------------------------------------------------------`);

console.log(`Odd index positions numbers are: `);
oddIndexPosition = [];
for (let index = 1; index < arrayNumbers.length; index = index + 2) {
    const element = arrayNumbers[index];
    oddIndexPosition = oddIndexPosition.concat(element);
}
console.log(oddIndexPosition);
console.log(`------------------------------------------------------------------------------------`);

console.log(`Sum of all elements in an array is: `);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum = sum + element;
}
console.log(sum);
console.log(`------------------------------------------------------------------------------------`);


console.log(`Numbers multiple of 5: `);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element % 5 == 0) {
        console.log(element);
    }
}
console.log(`------------------------------------------------------------------------------------`);


var isAvailable = arrayNumbers.includes(115);
console.log(`Number 115 available in array is: ${isAvailable}`);
console.log(`------------------------------------------------------------------------------------`);


var isAvailable = arrayNumbers.includes(23);
console.log(`Number 23 available in array is: ${isAvailable}`);
console.log(`------------------------------------------------------------------------------------`);


arrayNumbers.splice(3, 0, 55, 66);
console.log(`Updated array after inserting 55, 66 is : ${arrayNumbers}`);
console.log(`------------------------------------------------------------------------------------`);

let spliceResult = arrayNumbers.splice(4, 3);
console.log(`Updated array after delete 3 numbers from index 4 is : ${arrayNumbers}`);