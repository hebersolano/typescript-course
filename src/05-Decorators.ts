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
@Component
class ProfileComponent {}

//* PARAMETERIZED DECORATORS
function Component2(value: string) {
  // decorator factory
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("inserting the component into the DOM");
    };
  };
}
