{
  type State = {
   [key: string]: string
  }
  class StringDatabase {
    state: State = {}
    get(key: string): string | null {
      return key in this.state ? this.state[key] : null
    }
    set(key: string, value: string): void {
      this.state[key] = value
    }
    static from(state: State) {
      let db = new StringDatabase
      for (let key in state) {
        db.set(key, state[key])
      }
      return db
    }
  }
  interface StringDatabase {
    state: State
    get(key: string): string | null
    set(key: string, value: string): void
  }

  interface StringDatabaseConstructor {
    new(state?: State): StringDatabase
    from(state: State): StringDatabase
  }
}

