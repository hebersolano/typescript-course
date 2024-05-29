// For each of these values, what type will the TypeScript compiler infer?
let a = 100; //number
let b = "Coffee"; // string
let c = [true, false, false]; // boolean[]
type d = { age: number }; // error, using a type as a value
let e = [3]; // number[]
let f; // any
let g = []; // any[]

// What are the compilation errors in each of the following code snippets?
let song: { title: string; releaseYear?: number } = { title: "My song" }; // property is required in type definition

let prices = [100, 200, 300];
// prices[0] = "$101"; // type 'string' no assignable to type 'number'

function myFunc(a: number, b: number): number {
  // parameter values never read
  // function should return a value
  return a + b;
}
