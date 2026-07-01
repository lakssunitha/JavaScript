//1. Find the Highest Salary
let employees = [
    { name: "Naveen", id: 101, salary: 30000 },
    { name: "John", id: 102, salary: 60000 },
    { name: "Arun", id: 103, salary: 45000 }
];

let highestemployee = employees[0];

for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary > highestemployee.salary) {
        highestemployee = employees[i];
    }
}

console.log("Task-1. Find the Highest Salary:");

console.log("Highest Salary :", highestemployee.salary);
console.log("Employee Name :", highestemployee.name);
console.log("-----------------------------------");

//2. Find Employee by ID
let searchid = 103;
let found = false;

for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === searchid) {
        console.log("Task-2. Find Employee by ID:");
        console.log("Employee Found");
        console.log("Name:", employees[i].name);
        console.log("Salary:", employees[i].salary);
        found = true;
        break;
    }
}
if (!found) {
    console.log("Employee Not Found");
}
console.log("-----------------------------------");

//3. Calculate Salary with Bonus
let bonus = 5000;
console.log("Task-3. Calculate Salary with Bonus:");

for (let i = 0; i < employees.length; i++) {
    let totalsalary = employees[i].salary + bonus;

    console.log(employees[i].name + " : " + totalsalary);
}
console.log("-----------------------------------");

//4. Experience Check
let employeelist = [
    { name: "Naveen", experience: 2 },
    { name: "John", experience: 7 },
    { name: "Arun", experience: 5 }
];
console.log("Task-4. Experience Check:");

for (let i = 0; i < employeelist.length; i++) {
    if (employeelist[i].experience >= 5) {
        console.log(employeelist[i].name + " - Senior Employee");
    } else {
        console.log(employeelist[i].name + " - Junior Employee");
    }
}
console.log("-----------------------------------");

//5. Display Only Employee Names
console.log("Task-5. Display Only Employee Names:");

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}
console.log("-----------------------------------");

//6. Display Employee IDs
console.log("Task-6. Display Employee IDs:");

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].id);
}
console.log("-----------------------------------");

//7. Total Salary
let totalsalary = 0;

for (let i = 0; i < employees.length; i++) {
    totalsalary = totalsalary + employees[i].salary;
}
console.log("Task-7. Total Salary:", totalsalary);
console.log("-----------------------------------");

//8. Employees Earning More Than ₹40,000
console.log("Task-8. Employees Earning More Than ₹40,000:");

for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 40000) {
        console.log(employees[i].name);
    }
}
console.log("-----------------------------------");

//9. Increase Salary
console.log("Task-9. Increase Salary:");

for (let i = 0; i < employees.length; i++) {
    employees[i].salary = employees[i].salary + 5000;
    console.log(employees[i].name + " : " + employees[i].salary);
}
console.log("-----------------------------------");

//10. Employee Report
console.log("Task-10. Employee Report:");

for (let i = 0; i < employees.length; i++) {
    console.log("\n");
    console.log(`Employee Name : ${employees[i].name}`);
    console.log(`Employee ID : ${employees[i].id}`);
    console.log(`Salary : ${employees[i].salary}`);
    console.log();
}
console.log("-----------------------------------");

//Challenge Task
console.log("Challenge Task:");

let employee = [
    { name: "Naveen", id: 101, salary: 30000 },
    { name: "John", id: 102, salary: 60000 },
    { name: "Arun", id: 103, salary: 45000 }
];

console.log("\n");

console.log("1. Total Employees :", employee.length); //1

let totalSalary = 0;
let highestEmployee = employee[0];
let lowestEmployee = employee[0];

for (let i = 0; i < employee.length; i++) {
    totalSalary += employee[i].salary;

    if (employee[i].salary > highestEmployee.salary) {
        highestEmployee = employee[i];
    }
    if (employee[i].salary < lowestEmployee.salary) {
        lowestEmployee = employee[i];
    }
}
//2,3,4,5,6

console.log("\n2. Highest Salary :", highestEmployee.salary); //2
console.log("\n3. Lowest Salary :", lowestEmployee.salary); //3
console.log("\n4. Total Salary :", totalSalary); //4
console.log("\n5. Highest Salary Employee :", highestEmployee.name); //5
console.log("\n6. Lowest Salary Employee :", lowestEmployee.name); //6

//7. Employees whose salary is greater than ₹40,000
console.log("\n7. Employees earning more than ₹40,000:");

for (let i = 0; i < employee.length; i++) {
    if (employee[i].salary > 40000) {
        console.log(employee[i].name);
    }
}

//8. Search an employee by ID.
let searchId = 102;
let employeeFound = false;

console.log("\n8. Search Employee by ID:"); 

for (let i = 0; i < employee.length; i++) {
    if (employee[i].id === searchId) {
        console.log("Employee Found");
        console.log("Name:", employee[i].name);
        console.log("Salary:", employee[i].salary);
        employeeFound = true;
        break;
    }
}
if (!employeeFound) {
    console.log("Employee Not Found");
}

//9. Add ₹5,000 bonus to every employee and display the new salary.

console.log("\n9. Salary After Bonus:");

for (let i = 0; i < employee.length; i++) {
    let newsalary = employee[i].salary + 5000;
    console.log(employee[i].name + " : " + newsalary);
}

//10. Professional Employee Report
console.log("\n10. Professional Employee Report:");


for (let i = 0; i < employee.length; i++) {
    console.log("\n");
    console.log(`Employee Name : ${employee[i].name}`);
    console.log(`Employee ID : ${employee[i].id}`);
    console.log(`Salary : ${employee[i].salary}`);
    console.log();
}
