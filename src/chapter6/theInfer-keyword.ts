{
  // Using conditional type without infer
  type ElementType<T> = T extends unknown[] ? T[number] : T;
  type A = ElementType<number[]>; // number

  // Using conditional type with infer
  type ElementType2<T> = T extends (infer U)[] ? U : T;
  type B = ElementType2<number[]>; // number

  // Example using SecondArg
  type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never;

  // Get the type of Array.slice
  type F = typeof Array['prototype']['slice'];

  type A2 = SecondArg<F>; // number | undefined
  const a2Value: A2 = 5 as A2;
  console.log("Result of SecondArg<F>:", typeof a2Value);
}
