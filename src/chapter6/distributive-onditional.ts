{
  type Without<T, U> = T extends U ? never : T;
  type A = Without<boolean | number | string, boolean>; // Result: number | string
}
