// var a = 1;
// a = 2;
// console.log(a);

// let a = 1;
// a = 2;
// console.log(a);

// const a = 1; //error 
// a = 2;
// console.log(a);

let name = "Mark";
let age = 20;
let isMarried = false;

if (isMarried) {
    console.log(`this person named ${name} is married`);
}
else {
    console.log(`this person named ${name} is not married`);
}

/*let ans = 0;
for (let i = 0; i <= 10000000000000000000; i++) {
    ans += i;
    console.log(ans);
}
console.log(ans);*/


for (let i = 0; i <= 1000; i++) {
    console.log(i);
}

const arr = [];
for (let i = 0; i <= 10; i++) {
    if(i % 2 == 0) {
        arr.push(i);// we are using push function to push the even nos in array but if we dont do in this way then we have to do two loops onw is for integers for even-odd check and another is for the array iteration
    }
}
console.log(arr);

const personArray =["subhadeep","banerjee","male","developer"]
console.log(personArray[0]);
console.log(personArray[1]);
console.log(personArray[2]);
console.log(personArray[3]);

const ages =[1,28,23,34,25];
let biggest = ages[0];
// const evenAges=[];
for(let i=0;i<ages.length;i++){
   if(ages[i]>biggest) {
    biggest = ages[i];
    // console.log(ages[i]);
    // evenAges.push(ages[i]);
    }
}
 console.log(biggest);

const personArray1 =["harkirat","raman","priya"];
const genderArray=["male","male","female"];

for(let i=0;i<personArray1.length;i++){ //condition on genders array and printing on persons array
    if(genderArray[i]=="male"){
        console.log(personArray1[i]);
    }
}

//object

const user1 ={
    firstName:"harkirat",
    age:20,
    gender:"male",

}
// console.log(user1["firstName"]);
// console.log(user1["gender"]);
// console.log(user1["age"]);

console.log(user1.firstName);
console.log(user1.gender);
console.log(user1.age); 

// we have done array of no like const arr=[10,2,3,4,5]; now we will do array of objects

//instead of creating different arrays for name ,age, gender we will create objects of diiferent users and put all in a single array

const userArray =[{
    name:"harkirat",
    age:20,
    gender:"male",
    favNum:[20,22,23,25],
    metadata:{
        address:"kathmandu",
        city:"kathmandu",
        country:"nepal",
    }
},{
    name:"raman",
    age:21,
    gender:"male",
    favNum:[30,32,33,35],
    metadata:{
        address:"lalitpur",
        city:"lalitpur",
        country:"nepal",
    }
},{
    name:"priya",
    age:22,
    gender:"female",
    favNum:[50,52,53,55], //example of array inside a object
    metadata:{            // example of object in object
        city:"kolkata",
        country:"india",
    }
}]

 console.log(userArray[0].age);

for(var i=1; i<userArray.length; i++){
    if(userArray[i]["gender"]=="male"){
        console.log(userArray[i]["name"]);
    }
}

for(var i=0; i<userArray.length; i++){  // [] method is boring
    if(userArray[i].metadata.country=="india"){
        console.log(userArray[i].name);
    }
}

/* reverse elements of array*/

const arr23=[10,5,8,6,85,36,25,74,52,64,12,43,23,13,21,32,35,24,26,47,48,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
const ans23=[];let j=0;
for(let i=arr23.length-1; i>=0; i--){
    // ans[j++]=arr[i];    
    ans23.push(arr23[i]);
}
console.log(ans23);

//functions
// first example : sum of two numbers

function sum(a,b){  // a,b are parameters
    return a+b;
}

console.log(`the sum of 10 and 20 is ${sum(10,20)}`); // sum(10,20));*/

//callback functions

sum((a,b,fnToCall,fnForPassive)=>{ // fnToCall,fnForPassive are just like other parameters like a,b
    const result = a+b;
    fnToCall(result);
    fnForPassive(result);}
);

function displayResult(data){
    console.log(`Result of the sum of ${data}`);
}

function displayResultPassive(data){
    console.log(`Sum's result is ${data}`);
}

sum(2,3,displayResult,displayResultPassive); // callbcks are when you pass a function as an argument to another function



function calculateArithmetic(a,b,type){
        if(type=="sum"){
            return a+b;
        }else if(type=="sub"){
            return a-b;
        }else if(type=="mul"){
            return a*b;
        }else if(type=="div"){
            return a/b;
        }
}

console.log(calculateArithmetic(10,20,"div"));

/*function calculateArithmetic(a,b,arithmeticFinalFunction){
    return arithmeticFinalFunction(a,b);
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const ans1 = calculateArithmetic(10,20,sub);
console.log(ans1); */

// setTimeout function is a function that takes a function as an argument and executes it after a certain time for setTimeout function we have to pass a function and a time to setTimeout function

setTimeout(helloWorld,3000); // 3000ms = 3s

function helloWorld(){
    console.log("hello");
}

// setInterval function is a function that takes a function as an argument and executes it after a certain time for setInterval function we have to pass a function and a time to setInterval function

setInterval(helloWorld,3000); // 3000ms = 3s

function helloWorld(){
    console.log("hello");
}

// setTimeout and setInterval are asynchronous functions


/*setInterval(function(){   // It looks like you have a JavaScript code snippet that uses setInterval to log a countdown from 30 to 0 with a delay of 2000 milliseconds (2 seconds) between each log. However, there's an issue with your code. The variable i is declared inside the setInterval function, so it will be reinitialized to 30 every time the interval function is called. As a result, it will always log 30.


    let i=30;
    if(i>=0){
        console.log(i--);
    }

},2000);*/


let l = 30;     // correct soln ::: with the help of closure

const it = setInterval(function() {
    if (l >= 0) {
        console.log(l--);
    }else {
        clearInterval(it);
      }
}, 200);

    
// this is another soln:: with the help of closure

let count = 30;
const countdown = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(countdown);
  }
}, 1000);


/*The setInterval function creates a closure, capturing the reference to the variable count. Therefore, even though the setInterval function itself doesn't "remember" the value of count, the closure retains access to the changing value of count due to the lexical scoping rules in JavaScript.

In simpler terms, the anonymous function passed to setInterval maintains access to the count variable and reflects its updated value in each iteration. This is a result of how closures work in JavaScript. */

    
// always remember the setInterval function and while loop should not be used together


//Question 2 first solution
const startTime1 = Date.now();

setTimeout(() => {
    const endTime1 = Date.now();
    const actualTimeToComplete = endTime1 - startTime1;
    console.log(`Expected time to complete: 1000 ms, Actual time to complete: ${actualTimeToComplete} ms`);
}, 1000);
// 2. Calculate the time it takes between a setTimeout call and the inner function actually running

  // Schedule the execution of myFunction after 1000 milliseconds (1 second)
  //setTimeout(myFunction, 1000);
//In this example, the myFunction will be executed after a delay of 1000 milliseconds (1 second). However, it's not guaranteed that it will be exactly 1 second. The actual time it takes can be influenced by other tasks in the event loop and the overall performance of the environment.

//If you need precise timing, you may want to use the performance.now() method to measure the elapsed time. Here's an example:
  const startTime = performance.now();
  setTimeout(function(){
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    console.log(`Inner function executed after ${elapsedTime} milliseconds which is the total time (delay + fn exec time)`);
  }, 1000);
// Schedule the execution of myFunction after 1000 milliseconds (1 second)

//The setTimeout function in JavaScript is used to schedule the execution of a function after a specified delay in milliseconds. It's important to note that the actual time it takes for the inner function to run after the specified delay may vary due to factors such as the browser's event loop and the current workload on the JavaScript runtime.

// The browser event loop is a fundamental concept in JavaScript and web development. It is part of the runtime environment provided by web browsers to execute JavaScript code in a non-blocking, asynchronous manner. The event loop is responsible for managing the execution of code, handling events, and maintaining the flow of control in a web page.

/*Here's a simplified explanation of how the browser event loop works:

1. **Execution Stack (Call Stack):** JavaScript code is executed in a single-threaded environment. The call stack is a data structure that keeps track of the currently executing function or block of code. When a function is called, it is pushed onto the stack, and when it completes, it is popped off the stack.

2. **Web APIs and Callback Queue:** In addition to the call stack, browsers provide Web APIs (such as `setTimeout`, XMLHttpRequest, and others) that allow JavaScript to interact with the browser environment and perform asynchronous operations. When an asynchronous operation is initiated (e.g., a `setTimeout` function), it is handed off to the browser's Web API, and the rest of the code continues to execute.

3. **Callback Queue (Message Queue):** When an asynchronous operation is completed, a message is placed in the callback queue. The callback queue holds messages (callbacks) for functions that are ready to be executed.

4. **Event Loop:** The event loop constantly checks the callback queue to see if there are any messages waiting to be processed. If the call stack is empty, the message at the front of the queue is pushed onto the stack and executed.

This process repeats continuously, allowing JavaScript to handle asynchronous operations without blocking the main thread. It enables the development of responsive and efficient web applications.

Here's a simple example using `setTimeout` to illustrate the event loop in action:

In this example, "Start" and "End" will be logged first, and after a delay of 2000 milliseconds, "Inside setTimeout callback" will be logged. The asynchronous nature of `setTimeout` allows other code to continue running while waiting for the timeout to complete.*/

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout callback");
}, 2000);

console.log("End");

//3. Create a terminal clock (HH:MM:SS)
//Question 3
function currentTimeDisplay() {
    const timeRightNow = new Date();
    console.log(timeRightNow.toLocaleTimeString());
}
setInterval(currentTimeDisplay, 1000);

// toLocaleTimeString() function returns a string with a language sensitive representation of the time portion of this date.
// new Date() function is used to get the current date and time in JavaScript. It returns a Date object representing the current date and time in the local time zone of the user's browser.