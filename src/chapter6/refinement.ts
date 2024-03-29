{
  // We use a union of string literals to describe
  // the possible values a CSS unit can have
  type Unit = 'cm' | 'px' | '%';

  // Enumerate the units
  let units: Unit[] = ['cm', 'px', '%'];

  // Check each unit, and return null if there is no match
  function parseUnit(value: string): Unit | null {
      for (let i = 0; i < units.length; i++) {
          if (value.endsWith(units[i])) {
              return units[i];
          }
      }
      return null;
  }

  type Width = {
      unit: Unit;
      value: number;
  }

  function parseWidth(width: number | string | null | undefined): Width | null {
    // If width is null or undefined, return early
    if (width == null) {
        return null;
    }
    // If width is a number, default to pixels
    if (typeof width === 'number') {
        return { unit: 'px', value: width };
    }
    // Try to parse a unit from width
    let unit = parseUnit(width);
    if (unit) {
        return { unit, value: parseFloat(width) };
    }
    // Otherwise, return null
    return null;
  }

  // Example usage
  console.log(parseWidth(100)); // Output: { unit: 'px', value: 100 }
  console.log(parseWidth('50%')); // Output: { unit: '%', value: 50 }
  console.log(parseWidth('10em')); // Output: null (unsupported unit)
  console.log(parseWidth(null)); // Output: null
  console.log(parseWidth(undefined)); // Output: null
}

{
  type UserTextEvent = {value: string, target: HTMLInputElement}
  type UserMouseEvent = {value: [number, number], target: HTMLElement}
  type UserEvent = UserTextEvent | UserMouseEvent
  function handle(event: UserEvent) {
  if (typeof event.value === 'string') {
  event.value // string
  event.target // HTMLInputElement | HTMLElement (!!!)
  return
  }
  event.value // [number, number]
  event.target // HTMLInputElement | HTMLElement (!!!)
  }
}
