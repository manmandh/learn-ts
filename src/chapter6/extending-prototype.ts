// Safely Extending the Prototype

// Extend the global Array interface with zip method
interface Array<T> {
  zip<U>(list: U[]): [T, U][];
}

// Implement .zip method
Array.prototype.zip = function<T, U>(this: T[], list: U[]): [T, U][] {
  return this.map((v, k) => [v, list[k]]);
};

// Now, you can use the zip method on arrays
[1, 2, 3]
  .map(n => n * 2) // number[]
  .zip(['a', 'b', 'c']) // [number, string][]
