let age: number = 20;
let myName: string = "Heber";

if (age < 50) {
  age += 10;
}
console.log(age);

// values type
let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let level;

function render(document: any) {
  console.log(document);
}

// arrays
let numbers: number[] = [1, 2, 3];
numbers.forEach((n) => n.toString());

// tuple
let user: [number, string] = [27, "heber"];
user.push(1);
user.push("hello");
console.log(user);

// enums
const enum Size {
  Small = 1,
  Medium,
  Large,
}
const enum SizeLetter {
  Small = "s",
  Medium = "m",
  Large = "l",
}

let mySize: Size = Size.Large;
console.log(mySize);

// functions
function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 50_000) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);

// objects
let employee: { readonly id: number; name: string; retire: (date: Date) => void } = {
  id: 1,
  name: "",
  retire(date: Date) {
    console.log(date);
  },
};
employee.name = "heber";
