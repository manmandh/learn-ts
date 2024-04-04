{

  class InvalidDateFormatError extends Error {
      constructor(message: string) {
          super(message);
          this.name = 'InvalidDateFormatError';
      }
  }

  class DateIsInTheFutureError extends Error {
      constructor(message: string) {
          super(message);
          this.name = 'DateIsInTheFutureError';
      }
  }

  function parse2(
    birthday: string
  ): Date | InvalidDateFormatError | DateIsInTheFutureError {
      let date = new Date(birthday);
      if (!isValid(date)) {
      return new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD');
    }
      if (date.getTime() > Date.now()) {
        return new DateIsInTheFutureError('Are you a timelord?');
      }
    return date;
  }

  function ask2(): string {
    return prompt('When is your birthday?') || '';
  }

  let result = parse2(ask2()); // Either a date or an error
  if (result instanceof InvalidDateFormatError) {
    console.error(result.message);
  } else if (result instanceof DateIsInTheFutureError) {
    console.info(result.message);
  } else {
      console.info('Date is', (result as Date).toISOString());
  }

}
