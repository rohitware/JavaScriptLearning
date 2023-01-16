class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id
        this.emp_name = emp_name
        this.emp_dept = emp_dept
        this.emp_salary = emp_salary
        this.emp_company = emp_company
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS")
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro")
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS")
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy")
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro")
const emp_viny = new Employee(88, "Viny", "IT", 75000, "TCS")
const emp_mahi = new Employee(99, "Mahi", "HR", 85000, "Infy")

array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]


console.log(`\n1)Ascending order employee ID`);
const sortAryObj = array_employees.sort((emp1, emp2) => {
    return emp1.emp_id > emp2.emp_id ? 1 : -1
});
sortAryObj.forEach(currentEmpValue => {
    console.log(`Employees ID is: "${currentEmpValue.emp_id}" ---- Employee name is: "${currentEmpValue.emp_name}" --- Employee department is: "${currentEmpValue.emp_dept}"`);
});


console.log(`\n2)Ascending order employee DEPARTMENT `);
const sortAryObj1 = array_employees.sort((dep1, dep2) => {
    return dep1.emp_dept > dep2.emp_dept ? 1 : -1
});
sortAryObj1.forEach(currentEmpValue => {
    console.log(`Department name is: "${currentEmpValue.emp_dept}" --- Employees ID is: "${currentEmpValue.emp_id}" --- Company is: "${currentEmpValue.emp_company}"`);
});


console.log(`\n3) Decending order employee SALARY`);
const sortAryObj2 = array_employees.sort((sal1, sal2) => {
    return sal1.emp_salary > sal2.emp_salary ? -1 : 1
});
sortAryObj2.forEach(currentEmpValue => {
    console.log(`Employee salary is: "${currentEmpValue.emp_salary}" --- Employee name is: "${currentEmpValue.emp_name}" ---  Employee company is: "${currentEmpValue.emp_company}"`);
});

