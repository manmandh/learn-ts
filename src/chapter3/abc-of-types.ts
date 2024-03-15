// ANY
let h: any = 666 // any
let j: any = ['danger'] // any
let k = h + j // any

console.log(h)
console.log(j)
console.log(k)

// UNKNOWN
let unKnown: unknown = 30
let check = unKnown === 123

// let total = unKnown + 10
// Error TS2571: Object is of type 'unknown'.

if (typeof unKnown === 'number'){
  let ans = unKnown + 10
  console.log(ans);
}

// BOOLEAN
let q = true // boolean
var r = false // boolean
const s = true // true
let t: boolean = true // boolean
let u: true = true // true
console.log(q, r, s, t, u);

// let v: true = false

// Error TS2322: Type 'false' is not assignable
// to type 'true'.


// NUMBER
{
  let a = 1234; // number
  var b = Infinity * 0.10; // number
  const c = 5678; // 5678
  let d = a < b; // boolean
  let e: number = 100; // number
  let f: 26.218 = 26.218; // 26.218
  //let g: 26.218 = 10; // Error TS2322: Type '10' is not assignable
}

// BIGINT
{
  let a = 1234n // bigint
  const b = 5678n // 5678n
  let c = a + b // bigint
  //var also yes
  let d = a < 1235 // boolean

  // let e = 88.5n

  // Error TS1353: A bigint literal must be an integer.

  let f: bigint = 100n // bigint
  let g: 100n = 100n // 100n

  // let h: bigint = 100

  // Error TS2322: Type '100' is not assignable
  // to type 'bigint'.
}

//STRING
{
  // var b:string  = "billy"

  // Subsequent variable declarations must have the same type.
  // Variable 'b' must be of type 'number', but here has type 'string'.ts(2403)

  let a = 'hello' // string
  const c = '!' // '!'
  let d = a + ' ' + b + c // string
  let e: string = 'zoom' // string
  let f: 'john' = 'john' // 'john'

  // let g: 'john' = 'zoe'

  // Error TS2322: Type "zoe" is not assignable
  // to type "john".
}

// SYMBOL
{
  let a = Symbol('a') // symbol
  let b: symbol = Symbol('b') // symbol
  let c = a === b // boolean

  // let d = a + 'x'
  // Error TS2469: The '+' operator cannot be applied
  // to type 'symbol'.
  const e = Symbol('e') // typeof e
  const f: unique symbol = Symbol('f') // typeof f
  console.log(f);

  //let g: unique symbol = Symbol('f')
  // Error TS1332: A variable whose type is a
  // 'unique symbol' type must be 'const'.

  let h = e === e // boolean
  // let i = e === f
  // Error TS2367: This condition will always return
  // 'false' since the types 'unique symbol' and
  // 'unique symbol' have no overlap.
}
