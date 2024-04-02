{
  type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
  type Day = Weekday | 'Sat' | 'Sun';

  // Define nextDay using mapped type
  let nextDay: { [K in Weekday]: Day } = {
      Mon: 'Tue',
      Tue: 'Wed',
      Wed: 'Thu',
      Thu: 'Fri',
      Fri: 'Sat'
  };

  // Completing the mapping for weekends
  nextDay = {
      ...nextDay,
  };
}
