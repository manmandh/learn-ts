// Built-in Conditional Types
{
  // Define type A
  type A = number | string;

  // Define type B
  type B = string;

  // Compute type C using Exclude
  type C = Exclude<A, B>; // number

  // Compute type D using Extract
  type D = Extract<A, B>; // string

  // Define type A1 with optional property 'a' that can be null
  type A1 = { a?: number | null };

  // Compute type B1 by excluding null and undefined from type A1['a']
  type B1 = NonNullable<A1['a']> // number

  // Define function type F
  type F = (a: number) => string;

  // Compute the return type of function F
  type R = ReturnType<F>; // string

  // Define type A2 representing a class constructor
  type A2 = { new(): B };

  // Define type B2 representing the instance type of class constructor A2
  type B2 = { b: number };

  // Compute the instance type of class constructor A2
  type I = InstanceType<A2>; // { b: number }
}
