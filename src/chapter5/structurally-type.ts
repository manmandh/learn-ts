{
  class Zebra {
    trot() {
    // ...
    }
  }
  class Poodle {
    trot() {
    // ...
    }
  }
  function ambleAround(animal: Zebra) {
    animal.trot()
  }
  let zebra = new Zebra
  let poodle = new Poodle
  ambleAround(zebra) // OK
  ambleAround(poodle) // OK
}


