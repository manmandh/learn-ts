{
  function ask() {
    return prompt('When is your birthday?');
  }

  function parse(birthday: string): Date | null {
    let date = new Date(birthday);
    if (!isValid(date)) {
        return null;
    }
    return date;
  }

  // Checks if the given date is valid
  function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime());
  }

  let userInput = ask();
  if (userInput) {
    let date = parse(userInput);
    if (date) {
        console.info('Date is', date.toISOString());
    } else {
        console.error('Error parsing date');
    }
  } else {
    console.error('Invalid input');
  }

}
