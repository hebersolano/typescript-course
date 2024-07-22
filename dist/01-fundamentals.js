"use strict";
let age = 20;
let myName = "Heber";
if (age < 50) {
    age += 10;
}
console.log(age);
// values type
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
function render2(document) {
    console.log(document);
}
// arrays
let numbers = [1, 2, 3];
numbers.forEach((n) => n.toString());
// tuple
let user = [27, "heber"];
user.push(1);
user.push("hello");
console.log(user);
let mySize = 3 /* Size.Large */;
console.log(mySize);
// functions
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 50000)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
// objects
let employee = {
    id: 1,
    name: "",
    retire(date) {
        console.log(date);
    },
};
employee.name = "heber";
//# sourceMappingURL=01-fundamentals.js.map