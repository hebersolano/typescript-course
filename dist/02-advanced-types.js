"use strict";
let employee02 = {
    id: 1,
    name: "",
    retire(date) {
        console.log(date);
    },
};
employee02.name = "heber";
// union types
function kgToLbs(weight) {
    // narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return Number(weight);
    }
}
// intersection types
let weight; // at the same time
let textBox;
let quantity = 50;
// nullable types
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=02-advanced-types.js.map