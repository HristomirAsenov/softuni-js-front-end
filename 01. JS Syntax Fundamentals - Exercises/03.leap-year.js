function leapYear(year) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  console.log(isLeap ? "yes" : "no");
}

// leapYear();  call me (and don't forget the parameters :)
