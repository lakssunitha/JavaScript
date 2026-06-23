//1.Emp Info System
let employee={
    name:prompt("Enter Employee Name:"),
    age:Number(prompt("Enter Employee Age:")),
    department:(prompt("Enter Employee Department:")),
    salary:Number(prompt("Enter Employee Salary:")),
};

console.log("\nEmployee Details:");

console.log("Name:", employee.name);
console.log("Age:", employee.age);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);

if(employee.salary>30000){
    console.log("Eligible for Bonus"); 
} else{
    console.log("Not Eligible for Bonus");
}

//2.Supermarket Billing
let productname=prompt("Enter Product Name:");
let productprice=Number(prompt("Enter Product Price:"));
let productquantity=Number(prompt("Enter Product Quantity:"));
let totalbill=productprice*productquantity;
let finalamount;

if(totalbill>10000){
    finalamount=totalbill-(totalbill*10/100);
} else{
    finalamount=totalbill;
}

console.log("\nProduct Details:");

console.log("Product:", productname);
console.log("Total Bill:", totalbill);
console.log("Final amount:", finalamount);

//3.Student Result Portal
let studentname=prompt("Enter Student Name:")
let marks=Number(prompt("Enter Marks:"));

console.log("\nResults:");

if(marks>=90){
    console.log(studentname, ":Grade A");
} else if(marks>=75){
    console.log(studentname, ":Grade B");
} else if(marks>=50){
    console.log(studentname, ":Grade C");
} else{
    console.log(studentname, ":Fail");
}

//4.Bank ATM
let username=prompt("Enter User Name:");
let balance=Number(prompt("Enter Balance:"));
let withdrawl=Number(prompt("Enter Withdrawl Amount:"));

console.log("\nBank Details:");

if (withdrawl<=balance){
    console.log("Transaction Successful"); 
} else{
    console.log("Insufficient Balance");  
}

//5.Login Validation
let user="admin";
let password="hello123";
let loginusername=prompt("Enter Username:");
let loginpassword=prompt("Enter Password:");

console.log("\nLogin Credentials:");

if(loginusername===user && loginpassword===password){
    console.log("Login Successful");
} else{
    console.log("Invalid Username or Password");
}

//6.Food Order
let fooditems=["Dosa","Pizza","Burger","Puri","Noodles","Pasta"];

console.log("\nFood Items:");

console.log("First Item:", fooditems[0]);
console.log("Last Item:", fooditems[fooditems.length-1]);
console.log("Total Items:", fooditems.lenth);

for(let item of fooditems){
    console.log(item); 
}

//7. Company Employee Directory 
let employeedetails={
    name: "Sunitha",
    age: 24,
    department: "ECE",
    salary: 40000,
    experience: "1 year"
}

console.log("\nEmployee Directory:");

for(let key in employeedetails){
    console.log(key + ":", employeedetails[key]); 
}

//8.Traffic Signal System
let signal=prompt("Enter Signal Color:");

console.log("\nTraffic Signal:");

switch(signal.toLowerCase()){
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
        console.log("Invalid Signal");    
}

//9.Age Category Checker
let age=Number(prompt("Enter Your Age"));

console.log("\nAge Checker:");

if(age>=0 && age<=12){
    console.log("Child");
} else if(age<=19){
    console.log("Teenager");
} else if(age<=59){
    console.log("Adult"); 
} else{
    console.log("Senior Citizen");
}

//10.Employee Attendance
let empname=prompt("Enter Employee Name:");
let attendance=prompt("Enter Attendance(Present/Absent):")
let message=(attendance.toLowerCase()==="present")
    ? `Welcome ${empname}\nAttendance: Present`
    : `Attendance : Absent`;

console.log("\nEmployee Attendance:");

console.log(message);
















