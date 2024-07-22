// Define a class called Logger that takes the name of a file in its constructor and provides a method for writing messages to that file. Don’t worry about the actual file I/O operations. Just define the class with the right members.
class Logger {
  constructor(public fileName: string[]) {}

  writeMessage(message: string) {
    this.fileName.push(message);
  }
}

let myLog = new Logger([]);

// Given the Person class below, create a getter for getting the full name of a person.
class PersonExercise {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

// Create a new class called Employee that extends Person and adds a new property called salary.
class EmployeeExercise extends PersonExercise {
  constructor(firstName: string, lastName: string, public Salary: number) {
    super(firstName, lastName);
  }
}

// What is the difference between private and protected members?
// R: Private members are not inherited by subclasses of the parent class, whereas protected members are inherited.

// Given the data below, define an interface for representing employees
interface Employee01 {
  name: string;
  salary: number;
  address: {
    street: string;
    city: string;
    zipCode: number;
  };
}
let employee01: Employee01 = {
  name: "John Smith",
  salary: 50_000,
  address: { street: "Flinders st", city: "Melbourne", zipCode: 3144 },
};
