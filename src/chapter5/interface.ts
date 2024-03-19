{
  interface Sushi {
    calories: number
    salty: boolean
    tasty: boolean
  }

  interface Food {
    calories: number
    tasty: boolean
  }
  interface Sushi extends Food {
    salty: boolean
  }
  interface Cake extends Food {
    sweet: boolean
  }

  //Different type aliases and interfaces
  type A = number
  type B = A | string

  interface C {
    good(x: number): string
    bad(x: number): string
  }
  /*

  interface D extends C {
    good(x: string | number): string
    bad(x: string): string
    // Error TS2430: Interface 'D' incorrectly extends
  } // interface 'B'. Type 'number' is not assignable
  // to type 'string'.
  */
}
