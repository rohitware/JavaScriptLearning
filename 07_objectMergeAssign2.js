const car = {
    carName: "Creta sx",
    company: "Hyundai",
    launchYear: 2017
}

const carEngine = {
    enignePower: "1499cc",
    maxPower: "113BHP"
}

const obj = Object.assign(car, carEngine);
console.log(`Merge Using Object.assign: 1 new object, 2 car object, 3 carEngine object`);
console.log(`1 new object`, obj);
console.log(`2 car object`, car);
console.log(`3 carEngine object`, carEngine);
console.log(`-------------------------------------------------------------------------------------------`);

let obj1 = { ...car, ...carEngine }
console.log(`Merge Using Spread Operator: 1 new object, 2 car object, 3 carEngine object`);
console.log(`1 new object`, obj1);
console.log(`2 car object`, car);
console.log(`3 carEngine object`, carEngine);

