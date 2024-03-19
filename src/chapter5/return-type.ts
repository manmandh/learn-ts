let set = new Set
set.add(1).add(2).add(3)
set.has(2) // true
set.has(4) // false

//Define
{
  class MutableSet extends Set {
    delete(value: number): boolean {
      return true;
    }
  }
}
