//* WHAT ARE DECORATORS?
// attributes that we apply to our classes and their members to change how they behave
//! this is and experimental feature and can change in the future

// it's a function that is call in runtime and is pass our class as a parameter and in the process we can change they shape or behavior
function Component(constructor: Function) {
  console.log("Component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("inserting the component into the DOM");
  };
}

//* CLASS DECORATOR
// @Component
// class ProfileComponent {}

//* PARAMETERIZED DECORATORS
type ComponentOptions = {
  selector: string;
};

function Component2(options: ComponentOptions) {
  // decorator factory
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("inserting the component into the DOM");
    };
  };
}

@Component2({ selector: "#my-profile" })
class ProfileComponent2 {}

//* DECORATOR COMPOSITION
function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype._pipe = true;
}

@Component2({ selector: "#profile" })
@Pipe
class ProfileComponent3 {}

//* METHOD DECORATORS
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;

  descriptor.value = function (message: string) {
    console.log("Before implementation");
    original.call(this, message);
    console.log("After implementation");
  };
}

class PersonMD {
  @Log
  say(message: string) {
    console.log("Person says " + message);
  }
}

const personMd = new PersonMD();
personMd.say("this method is decorated");

//* ACCESSOR DECORATORS
function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original!.call(this);
    return typeof result === "string" ? result.toLocaleUpperCase() : result;
  };
}
class PersonAD {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//* PROPERTY DECORATOR
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(`${propertyName}: Property should be at least ${length} characters long`);
        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}
class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let userPD = new User("1234");
// let userP2 = new User("123");
console.log(userPD.password);

//* PARAMETER DECORATOR
type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameter: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameter.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}
