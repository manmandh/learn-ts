// 1.Shape and array variance

// An existing user that we got from the server
type ExistingUser = {
  id: number
  name: string
}
// A new user that hasn't been saved to the server yet
type NewUser = {
  name: string
}

function deleteUser(user: {id?: number, name: string}) {
  delete user.id
}
let existingUser: ExistingUser = {
  id: 123456,
  name: 'Ima User'
}

deleteUser(existingUser)

// 2.Function variance

{
  class Animal {}
  class Bird extends Animal {
      chirp() {}
  }
  class Crow extends Bird {
      caw() {}
  }

  function chirp(bird: Bird): Bird {
      bird.chirp();
      return bird;
  }

  function clone(f: (b: Bird) => Bird): void {
    let parent = new Bird
    let babyBird = f(parent)
    babyBird.chirp()
  }

  function birdToBird(b: Bird): Bird {
      // Example implementation of birdToBird function
      return b;
  }

  clone(birdToBird); // OK
  function crowToBird(c: Crow): Bird {
    c.caw()
    return new Bird
  }
}
