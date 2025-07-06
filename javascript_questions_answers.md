# ✨ JavaScript based interview questions

## ✅ JavaScript Basics
### _#01._ 🟡 What is JavaScript and why is it used?

JavaScript হলো একটি উচ্চ-স্তরের, ইন্টারপ্রিটেড প্রোগ্রামিং ল্যাঙ্গুয়েজ যা মূলত ওয়েব ডেভেলপমেন্টে ব্যবহৃত হয়। এটি ওয়েব পেজে ইন্টারঅ্যাক্টিভিটি যোগ করে, যেমন ব্যবহারকারীর ইনপুটের প্রতিক্রিয়া, ডায়নামিক কনটেন্ট আপডেট, এবং জটিল ওয়েব অ্যাপ্লিকেশন তৈরি। এটি ক্লায়েন্ট-সাইড এবং সার্ভার-সাইড (Node.js এর মাধ্যমে) উভয় ক্ষেত্রেই কাজ করে। এর ব্রাউজার সামঞ্জস্যতা এবং নমনীয়তার কারণে এটি অত্যন্ত জনপ্রিয়।

### _#02._ 🟡 What is the difference between JavaScript and other programming languages?

JavaScript প্রাথমিকভাবে ওয়েব ডেভেলপমেন্টের জন্য ডিজাইন করা হয়েছে, যেখানে Python বা Java এর মতো ল্যাঙ্গুয়েজ ডেটা সায়েন্স, এন্টারপ্রাইজ অ্যাপ্লিকেশন ইত্যাদির জন্য ব্যবহৃত হয়। JavaScript ইন্টারপ্রিটেড এবং ডায়নামিক টাইপিং সমর্থন করে, যেখানে C++ বা Java কম্পাইল্ড এবং স্ট্যাটিক টাইপিং ব্যবহার করে। এটি সরাসরি ব্রাউজারে চলে, যা অন্যান্য ল্যাঙ্গুয়েজের ক্ষেত্রে সাধারণ নয়। তবে, Node.js এর মাধ্যমে JavaScript সার্ভার-সাইডেও ব্যবহার করা যায়।

### _#03._ 🟡 What is the difference between null, undefined, and NaN?

- **null**: এটি একটি ইচ্ছাকৃত মান যা নির্দেশ করে কোনো ভ্যারিয়েবলের মান শূন্য বা অনুপস্থিত। ডেভেলপার এটি সেট করে। উদাহরণ: `let x = null;`  
- **undefined**: এটি নির্দেশ করে যে একটি ভ্যারিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু মান নির্ধারিত হয়নি। উদাহরণ: `let x;`  
- **NaN**: "Not-a-Number" বোঝায়, যা ম্যাথমেটিক্যাল অপারেশনের ভুল ফলাফলের ক্ষেত্রে পাওয়া যায়। উদাহরণ: `0 / 0` ফলাফল হিসেবে `NaN` দেয়।

### _#04._ 🟡 What is the difference between var, let, and const?

- **var**: ফাংশন স্কোপড, হোইস্টিং সমর্থন করে, এবং পুনরায় ডিক্লেয়ার ও আপডেট করা যায়। তবে, এটি স্কোপ নিয়ে সমস্যা সৃষ্টি করতে পারে।  
- **let**: ব্লক স্কোপড, হোইস্টিং হয় কিন্তু ইনিশিয়ালাইজেশন ছাড়া অ্যাক্সেস করলে ত্রুটি দেয়। পুনরায় আপডেট করা যায় কিন্তু ডিক্লেয়ার করা যায় না।  
- **const**: ব্লক স্কোপড, মান পুনরায় আপডেট বা ডিক্লেয়ার করা যায় না। তবে, অবজেক্ট বা অ্যারের অভ্যন্তরীণ মান পরিবর্তন করা যায়। উদাহরণ: `const obj = {}; obj.key = 'value';`

### _#05._ 🟡 What is scope in JavaScript?

স্কোপ হলো JavaScript এর একটি ধারণা যা নির্ধারণ করে কোন ভ্যারিয়েবল বা ফাংশন কোথায় অ্যাক্সেসযোগ্য। এটি তিন প্রকার:
- **গ্লোবাল স্কোপ**: সর্বত্র অ্যাক্সেসযোগ্য।  
- **ফাংশন স্কোপ**: শুধুমাত্র ফাংশনের মধ্যে অ্যাক্সেসযোগ্য।  
- **ব্লক স্কোপ**: `{}` ব্লকের মধ্যে সীমাবদ্ধ (let/const এর ক্ষেত্রে)।  
স্কোপ ভ্যারিয়েবলের দৃশ্যমানতা নিয়ন্ত্রণ করে এবং নামের দ্বন্দ্ব এড়ায়।

### _#06._ 🟡 What is lexical scope?

লেক্সিকাল স্কোপ হলো JavaScript এর একটি নিয়ম যেখানে একটি ফাংশনের স্কোপ তার ডিক্লেয়ারেশনের সময় নির্ধারিত হয়, রানটাইমে নয়। এটি ফাংশনের নেস্টেড স্ট্রাকচারের উপর নির্ভর করে। উদাহরণস্বরূপ, একটি অভ্যন্তরীণ ফাংশন তার বাইরের ফাংশনের ভ্যারিয়েবল অ্যাক্সেস করতে পারে। এটি ক্লোজার তৈরির জন্য অত্যন্ত গুরুত্বপূর্ণ।

## ✅ Functions and Execution
### _#07._ 🟡 What is a function and how does it work?

ফাংশন হলো JavaScript-এর একটি ব্লক অফ কোড যা নির্দিষ্ট কাজ সম্পাদন করে এবং প্রয়োজনে পুনরায় ব্যবহার করা যায়। এটি সাধারণত ইনপুট (প্যারামিটার) গ্রহণ করে, কাজ সম্পাদন করে এবং ফলাফল (রিটার্ন ভ্যালু) ফেরত দেয়। ফাংশন ডিক্লেয়ার করা হয় `function` কীওয়ার্ড ব্যবহার করে। উদাহরণ: `function add(a, b) { return a + b; }`। এটি কল করা হলে, যেমন `add(2, 3)`, ফাংশনটি 5 ফেরত দেয়। ফাংশন কোডের পুনরাবৃত্তি কমায় এবং কোডকে সংগঠিত রাখে।

### _#08._ 🟡 What is the difference between a regular function and an arrow function?

নিয়মিত ফাংশন এবং অ্যারো ফাংশনের মধ্যে প্রধান পার্থক্য হলো:  
- **নিয়মিত ফাংশন**: `function` কীওয়ার্ড দিয়ে ডিক্লেয়ার করা হয়, নিজস্ব `this` বাইন্ডিং থাকে, এবং হোইস্টিং সমর্থন করে। উদাহরণ: `function myFunc() {}`  
- **অ্যারো ফাংশন**: ES6-এ প্রবর্তিত, সংক্ষিপ্ত সিনট্যাক্স (`() => {}`) ব্যবহার করে, নিজস্ব `this` থাকে না (লেক্সিকাল `this` গ্রহণ করে), এবং হোইস্টিং সমর্থন করে না। এটি কলব্যাক ফাংশন বা সংক্ষিপ্ত ফাংশনের জন্য উপযোগী। উদাহরণ: `const myFunc = () => {};`  
অ্যারো ফাংশন কনস্ট্রাক্টর হিসেবে ব্যবহার করা যায় না এবং `arguments` অবজেক্ট থাকে না।

### _#09._ 🟡 What is a callback function and how does it work?

কলব্যাক ফাংশন হলো এমন একটি ফাংশন যা অন্য ফাংশনের প্যারামিটার হিসেবে পাস করা হয় এবং নির্দিষ্ট কাজ শেষ হওয়ার পরে কল করা হয়। এটি অ্যাসিনক্রোনাস অপারেশন, যেমন টাইমার বা API কল, পরিচালনার জন্য ব্যবহৃত হয়। উদাহরণ: `setTimeout(() => { console.log("Delayed"); }, 1000);` এখানে কলব্যাক ফাংশন ১ সেকেন্ড পরে কল হয়। এটি ইভেন্ট হ্যান্ডলিং এবং অ্যাসিনক্রোনাস প্রোগ্রামিংয়ে গুরুত্বপূর্ণ ভূমিকা পালন করে।

### _#10._ 🟡 What is a higher-order function?

হায়ার-অর্ডার ফাংশন হলো এমন একটি ফাংশন যা অন্য ফাংশনকে প্যারামিটার হিসেবে গ্রহণ করে বা ফাংশন ফেরত দেয়। উদাহরণ: `Array.map()` একটি হায়ার-অর্ডার ফাংশন যা একটি কলব্যাক ফাংশন গ্রহণ করে। যেমন: `const numbers = [1, 2, 3]; const doubled = numbers.map(num => num * 2);` এখানে `map` হলো হায়ার-অর্ডার ফাংশন। এটি কোডের পুনঃব্যবহারযোগ্যতা এবং ফাংশনাল প্রোগ্রামিংয়ে সহায়তা করে।

### _#11._ 🟡 What is closure in JavaScript and how does it work?

ক্লোজার হলো JavaScript-এর একটি বৈশিষ্ট্য যেখানে একটি অভ্যন্তরীণ ফাংশন তার বাইরের ফাংশনের ভ্যারিয়েবল অ্যাক্সেস করতে পারে, এমনকি বাইরের ফাংশন কার্যকর হওয়ার পরেও। এটি লেক্সিকাল স্কোপের উপর ভিত্তি করে কাজ করে। উদাহরণ:  
```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```
এখানে `inner` ফাংশন `count` ভ্যারিয়েবলের রেফারেন্স ধরে রাখে। ক্লোজার ডেটা প্রাইভেসি এবং স্টেটফুল ফাংশন তৈরিতে ব্যবহৃত হয়।

## ✅ Behind the Scenes
### _#12._ 🟡 How does JavaScript work behind the scenes?

JavaScript একটি single-threaded, non-blocking ল্যাঙ্গুয়েজ যা V8 engine (Chrome-এ ব্যবহৃত) বা অন্যান্য ইঞ্জিনে চলে। এটি execution-এর সময় call stack, heap, এবং event loop ব্যবহার করে। Code execute হওয়ার সময়:  
1. **Call Stack**: Function calls track করে।  
2. **Heap**: Objects এবং dynamic data store হয়।  
3. **Event Loop**: Asynchronous tasks (যেমন setTimeout, API calls) manage করে।  
JavaScript code parse হয়ে abstract syntax tree (AST) তৈরি করে, যা bytecode-এ কম্পাইল হয়। Engine এটি execute করে, এবং asynchronous operations Web APIs (যেমন DOM, fetch) এর মাধ্যমে handle হয়। Event loop callback queue থেকে tasks নিয়ে call stack-এ push করে।

### _#13._ 🟡 What is the call stack and event loop?

- **Call Stack**: এটি একটি data structure যা function execution-এর track রাখে। যখন একটি function call হয়, তা stack-এ push হয়, এবং execution শেষ হলে pop হয়। উদাহরণ: `function a() { b(); } function b() {}` এ `a` call হলে stack-এ `a`, তারপর `b` যায়।  
- **Event Loop**: এটি asynchronous tasks manage করে। Call stack খালি হলে, event loop callback queue (যেমন setTimeout-এর callbacks) থেকে tasks নিয়ে stack-এ push করে। এটি Web APIs এবং JavaScript runtime-এর মধ্যে সেতুবন্ধন করে। উদাহরণ: `setTimeout(() => console.log('Hi'), 1000)` ১ সেকেন্ড পর callback queue-এ যায়, এবং event loop এটি execute করে।

### _#14._ 🟡 What is the difference between synchronous and asynchronous code?

- **Synchronous Code**: Line-by-line execute হয়, একটি operation শেষ না হওয়া পর্যন্ত পরেরটি wait করে। উদাহরণ: `let x = 1; console.log(x);` এটি তৎক্ষণাৎ চলে। Synchronous code blocking হয়, যা performance-এ প্রভাব ফেলতে পারে।  
- **Asynchronous Code**: Operations simultaneously চলতে পারে, এবং result-এর জন্য wait না করে পরের code execute হয়। উদাহরণ: `setTimeout(() => console.log('Async'), 0);` এখানে callback queue-এ যায়। Async code non-blocking, যা API calls বা I/O operations-এর জন্য উপযোগী। Promises, async/await এবং callbacks async code handle করে।

### _#15._ 🟡 What is the event loop, microtask, and macrotask?

- **Event Loop**: JavaScript-এর mechanism যা asynchronous tasks coordinate করে। Call stack খালি হলে, এটি microtask queue এবং macrotask queue থেকে tasks নিয়ে execute করে।  
- **Microtask**: High-priority tasks, যেমন Promise resolutions বা `queueMicrotask`। Microtasks macrotasks-এর আগে execute হয়। উদাহরণ: `Promise.resolve().then(() => console.log('Microtask'));`
- **Macrotask**: Lower-priority tasks, যেমন `setTimeout`, `setInterval`, বা I/O events। এগুলো task queue-তে থাকে। উদাহরণ: `setTimeout(() => console.log('Macrotask'), 0);`  
Event loop প্রথমে microtask queue খালি করে, তারপর একটি macrotask execute করে, এবং এই cycle চলতে থাকে। উদাহরণ: Promise-এর `.then` microtask হিসেবে আগে চলবে, তারপর `setTimeout` macrotask হিসেবে।

## ✅ Hoisting, this, and Object-related
### _#16._ 🟡 What is hoisting in JavaScript?

Hoisting হলো JavaScript-এর একটি behavior যেখানে variable এবং function declarations execution-এর আগে তাদের scope-এর শীর্ষে "hoisted" বা উঠে যায়। উদাহরণ: `console.log(x); var x = 5;` এটি `undefined` প্রিন্ট করে কারণ `var x` hoisted হয়, কিন্তু initialization হয় না। Function declarations পুরোপুরি hoisted হয়, যেমন: `foo(); function foo() { console.log('Hi'); }` কাজ করে। `let` এবং `const` hoisted হয় কিন্তু temporal dead zone-এ থাকে, তাই initialization-এর আগে access করলে error দেয়।

### _#17._ 🟡 What is the "this" keyword and how does it work in different contexts?

`this` keyword হলো JavaScript-এর একটি reference যা execution context-এর উপর নির্ভর করে। বিভিন্ন context-এ এটি ভিন্নভাবে কাজ করে:  
- **Global Context**: Browser-এ `this` হলো `window` object। উদাহরণ: `console.log(this); // window`  
- **Function Context**: Regular function-এ `this` global object (non-strict mode) বা `undefined` (strict mode)।  
- **Object Method**: Object-এর method-এ `this` সেই object-কে point করে। উদাহরণ: `const obj = { name: 'Test', getName() { return this.name; } }; console.log(obj.getName()); // Test`  
- **Constructor**: `new` দিয়ে call হলে `this` নতুন object-কে point করে।  
- **Arrow Function**: `this` lexical scope থেকে inherit করে, নিজস্ব `this` থাকে না।  
`call`, `apply`, `bind` দিয়ে `this` explicitly set করা যায়।

### _#18._ 🟡 What is the "new" keyword in JavaScript?

`new` keyword হলো JavaScript-এ object creation-এর জন্য ব্যবহৃত। এটি constructor function বা class-এর সাথে ব্যবহার করা হয়। এটি নিম্নলিখিত কাজ করে:  
1. একটি empty object তৈরি করে।  
2. `this` সেই object-এ bind করে।  
3. Object-এর prototype constructor-এর prototype-এ link করে।  
4. Constructor function execute করে এবং object return করে।  
উদাহরণ: `function Person(name) { this.name = name; } const person = new Person('John'); console.log(person.name); // John`

### _#19._ 🟡 What is a constructor function?

Constructor function হলো একটি special function যা `new` keyword-এর সাথে ব্যবহৃত হয় object তৈরি করতে। এটি object-এর properties এবং methods initialize করে। Convention অনুযায়ী, constructor-এর নাম Capital letter দিয়ে শুরু হয়। উদাহরণ:  
```javascript
function Car(model) {
  this.model = model;
  this.drive = function() { console.log('Driving'); };
}
const myCar = new Car('Toyota');
console.log(myCar.model); // Toyota
```
Constructor functions prototypal inheritance-এর জন্য ব্যবহৃত হয়। ES6-এ class syntax এটির alternative।

### _#20._ 🟡 What is prototypal inheritance?

Prototypal inheritance হলো JavaScript-এর একটি mechanism যেখানে objects অন্য objects থেকে properties এবং methods inherit করে। প্রতিটি object-এর একটি prototype থাকে, যা অন্য object বা `null` হতে পারে। যদি কোনো property বা method object-এ না পাওয়া যায়, তবে prototype-এ খোঁজা হয়। উদাহরণ:  
```javascript
const parent = { greet: () => console.log('Hello'); };
const child = Object.create(parent);
child.greet(); // Hello
```
ES6 classes এবং `extends` prototypal inheritance implement করে।

### _#21._ 🟡 What is the prototype chain?

Prototype chain হলো JavaScript-এর একটি process যেখানে একটি object-এর property বা method না পাওয়া গেলে তার prototype-এ খোঁজা হয়, এবং এটি prototype-এর prototype-এ চলতে থাকে যতক্ষণ না পাওয়া যায় বা `null` পাওয়া যায়। উদাহরণ:  
```javascript
const obj = {};
console.log(obj.toString()); // [object Object]
```
এখানে `toString` `obj`-এ নেই, তাই prototype (`Object.prototype`) থেকে পাওয়া যায়। Chain শেষ হয় `Object.prototype`-এ, যার prototype `null`।

### _#22._ 🟡 What is the difference between primitive and reference types?

- **Primitive Types**: Simple, immutable data types যেমন `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`। এগুলো memory-তে directly value store করে। উদাহরণ: `let x = 5; let y = x; y = 10; console.log(x); // 5`  
- **Reference Types**: Objects (যেমন `object`, `array`, `function`) যা memory-তে reference store করে। একটি reference পরিবর্তন হলে original object ও পরিবর্তিত হয়। উদাহরণ: `let arr1 = [1, 2]; let arr2 = arr1; arr2.push(3); console.log(arr1); // [1, 2, 3]`  
Primitive copy হয় value দিয়ে, reference copy হয় reference দিয়ে।

### _#23._ 🟡 What is call by value and call by reference?

- **Call by Value**: Primitive types function-এ pass করা হলে তাদের value copy হয়। Function-এর ভেতর পরিবর্তন original value-কে affect করে না। উদাহরণ:  
```javascript
function change(num) { num = 10; }
let x = 5;
change(x);
console.log(x); // 5
```  
- **Call by Reference**: Reference types (objects) pass করা হলে তাদের reference copy হয়। Function-এর ভেতর পরিবর্তন original object-কে affect করে। উদাহরণ:  
```javascript
function changeObj(obj) { obj.key = 'new'; }
let myObj = { key: 'old' };
changeObj(myObj);
console.log(myObj.key); // new
```  
JavaScript technically call by value-ই ব্যবহার করে, তবে objects-এর ক্ষেত্রে value হলো reference।

## ✅ Control Flow
### _#24._ 🟡 What is an if-else statement and how does it work?

If-else statement হলো JavaScript-এর একটি control flow structure যা condition-এর উপর ভিত্তি করে code execute করে। যদি condition true হয়, তবে `if` block-এর code চলে; অন্যথায় `else` block (যদি থাকে) চলে। Nested if-else বা else-if ও ব্যবহার করা যায়। উদাহরণ:  
```javascript
let num = 10;
if (num > 0) {
  console.log('Positive');
} else if (num < 0) {
  console.log('Negative');
} else {
  console.log('Zero');
}
```
এখানে `num > 0` true হওয়ায় 'Positive' প্রিন্ট হবে। If-else decision-making এবং conditional logic-এর জন্য ব্যবহৃত হয়।

### _#25._ 🟡 What is a switch statement?

Switch statement হলো JavaScript-এর একটি control flow structure যা একটি expression-এর value-কে multiple case-এর সাথে compare করে। প্রতিটি case matching value-এর জন্য নির্দিষ্ট code block execute করে। `break` না থাকলে পরবর্তী case-এ চলে যায় (fall-through)। `default` block optional, যা কোনো case match না করলে চলে। উদাহরণ:  
```javascript
let day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Start of week');
    break;
  case 'Friday':
    console.log('End of week');
    break;
  default:
    console.log('Regular day');
}
```
এখানে 'Start of week' প্রিন্ট হবে।

### _#26._ 🟡 What is the difference between if-else and switch?

- **If-else**: Multiple conditions check করতে পারে, যেমন range, complex logic (>, <, &&, ||)। Flexible কিন্তু lengthy code-এর জন্য complex হতে পারে। উদাহরণ: `if (x > 10 && x < 20)`।  
- **Switch**: Single expression-এর exact value match করার জন্য ব্যবহৃত। Cleaner syntax যখন fixed values compare করা হয়। Fall-through behavior থাকে যদি `break` না থাকে।  
If-else বেশি versatile, switch specific cases-এর জন্য efficient। উদাহরণ: Days of week-এর জন্য switch ভালো, কিন্তু range-based conditions-এ if-else ভালো।

### _#27._ 🟡 What is a loop? (for, while, do-while)

Loop হলো JavaScript-এর একটি structure যা code block-কে repeated execution-এর জন্য ব্যবহৃত হয় যতক্ষণ condition true থাকে। তিনটি প্রধান loop:  
- **For Loop**: Fixed number of iterations-এর জন্য। Syntax: `for (initialization; condition; update)`। উদাহরণ: `for (let i = 0; i < 5; i++) { console.log(i); }` // 0, 1, 2, 3, 4  
- **While Loop**: Condition true থাকলে চলে, iteration count unknown হতে পারে। উদাহরণ: `let i = 0; while (i < 5) { console.log(i); i++; }`  
- **Do-While Loop**: Condition check করার আগে অন্তত একবার execute হয়। উদাহরণ: `let i = 0; do { console.log(i); i++; } while (i < 5);`  
Loops repetitive tasks সহজ করে।

### _#28._ 🟡 What is the difference between a for loop and a while loop?

- **For Loop**: Initialization, condition, এবং update একই line-এ define করা হয়। Known number of iterations-এর জন্য ideal। উদাহরণ: `for (let i = 0; i < 5; i++) { console.log(i); }`। Compact এবং readable।  
- **While Loop**: শুধু condition check করে, initialization এবং update separately handle করতে হয়। Unknown iterations বা complex conditions-এর জন্য ভালো। উদাহরণ: `let i = 0; while (i < 5) { console.log(i); i++; }`  
For loop predictable iterations-এর জন্য, while loop dynamic বা conditional iterations-এর জন্য বেশি suitable। Both একই কাজ করতে পারে, কিন্তু syntax এবং use case ভিন্ন।

## ✅ Modern JavaScript (ES6+)
### _#29._ 🟡 What is destructuring?

Destructuring হলো ES6-এর একটি feature যা array বা object থেকে values extract করে variables-এ assign করতে দেয়। এটি code-কে concise এবং readable করে।  
- **Array Destructuring**: উদাহরণ: `const [a, b] = [1, 2]; console.log(a, b); // 1, 2`  
- **Object Destructuring**: উদাহরণ: `const { name, age } = { name: 'John', age: 30 }; console.log(name, age); // John, 30`  
Nested destructuring, default values, বা rest operator ও ব্যবহার করা যায়। উদাহরণ: `const { name = 'Unknown' } = {};`।

### _#30._ 🟡 What is the rest operator and spread operator?

- **Rest Operator**: `...` ব্যবহার করে function parameters বা destructuring-এ remaining elements collect করে। উদাহরণ: `function sum(...numbers) { return numbers.reduce((a, b) => a + b); } console.log(sum(1, 2, 3)); // 6`। Destructuring-এ: `const [a, ...rest] = [1, 2, 3]; console.log(rest); // [2, 3]`  
- **Spread Operator**: `...` ব্যবহার করে array বা object-এর elements spread করে। উদাহরণ: `const arr1 = [1, 2]; const arr2 = [...arr1, 3]; console.log(arr2); // [1, 2, 3]`। Object-এ: `const obj1 = { a: 1 }; const obj2 = { ...obj1, b: 2 }; console.log(obj2); // { a: 1, b: 2 }`  
Rest collects, spread expands।

### _#31._ 🟡 What is the difference between == and ===?

- **== (Loose Equality)**: Type coercion করে values compare করে। উদাহরণ: `5 == '5'; // true` কারণ string '5' number-এ convert হয়।  
- **=== (Strict Equality)**: Type coercion ছাড়া value এবং type উভয় compare করে। উদাহরণ: `5 === '5'; // false` কারণ types ভিন্ন।  
Strict equality (`===`) safer এবং predictable, তাই usually এটি ব্যবহার করা হয়। `!=` এবং `!==` একইভাবে কাজ করে।

### _#32._ 🟡 What are template literals?

Template literals হলো ES6-এর একটি feature যা string creation-কে সহজ করে। Backticks (\`) ব্যবহার করে strings define করা হয় এবং `${}` দিয়ে expressions embed করা যায়। Multi-line strings ও সমর্থন করে। উদাহরণ:  
```javascript
const name = 'John';
const greeting = `Hello, ${name}! 
This is a multi-line string.`;
console.log(greeting); // Hello, John! This is a multi-line string.
```
Traditional string concatenation-এর তুলনায় template literals cleaner এবং flexible।

### _#33._ 🟡 What are ES6 classes?

ES6 classes হলো JavaScript-এ object-oriented programming-এর জন্য syntactic sugar। এটি constructor functions এবং prototypal inheritance-এর উপর ভিত্তি করে। Class-এ `constructor`, methods, এবং inheritance (`extends`) define করা যায়। উদাহরণ:  
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
}
const student = new Student('John', 'A');
student.greet(); // Hi, I'm John
```
Classes cleaner syntax প্রদান করে কিন্তু internally prototypes-ই ব্যবহার করে।

### _#34._ 🟡 What are arrow functions?

Arrow functions হলো ES6-এর একটি concise syntax (`=>`) যা regular functions-এর alternative। মূল পার্থক্য:  
- নিজস্ব `this` নেই, lexical `this` inherit করে।  
- Shorter syntax। উদাহরণ: `const add = (a, b) => a + b;`  
- `return` implicit হতে পারে single expression-এ।  
- Constructor হিসেবে ব্যবহার করা যায় না।  
উদাহরণ: `const obj = { name: 'John', sayHi: () => console.log(this.name) }; obj.sayHi(); // undefined (this is window)`। Callbacks এবং functional programming-এ popular।

### _#35._ 🟡 What are default parameters?

Default parameters হলো ES6-এর feature যা function parameters-এ default values set করতে দেয়। যদি argument pass না করা হয়, default value ব্যবহৃত হয়। উদাহরণ:  
```javascript
function greet(name = 'Guest') {
  return `Hello, ${name}`;
}
console.log(greet()); // Hello, Guest
console.log(greet('John')); // Hello, John
```
Default parameters code-কে robust করে এবং undefined checks কমায়।

### _#36._ 🟡 What is immutability in JavaScript?

Immutability মানে data যা create হওয়ার পর change করা যায় না। JavaScript-এ primitive types (string, number) immutable, কিন্তু objects এবং arrays mutable। Immutable data predictable এবং side effects কমায়। Immutability achieve করতে:  
- `const` ব্যবহার (শুধু reassignment বন্ধ করে)।  
- Spread operator: `const newArr = [...arr];`  
- Libraries যেমন Immutable.js বা deep-freeze।  
উদাহরণ: `const obj = { a: 1 }; Object.freeze(obj); obj.a = 2; console.log(obj.a); // 1`। Functional programming-এ immutability গুরুত্বপূর্ণ।

### _#37._ 🟡 What are map(), filter(), and reduce()?

`map()`, `filter()`, `reduce()` হলো array methods যা functional programming-এ ব্যবহৃত হয়:  
- **map()**: Array-এর প্রতিটি element transform করে new array return করে। উদাহরণ: `const arr = [1, 2, 3]; const doubled = arr.map(x => x * 2); // [2, 4, 6]`  
- **filter()**: Condition match করা elements-এর new array return করে। উদাহরণ: `const evens = arr.filter(x => x % 2 === 0); // [2]`  
- **reduce()**: Array-কে single value-এ reduce করে। উদাহরণ: `const sum = arr.reduce((acc, curr) => acc + curr, 0); // 6`  
এগুলো original array modify করে না, immutable way-তে কাজ করে।

## ✅ DOM & Browser
### _#38._ 🟡 What is the DOM and how does JavaScript interact with it?

DOM (Document Object Model) হলো একটি programming interface যা HTML বা XML document-কে tree structure হিসেবে represent করে, যেখানে প্রতিটি element একটি node। JavaScript DOM-এর সাথে interact করে web page-এর content, structure, এবং style dynamically manipulate করতে। উদাহরণ:  
- **Access**: `document.getElementById('id')` বা `querySelector('.class')` দিয়ে elements select করা।  
- **Modify**: `element.innerHTML = 'New Content';` বা `element.style.color = 'red';`  
- **Events**: `element.addEventListener('click', () => console.log('Clicked'));`  
উদাহরণ: `document.querySelector('p').textContent = 'Hello';` একটি paragraph-এর text change করে। JavaScript DOM API ব্যবহার করে web page interactive করে।

### _#39._ 🟡 What is event bubbling?

Event bubbling হলো DOM-এর একটি mechanism যেখানে একটি event child element-এ trigger হলে তা parent elements-এর মাধ্যমে upward propagate হয়। উদাহরণ:  
```javascript
<div onclick="console.log('Div')">
  <button onclick="console.log('Button')">Click</button>
</div>
```
Button click করলে প্রথমে 'Button', তারপর 'Div' প্রিন্ট হবে। Event bubbling default behavior। এটি stop করতে `event.stopPropagation()` ব্যবহার করা যায়। Bubbling event listeners manage করতে এবং event delegation-এ সাহায্য করে।

### _#40._ 🟡 What is event delegation?

Event delegation হলো একটি technique যেখানে individual child elements-এর পরিবর্তে parent element-এ single event listener set করা হয়, এবং event bubbling-এর সুবিধা নিয়ে child elements-এর events handle করা হয়। এটি memory-efficient এবং dynamically added elements-এর জন্য উপযোগী। উদাহরণ:  
```javascript
document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log(e.target.textContent);
  }
});
```
এখানে `ul`-এ listener সব `li`-এর click handle করে। `e.target` দিয়ে specific element identify করা হয়।

### _#41._ 🟡 What are setTimeout and setInterval?

- **setTimeout**: একটি function-কে specified delay (milliseconds-এ) পরে একবার execute করে। উদাহরণ:  
```javascript
setTimeout(() => console.log('Delayed'), 1000); // 1 সেকেন্ড পর 'Delayed' প্রিন্ট
```
Clear করতে: `clearTimeout(timeoutId);`  
- **setInterval**: একটি function-কে repeatedly নির্দিষ্ট interval (milliseconds-এ) পর পর execute করে। উদাহরণ:  
```javascript
setInterval(() => console.log('Every 2s'), 2000); // প্রতি ২ সেকেন্ডে প্রিন্ট
```
Clear করতে: `clearInterval(intervalId);`  

উভয়ই asynchronous, Web APIs দিয়ে handle হয়, এবং event loop-এর মাধ্যমে callback execute হয়। Timing animations, polling, বা delayed tasks-এ ব্যবহৃত।

## ✅ Asynchronous JavaScript
### _#42._ 🟡 What is a promise and how does it work?

Promise হলো JavaScript-এর একটি object যা asynchronous operation-এর eventual completion বা failure represent করে। এটি callback hell এড়াতে সাহায্য করে। Promise-এর তিনটি state:  
- **Pending**: Operation চলছে।  
- **Fulfilled**: Operation successful।  
- **Rejected**: Operation failed।  
উদাহরণ:  
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success'), 1000);
});
promise.then(result => console.log(result)) // Success
       .catch(error => console.log(error));
```
`.then()` success handle করে, `.catch()` error handle করে। Promises chain করা যায় এবং `Promise.all()`, `Promise.race()` ইত্যাদি methods ব্যবহার করা যায়।

### _#43._ 🟡 What is async/await?

Async/await হলো ES6-এর syntactic sugar যা Promises-কে আরও readable এবং synchronous-এর মতো asynchronous code লিখতে সাহায্য করে।  
- **`async`**: Function-কে async করে, এটি Promise return করে।  
- **`await`**: Promise resolve/reject হওয়া পর্যন্ত wait করে।  
উদাহরণ:  
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}
fetchData();
```
`await` শুধু `async` function-এর ভিতরে ব্যবহার করা যায়। এটি cleaner code এবং error handling-এ সহজ করে। Async/await internally Promises-ই ব্যবহার করে।

### _#44._ 🟡 What is try/catch and how is it used for error handling?

Try/catch হলো JavaScript-এর error handling mechanism যা code execution-এ potential errors manage করে। `try` block-এ risky code রাখা হয়, এবং `catch` block-এ error handle করা হয়। Optional `finally` block always execute হয়। উদাহরণ:  
```javascript
try {
  const result = JSON.parse('invalid json');
  console.log(result);
} catch (error) {
  console.log('Error:', error.message);
} finally {
  console.log('Cleanup');
}
```
এখানে `try` fail করলে `catch` error ধরে, এবং `finally` সবসময় চলে। Try/catch synchronous এবং async (with `try/catch`) code-এ error handling-এর জন্য ব্যবহৃত। Async/await-এর সাথে try/catch Promise rejections handle করতে ব্যবহার হয়।

## ✅ Advanced (Optional)
### _#45._ 🟡 What is a memory leak and how can you avoid it?

Memory leak হলো এমন অবস্থা যখন JavaScript-এ memory allocated হয় কিন্তু properly released হয় না, ফলে application-এর performance কমে বা crash হতে পারে। Common causes: unused variables, forgotten timers, event listeners, বা circular references।  
**Avoid করার উপায়**:  
- `clearTimeout`/`clearInterval` দিয়ে timers clear করা।  
- Event listeners remove করা (`removeEventListener`)।  
- Variables null করা বা scope থেকে বাদ দেওয়া।  
- WeakMap/WeakSet ব্যবহার করে references manage করা।  
- Chrome DevTools-এর Memory tab ব্যবহার করে leaks detect করা।  
উদাহরণ: `element.removeEventListener('click', handler);` unused listeners clean করে।

### _#46._ 🟡 What is tail call optimization?

Tail call optimization (TCO) হলো JavaScript engine-এর একটি optimization technique যেখানে recursive function calls stack overflow ছাড়াই efficient হয়। যদি function-এর last operation আরেকটি function call হয় (tail position), তবে নতুন stack frame create না করে existing frame reuse করা হয়।  
উদাহরণ:  
```javascript
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc); // Tail call
}
```
ES6 TCO support করে, কিন্তু V8 engine-এ এটি fully implemented নয়। TCO recursion-heavy code-এ memory usage কমায়।

### _#47._ 🟡 What is a module and how does import/export work?

Module হলো JavaScript-এর reusable code unit যা variables, functions, বা classes encapsulate করে। ES6 modules (`import`/`export`) code organization এবং dependency management সহজ করে।  
- **Export**: `export` দিয়ে module-এর content share করা হয়। উদাহরণ:  
  ```javascript
  // math.js
  export const add = (a, b) => a + b;
  export default function multiply(a, b) { return a * b; }
  ```
- **Import**: `import` দিয়ে module-এর content use করা হয়। উদাহরণ:  
  ```javascript
  // main.js
  import { add } from './math.js';
  import multiply from './math.js';
  console.log(add(2, 3)); // 5
  console.log(multiply(2, 3)); // 6
  ```
Modules strict mode-এ চলে এবং browser/server-এ `<script type="module">` বা Node.js-এ `.mjs` বা `package.json` (`"type": "module"`) দিয়ে ব্যবহৃত হয়।

### _#48._ 🟡 What is the purpose of 'typeof' operator?

`typeof` operator হলো JavaScript-এর একটি unary operator যা কোনো value বা variable-এর data type return করে। এটি type checking-এর জন্য ব্যবহৃত হয়। Return values: `"undefined"`, `"number"`, `"string"`, `"boolean"`, `"object"`, `"function"`, `"symbol"`, `"bigint"`।  
উদাহরণ:  
```javascript
console.log(typeof 42); // "number"
console.log(typeof 'hello'); // "string"
console.log(typeof null); // "object" (historical bug)
console.log(typeof undefined); // "undefined"
```
Limitations: `null`-এর জন্য `"object"` return করে এবং array/object distinction করতে পারে না। তাই `Array.isArray()` বা `instanceof` ব্যবহার করা হয়।