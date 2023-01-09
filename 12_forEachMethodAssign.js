const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`1: Array Elements with Index`);
array_numbers.forEach((element, index) => {
    console.log(element, index);
});
console.log(`-----------------------------------------------`);

console.log(`2. Positive Numbers using forEach:`);
array_numbers.forEach(element => {
    if (element > 0) {
        console.log(element);
    }
});
console.log(`-----------------------------------------------`);

console.log(`3. Negative Numbers in new array:`);
arrOfNegativeNumbers = [];
array_numbers.forEach(element => {
    if (element < 0) {
        arrOfNegativeNumbers.push(element)
        console.log(element);
    }
});
console.log(`-----------------------------------------------`);


console.log(`4. Even Numbers using forEach`);
array_numbers.forEach(element => {
    if (element % 2 == 0) {
        console.log(element);
    }
});
console.log(`-----------------------------------------------`);


sum = 0;
array_numbers.forEach(element => {
    sum = sum + element;
});
console.log(`5: Sum of all elements is:`, sum);
console.log(`-----------------------------------------------`);

console.log(`6. Even Positioned array values using forEach`);
array_numbers.forEach((element, index) => {
    if (index % 2 == 0) {
        console.log(element);
    }
});