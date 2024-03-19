interface Animal {
  readonly name: string
  eat(food: string): void
  sleep(hours: number): void
}

interface Feline {
  meow(): void
}

class Cat implements Animal, Feline {
  name = 'Whiskers'
  eat(food: string) {
    console.info('Ate some', food, '. Mmm!')
  }
  sleep(hours: number) {
    console.info('Slept for', hours, 'hours')
  }
  meow() {
    console.info('Meow')
  }
}

const myCat: Cat = new Cat();
console.log("Name:", myCat.name)
myCat.eat("fish");
myCat.sleep(10);
myCat.meow();
