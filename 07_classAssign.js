class Vehicle {
    constructor(company, color, fuelType, price) {
        this.company = company;
        this.color = color;
        this.fuelType = fuelType;
        this.price = price
    }
}
let herosplendoe = new Vehicle("hero", "black", "petrol", 85000);
let tvsApache = new Vehicle("tvs", "black", "petrol", 150000);
let bajDisc = new Vehicle("Bajaj", "red", "petrol", 80000);
let marSwift = new Vehicle("Marauti Suzuki", "White", "Diesel", 800000);

console.log(herosplendoe);
console.log(tvsApache);
console.log(bajDisc);
console.log(marSwift);


class College {
    constructor(name, address, departments, totalStudents) {
        this.name = name;
        this.address = address;
        this.departments = departments;
        this.totalStudents = totalStudents;
        this.details = function () {
            return this.name + " " + this.address + " " + this.departments + " " + this.totalStudents
        }
    }
}
let col1 = new College("Wadia College", "Pune", 5, 1200);
let col2 = new College("P.C.C.O.E College", "Pune", 7, 20000);
let col3 = new College("TMV", "Pune", 9, 15000);
let col4 = new College("Bharati vidyapeeth", "Pune", 6, 18000);

console.log(col1.details());
console.log(col2.details());
console.log(col3.details());
console.log(col4.details());
console.log(`--------------------------------------------------------------------------------------------------`);




console.log(`Traverse object by using for in loop...`);
function traverseObject(collegeNo) {
    for (const key in collegeNo) {
        if (Object.hasOwnProperty.call(collegeNo, key)) {
            const element = collegeNo[key];
            console.log(` ${key}:--> ${element}`);
        }
    }
}
traverseObject(col1);
console.log(`-------------------------------------`);
traverseObject(col2);
console.log(`-------------------------------------`);
traverseObject(col3);
console.log(`-------------------------------------`);
traverseObject(col4);