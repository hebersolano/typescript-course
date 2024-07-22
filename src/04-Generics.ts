// GENERIC CLASSES
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

// GENERIC INTERFACES
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

interface product {
  title: string;
}

let res = fetch<User>("url");
res.data?.username;

// GENERIC CONSTRAINTS
// you can constraints by object, interface or class
function echo<T extends number | string>(value: T): T {
  return value;
}
// echo(true) => type error
echo("hello");

class Customer2 extends Person2 {}

function echo2<T extends Person2>(value: T): T {
  return value;
}

echo2(new Customer2("Carlos", "Solano")); // only accepts instances of the class Person2
