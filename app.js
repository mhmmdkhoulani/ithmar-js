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



function sayHello() {
    console.log("Named")
    return "Hello"
}

const sayHelloEx = function(name) {
    console.log("Expression")
    console.log("this in ex", this)

    return "Hello";
}



var sayHelloArrow = () => {
    console.log("Arrow")

    return "Hello"
}

console.log(this);
sayHelloEx()

function greet(){

}

const user = {
    firstName: "Mohammad",
    email: "test@gmail.com",
    greet: function()  {
        console.log(this)
        console.log("Hello", this.firstName)
    }
}
user.lastName = "Ahmad";
console.log(user.lastName)
user.greet()

const title = document.getElementById("title");
const p = document.getElementById("para");
console.log(title);
console.log(p);

// title.innerHTML = "<span>Test</span>"