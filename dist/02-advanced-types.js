"use strict";
var _a;
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
// --optional property access operator
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// --optional element access operator
// customers?.[0]
// optional call
let log = null;
log === null || log === void 0 ? void 0 : log();
// nullish coalescing operator
let speed = null;
let ride = {
    //falsy values (undefine, null, '', false, 0)
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
// TYPE ASSERTIONS
let phone = document.getElementById("phone");
phone === null || phone === void 0 ? void 0 : phone.value;
// THE UNKNOWN TYPE, prefer over any type
let x;
function render(document) {
    // narrowing
    if (typeof document === "string") {
        document.toLocaleLowerCase();
    }
    if (document instanceof HTMLInputElement) {
        document.value;
    }
}
// THE NEVER TYPE
function processEvents() {
    while (true) {
        // read a message from a queue
    }
}
function reject(message) {
    throw new Error(message);
}
// processEvents();
reject("...");
// console.log("Hello world");
//# sourceMappingURL=02-advanced-types.js.map