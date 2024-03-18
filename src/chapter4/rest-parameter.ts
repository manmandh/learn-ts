{
  function sum(numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
  }
  sum([1, 2, 3]) // evaluates to 6
}

//reduce
{
  function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
  }
  sumVariadicSafe(1, 2, 3) // evaluates to 6
}

interface Console {
  log(message?: any, ...optionalParams: any[]): void
}
