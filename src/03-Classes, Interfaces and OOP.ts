// ** Classes, Interfaces and Object-oriented Programming **

/** CLASSES
 * - creating classes
 * - creating objects
 * - readonly and optional properties
 * - access control keywords
 * - parameters properties: short way to create properties and initialize them in the constructor
 * - getters and setters
 *
 */
class Account {
  // readonly id: number;
  // owner: string;
  // private _balance: number;
  // nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickname?: string
  ) {
    // this.id = id;
    // this.owner = owner;
    // this._balance = balance;
    // this.nickname = nickname;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    // record a transaction
    this._balance += amount;
  }
  get balance(): number {
    return this._balance;
  }
  // set balance(value: number) {
  //   if (value <= 0) throw new Error("Invalid amount");
  //   this._balance = value;
  // }
  get tax() {
    return this.calculateTax();
  }
  private calculateTax() {
    return this.balance * 0.25;
  }
}

let account = new Account(1, "Heber", 0);
account.deposit(100);
console.log(account.balance);

// let person = {};
// person.name = "Heber"; // this is not allow

// INDEX SIGNATURES
class SeatAssignment {
  // A1, A2...
  // Mosh, John...

  // index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats["A2"] = "Josh";

// STATICS MEMBERS
class Ride {
  // passenger
  // pickupLocation
  // dropOffLocation
  static _activeRides: number = 0; // this properties belong to the class

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride._activeRides);
// Ride.activeRides = 1; // only read

// INHERITANCE
class Person {
  constructor(public firstName: string, public LastName: string) {}

  get fullName() {
    return this.firstName + " " + this.LastName;
  }

  protected walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firsName: string, lastName: string) {
    super(firsName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

const student1 = new Student(1, "Heber", "Solano");

// METHOD OVERRIDING

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

const teacher1 = new Teacher("John", "Smith");
console.log(teacher1.fullName);

// POLYMORPHISM
class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

function printNames(people: Person[]) {
  // person object is taking different forms: Student, Teacher, Principal...
  for (const person of people) {
    console.log(person.fullName);
  }
}

printNames([student1, teacher1, new Principal("Ana", "Solano")]);
/* Open Closed Principle: classes should be open for extension and closed for modification */

// PRIVATE VS PROTECTED MEMBERS
class Person2 {
  constructor(public firstName: string, public LastName: string) {}

  get fullName() {
    return this.firstName + " " + this.LastName;
  }

  // private members can't be access outside the class
  // protected members are inherited and can be use inside of another class,
  protected walk() {
    console.log("Walking");
  }
}

// ABSTRACT CLASSES AND METHODS

// mark the class as it's not ready or it should be extend by another class. So this class cannot be use to create and new object
abstract class Shape {
  constructor(public color: string) {}

  // abstract method, only can exists inside classes
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("rendering circle...");
  }
}

// INTERFACES

// to define the shape of an object
interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

// abstract class Calendar {
//   constructor(public name: String) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
