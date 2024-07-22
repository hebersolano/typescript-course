//* GENERIC CLASSES
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, "Apple");
let pair2 = new KeyValuePair(1, "Apple");

// GENERIC FUNCTIONS
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numbers2 = ArrayUtils.wrapInArray(2);

//* GENERIC INTERFACES
//http://mywebsite.com/users
//http://mywebsite.com/products

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  console.log(url);
  return { data: null, error: null };
}

interface User {
  username: string;
}

// interface Product {
//   title: string;
// }

let res = fetch<User>("url");
res.data?.username;

//* GENERIC CONSTRAINTS
// you can constraints by object, interface or class
function echo<T extends number | string>(value: T): T {
  return value;
}
// echo(true) => type error
echo<string>("hello"); // only accept constraints of type number or string

class Customer2 extends Person2 {}

function echo2<T extends Person2>(value: T): T {
  return value;
}

echo2(new Customer2("Carlos", "Solano")); // only accepts instances of the class Person2

//* EXTENDING GENERIC CLASSES
interface Product {
  name: string;
  price: number;
  category?: string;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

let store = new Store<Product>();

// pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let compressStore = new CompressibleStore<Product>();

// Restricting the generic type parameter
// so we can use this class with whatever object that has a name property
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    this._objects.filter((obj) => obj.category === category);
    return [];
  }
}

//* THE keyof OPERATOR

class Store2<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // T is Product
  // keyof T => 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store2 = new Store2<Product>();
store2.add({ name: "a", price: 1 });
store2.add({ name: "b", price: 2 });
store2.add({ name: "c", price: 3 });

store2.find("name", "a");
store2.find("price", 3);
// store2.find("notExistingProperty", 0); // can't not pass values that aren't keys of Product type

//* TYPE MAPPING
interface Product2 {
  name: string;
  price: number;
  category?: string;
}

// we need a type Product with readonly properties
// interface ReadOnlyProduct {
//   readonly name: string;
//   readonly price: number;
//  readonly category?: string;
// }

//create a new type with an existing type
type ReadOnly<T> = {
  // index signature
  //keyof
  readonly [Key in keyof T]: T[Key]; // like a for loop
};

let product: ReadOnly<Product2> = {
  name: "a",
  price: 1,
};
// product.name = "b"; // not allowed

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

//! this kind of types are prebuild as "Utility Types"
// Partial<Type>, Required<Type>...
