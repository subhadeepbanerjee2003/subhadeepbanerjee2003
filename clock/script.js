/*showTime(() => {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    console.log(`${hour}:${minute}:${second}`);}
)

setInterval(showTime, 1000);*/

//This snippet will result in an error because the arrow function syntax is not suitable for the setInterval callback. The arrow function returns undefined, and setInterval expects a function reference.
//Since this arrow function was intended to be used as a callback for setInterval, it should ideally have been designed to return a meaningful value or perform an action without relying on its return value. In this case, it was more appropriate to use a regular function declaration for the showTime function.

function showTime() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  const isAm = hour < 12 ? "AM" : "PM";
  const time = `${hour}:${minute}:${second} ${isAm}`;
  document.getElementById("time").innerText = time;
}

setInterval(showTime, 1000); // without () after showTime means that we are passing the function as a reference and not calling it
//This snippet is correct, and it will work as expected. The showTime function is defined using the traditional function declaration syntax, and setInterval can properly use it as a callback.
// for setInterval we need to pass a function reference and not call the function. If we call the function, it will execute immediately and the setInterval will not work as expected.
