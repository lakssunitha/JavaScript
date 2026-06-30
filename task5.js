//1.Employee Salary Problem
function calyearlysalary(monthlysalary) {
    return monthlysalary * 12;
}
let monthlysalary=45000;
let yearlysalary=calyearlysalary(monthlysalary);

console.log("1. Yearly Salary : ₹" + yearlysalary);
console.log("-----------------------------");

//2.Student Pass or Fail
function checkresult(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}

let marks = 72;
let result = checkresult(marks);

console.log("2. Result :", result);
console.log("-----------------------------");

//3. Food Bill
function calbill(price,quantity) {
    return price * quantity;
}
let burgerprice=180;
let quantity=3;
let totalbill=calbill(burgerprice,quantity);

console.log("3. Total Bill : ₹" + totalbill);
console.log("-----------------------------");

//4. Welcome Employee
console.log("4. Welcome Employee: ");

function welcomeemp(name, department) {
    console.log("Welcome " + name);
    console.log("Department : " + department); 
}
welcomeemp("Naveen", "Development");
console.log("-----------------------------");

//5. Shopping Discount
function calfinalamount(price, discount) {
    return price - discount;
}
let price=5000;
let discount=500;
let finalamount=calfinalamount(price, discount);

console.log("5. Final Amount : ₹" + finalamount);
console.log("-----------------------------");

//6. Company Login
console.log("6. Company Login: ");

function login(callback) {
    console.log("Login Successful");
    callback();
}
function loaddashboard() {
    console.log("Loading Dashboard...");   
}
login(loaddashboard);

console.log("-----------------------------");

//7. Food Delivery
console.log("7. Food Delivery:");

function fooddelivery(step, nextstep) {
    console.log(step);
    if (nextstep) {
        nextstep();
    }  
}
fooddelivery("Order Received", function(){
    fooddelivery("Preparing Food", function(){
        fooddelivery("Out for Delivery", function(){
            fooddelivery("Delivered");
        });
    });
});
console.log("-----------------------------");

//8. Lucky Draw
function* luckydraw() {
    yield "10% Coupon";
    yield "20% Coupon";
    yield "50% Coupon";
    yield "Better Luck Next Time"; 
}
let coupons=luckydraw();

console.log("8. Lucky Draw:");

console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log("-----------------------------");

//9. Employee Bonus
function bonus(salary) {
    return function (bonusamount) {
        return salary + bonusamount;
    };
}
let totalsalary=bonus(50000)(5000);
console.log("9. Total Salary : " + totalsalary);
console.log("-----------------------------");

//10. Merge Employee Details
let employeepersonal={
    name: "Naveen",
    age: 25
};
let employeeoffice={
    department: "Development",
    salary: 50000
};
let employeedetails={
    ...employeepersonal,
    ...employeeoffice
};
console.log("10. Merge Employee Details:");

console.log(employeedetails);
console.log("-------------------------------------------");

//11. Shopping Cart
let cart1=["Laptop", "Mouse"];
let cart2=["keyboard", "Headphones"];
let shoppingcart=[...cart1, ...cart2];

console.log("11. Shopping Cart:");

console.log(shoppingcart);
console.log("-------------------------------------------");

//12. Student Marks
function student(name, ...marks) {
    let total=0;

    for (let mark of marks){
        total += mark;
    }
    let average = total/marks.length;

    console.log("12. Student Marks:");
    
    console.log("Student :", name);
    console.log("Total Marks :", total);
    console.log("Average :", average);
    console.log("------------------------------");
}
student("Naveen", 90, 85, 88, 95);

//13. Product Details
let product= {
    name: "Laptop",
    productprice: 65000,
    brand: "Dell",
    stock: 20
};
let { name, productprice } = product;
console.log("13. Product Details:");

console.log("Name :", name);
console.log("Price : ₹" + productprice);
console.log("------------------------------");

//14. Customer Details
let customer=[101, "Naveen", "Chennai", 9876543210];
let [id, customername, city]= customer;

console.log("14. Customer Details:");

console.log("ID :", id);
console.log("Customer Name :", customername);
console.log("City :", city);
console.log("------------------------------");

//15. Add Product
let cart=["Mobile", "Laptop"];
cart.push("Headphone");

console.log("15. Add Product:");

console.log(cart);
console.log("---------------------------------------");

//16. Remove Last Product
let productcart=["mobile", "Laptop", "Headphone"];
cart.pop();

console.log("16. Remove Last Product:");
console.log(cart);
console.log("------------------------------");

//17. Replace Employee
let employees=["Rahul", "Arun", "John", "David"];
employees.splice(2,1,"Naveen");

console.log("17. Replace Employee:");
console.log(employees);
console.log("------------------------------");

//18. Search Product
let products=["Mouse", "Keyboard", "monitor", "Laptop"];
let isavailable=products.includes("Laptop");

console.log("18. Laptop Available :", isavailable);
console.log("------------------------------");

//19. Employee Ranking
let salaries=[25000, 45000, 30000, 70000];
salaries.sort((a, b) => a-b);

console.log("19. Employee Ranking:");
console.log(salaries);
console.log("------------------------------");

//20. Reverse Chat Messages
let messages=["Hi", "Hello", "How are you?", "Good Morning"];
messages.reverse();

console.log("20. Reverse Chat Messages:");
console.log(messages);
console.log("------------------------------");

//Bonus Task

console.log("Bonus Task- Employee Management System:");
console.log("---------------------------------------");

let employeelist=[
    {id: 101, name: "Naveen", department: "Development", salary: 50000},
    {id: 102, name: "Rahul", department: "Testing", salary: 45000},
    {id: 103, name: "Arun", department: "HR", salary: 40000},
]

//1. Add Employee

function addemployee(id, name, department, salary) {
    employeelist.push({id, name, department, salary});
    console.log("Employee Added Successfully"); 
}

//2. View Employee
function viewemployees() {
    
    console.log(" Employee List");
    console.table(employeelist);
}

//3. Search Employee by ID
function searchemployee(id) {
    let employee=employeelist.find(emp => emp.id === id);
    
    if(employee){
        console.log("Employee Found:", employee);  
    } else {
        console.log("Employee Not Found");
    }
}

//4. Calculate Salary + Bonus
function calculatesalary(id, bonus) {
    let employee = employeelist.find(emp => emp.id ===id);

    if(employee){
        console.log("Total Salary :", employee.salary + bonus);  
    }  
}

//5. Remove Employee
function removeemployee(id) {
    employees=employeelist.filter(emp => emp.id !== id);
    console.log("Employee Removed Successfully"); 
}

//6. Sort Employees by Salary
function sortbysalary() {
    employeelist.sort((a, b) => a.salary-b.salary);
    console.log(employeelist);
}

//7. Find Employee by Name
function findemployee(name) {
    let employee=employeelist.find(emp => emp.name === name);

    if(employee) {
        console.log(employee);
    } else {
        console.log("Employee Not Found");
    }
}

//8. Display Employee Details using Destructuring
function displayemployee(id) {
    let employee=employeelist.find(emp => emp.id === id);

    if (employee) {
        let {name, department, salary} =employee

        console.log("Name :", name);
        console.log("Department :", department);
        console.log("salary :", salary); 
    }
}


viewemployees();
console.log("---------------------------------------");

console.log("1. Add Employee:");
addemployee(104, "David", "Support", 38000);
console.log("---------------------------------------");

console.log("2. View Employee:");
viewemployees();
console.log("---------------------------------------");

console.log("3. Search Employee by ID:");
searchemployee(102);
console.log("---------------------------------------");

console.log("4. Salary and Bonus Calculation:");
calculatesalary(101, 5000);
console.log("---------------------------------------");

console.log("5. Remove Employee by ID:");
removeemployee(104);
console.log("---------------------------------------");

console.log("6. Sort Employee by Salary:");
sortbysalary();
console.log("---------------------------------------"); 

console.log("7. Find Employee by Name:");
findemployee("Arun");
console.log("---------------------------------------");

console.log("8. Display Employee by ID:");
displayemployee(103);
console.log("---------------------------------------");

viewemployees();

















