function dayOfYear(date) {
  const [year, month, day] = date.split('-').map(Number);
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  if (isLeap) daysInMonth[1] = 29;
  let dayOfYear = 0;
  for (let i = 0; i < month - 1; i++) {
    dayOfYear += daysInMonth[i];
  }
  dayOfYear += day;
  return dayOfYear;
}