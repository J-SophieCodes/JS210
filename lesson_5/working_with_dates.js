function dateSuffix(dateObj) {
  let date = dateObj.getDate();
  let suffix;

  switch (true) {
    case date === 11:
    case date === 12:
    case date === 13:
      suffix = 'th';
      break;
    case date % 10 === 1:
      suffix = 'st';
      break;
    case date % 10 === 2:
      suffix = 'nd';
      break;
    case date % 10 === 3:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
  }

  return String(date) + suffix;
}

function formattedMonth(dateObj) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[dateObj.getMonth()];
}

function formattedDay(dateObj) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[dateObj.getDay()];
}

function formattedDate(dateObj) {
  let month = formattedMonth(dateObj);
  let day = formattedDay(dateObj);
  let date = dateSuffix(dateObj);
  return `${day}, ${month} ${date}, ${dateObj.getFullYear()}`;
}

function formatTime(dateObj) {
  let hour = String(dateObj.getHours()).padStart(2, '0');
  let min = String(dateObj.getMinutes()).padStart(2, '0');

  return hour + ":" + min;
}

let today = new Date();
console.log(`Today's date is ${formattedDate(today)}`);
console.log(`The time is ${formatTime(today)}`);

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
console.log(`Tomorrow's date is ${formattedDate(tomorrow)}`);


let nextWeek = new Date(today.getTime());
nextWeek.setDate(nextWeek.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString());