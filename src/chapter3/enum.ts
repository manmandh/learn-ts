enum Language {
  English = 0,
  Spanish = 1,
  Russian = 2
}
let myFirstLanguage = Language.Russian // Language
let mySecondLanguage = Language['English'] // Language

enum Color {
  Red = '#c10000',
  Blue = '#007ac1',
  Pink = 0xc10050, // A hexadecimal literal
  White = 255 // A decimal literal
}
let red = Color.Red // Color
let pink = Color.Pink // Color

{
  const enum Flippable {
    Burger,
    Chair,
    Cup,
    Skateboard,
    Table
  }
  function flip(f: Flippable) {
    return 'flipped it'
  }
  flip(Flippable.Chair) // 'flipped it'
  flip(Flippable.Cup) // 'flipped it'
  flip(1) // 'flipped it' (!!!)
}
