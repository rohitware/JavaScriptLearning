console.log(`(1: Shallow Clone)`);
const arrayNum = [20, 3, 4, 56, 90, 400, 49];
let arrNumClone = arrayNum;    // shallow clone
arrNumClone.push(55, 66);
console.log(`clone array is :${arrNumClone}`);
console.log(`Original array is: ${arrayNum}`);
console.log(`------------------------------------------------------------`);

console.log(`(2: Deep Clone)`);
deepCloneArray = [...arrayNum];       // deep clone
arrayNum.push(10, 25);
console.log(`Original array is: ${arrayNum}`);
console.log(`clone array is :${deepCloneArray}`);
console.log(`------------------------------------------------------------`);

console.log(`(3: Merge array Operation)`);
const arrayEven = [2, 30, 14, 8];
let concatedArray = [...arrayNum, ...arrayEven];
console.log(`concated Array is: ${concatedArray}`);
console.log(`-------------------------------------------------------------------------------------------------`);

console.log(`(4: employee_info object creation:)`);
const employee_info = {
    emp_id: 27,
    emp_name: "john Deo",
    salary: {
        july_month: "40,0000INR",
        august_month: "50,0000INR",
        june_month: "65,0000INR",
    },
    address: {
        locality: {
            colony: "OM Vrindhavan Society",
            street: "Kanch pokali, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
    },
    mobile: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(employee_info);
console.log(`-------------------------------------------------------------------------------------`);


console.log(`(5: Employee Details:)`);
console.log(`Address of ${employee_info.emp_name} is: ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, ${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country} `);
console.log(`Mobile Numbers: ${employee_info.mobile}`);
console.log(`-------------------------------------------------------------------------------------------------`);


console.log(`(6a: Deep Copy using JSON.stringify)`);
let empDeepCopy = JSON.parse(JSON.stringify(employee_info));
empDeepCopy.salary.july_month = "80k";
employee_info.address.country = "United Kingdom";

console.log(`clone Object updeted property: ${empDeepCopy.salary.july_month}`);
console.log(`------------------------------------------------------------`);

console.log(`(6b: Deep Copy using JSON.stringify)`);

console.log(`Original object updeted property: ${employee_info.address.country}`);
console.log(`------------------------------------------------------------`);

