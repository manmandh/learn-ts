{
  type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
  type Day = Weekday | 'Sat' | 'Sun';

  function getNextDay(w: Weekday): Day {
    switch (w) {
      case 'Mon': return 'Tue';
      case 'Tue': return 'Wed';
      case 'Wed': return 'Thu';
      case 'Thu': return 'Fri';
      case 'Fri': return 'Sat';
      // Sat and Sun are already included in the Day type
      default:
        // This handles any unexpected inputs
        throw new Error('Invalid weekday');
    }
  }
}
