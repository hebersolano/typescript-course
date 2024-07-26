// Create a decorator for adding a sauce to Pizza instances
function Sauce(sauceType: string) {
  return (target: Function) => {
    target.prototype.sauce = sauceType;
  };
}
@Sauce("pesto")
class Pizza {
  constructor(public name: string) {}
}

let myPizza = new Pizza("Italy");
console.log((myPizza as any).sauce);
