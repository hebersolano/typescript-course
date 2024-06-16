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

type Weekdays = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | " Friday";

function getUser() {
  return { address: { street: "" } };
}
let user2 = getUser();
console.log(user2 && user2.address ? user2.address.street : undefined);
console.log(user2?.address?.street);
let x2 = foo2 !== null && foo2 !== undefined ? foo2 : bar();
