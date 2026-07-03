//1. Student Management System
let students = [
    {name: "Naveen", id: 101, mark: 85},
    {name: "John", id: 102, mark: 45},
    {name: "Arun", id: 103, mark: 25},
];
console.log("\nTask-1. Student Management System:");

//all students
console.log("1. All Students:", students); 

//only student names
console.log("2. Student Names:");
students.forEach(student => console.log( student.name)); 

// student id 102
let student=students.find(s => s.id === 102); 
console.log("3. Student with ID 102:", student);

//passed students
console.log("4. Passed Students:");
students.filter(s => s.mark >= 35).forEach(s => console.log(s));

//count of students
console.log("5. Total Students: ", students.length);
console.log("----------------------------------------------");

//2. Employee Salary System
let employees = [
    {name: "Naveen", salary: 30000},
    {name: "John", salary: 40000},
    {name: "Arun", salary: 20000},
];
console.log("\nTask-2. Employee Salary System:");

//highest salary
let highest=employees.reduce((a, b) => a.salary > b.salary ? a : b);
console.log("1. Highest Salary:", highest);

//lowest salary
let lowest=employees.reduce((a, b) => a.salary < b.salary ? a : b);
console.log("2. Lowest Salary:", lowest);

//add bonus
employees.forEach(empl => {
    empl.salary += 5000;
});
console.log("3. Employees after salary increment:", employees);

//total salary
let total=employees.reduce((sum, empl) => sum + empl.salary, 0);
console.log("4. Total Salary:", total);

//employees above 40000
console.log("5. Employees above 40000:");
employees
.filter(emp => emp.salary > 40000)
.forEach(emp => console.log(emp));

console.log("----------------------------------------------");

//3. Shopping Cart
let products=[
    {name: "Laptop", price: 50000},
    {name: "Mouse", price: 500},
    {name: "Keyboard", price: 1500}
];
console.log("\nTask-3. Shopping Cart:");

//product names
console.log("1. Product Names:");
products.forEach(product => console.log(product.name));

//total bill
let totalproducts=products.reduce((sum, product) => sum + product.price, 0);
console.log("2. Total Bill:", totalproducts);

//search product
console.log("3. Search Product with name:");
console.log(products.find(product => product.name === "Mouse"));

//discount and final bill
let discountbill=totalproducts * 0.9;
console.log("5. Final Bill:", discountbill);

console.log("----------------------------------------------");

//4. Bank Account
let account=
    {name: "Naveen", balance: 50000};

console.log("\nTask-4. Bank Account:");

account.balance += 10000;
console.log("1. After Deposit: ₹" + account.balance);

account.balance -= 5000;
console.log("2. After Withdrawal: ₹" + account.balance);

console.log("3. Current Balance:", account.balance);

console.log("4. Balance Status:");
if (account.balance < 20000) {
    console.log("Balance Low");
} else {
    console.log("Balance Sufficient");
}
console.log("5. Account Details:");
console.log("Name:", account.name);
console.log("Balance:", account.balance);

console.log("----------------------------------------------");

//5. Company Login

let username="admin";
let password="admin123";

let enteredUsername=prompt("Enter Username:");
let enteredPassword=prompt("Enter Password:");

console.log("\nTask-5. Company Login:");

if (enteredUsername === username && enteredPassword === password) {
    console.log("Welcome");
} else {
    console.log("Invalid Username or Password");
}

console.log("----------------------------------------------");

//6. Traffic Signal
let signal=prompt("Enter Traffic Signal Color (Red, Yellow, Green):");

console.log("\nTask-6. Traffic Signal:");

switch (signal.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Traffic Signal");
}

console.log("----------------------------------------------");

//7. ATM Machine
let balance = 50000;

let choice=Number(prompt(
    "ATM Menu\n" +
    "1. Balance\n" +
    "2. Deposit\n" +
    "3. Withdraw\n" +
    "4. Exit" 
));

console.log("\nTask-7. ATM Machine:");

switch (choice) {
    case 1:
        console.log("Current Balance: ₹" + balance);
        break;

    case 2:
        let deposit=Number(prompt("Enter Deposit Amount:"));
        balance += deposit;
        console.log("Deposit Successful");
        console.log("Current Balance: ₹" + balance);
        break;

    case 3:
        let withdraw=Number(prompt("Enter Withdraw Amount:"));
        if (withdraw <= balance) {
            balance -= withdraw;
            console.log("Withdraw Successful");
            console.log("Current Balance: ₹" + balance);
        } else {
            console.log("Insufficient Balance");
        }
        break;

    case 4:
        console.log("Thank You! Visit Again.");
        break;

    default:
        console.log("Invalid Choice");
}
console.log("----------------------------------------------");

//8. Cricket Score

let score=[10, 25, 40, 60, 80, 100];
console.log("\nTask-8. Cricket Score:");

let highestscore=Math.max(...score);
console.log("1. Highest Score:", highestscore);

let lowestscore=Math.min(...score);
console.log("2. Lowest Score:", lowestscore);

let totalScore=score.reduce((sum, s) => sum + s, 0);
console.log("3. Total Score:", totalScore);

let averageScore=totalScore / score.length;
console.log("4. Average Score:", averageScore);

console.log("----------------------------------------------");

//9. Movie Ticket Booking
console.log("\nTask-9. Movie Ticket Booking:");

let age=Number(prompt("Enter Your Age:"));
let booking=confirm("Do you want to book a movie ticket?");

if (booking) {
    if (age >= 18) {
        console.log("Allow Movie");
    } else {
        console.log("Not Allowed");
    }
} else {
    console.log("Booking Cancelled");
}
console.log("----------------------------------------------");

//10. Hospital Appointment
console.log("\nTask-10. Hospital Appointment:");

let token=Number(prompt("Enter Token Number (1-3):"));

switch (token) {
    case 1:
        console.log("Doctor A");
        break;
    case 2:
        console.log("Doctor B");
        break;
    case 3:
        console.log("Doctor C");
        break;
    default:
        console.log("Invalid Token Number");
}
console.log("----------------------------------------------");

//11. Array method
let fruits=["Apple", "Orange", "Banana"];

console.log("\nTask-11. Array Method Practice:");

console.log("Original Array:", fruits);

//push()
fruits.push("Mango");
console.log("1.After Push():", fruits);

//pop()
fruits.pop();
console.log("2.After Pop():", fruits);

//shift()
fruits.shift();
console.log("3.After Shift():", fruits);

//unshift()
fruits.unshift("Grapes");
console.log("4.After Unshift():", fruits);

//splice()
fruits.splice(1, 1, "Kiwi");
console.log("5.After Splice():", fruits);

//slice()
let newFruits=fruits.slice(0, 2);
console.log("6. After Slice():", newFruits);
console.log("Original Array:", fruits);

console.log("----------------------------------------------");

//12. Higher Order Methods
let employees2 = [
    {name: "A", salary: 20000},
    {name: "B", salary: 35000},
    {name: "C", salary: 50000},
    {name: "D", salary: 70000},
];
console.log("\nTask-12. Higher Order Methods:");

//map()-Increase every salary by 5000
let updatedemployees=employees2.map(emp => ({
    name: emp.name,
    salary: emp.salary + 5000
}));
console.log("1. Updated Salaries:", updatedemployees);

//filter()-salary above 30000
let highsalary=employees2.filter(emp => emp.salary > 30000);
console.log("2. Salary greater than 30000:", highsalary);

//find()-salary 50000
let employee=employees2.find(emp => emp.salary === 50000);
console.log("3. Employee with Salary 50000:", employee);

//reduce()-total salary
let totalsalary=employees2.reduce((sum, emp) => sum + emp.salary, 0);
console.log("4. Total Salary:", totalsalary);

//some()-check if any salary above 60000
let anyabove60k=employees2.some(emp => emp.salary > 60000);
console.log("5. Any Salary above 60000:", anyabove60k);

//every()-check if all salary above 15000
let everyabove15k=employees2.every(emp => emp.salary > 15000);
console.log("6. Every employee earns more than 15000:", everyabove15k)

console.log("---------------------------------------------");

//13. String Practice
console.log("\nTask-13. String Practice:")
let company = " Stackly IT ";

//convert to uppercase
console.log("1.Uppercase:", company.toUpperCase());

//convert to lowercase
console.log("2.Lowercase:", company.toLowerCase());

//remove spaces
console.log("3.Trimmed:", company.trim());

//replace IT with Software
console.log("4.Replace:", company.replace("IT", "Software"));

//check whether stackly exists
console.log("5.Contains 'Stackly':", company.includes("Stackly"));

//split using space
console.log("6.Split:", company.trim().split(" "));

console.log("------------------------------------------------");

//14. Digital Clock
console.log("\nTask-14. Digital Clock:");

//date
let count=0;
let clock=setInterval(() => {
    console.log(new Date().toLocaleTimeString());

    count++;

    if (count === 10) {
    clearInterval(clock);
    console.log("Clock Stopped\n"); 

    task15();
    }
}, 1000);

//15. Fake Store API

function task15() {

    console.log("-------------------------------------------");

console.log("\nTask-15. Fake Store API:");

fetch("https://fakestoreapi.com/products")
     .then(response => response.json())
     .then(data => {
        
        console.log("1.Product Titles:");
        data.forEach(product => console.log(product.title));

        console.log("2.Product Prices:");
        data.forEach(product => console.log(product.price));

        console.log("3.More Than 100:");
        data
            .filter(product => product.price > 100)
            .forEach(product => console.log(product));

        console.log("4.Total Products:", data.length);

        console.log("5.Category Names:");
        data.forEach(product => console.log(product.category));

        console.log();

        payrollSystem();
        
    })
    .catch(error => console.log(error));
}

//Final Mini Project- Employee Payroll System

let employeelist=[
    {id: 101, name: "Naveen", salary: 30000},
    {id: 102, name: "John", salary: 45000},
    {id: 103, name: "Arun", salary: 60000}
];

//view employees
function viewemployees() {
    console.log("\n1.Employee List:");
    employeelist.forEach(emp => {
        console.log(`ID: ${emp.id}, Name: ${emp.name}, Salary: ₹${emp.salary}`);  
    });  
}

//search employee by ID
function searchemployee() {
    let id=Number(prompt("Enter Employee ID:"));
    let emp=employeelist.find(e => e.id === id);

    console.log("2.Search Employee by ID:");
    
    if(emp) {
        console.log(emp); 
    } else {
        console.log("Employee Not Found");
    }
}

//add bonus
function addbonus() {
    console.log("3.Add Bonus:");
    
    employeelist=employeelist.map(emp => ({
        ...emp,
        salary: emp.salary + 5000
    }));

    console.log("Bonus Added Successfully");
    viewemployees();   
}

//highest salary
function highestsalary() {
    let highest=employeelist.reduce((a, b) =>
        a.salary > b.salary ? a : b
    );
    console.log("4.Highest Salary:", highest); 
}

//lowest salary
function lowestsalary() {
    let lowest=employeelist.reduce((a, b) => 
        a.salary < b.salary ? a : b
    );

    console.log("5.Lowest Salary:", lowest);
}

//total salary
function totalSalary() {
    let total=employeelist.reduce((sum, emp) => 
         sum + emp.salary, 0);

    console.log("6.Total Salary: ₹" + total);
}

//employees above 40000
function salaryabove40k() {
    console.log("7.Salary above 40000");
    
    console.log(
        employeelist.filter(emp => emp.salary > 40000)
    );
    
}

//employee report
function employeereport() {
    console.log("8.Employee Report");

    employeelist.forEach(emp => {
        console.log(`${emp.name} earns ₹${emp.salary}`);
    });  
}

//current date and time
function currentDateTime() {
    console.log("9.Current Date & Time:");
    console.log(new Date().toLocaleString());
}

//fetch employee data from API
function fetchdata() {
    
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log("10.Employee Data from API");
            data.forEach(user => console.log(user.name)); 
        });
}


//menu
function payrollSystem() {

    console.log("-------------------------------------------");

    console.log("\nFinal Mini Project-Employee Payroll System:");
    
let menuchoice=Number(prompt(`Employee Payroll System
    
1. View Employees:
2. Search Employee by ID:
3. Add Bonus:
4. Highest Salary:
5. Lowest Salary:
6. Total Salary:
7. Salary above 40000:
8. Employee Report:
9. Current Date & Time:
10. Fetch Employee Data:
11. Exit

Enter your choice:`))

switch (menuchoice) {
    case 1:
        viewemployees();
        break;

    case 2:
        searchemployee();
        break;

    case 3:
        addbonus();
        break;

    case 4:
        highestsalary();
        break;

    case 5:
        lowestsalary();
        break;

    case 6:
        totalSalary();
        break;

    case 7:
        salaryabove40k();
        break;

    case 8:
        employeereport();
        break;

    case 9:
        currentDateTime();
        break;

    case 10:
        fetchdata();
        break;

    case 11:
        console.log("Thank You!");
        break;

    default:
        console.log("Invalid Choice");
    }
        
}








