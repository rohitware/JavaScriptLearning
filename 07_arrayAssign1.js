
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`first element of array is: ${fruits_seasonal[0]} and last element in the array is: ${fruits_seasonal[fruits_seasonal.length - 1]}`);
console.log(`------------------------------------------------------------------------------------`);

[fruits_seasonal.unshift("Papaya")]
console.log(`Add element Papaya, new array: ${fruits_seasonal}`);
console.log(`------------------------------------------------------------------------------------`);

[fruits_seasonal.splice(4, 1)]
console.log(`Removed mango from array: ${fruits_seasonal}`);
console.log(`------------------------------------------------------------------------------------`);

[fruits_seasonal.push("Pineapple")]
console.log(`Add Pineapple at the last position: ${fruits_seasonal}`);
console.log(`------------------------------------------------------------------------------------`);

[fruits_seasonal.splice(4, 0, "Dragon Fruit")]
console.log(`Insert Dragon Fruit before Water Melone: ${fruits_seasonal}`);
console.log(`------------------------------------------------------------------------------------`);

[fruits_seasonal.splice(2, 1, "KiWi")]
console.log(`Replace Orange with KiWi: ${fruits_seasonal}`);
console.log(`------------------------------------------------------------------------------------`);

console.log(`Elements starting from 1 to 4:`);
for (let index = 1; index <= 4; index++) {
    const element = fruits_seasonal[index];
    console.log(`${element}`);
}
console.log(`------------------------------------------------------------------------------------`);


console.log(`Last 3 elements:`);
for (let index = fruits_seasonal.length - 3; index < fruits_seasonal.length; index++) {
    const element = fruits_seasonal[index];
    console.log(element);
}
