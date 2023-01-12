class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id,
            this.emp_name = emp_name,
            this.emp_dept = emp_dept,
            this.emp_salary = emp_salary,
            this.emp_company = emp_company
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_emps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`------------------------------All Employees from wipro------------------------------------------`);
wiproEmp = array_emps.filter((element) => {
    return element.emp_company == "Wipro";
});
wiproEmp.forEach(element => {
    console.log(element);
});


console.log(`\n ---------------------------Employees from IT or HR----------------------------------------------`);
itHrDep = array_emps.filter((element) => {
    return element.emp_dept == "IT" || element.emp_dept == "HR";
});
itHrDep.forEach((element) => {
    console.log(element);
});


console.log(`\n ---------------------------Employees Whose id >50 ----------------------------------------------`);
ids = array_emps.filter((element) => {
    return element.emp_id > 50;
});
ids.forEach((element) => {
    console.log(element);
});


console.log(`\n ------------------------Employees Whose name starts from A, V, M --------------------------------`);
let startWithLetters = array_emps.filter((element) => {
    if (element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")) {
        return element;
    }
});
startWithLetters.forEach((element) => {
    console.log(element);
});
console.log(`-------------------------------------------------------------------------------------------------`);


salOfEmp = array_emps.filter((element) => {
    return element.emp_salary;
});
let salOfEmpArray = [];
salOfEmp.forEach((element) => {
    salOfEmpArray.push(element.emp_salary);
});
const result = salOfEmpArray.reduce((runningTotal, Value) => {
    return runningTotal + Value;
});
console.log(`Average salary of all employees of all departments is:`, result / salOfEmpArray.length);

console.log(`-------------------------------------------------------------------------------------------------`);


empOfItDep = array_emps.filter((element) => {
    return element.emp_dept == "IT";
});
let salOfItEmp = [];
empOfItDep.forEach((element) => {
    salOfItEmp.push(element.emp_salary);
});
const sumOfItEmpSal = salOfItEmp.reduce((runningTotal, Value) => {
    return runningTotal + Value;
});
console.log(`Average salary of IT Employees:`, sumOfItEmpSal / salOfItEmp.length);
