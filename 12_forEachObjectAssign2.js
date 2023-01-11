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
const emp_nil = new Employee(55, "nil", "Finance", 47000, "TCS");
const emp_shubha = new Employee(66, "Shubha", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahi", "HR", 85000, "Infy");

console.log(`...Creating Map collection & traverse using forEach() loop...\n`);
let mapOfEmployees = new Map();
mapOfEmployees.set(22, emp_anil);
mapOfEmployees.set(33, emp_radha);
mapOfEmployees.set(55, emp_nil);
mapOfEmployees.set(66, emp_shubha);
mapOfEmployees.set(77, emp_monika);
mapOfEmployees.set(88, emp_viny);
mapOfEmployees.set(99, emp_mahi);

mapOfEmployees.forEach((emp_object, id) => {
    console.log(` ${id} ==> Name: ${emp_object.emp_name}, Dept: ${emp_object.emp_dept}, Company: ${emp_object.emp_company}, Salary: ${emp_object.emp_salary}`);
});
