{
  let a =  {
    b: 'x'
  }
  a.b
  let b = {
  c: {
    d: 'f'
  }
  } // {c: {d: string}}
}

{
  let a: {b: number} = {
    b: 12
  }
  console.log(a);
  const f: {b: number} = {
    b: 12
  }
  console.log(f);
}
{
  let c: {
    firstName: string
    lastName: string
  } = {
    firstName: 'john',
    lastName: 'barrowman'
  }
  class Person {
    constructor(
      public firstName: string, // public is shorthand for this.firstName = firstName
      public lastName: string
    ) {}
  }
  c = new Person('matt', 'smith') // OK
  console.log(c);
}

{
  let airplaneSeatingAssignments: {
    [seatNumber: string]: string
  } = {
    '34D': 'Boris Cherny',
    '34E': 'Bill Gates'
  }
}

{
  let user: {
    readonly firstName: string
  } = {
    firstName: 'abby'
  }
  user.firstName // string
  // user.firstName = 'abbey with an e'
  // Error TS2540: Cannot assign to 'firstName' because it
  // is a read-only property.
}
