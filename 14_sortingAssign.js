const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log(`1)------------ Reverse the array--------------------`);
array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log(`2)------------use of sort method and notice the issue -------------------`);
array_roll_numbers.sort();
console.log(array_roll_numbers);

console.log(`3)-------sort array in assending using custom logic --------------`);

array_roll_numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(array_roll_numbers);

console.log(`4)---------greatest number using different methods---------------------`);
var largest = 0;
for (i = 0; i < array_roll_numbers.length; i++) {
    if (array_roll_numbers[i] > largest) {
        largest = array_roll_numbers[i];
    }
}
console.log(`Greatest number from array: `, largest);
const array_roll_number = [113, 34, 56, 11, 32, 45, 109, 799, 56, 45]

largest = array_roll_number.sort((a, b) => a - b)[array_roll_number.length - 1];
console.log(`Greatest number from array:`, largest);

const max = Math.max(...array_roll_numbers)
console.log(`Greatest number from an array`, max)

console.log(`5) Smallest number from the array is: ${array_roll_numbers[0]}`);

const min = Math.min(...array_roll_numbers)
console.log(`5) Smaller number from an array using math is: `, min);


console.log(`6)-------Remove duplicate elements from the array------`);

console.log(array_roll_numbers);
const uniqArray = [...new Set(array_roll_numbers)]
console.log(uniqArray);