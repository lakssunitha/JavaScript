// 1. Employee Registration

let employeename = "Naveen";
let employeeid = "EMP101";
let department = "Development";
let salary = 50000;

const ispermanent = true;

console.log("Employee Details:");
console.log(`Name       : ${employeename}`);
console.log(`ID         : ${employeeid}`);
console.log(`Department : ${department}`);
console.log(`Salary     : ${salary}`);
console.log(`Permanent  : ${ispermanent}`);


// 2. Employee Skills

let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

console.log("\nEmployee Skills:");
console.log("First Skill :", skills[0]);
console.log("Third Skill :", skills[2]);
console.log("Last Skill  :", skills[skills.length - 1]);
console.log("Total Skills:", skills.length);


// 3. Company Object

let comp = {
    compname: "Stackly IT",
    location: "Coimbatore",
    employees: 250,
    technologies: ["HTML", "CSS", "JavaScript", "React"]
};

console.log("\nCompany Details:");
console.log("Company Name      :", comp.compname);
console.log("Location          :", comp.location);
console.log("Second Technology :", comp.technologies[1]);
console.log("Total Technologies:", comp.technologies.length);


// 4. Salary Calculator

let basicsalary = 30000;
let bonus = 5000;

let totalsalary = basicsalary + bonus;
let tax = totalsalary * 0.10;
let finalsalary = totalsalary - tax;

console.log("\nSalary Calculation:");
console.log("Basic Salary :", basicsalary);
console.log("Bonus        :", bonus);
console.log("Total Salary :", totalsalary);
console.log("Tax (10%)    :", tax);
console.log("Final Salary :", finalsalary);


// 5. Attendance Checker

let attendance = 92;

let examstatus =
    attendance >= 75
        ? "Eligible for Exam"
        : "Not Eligible";

console.log("\nAttendance Status:", examstatus);

// 6. Login Verification

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("\nLogin Successful");
} else {
    console.log("\nInvalid Credentials");
}


// 7. Product Billing

let productname = "Laptop";
let productprice = 45000;
let quantity = 2;

let totalbill = productprice * quantity;

console.log("\nProduct Billing:");
console.log(`Product  : ${productname}`);
console.log(`Price    : ${productprice}`);
console.log(`Quantity : ${quantity}`);
console.log(`Total    : ${totalbill}`);


// 8. Increment & Decrement

let visitors = 100;

console.log("\nIncrement & Decrement:");

// Pre Increment
console.log(++visitors); 

// Post Increment
console.log(visitors++); 
console.log(visitors);   

// Pre Decrement
console.log(--visitors); 

// Post Decrement
console.log(visitors--); 
console.log(visitors);   


// 9. Comparison Checker

console.log("\nComparison Checker:");

console.log(10 == "10");      
console.log(10 === "10");     
console.log(20 != "20");      
console.log(20 !== "20");    
console.log(5 < 10);         
console.log(15 >= 20);        
console.log(100 <= 100);      


// 10. User Interaction

let empname = prompt("Enter Employee Name:");
let empage = prompt("Enter Employee Age:");

let joincompany = confirm("Do you want to join our company?");

if (joincompany) {
    alert(`Welcome ${empname}`);
} else {
    alert("Thank You");
}

// Mini Employee Portal

let employee = {
    name: "Naveen",
    id: "EMP101",
    department: "Development",
    experience: 3,
    salary: 50000
};

let empskills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Node.js"
];

let company = {
    companyname: "Stackly IT",
    location: "Coimbatore"
};

let empattendance = 92;

let empbonus = 5000;
let empfinalsalary = employee.salary + empbonus;

let loginstatus =
    (username === "admin" && password === "12345")
        ? "Success"
        : "Failed";

let attendancestatus =
    empattendance >= 75
        ? "Eligible"
        : "Not Eligible";

let experiencestatus =
    employee.experience >= 2
        ? "Experienced"
        : "Fresher";

console.log(" EMPLOYEE PORTAL:");

console.log(`Employee Name : ${employee.name}`);
console.log(`Employee ID   : ${employee.id}`);
console.log(`Department    : ${employee.department}`);
console.log(`Experience    : ${employee.experience} Years`);
console.log(`Salary        : ₹${employee.salary}`);
console.log(`Bonus         : ₹${empbonus}`);
console.log(`Final Salary  : ₹${empfinalsalary}`);
console.log(`Skills        : ${empskills.join(", ")}`);
console.log(`Attendance    : ${empattendance}%`);
console.log(`Exam Status   : ${attendancestatus}`);
console.log(`Login Status  : ${loginstatus}`);
console.log(`Experience    : ${experiencestatus}`);
console.log(`Company       : ${company.companyname}`);
console.log(`Location      : ${company.location}`);


alert("Employee Portal Loaded Successfully");



//Bonus-Bank Account Management System

//1.Account Details
let customername="Naveen";
let accountnumber="SB1001";
let accounttype="Savings";
let balance=60000;

const bankname="IDFC Bank";

console.log(" Bank Account System:");
console.log(`Customer Name:${customername}`);
console.log(`Account No   :${accountnumber}`);
console.log(`Account Type :${accounttype}`);
console.log(`Balance      :₹${balance}`);
console.log(`Bank Name    :${bankname}`);

//2.Account Features
let services=["ATM Card","Net Banking","Mobile Banking","UPI",
    "Cheque Book","SMS Alerts"];

console.log("\nAccount Services:");
console.log("First Service :", services[0]);
console.log("Third Service :", services[2]);
console.log("Last Service  :", services[services.length-1]);
console.log("Total Services:", services.length);

//3.Bank Object
let bank={bankname:"IDFC Bank", branch:"Hyderabad", employees:150,
    facilities:["ATM", "Loan", "Insurance", "Locker"]};

console.log("\nBank Details:");
console.log("Bank Name       :", bank.bankname);
console.log("Branch          :", bank.branch);
console.log("Second Facility :", bank.facilities[1]);
console.log("Total Facilities:", bank.facilities.length);

//4.Deposit Calculation
let depamount=12000;
balance += depamount;

console.log("\nDeposit Details:");
console.log(`Deposit Amount : ₹${depamount}`);
console.log(`Updated Balance: ₹${balance}`);

//5.Interest Calculation
let intrate=5;
let interest=(balance*intrate)/100;

console.log("\nInterest Details:");
console.log(`Interest Rate: ${intrate}%`);
console.log(`Interest     : ₹${interest}`);

//6.Minimum Balance Check
let minbalance=10000;
let accstatus=balance>=minbalance? "Account Active" : "Low Balance";

console.log("\nAccount Status:", accstatus);

//7.Login Verification
let loginname="admin";
let pwd="hello123";
let bankloginstatus=
    (loginname === "admin" && pwd === "hello123") 
            ?"Login Successful" 
            : "Invalid Credentials";

console.log("\nLogin Status:", loginstatus);

//8.Transaction Details
let withdrawamt=2000;
let remainingbal=balance-withdrawamt;

console.log("\nTransaction Details:");
console.log(`Withdraw Amount  : ₹${withdrawamt}`);
console.log(`Remaining Balance: ₹${remainingbal}`);

//9.Comparison Operators
console.log("\nComparison Results:");
console.log(balance=="72000");
console.log(balance==="72000");
console.log(balance>30000);
console.log(balance<10000);
console.log(balance>=72000);
console.log(balance<=50000);

//10.User Interaction
let cust=prompt("Enter Customer Name:");
let custage=prompt("Enter Customer Age:");
let openaccount=confirm("Do you want to open a bank account?");
let message=openaccount
    ?`Welcome ${cust}, your account request is submitted.`
    :"Thank you for visiting our bank.";
alert(message);

//Final Account Summary

console.log(" ACCOUNT SUMMARY:");
console.log(`Customer Name : ${customername}`);
console.log(`Account Number: ${accountnumber}`);
console.log(`Account Type  : ${accounttype}`);
console.log(`Bank Name     : ${bankname}`);
console.log(`Balance       : ₹${balance}`);
console.log(`Interest      : ₹${interest}`);
console.log(`Status        : ${accstatus}`);
console.log(`Login Status  : ${loginstatus}`);
console.log(`Services      : ${services.join(", ")}`);

alert("Bank Account Management System Loaded Successfully");





























