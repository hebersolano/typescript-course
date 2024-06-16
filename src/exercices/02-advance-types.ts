type Users = {
  name: string;
  age: number;
  occupation?: string;
}[];

let users: Users = [
  { name: "John Smith", age: 30, occupation: "Software engineer" },
  { name: "Kate Müller", age: 28 },
];

type Bird = "fly";
type Fish = "swim";
type Pet = Bird | Fish;

type Weekdays = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | " Friday" | "Saturday" | "Sunday";

//Simplify the following code snippets:
function getUser() {
  return { address: { street: "" } };
}

let user2 = getUser();
console.log(user2 && user2.address ? user2.address.street : undefined);
console.log(user2?.address?.street);

function bar() {
  return "string";
}
let foo2 = "string";
let x2 = foo2 !== null && foo2 !== undefined ? foo2 : bar();
let x3 = foo2 ?? bar();

//What is the problem in this piece of code?
let value: unknown = "a";
// console.log(value.toUpperCase());
// asw: you first need narrowing the variable type against 'string' type before using a string method
if (typeof value === "string") console.log(value.toUpperCase());
