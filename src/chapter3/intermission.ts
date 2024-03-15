// Type aliases
{
  type Age = number
  type Person = {
    name: string
    age: Age
  }

  let age = 55
    let driver: Person = {
    name: 'James May',
    age: age
  }
}

//you can’t declare a type twice
// type Color = 'red'
// type Color = 'blue'
{
  type Color = 'red'
  let x = Math.random() < .5
  if (x) {
    type Color = 'blue' // This shadows the Color declared above.
    let b: Color = 'blue'
  } else {
    let c: Color = 'red'
  }
}

// Union and intersection types
{
  type Cat = {name: string, purrs: boolean}
  type Dog = {name: string, barks: boolean, wags: boolean}
  type CatOrDogOrBoth = Cat | Dog
  type CatAndDog = Cat & Dog

  // Cat
  let a: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true
  }

  // Dog
  a = {
    name: 'Domino',
    barks: true,
    wags: true
  }

  // Both
  a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
  }

  let b: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
  }

  function trueOrNull(isTrue: boolean) {
    if (isTrue) {
      return 'true'
    }
    return null
  }

  type Returns = string | null
}
