{
  let a = [1, 2, 3] // number[]
  let b = ['a', 'b'] // string[]
  let c: string[] = ['a'] // string[]
  let d = [1, 'a'] // (string | number)[]
  const e = [2, 'b'] // (string | number)[]

  let f = ['red']
  f.push('blue')

  // f.push(true)
  // Error TS2345: Argument of type 'true' is not
  // assignable to parameter of type 'string'.

  // let g = [] // any[]
  // g.push(1) // number[]
  // g.push('red')

  let h: number[] = [] // number[]
  h.push(1) // number[]

  // h.push('red')
  // Error TS2345: Argument of type '"red"' is not
  // assignable to parameter of type 'number'.
}

{
  let d = [1, 'a']
  d.map(a => {
    if (typeof a === 'number') {
      return a * 3
    }
    return a.toUpperCase()
  })
}

{
  function buildArray() {
    let a = [] // any[]
    // a.push(1) // number[]
    // a.push('x') // (string | number)[]
    return a
  }

  let myArray = buildArray() // (string | number)[]
  // myArray.push(true)
  // Error 2345: Argument of type 'true' is not
  // assignable to parameter of type 'string | number'.
}
