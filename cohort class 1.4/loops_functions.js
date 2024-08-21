/// here we will learn about loops, functions and callbacks in ddetail.js

// 1. Loops(for loop is mostly used , while and do while are also used)

let ans = 0;
for (let i = 0; i < 10; i++) {
  ans += i;
}
console.log(ans);

//function is used to maintain the DRY process or dont repeat yourself

function fun() {
  console.log("This is a function");
}
fun();

//function with arguments

function fun2(a, b) {
  return a + b;
}
console.log(fun2(5, 6));

//function with default arguments

function fun3(a, b = 5) {
  return a + b;
}
console.log(fun3(5));

//examle of dry process

//without function

let n = 100;
let ans1 = 0;

for (let i = 0; i <= n; i++) {
  ans1 += i;
}
console.log(ans1);
// so here we are repeating the same work again and again just with different no instead of this we can create a function and call it for different no
let n1 = 10;
let ans2 = 0;

for (let i = 0; i <= n1; i++) {
  ans2 += i;
}
console.log(ans2);

//with function

function sum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  return ans;
}
console.log(sum(100));
console.log(sum(10));
