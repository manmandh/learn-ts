let a: number = 1 // a is a number
let b: string = 'hello' // b is a string
let c: boolean[] = [true, false] // c is an array of booleans

let e = 1 // e is a number
let d = 'hello' // d is a string
let f = [true, false] // f is an array of booleans

/*3 + [1];
  // Error TS2365: Operator '+' cannot be applied to
  // types '3' and 'number[]'.
*/
const g = (3).toString() + [1].toString() // evaluates to "31"
console.log(g);

let m = 1 + 2
let n = m + 3
let o = {
  apple: m,
  banana: n
}
let p = o.apple * 4
console.log(p);
