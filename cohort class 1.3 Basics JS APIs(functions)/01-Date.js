function dateMethods() {
  const currentDate = new Date(); // the Date class is indeed a built-in or predefined class for working with dates and times.
  console.log("Current Date: ", currentDate);

  //getting various component5s of the date

  console.log("Date: ", currentDate.getDate());
  console.log("Month: ", currentDate.getMonth() + 1); // Months are zero-indexed so adding +1 to month

  console.log("Year: ", currentDate.getFullYear());
  console.log("Hours: ", currentDate.getHours());
  console.log("Minutes: ", currentDate.getMinutes());
  console.log("Seconds: ", currentDate.getSeconds());

  // Setting various components of the date
  currentDate.setFullYear(2023);
  console.log("after setting full year: ", currentDate); // you can also customise it by setting the month, day, hours, minutes, seconds, milliseconds

  currentDate.setMonth(5); // setting month to june as 0 indexed so 5 given
  console.log("after setting month: ", currentDate);

  // getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds: ", currentDate.getTime());

  //creating a new date
  const newDate = new Date(2023, 5, 15); // 5th june 2023
  console.log("new date: ", newDate);
}

dateMethods();

// important and interesting fact

const currentDateNew = new Date();
console.log("time in milliseconds since 1970: ", currentDateNew.getTime);

// 1970 epoch timestamp - this 1970 is the checkpoint after which the time is calculated in milliseconds

// timesamp btw before and after calling a func  with a example

function calcSum() {
  let a = 0;
  for (let i = 0; i < 1000000000; i++) {
    a = a + i;
  }
  return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

calcSum();

const AfterDate = new Date();
const AfterTimeInMs = AfterDate.getTime(); // time in milliseconds since 1970

console.log(AfterTimeInMs - beforeTimeInMs);
