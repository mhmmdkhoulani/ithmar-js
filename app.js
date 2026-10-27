"use strict"

// let name = "Mohammad";
// let email = "test@gmail.com";
// let salary = 200;

// console.log("Name:", name, "email:", email);

// name = "Ahmad";
// console.log("Name:", name, "email:", email);

// const PI = 3.14;

// let x = null;
// let y;

// console.log(typeof salary);

// let message = `Name: ${name} email: ${email}`

// console.log(message)


// let text = " This is test is string ";

// let value = text.trim();

// console.log(value);


// let age = 20;

// if(age > 20) {
//     console.log("You can register")
// }else {
//     console.log("You are not allowed to rigester")
// }


// let day = "friblaay";

// let isWeekend =  day.toLowerCase() == "friday" 
//     ||day.toLowerCase()== "saturday";
// let isWeekday = day.toLowerCase() == "sunday" 
//                 || day.toLowerCase() == "monday" 
//                 || day.toLowerCase() == "tuesday" 
//                 || day.toLowerCase() == "wednsday" 
//                 || day.toLowerCase() == "thursday";

// if(
//     isWeekend
//  ) {
//     console.log("We are close")
// }else if(isWeekday) {
//     console.log("We are open")
// }else {
//     console.log("Invalid value")
// }



// let grade = 99;

// switch (true) {
//     case grade >= 90 && grade <=100:
//         console.log("A")        
//         break;

//     default:
//         console.log("Invalid grade")
//         break;
// }


// let product = "Pepsi";

// let resutl = product == "Pepsi" ? "Boycott" : "Free to buy";

// console.log(resutl);



// let currentYear = 2026;

// function calcuateAge( name, dob = 0) {
//     console.log(name)
//     return currentYear - dob;
// }
// let user1 = {
//     dob: 1990,
//     name: "Mohammad"
// }
// let userAge = calcuateAge(1990, user1.name);
// calcuateAge(2000);
// calcuateAge(2005);
// calcuateAge(1980);
// console.log("User age: ", userAge)



// function sayHello() {
//     console.log("Named")
//     return "Hello"
// }

// const sayHelloEx = function(name) {
//     console.log("Expression")
//     console.log("this in ex", this)

//     return "Hello";
// }



// var sayHelloArrow = () => {
//     console.log("Arrow")

//     return "Hello"
// }

// console.log(this);
// sayHelloEx()

// function greet(){

// }

// const user = {
//     firstName: "Mohammad",
//     email: "test@gmail.com",
//     greet: function()  {
//         console.log(this)
//         console.log("Hello", this.firstName)
//     }
// }
// user.lastName = "Ahmad";
// console.log(user.lastName)
// user.greet()

// const title = document.getElementById("title");
// const p = document.getElementById("para");
// console.log(title);
// console.log(p);

// // title.innerHTML = "<span>Test</span>"


const names = [20, true, "Mohammad", false, {email: "test@gmail.com"}];
const users = ["Ahamd", "sami", "Rami"];

// console.log(names);

// names.push("another element");

// console.log(names);

// names.unshift("Ahamd")
// console.log(names);
// names.pop();
// console.log(names);
// names.shift();
// console.log(names);

// const result = names.includes("Test");

// console.log(result);

// names.splice(1, 2);
// console.log(names);

// const newNames =names.slice(1,3);
// console.log(newNames);
// console.log(names);

// for(let i = 0; i < names.length; i++) {
//     //cod
//     if(names[i] == "Mohammad") {
//         continue;

//         console.log("Found Mohammad at index:", i);
//         console.log("Continuing to next iteration");
        
//     }else {
//         console.log(i, names[i]);
//     }
    
// }

// for(const name of names) {
//     console.log(name);
// }

// for(const x in users) {
//     console.log(x);
// }
// let userInput = prompt("what is the result of 1 + 1:");

// while(userInput != 2) {
//     userInput = prompt("what is the result of 1 + 1:");
// }

// const title = document.getElementById("title");
// title.innerHTML ='<span style="color:red">Updated title</span>';
// const paraghraph = document.getElementsByTagName("p");  
// paraghraph[2].innerHTML = "Test paraghraph";
// const images = document.getElementsByClassName("image1");
// console.log(images);    

// const flower = document.querySelector(".image3");
// flower.setAttribute("src", "data:image/jpeg;base64,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")
// console.log(flower.getAttribute("src"));
// flower.setAttribute("title", "Flower");
// console.log(flower.hasAttribute("src"));
// flower.removeAttribute("title");


// flower.style.width = "600px";

// title.style.fontWeight = "200";
// title.style.fontSize = "50px"


const students = [
    {name: "Mohamamd khoulani", email: "test@gmail.com", major:"CS"},
    {name: "Ahmad khoulani", email: "test@gmail.com", major:"IT"},
    {name: "Sami khoulani", email: "test@gmail.com", major:"ITE"}
]

const tableBody = document.querySelector("tbody");

for(const student of students) {
    let row;
    if(student.major == "ITE") {
        row= `<tr style="background-color: green">
    <td>${student.name}</td>
    <td>${student.email}</td>
    <td>${student.major}</td>
</tr>`
    }else {
row= `<tr>
    <td>${student.name}</td>
    <td>${student.email}</td>
    <td>${student.major}</td>
</tr>`
    }
    tableBody.innerHTML += row;
}
