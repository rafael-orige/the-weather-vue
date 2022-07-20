export default function dayOfTheWeek(day, month, year) {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return weekday[new Date(`${day}/${month}/${year}`)];
}
