function squareOf(n: number) {
  return n * n;
}

const result = squareOf(5);
console.log(result);

console.log(squareOf(2));

// console.log(squareOf('z'));
// Error TS2345: Argument of type '"z"' is not assignable to
// parameter of type 'number'.
