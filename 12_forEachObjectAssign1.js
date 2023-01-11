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

const emp_Array = [emp_anil, emp_radha, emp_nil, emp_shubha, emp_monika, emp_viny, emp_mahi]

console.log(`1]. Find out the 'TCS' employee details & log only name & company...`);
emp_Array.forEach(employee => {
    if (employee.emp_company == "TCS") {
        console.log(`Employee Name is:--> "${employee.emp_name}" & Employee Company name is:--> "${employee.emp_company}"`);
    }
});

console.log(`--------------------------------------------------------------------------------------------------------------------------`);
console.log(`2]. Find the employees with salary greater than or equal to 50000 (Log the all employee details)..`);

emp_Array.forEach(employee => {
    if (employee.emp_salary >= 50000) {
        console.log(`Employee Details are:-->`, employee);
    }
});

console.log(`--------------------------------------------------------------------------------------------------------------------------`);
console.log(`3]. Find the sum of all employees salary...`);
sumOfEmployeeSalary = 0;
emp_Array.forEach(employee => {
    sumOfEmployeeSalary = sumOfEmployeeSalary + employee.emp_salary;
});
console.log(`Sum of employee salary is:--> ${sumOfEmployeeSalary}`);

console.log(`--------------------------------------------------------------------------------------------------------------------------`);
console.log(`4].Find the average salary of all employees`);
emp_Array.forEach(employee => {
    averageSalary = (sumOfEmployeeSalary / emp_Array.length);
});
console.log(`Average salary of all employees:-->`, averageSalary);

console.log(`--------------------------------------------------------------------------------------------------------------------------`);
console.log(`5]. Find the "IT" or "HR" department employees whose salary is greater than or equal to 75000 & log details..`);

emp_Array.forEach(employee => {
    if ((employee.emp_dept == "IT" || employee.emp_dept == "HR") && (employee.emp_salary >= 75000)) {
        console.log(employee);
    }
});