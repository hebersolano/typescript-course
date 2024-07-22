// types aliases
type Employee = { readonly id: number; name: string; retire: (date: Date) => void };

let employee02: Employee = {
  id: 1,
  name: "",
  retire(date: Date) {
    console.log(date);
  },
};
employee02.name = "heber";

// union types
function kgToLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return Number(weight);
  }
}

// intersection types
let weight: number & string; // at the same time

type Draggable = {
  drag: () => void;
};

type Resizable = { resize: () => void };

type UIWidget = Draggable & Resizable;

let textBox: UIWidget;

// literal types
type Quantity = 10 | 50 | 100;
let quantity: Quantity = 50;

// nullable types
function greet(name: string | null) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola");
}
greet(null);

// optional chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// --optional property access operator
console.log(customer?.birthday?.getFullYear());

// --optional element access operator
// customers?.[0]

// optional call
let log: any = null;
log?.();

// nullish coalescing operator
let speed: number | null = null;
let ride = {
  //falsy values (undefine, null, '', false, 0)
  speed: speed ?? 30,
};

// TYPE ASSERTIONS
let phone = document.getElementById("phone") as HTMLInputElement | null;
phone?.value;

// THE UNKNOWN TYPE, prefer over any type
let x: any;
function render(document: unknown) {
  // narrowing
  if (typeof document === "string") {
    document.toLocaleLowerCase();
  }
  if (document instanceof HTMLInputElement) {
    document.value;
  }
}

// THE NEVER TYPE
function processEvents(): never {
  while (true) {
    // read a message from a queue
  }
}
function reject(message: string): never {
  throw new Error(message);
}

// processEvents();
reject("...");
// console.log("Hello world");
