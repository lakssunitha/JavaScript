//1.Employee Management System
let employees=[
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    }
];

console.log("\n1.Employee Management System:");

for(let emp of employees) {
    console.log("Name:", emp.name);
    console.log("ID:", emp.id);
    console.log("Salary:", emp.salary);
    
    if(emp.salary>=50000) {
        console.log("Employee Eligible For Bonus");  
    } else{
        console.log("Employee Not Eligible For Bonus");
    }
    console.log("---------------------------");
    
} 

//2.Student Result Portal
let marks1=90;
let marks2=80;
let marks3=70;

let total=marks1+marks2+marks3;
let percentage=total/3;

console.log("\n2.Student Result Portal:");

console.log("Total:", total);
console.log("Percentage:", percentage);

if(percentage>=90){
    console.log("Grade: A+");
} else if(percentage>=80){
    console.log("Grade: A");
} else if(percentage>=70){
    console.log("Grade: B");
} else if(percentage>=60){
    console.log("Grade: C");
} else {
    console.log("Failed"); 
}
console.log("-----------------------");

//3.E-Commerce Cart
let products=[
    {name:"Laptop", price:50000},
    {name:"Mouse", price:1000},
    {name:"Keyboard", price:2000},
];

console.log("\n3.E-Commerce Cart:");

function calbill(items){
    let total=0;
    for(let product of items){
        total+=product.price;
    }
    if(total>5000){
        let discount=total*0.10;
        total=total-discount;
        console.log("10% Discount Applied"); 
    }
    return total;
}
console.log("Final Bill:", calbill(products));
console.log("-----------------------");

//4.Login Authentication
let username="admin";
let password="12345";

let enteruser="admin";
let enterpwd="12345";

console.log("\n4.Login Authentication:");

let result=(enteruser===username && enterpwd===password)
           ? "Login Success" : "Invalid Credentials";
console.log(result);

console.log("-----------------------");

//5.Traffic Signal System
let signal1="Red";
let signal2="Yellow";
let signal3="Green";

console.log("\n5.Traffic Signal System:");

switch(signal1){
    case "Red":
        console.log("Stop");
        break;
}
switch(signal2){
    case "Yellow":
        console.log("Ready");
        break;
}
switch(signal3){
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");    
}

console.log("-----------------------");


//6.ATM Withdrawl System
let balance=Number(prompt("Enter Account Balance:"));
let withdrawamount=Number(prompt("Enter Withdraw Amount:"));

console.log("\n6.ATM Withdrawl System:");

if(withdrawamount<=balance){
    balance-=withdrawamount;

    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);  
} else {
    console.log("Insufficient Balance");
}
console.log("-----------------------");

//7.Online Food Order (Callback Function)
console.log("\n7.Online Food Order:");

function placeorder(callback){
    console.log("Order Received");
    callback();  
}
function preparefood(){
    console.log("Food Preparing");
    console.log("Food Delivered");
}
placeorder(preparefood);
console.log("-----------------------");

//8: Cashback Generator
function* cashbackoffers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}
let offer=cashbackoffers();

console.log("\n8.Cashback Generator:");
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log("-----------------------");

//9.Hospital Patient Check
let age1=25;
let age2=16;
let weight1=60;
let weight2=55;

console.log("\n9.Hospital Patient Check:");

if(age1>18){
    if(weight1>50){
        console.log("Patient-1: Eligible For Treatment");  
    } else{
        console.log("Patient-1: Not Eligible");  
    }
} else {
    console.log("Patient-1: Not Eligible");
}

if(age2>18){
    if(weight2>50){
        console.log("Patient-2: Eligible For Treatment");  
    } else{
        console.log("Patient-2: Not Eligible");  
    }
} else {
    console.log("Patient-2: Not Eligible");
}

console.log("-----------------------");

//10.Mini Employee Portal
let employeelist = [
    {id:101, name:"Naveen", salary:30000},
    {id:102, name:"John", salary:60000}
];
console.log("\n10.Mini Employee Portal:");

//Add Employee
function addemployee(id, name, salary) {
    employeelist.push({id, name, salary}); 
    console.log("(a)Employee Added Successfully");
    
}
//View Employees
function viewemployees() {
    console.log("\n(b)Employee List:");
    for (let emp of employeelist){
        console.log(emp); 
    }  
}
//Calculate Bonus
function calbonus() {
    console.log("\n(c)Bonus Eligibility:");
    
    for(let emp of employeelist){
        if(emp.salary>=50000){
            console.log(emp.name + " - Eligible For Bonus"); 
        } else{
            console.log(emp.name + " - Not Eligible For Bonus");

        }
    }
}
//Search Employee
function searchemployee(id) {
    let found=employeelist.find(emp => emp.id === id);

    if(found){
        console.log("\n(d)Employee Found:");
        console.log(found);  
    } else {
        console.log("Employee Not Found");
        
    }
}
//Delete Employee
function deleteemployee(id) {
    employees=employeelist.filter(emp => emp.id !==id); 
    console.log("\n(e)Delete Employee:");
    console.log("Employee Deleted Successfully");
    
}
//Employee Count
function totalemployees() {
    console.log("\n(f)Total Employees:", employeelist.length);   
}
//Callback Function
function processemployee(callback) {
    callback();
}
//Function Calls
addemployee(103, "Rahul", 70000);
processemployee(viewemployees);
calbonus();
searchemployee(102);3000
deleteemployee(101);
viewemployees();
totalemployees();