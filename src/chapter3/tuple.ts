{
  // An array of train fares, which sometimes vary depending on direction
  let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
  ]
  // Equivalently:
  let moreTrainFares: ([number] | [number, number])[] = [
  // ...
  ]
  // A list of strings with at least 1 element
  let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']
  // A heterogeneous list
  let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']
}

{
  type A = readonly string[] // readonly string[]
  type B = ReadonlyArray<string> // readonly string[]
  type C = Readonly<string[]> // readonly string[]
  type D = readonly [number, string] // readonly [number, string]
  type E = Readonly<[number, string]> // readonly [number, string]
}
