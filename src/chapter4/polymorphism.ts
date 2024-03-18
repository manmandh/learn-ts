type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[]
}

interface Array<T> {
  filter(
    callbackfn: (value: T, index: number, array: T[]) => any,
    thisArg?: any
  ): T[]
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[]
}
