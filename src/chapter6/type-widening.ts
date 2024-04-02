{
  const a = 'x' // 'x'
  const b = 3 // 3
  const c = true // true
  enum E {X, Y, Z}
  const e = E.X // E.X
}
// You can use an explicit type annotation to prevent your type from being widened
{
  let a: 'x' = 'x' // 'x'
  let b: 3 = 3 // 3
  var c: true = true // true
  const d: {x: 3} = {x: 3} // {x: 3}
}

{
  function x() {
    let a:any = null // any
    a = 3 // any
    a = 'b' // any
    return a
  }
  x() // string
}

// The const type
{
  let a = {x: 3} // {x: number}
  let b: {x: 3} // {x: 3}
  let c = {x: 3} as const // {readonly x: 3}
  let d = [1, {x: 2}] // (number | {x: number})[]
  let e = [1, {x: 2}] as const // readonly [1, {readonly x: 2}]
}

// Excess property checking
{
  type Options = {
    baseURL: string;
    cacheSize?: number;
    tier?: 'prod' | 'dev';
    badTier?: string;
  };

  class API {
    constructor(private options: Options) {}
  }

  // Correct instantiation
  new API({
    baseURL: 'https://api.mysite.com',
    tier: 'prod'
  });

  // Incorrect instantiation causing an error due to 'badTier' being unrecognized
  // new API({
  //   baseURL: 'https://api.mysite.com',
  //   badTier: 'prod' // Error TS2345: Argument of type '{baseURL: string; badTier: string}' is not assignable to parameter of type 'Options'.
  // })

  // Correct instantiation using a type assertion
  new API({
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
  } as Options);

  // Correct instantiation using a separate variable
  let badOptions = {
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
  };
  new API(badOptions);

  // Correct instantiation using an explicitly typed variable
  let options: Options = {
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
    // Error TS2322: Type '{baseURL: string; badTier: string}' is not assignable to type 'Options'.
    // need to define inner (TYPE Options code 41)
  };
  new API(options);
}

