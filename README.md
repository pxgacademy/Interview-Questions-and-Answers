# 💠 INTERVIEW QUESTIONS 💠


# ✨ JavaScript based interview questions

✅ JavaScript Basics
### _#01._ 🟡 What is JavaScript and why is it used?

JavaScript হলো একটি উচ্চ-স্তরের, ইন্টারপ্রিটেড প্রোগ্রামিং ভাষা যা মূলত ওয়েব ডেভেলপমেন্টে ব্যবহৃত হয়। এটি ওয়েব পেজে ইন্টারঅ্যাক্টিভিটি যোগ করে, যেমন ব্যবহারকারীর ইনপুটের প্রতিক্রিয়া, ডায়নামিক কনটেন্ট আপডেট, এবং জটিল ওয়েব অ্যাপ্লিকেশন তৈরি। এটি ক্লায়েন্ট-সাইড এবং সার্ভার-সাইড (Node.js এর মাধ্যমে) উভয় ক্ষেত্রেই কাজ করে। এর ব্রাউজার সামঞ্জস্যতা এবং নমনীয়তার কারণে এটি অত্যন্ত জনপ্রিয়।

### _#02._ 🟡 What is the difference between JavaScript and other programming languages?

JavaScript প্রাথমিকভাবে ওয়েব ডেভেলপমেন্টের জন্য ডিজাইন করা হয়েছে, যেখানে Python বা Java এর মতো ভাষা ডেটা সায়েন্স, এন্টারপ্রাইজ অ্যাপ্লিকেশন ইত্যাদির জন্য ব্যবহৃত হয়। JavaScript ইন্টারপ্রিটেড এবং ডায়নামিক টাইপিং সমর্থন করে, যেখানে C++ বা Java কম্পাইল্ড এবং স্ট্যাটিক টাইপিং ব্যবহার করে। এটি সরাসরি ব্রাউজারে চলে, যা অন্যান্য ভাষার ক্ষেত্রে সাধারণ নয়। তবে, Node.js এর মাধ্যমে JavaScript সার্ভার-সাইডেও ব্যবহার করা যায়।

### _#03._ 🟡 What is the difference between null, undefined, and NaN?

- **null**: এটি একটি ইচ্ছাকৃত মান যা নির্দেশ করে কোনো ভ্যারিয়েবলের মান শূন্য বা অনুপস্থিত। ডেভেলপার এটি সেট করে। উদাহরণ: `let x = null;`  
- **undefined**: এটি নির্দেশ করে যে একটি ভ্যারিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু মান নির্ধারিত হয়নি। উদাহরণ: `let x;`  
- **NaN**: "Not-a-Number" বোঝায়, যা গাণিতিক অপারেশনের ভুল ফলাফলের ক্ষেত্রে পাওয়া যায়। উদাহরণ: `0 / 0` ফলাফল হিসেবে `NaN` দেয়।

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

✅ Functions and Execution
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

✅ Behind the Scenes
### _#12._ 🟡 How does JavaScript work behind the scenes?

JavaScript একটি single-threaded, non-blocking ভাষা যা V8 engine (Chrome-এ ব্যবহৃত) বা অন্যান্য ইঞ্জিনে চলে। এটি execution-এর সময় call stack, heap, এবং event loop ব্যবহার করে। Code execute হওয়ার সময়:  
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

✅ Hoisting, this, and Object-related
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

✅ Control Flow
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

✅ Modern JavaScript (ES6+)
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

✅ DOM & Browser
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

✅ Asynchronous JavaScript
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

✅ Advanced (Optional)
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

# ✨ TypeScript based interview questions
✅ 1. Basics of TypeScript
### _#01._ 🔵 What is TypeScript and how is it different from JavaScript?

TypeScript হলো একটি open-source programming language যা JavaScript-এর superset। এটি JavaScript-এ static typing এবং advanced features যোগ করে। TypeScript code compile হয়ে JavaScript-এ convert হয়, যা browser বা Node.js-এ চলে।  
**Differences**:  
- **Typing**: TypeScript static types (e.g., `let x: number = 5`) সমর্থন করে, JavaScript dynamic typing ব্যবহার করে।  
- **Features**: TypeScript-এ interfaces, enums, generics আছে, যা JavaScript-এ নেই।  
- **Error Checking**: TypeScript compile time-এ type errors ধরে, JavaScript runtime-এ।  
- **Tooling**: TypeScript better IDE support এবং autocomplete প্রদান করে।  
উদাহরণ: `function add(a: number, b: number): number { return a + b; }` TypeScript-এ type-safe, JavaScript-এ `function add(a, b) { return a + b; }`।

### _#02._ 🔵 What are the benefits of using TypeScript?

TypeScript-এর benefits:  
- **Static Typing**: Type errors compile time-এ ধরা পড়ে, runtime bugs কমায়।  
- **Better Tooling**: Autocomplete, refactoring, এবং IntelliSense support।  
- **Code Maintainability**: Interfaces, types, এবং modules code organization উন্নত করে।  
- **Scalability**: Large codebases-এর জন্য ideal, যেমন enterprise applications।  
- **Interoperability**: JavaScript libraries seamlessly ব্যবহার করা যায়।  
- **Early Error Detection**: Code quality উন্নত করে, যেমন `let x: string = 123;` error দেখায়।  
উদাহরণ: TypeScript-এ `interface User { name: string; age: number; }` type safety নিশ্চিত করে।

### _#03._ 🔵 How do you compile TypeScript code to JavaScript?

TypeScript code JavaScript-এ compile করতে TypeScript compiler (`tsc`) ব্যবহৃত হয়। Steps:  
1. **Install TypeScript**: `npm install -g typescript`  
2. **Write TypeScript Code**: `.ts` file-এ code লিখুন, যেমন `example.ts`।  
3. **Compile**: Command line-এ `tsc example.ts` run করলে `example.js` generate হয়।  
4. **Run JavaScript**: `node example.js` দিয়ে execute করা যায়।  
**Options**: `tsconfig.json` দিয়ে compiler options (e.g., target, module) configure করা যায়। উদাহরণ: `tsc --target es6 example.ts` ES6-compatible JavaScript generate করে। Watch mode (`tsc --watch`) auto-compilation সমর্থন করে।

### _#04._ 🔵 What is tsconfig.json and why is it important?

`tsconfig.json` হলো TypeScript project-এর configuration file যা compiler options এবং project settings define করে। এটি project root-এ থাকে।  
**Key Properties**:  
- `compilerOptions`: `target` (e.g., ES6), `module` (e.g., CommonJS), `strict` (type checking), `outDir` (output directory)।  
- `include`: Compile করার files/folders (e.g., `["src/**/*"]`)।  
- `exclude`: Ignored files (e.g., `["node_modules"]`)।  
**Importance**:  
- Consistent compilation settings নিশ্চিত করে।  
- Multiple developers-এর জন্য project setup সহজ করে।  
- IDE integration এবং automation (e.g., `tsc --watch`) সমর্থন করে।  
উদাহরণ:  
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true
  },
  "include": ["src/**/*"]
}
```

### _#05._ 🔵 What are the main differences between ES6 and TypeScript?

ES6 (ECMAScript 2015) হলো JavaScript-এর standard, আর TypeScript হলো JavaScript-এর superset। Main differences:  
- **Typing**: TypeScript static types (e.g., `let x: number`) সমর্থন করে, ES6 dynamic typing ব্যবহার করে।  
- **Features**: TypeScript-এ interfaces, enums, generics, access modifiers (e.g., `public`, `private`) আছে, ES6-এ নেই। ES6-এ arrow functions, classes, modules আছে, যা TypeScript ও inherit করে।  
- **Compilation**: TypeScript compile হয়ে JavaScript-এ convert হয়, ES6 সরাসরি browser/Node.js-এ চলে।  
- **Error Checking**: TypeScript compile-time type checking করে, ES6 runtime-এ errors ধরে।  
- **Tooling**: TypeScript better IDE support এবং type inference প্রদান করে।  
উদাহরণ: TypeScript-এ `function greet(name: string): string { return "Hello " + name; }` type-safe, ES6-এ `function greet(name) { return "Hello " + name; }`।

✅ 2. Type System
### _#06._ 🔵 What is a type in TypeScript?

TypeScript-এ type হলো একটি mechanism যা variables, parameters, বা return values-এর data structure বা behavior define করে। এটি static type checking সমর্থন করে, যা compile time-এ errors ধরতে সাহায্য করে। Types built-in (e.g., `number`, `string`) বা custom (e.g., interfaces, type aliases) হতে পারে। উদাহরণ: `let age: number = 30;` এখানে `number` হলো type। Types code-এর predictability এবং maintainability বাড়ায়।

### _#07._ 🔵 What are the different built-in types in TypeScript?

TypeScript-এ built-in types:  
- **Primitive Types**: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`।  
- **Object Types**: `object`, `Array`, `Function`, `Date` ইত্যাদি।  
- **Special Types**: `any` (any value), `unknown` (type-safe alternative to `any`), `never` (no value), `void` (no return value)।  
উদাহরণ:  
```typescript
let count: number = 10;
let name: string = "John";
let isActive: boolean = true;
let data: any = 42;
```
JavaScript-এর সব types TypeScript-এ উপলব্ধ, এবং additional type safety প্রদান করে।

### _#08._ 🔵 What is the difference between `any`, `unknown`, and `never`?

- **any**: Type checking disable করে, যেকোনো value accept করে। Unsafe, কারণ errors ধরা পড়ে না। উদাহরণ: `let x: any = 10; x = "hello";`  
- **unknown**: Type-safe alternative to `any`। Value-এর type unknown, তাই operations করার আগে type narrow করতে হয়। উদাহরণ: `let x: unknown; if (typeof x === "string") { x.toUpperCase(); }`  
- **never**: কোনো value represent করে না। Functions যা কখনো return না করে (e.g., throws error) বা impossible cases-এ ব্যবহৃত। উদাহরণ: `function error(): never { throw new Error(); }`  
`unknown` safer, `any` risky, `never` specific edge cases-এ।

### _#09._ 🔵 What is the difference between `null` and `undefined` in TypeScript?

- **null**: Intentional absence of value। একটি variable explicitly `null` assign করা যায়। উদাহরণ: `let x: null = null;`  
- **undefined**: Variable declared কিন্তু value assign করা হয়নি। উদাহরণ: `let y: undefined;`  
**TypeScript-এ**:  
- `strictNullChecks` enable থাকলে, `null` এবং `undefined` শুধু নিজেদের type বা union types-এ assign করা যায়। উদাহরণ: `let z: number | null = null;`  
- JavaScript-এর মতো loose equality (`==`) `null` এবং `undefined`-কে equal মনে করে, কিন্তু strict equality (`===`) না।  
TypeScript-এ `strictNullChecks` safer code নিশ্চিত করে।

### _#10._ 🔵 What is type inference?

Type inference হলো TypeScript-এর capability যেখানে compiler automatically variable-এর type determine করে explicit type annotation ছাড়াই। এটি code-কে concise রাখে।  
উদাহরণ:  
```typescript
let x = 10; // TypeScript infers x as number
let name = "John"; // Inferred as string
```
Type inference initialization-এর সময় value-এর উপর নির্ভর করে। যদি value assign না হয়, default-এ `any` ধরে। Best practices: যেখানে possible, inference-এর উপর rely করা।

### _#11._ 🔵 What is type assertion in TypeScript?

Type assertion হলো TypeScript-এ developer-এর জন্য একটি way যেখানে compiler-কে explicitly বলা হয় একটি value-এর type কী। এটি type narrowing-এর জন্য ব্যবহৃত। Syntax: `as` বা angle brackets (`<>`).  
উদাহরণ:  
```typescript
let value: any = "Hello";
let strLength: number = (value as string).length; // Type assertion
// Or
let strLength2: number = (<string>value).length;
```
Caveat: Assertion type safety guarantee করে না; wrong assertion runtime errors ঘটাতে পারে। `unknown`-এর ক্ষেত্রে type checking প্রয়োজন।

### _#12._ 🔵 What is type alias?

Type alias হলো TypeScript-এ custom type define করার একটি way যা `type` keyword দিয়ে তৈরি করা হয়। এটি complex types reusable এবং readable করে।  
উদাহরণ:  
```typescript
type Point = { x: number; y: number };
let point: Point = { x: 10, y: 20 };
type ID = string | number;
let userId: ID = "123";
```
Type alias unions, intersections, primitives, বা objects-এর জন্য ব্যবহৃত। Interface-এর তুলনায় type alias বেশি flexible কিন্তু extend করা যায় না।

### _#13._ 🔵 What is a literal type?

Literal type হলো TypeScript-এ specific value-কে type হিসেবে represent করা। এটি exact values (e.g., string literals, number literals) define করে।  
উদাহরণ:  
```typescript
let direction: "up" | "down" | "left" | "right";
direction = "up"; // Valid
direction = "diagonal"; // Error
```
Literal types often union types-এর সাথে ব্যবহৃত হয়। এটি type safety বাড়ায় এবং specific values enforce করে।

### _#14._ 🔵 What are union and intersection types?

- **Union Type (`|`)**: একটি variable multiple types-এর মধ্যে একটি হতে পারে। উদাহরণ:  
```typescript
let value: string | number;
value = "Hello"; // Valid
value = 42; // Valid
```
- **Intersection Type (`&`)**: Multiple types-এর সব properties combine করে। উদাহরণ:  
```typescript
type A = { a: number };
type B = { b: string };
let ab: A & B = { a: 1, b: "test" };
```
Union flexibility দেয়, intersection strictness। Union-এ common operations শুধু shared properties-এ limited।

### _#15._ 🔵 What is an enum in TypeScript?

Enum হলো TypeScript-এ named constants-এর collection define করার একটি way। এটি related values-এর group organize করে এবং type safety প্রদান করে।  
উদাহরণ:  
```typescript
enum Color {
  Red, // 0
  Green, // 1
  Blue // 2
}
let c: Color = Color.Green;
console.log(c); // 1
```
Enums numeric (default), string, বা mixed হতে পারে। উদাহরণ: `enum Status { Active = "ACTIVE", Inactive = "INACTIVE" }`। Enums code readability এবং maintainability উন্নত করে। Compile হলে JavaScript object-এ convert হয়।

✅ 3. Functions
### _#16._ 🔵 How do you define a function with typed parameters and return value?

TypeScript-এ function-এর parameters এবং return value-এর types explicitly define করা যায়। Syntax-এ parameter-এর পর `:` এবং type, এবং return type-এর জন্য function signature-এর পর `:` ব্যবহৃত হয়।  
উদাহরণ:  
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```
Arrow function-এ:  
```typescript
const multiply: (x: number, y: number) => number = (x, y) => x * y;
```
Return type optional, কারণ TypeScript type inference করতে পারে। Void return-এর জন্য: `function log(message: string): void { console.log(message); }`।

### _#17._ 🔵 What is the difference between optional and default parameters?

- **Optional Parameters**: `?` দিয়ে parameter optional করা হয়। Value pass না করলে `undefined` হয়।  
  উদাহরণ:  
  ```typescript
  function greet(name: string, greeting?: string): string {
    return `${greeting || 'Hello'}, ${name}`;
  }
  console.log(greet('John')); // Hello, John
  console.log(greet('John', 'Hi')); // Hi, John
  ```
- **Default Parameters**: Parameter-এ default value set করা হয়। Value না দিলে default value ব্যবহৃত হয়।  
  উদাহরণ:  
  ```typescript
  function greet(name: string, greeting: string = 'Hello'): string {
    return `${greeting}, ${name}`;
  }
  console.log(greet('John')); // Hello, John
  console.log(greet('John', 'Hi')); // Hi, John
  ```
**Difference**: Optional parameters `undefined` হতে পারে এবং type checking প্রয়োজন; default parameters-এ value guaranteed থাকে।

### _#18._ 🔵 What are rest parameters in TypeScript?

Rest parameters TypeScript-এ variable number of arguments array হিসেবে accept করতে `...` syntax ব্যবহার করে। Rest parameter-এর type সাধারণত array type হয়।  
উদাহরণ:  
```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1)); // 1
```
Rest parameters function-এর শেষ parameter হতে হবে। TypeScript type safety নিশ্চিত করে, যেমন `...numbers: string[]` শুধু strings accept করবে।

### _#19._ 🔵 What is a function overload in TypeScript?

Function overload হলো TypeScript-এ একই function-এর multiple signatures define করার technique, যা different parameter types বা return types handle করে। Implementation signature সব cases cover করে।  
উদাহরণ:  
```typescript
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}
console.log(combine('Hello', 'World')); // HelloWorld
console.log(combine(5, 10)); // 15
```
Overloads compile time-এ type safety নিশ্চিত করে। Implementation signature actual logic ধারণ করে।

### _#20._ 🔵 How can you define a function type?

TypeScript-এ function type define করতে type alias, interface, বা inline type ব্যবহার করা যায়। Function type parameter types এবং return type specify করে।  
উদাহরণ:  
- **Type Alias**:  
  ```typescript
  type AddFn = (a: number, b: number) => number;
  const add: AddFn = (a, b) => a + b;
  ```
- **Interface**:  
  ```typescript
  interface GreetFn {
    (name: string): string;
  }
  const greet: GreetFn = (name) => `Hello, ${name}`;
  ```
- **Inline**:  
  ```typescript
  const multiply: (x: number, y: number) => number = (x, y) => x * y;
  ```
Function types reusable signatures তৈরি করে এবং callback functions বা APIs-এ type safety প্রদান করে।

✅ 4. Interfaces & Objects
### _#21._ 🔵 What is an interface in TypeScript?

Interface হলো TypeScript-এর একটি feature যা object-এর shape বা structure define করে। এটি properties, methods, এবং তাদের types specify করে, যা type safety নিশ্চিত করে। Interfaces compile-time checking-এর জন্য ব্যবহৃত হয় এবং JavaScript-এ compile হয় না।  
উদাহরণ:  
```typescript
interface User {
  name: string;
  age: number;
}
const user: User = { name: "John", age: 30 };
```
Interfaces classes, functions, বা objects-এর contract হিসেবে কাজ করে।

### _#22._ 🔵 How is an interface different from a type alias?

**Interface** এবং **Type Alias** উভয়ই types define করে, কিন্তু তাদের মধ্যে পার্থক্য:  
- **Syntax**: Interface `interface` keyword দিয়ে, type alias `type` keyword দিয়ে।  
  ```typescript
  interface User { name: string; }
  type UserType = { name: string; };
  ```
- **Extensibility**: Interfaces `extends` দিয়ে extend করা যায়; type aliases `&` (intersection) দিয়ে combine করে।  
  ```typescript
  interface Admin extends User { role: string; }
  type AdminType = UserType & { role: string; };
  ```
- **Declaration Merging**: Interfaces same name দিয়ে redeclare করলে merge হয়; type aliases না।  
  ```typescript
  interface User { id: number; }
  interface User { email: string; } // Merges: { id: number; email: string; }
  ```
- **Flexibility**: Type aliases unions, literals, primitives-এর জন্য ব্যবহার করা যায়; interfaces শুধু object shapes-এর জন্য।  
Interfaces object-oriented design-এ, type aliases flexible scenarios-এ বেশি ব্যবহৃত।

### _#23._ 🔵 How do you use optional properties in an interface?

Optional properties interface-এ `?` দিয়ে define করা হয়, যা property-কে optional করে। Object-এ property না থাকলেও error হয় না।  
উদাহরণ:  
```typescript
interface User {
  name: string;
  age?: number; // Optional
}
const user1: User = { name: "John" }; // Valid
const user2: User = { name: "Jane", age: 25 }; // Valid
```
Optional properties flexible data structures-এ ব্যবহৃত, যেমন API responses যেখানে সব field guaranteed নয়।

### _#24._ 🔵 What is readonly property in interfaces?

`readonly` property interface-এ define করা হয় যা property-কে initialize-এর পর immutable করে। Value assign করা যায় শুধু creation-এর সময়।  
উদাহরণ:  
```typescript
interface User {
  readonly id: number;
  name: string;
}
const user: User = { id: 1, name: "John" };
user.name = "Jane"; // Valid
user.id = 2; // Error: id is readonly
```
`readonly` immutability নিশ্চিত করে, যেমন unique identifiers-এর ক্ষেত্রে। Array-এর জন্য `ReadonlyArray<T>` ব্যবহার করা যায়।

### _#25._ 🔵 Can interfaces extend other interfaces?

হ্যাঁ, interfaces TypeScript-এ `extends` keyword দিয়ে other interfaces extend করতে পারে। এটি inheritance সমর্থন করে এবং code reuse সহজ করে।  
উদাহরণ:  
```typescript
interface Person {
  name: string;
}
interface Employee extends Person {
  role: string;
}
const emp: Employee = { name: "John", role: "Developer" };
```
Multiple interfaces extend করা যায়:  
```typescript
interface A { a: number; }
interface B { b: string; }
interface C extends A, B { c: boolean; }
const obj: C = { a: 1, b: "test", c: true };
```
Extending interfaces object-oriented design-এ hierarchy তৈরি করে।

### _#26._ 🔵 How do you define a nested object with types?

TypeScript-এ nested object-এর types define করতে interfaces বা type aliases ব্যবহার করা হয়। Nested properties-এর জন্য inner types define করা হয়।  
উদাহরণ:  
```typescript
interface Address {
  street: string;
  city: string;
}
interface User {
  name: string;
  age: number;
  address: Address;
}
const user: User = {
  name: "John",
  age: 30,
  address: { street: "123 Main St", city: "Dhaka" }
};
```
Alternative (type alias):  
```typescript
type UserType = {
  name: string;
  age: number;
  address: { street: string; city: string };
};
```
Nested objects complex data structures (e.g., API responses) handle করতে type safety প্রদান করে।

✅ 5. Classes in TypeScript
### _#27._ 🔵 How do you define a class in TypeScript?

TypeScript-এ class define করতে `class` keyword ব্যবহার করা হয়, যা ES6 classes-এর extension। Class-এ properties, methods, এবং constructor থাকতে পারে, এবং TypeScript type annotations এবং access modifiers যোগ করে।  
উদাহরণ:  
```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, ${this.name}`;
  }
}

const person = new Person("John", 30);
console.log(person.greet()); // Hello, John
```
Constructor-এ shorthand: `constructor(public name: string)` automatically property declare করে।

### _#28._ 🔵 What is the difference between public, private, and protected modifiers?

TypeScript-এ access modifiers class members-এর visibility control করে:  
- **public**: Default modifier। Property/method সব জায়গায় accessible।  
  ```typescript
  class Animal {
    public name: string;
    constructor(name: string) { this.name = name; }
  }
  const dog = new Animal("Dog");
  console.log(dog.name); // Accessible
  ```
- **private**: Property/method শুধু class-এর ভিতরে accessible।  
  ```typescript
  class Animal {
    private secret: string = "Hidden";
    getSecret() { return this.secret; }
  }
  const cat = new Animal();
  console.log(cat.getSecret()); // Hidden
  console.log(cat.secret); // Error: secret is private
  ```
- **protected**: Class এবং derived classes-এ accessible, বাইরে না।  
  ```typescript
  class Animal {
    protected type: string = "Mammal";
  }
  class Dog extends Animal {
    getType() { return this.type; } // Accessible
  }
  const dog = new Dog();
  console.log(dog.type); // Error: type is protected
  ```
**Difference**: `public` সবচেয়ে open, `private` most restricted, `protected` inheritance-এ limited access দেয়।

### _#29._ 🔵 What is `readonly` in a class?

`readonly` modifier class properties-কে immutable করে, যা initialization (constructor বা declaration-এ) পরে change করা যায় না।  
উদাহরণ:  
```typescript
class User {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  updateName(newName: string) {
    this.name = newName; // Valid
    this.id = 2; // Error: id is readonly
  }
}

const user = new User(1, "John");
console.log(user.id); // 1
user.id = 2; // Error
```
`readonly` data integrity নিশ্চিত করে, যেমন unique IDs-এর ক্ষেত্রে। Interface-এর মতো class-এও কাজ করে।

### _#30._ 🔵 What is inheritance in TypeScript classes?

Inheritance হলো TypeScript-এর feature যেখানে একটি class (child) আরেকটি class (parent) থেকে properties এবং methods inherit করে। `extends` keyword ব্যবহৃত হয়। Child class parent-এর members access করতে পারে এবং override করতে পারে।  
উদাহরণ:  
```typescript
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.move(); // Moving...
dog.bark(); // Woof!
```
`super` keyword parent class-এর constructor বা methods call করে। উদাহরণ: `super.move()`। Inheritance code reuse এবং hierarchy তৈরি করে।

### _#31._ 🔵 What is an abstract class?

Abstract class হলো TypeScript-এর একটি class যা directly instantiate করা যায় না এবং blueprint হিসেবে কাজ করে। এটি `abstract` keyword দিয়ে define করা হয় এবং abstract methods (implementation ছাড়া) থাকতে পারে, যা derived classes-এ implement করতে হয়।  
উদাহরণ:  
```typescript
abstract class Shape {
  abstract calculateArea(): number; // Abstract method

  getDescription(): string {
    return "This is a shape";
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.calculateArea()); // 78.539...
console.log(circle.getDescription()); // This is a shape
const shape = new Shape(); // Error: Cannot create an instance of an abstract class
```
Abstract classes polymorphism এবং common functionality share করতে ব্যবহৃত।

✅ 6. Generics
### _#32._ 🔵 What are generics in TypeScript?

Generics হলো TypeScript-এর একটি feature যা reusable এবং type-safe code লিখতে সাহায্য করে। এটি functions, classes, বা interfaces-এ type parameters ব্যবহার করে, যা specific types-এর পরিবর্তে placeholder হিসেবে কাজ করে। Generics type safety বজায় রেখে flexibility প্রদান করে।  
উদাহরণ:  
```typescript
function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello")); // Hello
```
এখানে `T` হলো generic type parameter। Generics type duplication কমায় এবং code reusability বাড়ায়।

### _#33._ 🔵 Why and when would you use generics?

**Why**:  
- **Type Safety**: Compile-time type checking নিশ্চিত করে।  
- **Reusability**: একই logic different types-এর জন্য ব্যবহার করা যায়।  
- **Avoid `any`**: `any` ব্যবহারের unsafe nature এড়ানো।  
- **Maintainability**: Code cleaner এবং scalable হয়।  

**When**:  
- Functions বা classes যখন multiple types handle করে। উদাহরণ: Collections (arrays, lists)।  
- Reusable components, যেমন React components।  
- Utility functions যেমন `map`, `filter`।  
উদাহরণ: Array utilities-এ `function getFirst<T>(arr: T[]): T` different array types-এ কাজ করে।

### _#34._ 🔵 How do you write a generic function?

Generic function লিখতে function name-এর আগে `<T>` ব্যবহার করে type parameter declare করা হয়। `T` parameter types বা return type-এ ব্যবহৃত হয়।  
উদাহরণ:  
```typescript
function getPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
const pair = getPair<string, number>("Hello", 42);
console.log(pair); // ["Hello", 42]
```
Type inference সমর্থন করে, তাই explicit type optional:  
```typescript
const pair2 = getPair("Hi", true); // Inferred as [string, boolean]
```
Generic functions type-safe এবং flexible code লিখতে সাহায্য করে।

### _#35._ 🔵 What is a generic constraint?

Generic constraint হলো generic type-এর উপর restriction যা নির্দিষ্ট করে type-এর কোন properties বা methods থাকতে হবে। `extends` keyword ব্যবহার করা হয়।  
উদাহরণ:  
```typescript
interface HasLength {
  length: number;
}
function getLength<T extends HasLength>(item: T): number {
  return item.length;
}
console.log(getLength("Hello")); // 5
console.log(getLength([1, 2, 3])); // 3
console.log(getLength(42)); // Error: number has no length
```
Constraint type safety নিশ্চিত করে এবং invalid operations প্রতিরোধ করে। Common constraints: `extends object`, `extends keyof`, বা specific interfaces।

### _#36._ 🔵 Can you use multiple generics at once?

হ্যাঁ, TypeScript-এ multiple generic type parameters একসাথে ব্যবহার করা যায়। প্রতিটি parameter comma দিয়ে separate করা হয়, যেমন `<T, U>`.  
উদাহরণ:  
```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
const result = merge<{ name: string }, { age: number }>(
  { name: "John" },
  { age: 30 }
);
console.log(result); // { name: "John", age: 30 }
```
Multiple generics complex scenarios handle করে, যেমন different types-এর objects merge করা। Type inference এখানেও কাজ করে:  
```typescript
const result2 = merge({ x: 1 }, { y: "test" }); // Inferred as { x: number } & { y: string }
```

✅ 7. Advanced Types
### _#37._ 🔵 What are mapped types in TypeScript?

Mapped types হলো TypeScript-এর একটি feature যা existing type-এর properties-কে transform করে নতুন type তৈরি করে। এটি object types-এর keys iterate করে নতুন structure generate করে। Syntax: `{ [K in keyof T]: Type }`।  
উদাহরণ:  
```typescript
type User = { name: string; age: number };
type ReadonlyUser = { readonly [K in keyof User]: User[K] };
const user: ReadonlyUser = { name: "John", age: 30 };
user.name = "Jane"; // Error: readonly
```
Built-in mapped types: `Partial<T>`, `Required<T>`, `Readonly<T>`, `Pick<T, K>`। উদাহরণ: `Partial<User>` সব properties optional করে।

### _#38._ 🔵 What is the `keyof` operator?

`keyof` operator TypeScript-এ type-এর সব property keys-এর union type return করে। এটি object types-এর keys dynamically access করতে ব্যবহৃত।  
উদাহরণ:  
```typescript
type User = { name: string; age: number; id: number };
type UserKeys = keyof User; // "name" | "age" | "id"
let key: UserKeys = "name"; // Valid
key = "email"; // Error
```
`keyof` mapped types, index signatures, বা type-safe property access-এর জন্য গুরুত্বপূর্ণ। উদাহরণ: `function getProp<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }`।

### _#39._ 🔵 What is the `typeof` operator in type context?

TypeScript-এ `typeof` operator type context-এ value-এর type extract করতে ব্যবহৃত। JavaScript-এর `typeof` (runtime) থেকে ভিন্ন, এটি compile-time type inference করে।  
উদাহরণ:  
```typescript
const user = { name: "John", age: 30 };
type UserType = typeof user; // { name: string; age: number }
const anotherUser: UserType = { name: "Jane", age: 25 };
```
`typeof` variables, functions, বা objects-এর types capture করে, বিশেষ করে runtime values থেকে type define করতে। উদাহরণ: `const fn = (x: number) => x * 2; type FnType = typeof fn;`।

### _#40._ 🔵 What is the `infer` keyword in TypeScript?

`infer` keyword TypeScript-এ conditional types-এ type inference করতে ব্যবহৃত। এটি generic type-এর ভিতরে type extract করে। `infer` শুধু `extends` clause-এ কাজ করে।  
উদাহরণ:  
```typescript
type ReturnType<T> = T extends (...args: any) => infer R ? R : never;
type Fn = (x: number) => string;
type Result = ReturnType<Fn>; // string
```
এখানে `infer R` function-এর return type extract করে। `infer` complex type manipulation-এ, যেমন `ReturnType`, `Parameters`, বা custom utilities-এ ব্যবহৃত।

### _#41._ 🔵 What are conditional types?

Conditional types হলো TypeScript-এ types dynamically resolve করার একটি way, যা `T extends U ? X : Y` syntax ব্যবহার করে। এটি type constraints-এর উপর ভিত্তি করে type select করে।  
উদাহরণ:  
```typescript
type IsString<T> = T extends string ? "Yes" : "No";
type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"
```
Conditional types generics, `infer`, এবং `keyof`-এর সাথে মিলে advanced type logic তৈরি করে। উদাহরণ: Built-in `Exclude<T, U>` বা `Extract<T, U>`। Nested conditional types ও সম্ভব।

### _#42._ 🔵 What are template literal types?

Template literal types হলো TypeScript-এ string literal types-কে manipulate করার একটি feature, যা JavaScript-এর template literals (`${}`) এর মতো কাজ করে। এটি string types dynamically তৈরি করে।  
উদাহরণ:  
```typescript
type Greeting = "Hello";
type Name = "John" | "Jane";
type Message = `${Greeting}, ${Name}!`; // "Hello, John!" | "Hello, Jane!"
```
Union types-এর সাথে:  
```typescript
type Event = `on${"Click" | "Hover"}`; // "onClick" | "onHover"
```
Template literal types API routes, event names, বা string patterns type-safe করতে ব্যবহৃত।

### _#43._ 🔵 What is the `as const` assertion?

`as const` assertion TypeScript-এ literal values-কে mutable থেকে immutable এবং specific literal types-এ convert করে। এটি object/array-কে readonly এবং literal types enforce করে।  
উদাহরণ:  
```typescript
const colors = ["red", "blue"] as const;
type Color = typeof colors[number]; // "red" | "blue"
colors.push("green"); // Error: readonly
```
Without `as const`:  
```typescript
const colors2 = ["red", "blue"]; // string[]
```
`as const` literal types, enums-এর alternative, বা constant values-এর জন্য ব্যবহৃত। Objects-এ:  
```typescript
const config = { size: 10, theme: "dark" } as const;
// { readonly size: 10; readonly theme: "dark" }
```

✅ 8. Utility Types
### _#44._ 🔵 **What is `Partial<T>` and how is it used?**

`Partial<T>` হলো TypeScript-এর একটি utility type যা একটি object type-এর সব প্রোপার্টিকে optional করে দেয়। মানে, ধরুন আপনার কাছে একটা interface আছে যেখানে কিছু প্রোপার্টি mandatory, কিন্তু আপনি চান সেই প্রোপার্টিগুলো optional হোক কোনো নির্দিষ্ট ক্ষেত্রে। তখন `Partial<T>` ব্যবহার করা হয়।

**Example:**
```typescript
interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;

// এখন PartialUser হবে:
// {
//   name?: string;
//   age?: number;
// }
```
**Use case:** ধরুন, আমি একটা function লিখছি যেখানে user object-এর শুধু কিছু প্রোপার্টি update করতে হবে। তখন `Partial<User>` ব্যবহার করে আমি নিশ্চিত করতে পারি যে সব প্রোপার্টি পাঠানো বাধ্যতামূলক না।



### _#45._ 🔵 **What is `Required<T>`?**

`Required<T>` হলো TypeScript-এর আরেকটি utility type যা `Partial<T>`-এর উল্টো কাজ করে। এটা একটা object type-এর সব প্রোপার্টিকে mandatory বা required করে দেয়, যদি কোনো প্রোপার্টি optional থাকে।

**Example:**
```typescript
interface User {
  name?: string;
  age?: number;
}

type RequiredUser = Required<User>;

// এখন RequiredUser হবে:
// {
//   name: string;
//   age: number;
// }
```
**Use case:** যদি আমার কোনো function-এ বাধ্যতামূলকভাবে সব প্রোপার্টি দরকার হয়, তাহলে `Required<T>` ব্যবহার করে আমি নিশ্চিত করতে পারি যে কোনো প্রোপার্টি missing থাকবে না।



### _#46._ 🔵 **What is `Readonly<T>`?**

`Readonly<T>` হলো এমন একটি utility type যা একটা object type-এর সব প্রোপার্টিকে read-only করে দেয়, অর্থাৎ সেগুলো modify করা যায় না।

**Example:**
```typescript
interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = { name: "Alice", age: 30 };
// user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
```
**Use case:** যখন আমি চাই কোনো object immutable থাকুক, যাতে কেউ ভুলেও এর প্রোপার্টি change করতে না পারে, তখন `Readonly<T>` ব্যবহার করি।



### _#47._ 🔵 **What is `Pick<T, K>` and `Omit<T, K>`?**

**`Pick<T, K>`:** এটা TypeScript-এর একটি utility type যা একটা object type থেকে নির্দিষ্ট কিছু প্রোপার্টি বেছে নিয়ে নতুন একটা type তৈরি করে। `K` হলো প্রোপার্টি key-গুলোর union type।

**Example:**
```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

type UserSubset = Pick<User, "name" | "age">;

// UserSubset হবে:
// {
//   name: string;
//   age: number;
// }
```

**`Omit<T, K>`:** এটা `Pick`-এর উল্টো। এটা নির্দিষ্ট কিছু প্রোপার্টি বাদ দিয়ে বাকি প্রোপার্টি নিয়ে নতুন type তৈরি করে।

**Example:**
```typescript
type UserWithoutEmail = Omit<User, "email">;

// UserWithoutEmail হবে:
// {
//   name: string;
//   age: number;
// }
```
**Use case:** `Pick` ব্যবহার করি যখন আমি শুধু নির্দিষ্ট প্রোপার্টি নিয়ে কাজ করতে চাই। `Omit` ব্যবহার করি যখন কিছু প্রোপার্টি exclude করতে চাই।



### _#48._ 🔵 **What is `Record<K, T>`?**

`Record<K, T>` হলো TypeScript-এর একটি utility type যা একটা object type তৈরি করে, যেখানে key হবে `K` (union type) এবং প্রতিটি key-এর value হবে `T` type-এর।

**Example:**
```typescript
type Role = "admin" | "user" | "guest";
type Permissions = { canEdit: boolean; canView: boolean };

type RolePermissions = Record<Role, Permissions>;

// RolePermissions হবে:
// {
//   admin: Permissions;
//   user: Permissions;
//   guest: Permissions;
// }
```
**Use case:** যখন আমার একটা object দরকার যেখানে নির্দিষ্ট key-গুলোর সাথে নির্দিষ্ট type-এর value map করতে হবে, তখন `Record` ব্যবহার করি।



### _#49._ 🔵 **What is `Exclude<T, U>` and `Extract<T, U>`?**

**`Exclude<T, U>`:** এটা একটা union type `T` থেকে সেই সব member বাদ দেয় যেগুলো `U`-এর সাথে assignable।

**Example:**
```typescript
type MyUnion = "a" | "b" | "c";
type Excluded = Exclude<MyUnion, "a" | "c">;

// Excluded হবে: "b"
```

**`Extract<T, U>`:** এটা `Exclude`-এর উল্টো। এটা `T` union type থেকে শুধু সেই member-গুলো নেয় যেগুলো `U`-এর সাথে assignable।

**Example:**
```typescript
type Extracted = Extract<MyUnion, "a" | "c">;

// Extracted হবে: "a" | "c"
```
**Use case:** `Exclude` ব্যবহার করি যখন কোনো union type থেকে নির্দিষ্ট member বাদ দিতে চাই। `Extract` ব্যবহার করি যখন শুধু নির্দিষ্ট member বেছে নিতে চাই।

✅ 9. Type Guards & Safety
### _#50._ 🔵 **What are type guards in TypeScript?**

Type guards হলো TypeScript-এর এমন একটি মেকানিজম যা runtime-এ কোনো variable-এর specific type নির্ধারণ করতে সাহায্য করে। এর মাধ্যমে আমরা type narrowing করতে পারি, যাতে TypeScript compiler জানতে পারে কোনো variable কোন type-এর। এটা conditional logic ব্যবহার করে কাজ করে।

**Example:**
```typescript
function example(value: string | number) {
  if (typeof value === "string") {
    // এখানে value শুধু string type
    console.log(value.toUpperCase());
  } else {
    // এখানে value শুধু number type
    console.log(value.toFixed());
  }
}
```
**Use case:** Type guards ব্যবহার করি যখন union types নিয়ে কাজ করি এবং specific type-এর উপর নির্ভর করে logic লিখতে হয়।



### _#51._ 🔵 **How do you use `in`, `typeof`, and `instanceof` as type guards?**

TypeScript-এ `in`, `typeof`, এবং `instanceof` হলো type guards যা type narrowing করতে ব্যবহৃত হয়। এদের প্রত্যেকটির আলাদা use case আছে:

1. **`typeof`:** Primitive types (string, number, boolean, etc.) চেক করতে ব্যবহৃত হয়।
   ```typescript
   function printValue(value: string | number) {
     if (typeof value === "string") {
       console.log(`String: ${value.toUpperCase()}`);
     } else {
       console.log(`Number: ${value.toFixed(2)}`);
     }
   }
   ```

2. **`instanceof`:** Class instances চেক করতে ব্যবহৃত হয়, যখন আমরা জানতে চাই কোনো object কোনো নির্দিষ্ট class-এর instance কিনা।
   ```typescript
   class Dog { bark() {} }
   class Cat { meow() {} }

   function makeSound(animal: Dog | Cat) {
     if (animal instanceof Dog) {
       animal.bark();
     } else {
       animal.meow();
     }
   }
   ```

3. **`in`:** Object-এর কোনো property আছে কিনা চেক করে type নির্ধারণ করতে ব্যবহৃত হয়।
   ```typescript
   interface User { name: string }
   interface Admin { name: string; role: string }

   function displayRole(person: User | Admin) {
     if ("role" in person) {
       console.log(`Role: ${person.role}`);
     } else {
       console.log(`Name: ${person.name}`);
     }
   }
   ```

**Use case:** `typeof` primitive types-এর জন্য, `instanceof` class-based objects-এর জন্য, আর `in` interface বা object property চেকের জন্য ব্যবহার করি।



### _#52._ 🔵 **What is a discriminated union and how is it used?**

Discriminated union হলো TypeScript-এ একটি প্যাটার্ন যেখানে একাধিক type-এর union type থাকে, এবং প্রতিটি type-এর একটি common property থাকে (সাধারণত literal type) যাকে discriminant বলা হয়। এই discriminant ব্যবহার করে আমরা type narrowing করতে পারি।

**Example:**
```typescript
interface Circle {
  kind: "circle"; // discriminant
  radius: number;
}

interface Square {
  kind: "square"; // discriminant
  side: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
}
```

**How it’s used:**
- Discriminant property (`kind`) দিয়ে আমরা easily identify করতে পারি কোন type-এর object নিয়ে কাজ করছি।
- Switch case বা if-else ব্যবহার করে type narrowing করা হয়।
- এটা code safe করে এবং type errors কমায়।

**Use case:** Discriminated union ব্যবহার করি যখন একাধিক related types নিয়ে কাজ করি এবং তাদের unique identifier দিয়ে logic handle করতে হয়, যেমন shape calculations বা API response parsing-এ।

✅ 10. Modules and Tooling
### _#53._ 🔵 **How do you import and export modules in TypeScript?**

TypeScript-এ modules import এবং export করার পদ্ধতি JavaScript-এর ES Modules-এর মতোই, তবে TypeScript type safety এবং type annotations যোগ করে। আমরা `import` এবং `export` keywords ব্যবহার করি।

**Export:**
- **Named Export:** Specific variables, functions, বা classes export করতে।
  ```typescript
  // math.ts
  export const add = (a: number, b: number): number => a + b;
  export interface MathOperation {
    calculate: (x: number, y: number) => number;
  }
  ```
- **Default Export:** একটি module থেকে single default export করতে।
  ```typescript
  // user.ts
  export default class User {
    constructor(public name: string) {}
  }
  ```

**Import:**
- **Named Import:**
  ```typescript
  // main.ts
  import { add, MathOperation } from './math';

  const op: MathOperation = { calculate: add };
  console.log(add(2, 3)); // 5
  ```
- **Default Import:**
  ```typescript
  import User from './user';

  const user = new User("Alice");
  ```
- **Namespace Import:** সব export একসাথে import করতে।
  ```typescript
  import * as Math from './math';
  console.log(Math.add(2, 3));
  ```

**Use case:** Modules ব্যবহার করি code organization এবং reusability-এর জন্য, যাতে বড় প্রোজেক্টে code ম্যানেজ করা সহজ হয়।



### _#54._ 🔵 **What is declaration merging?**

Declaration merging হলো TypeScript-এর একটি feature যেখানে একই নামের multiple declarations (interfaces, namespaces, ইত্যাদি) একসাথে merge হয়ে একটি single definition তৈরি করে। এটা সাধারণত interfaces এবং namespaces-এর ক্ষেত্রে ব্যবহৃত হয়।

**Example (Interface Merging):**
```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

// Merged result:
// interface User {
//   name: string;
//   age: number;
// }
```

**Rules:**
- Interface-এর নাম একই হতে হবে।
- একই নামে multiple declarations থাকলে TypeScript সেগুলো automatically merge করে।
- Namespace বা module declarations-এর ক্ষেত্রেও এটা কাজ করে।

**Use case:** Declaration merging ব্যবহার করি third-party library-এর type definitions extend করতে বা modularভাবে interface define করতে।



### _#55._ 🔵 **What is a `.d.ts` file and when do you use it?**

`.d.ts` file হলো TypeScript-এর declaration file যা শুধু type information ধারণ করে, কোনো implementation (logic) থাকে না। এটা JavaScript code বা libraries-এর type definitions প্রদান করতে ব্যবহৃত হয়।

**Example:**
```typescript
// my-lib.d.ts
declare function greet(name: string): string;

// main.ts
import { greet } from './my-lib';
console.log(greet("Alice")); // TypeScript type checking করে, কিন্তু implementation JS থেকে আসে।
```

**When to use:**
- JavaScript libraries (যেমন Lodash, jQuery) ব্যবহার করার সময় type safety নিশ্চিত করতে।
- Project-এর global type definitions declare করতে।
- TypeScript-এর জন্য external modules-এর types প্রদান করতে, যেমন DefinitelyTyped থেকে `@types` packages।

**Use case:** `.d.ts` files ব্যবহার করি যখন আমরা JavaScript code-এর সাথে TypeScript-এর type checking integrate করতে চাই।



### _#56._ 🔵 **What are ambient declarations in TypeScript?**

Ambient declarations হলো TypeScript-এর এমন declarations যা শুধু type information প্রদান করে, কিন্তু কোনো runtime implementation থাকে না। এগুলো সাধারণত `.d.ts` files-এ বা `declare` keyword ব্যবহার করে লেখা হয়। এটা external JavaScript code বা global variables-এর types define করতে ব্যবহৃত হয়।

**Example:**
```typescript
// ambient.d.ts
declare const MY_GLOBAL: string;

declare module "my-lib" {
  export function myFunction(): void;
}
```

**Key Points:**
- `declare` keyword ব্যবহার করা হয় ambient declarations-এর জন্য।
- এগুলো runtime-এ কোনো code generate করে না।
- সাধারণত global variables, third-party libraries, বা browser APIs (যেমন `window`, `document`) describe করতে ব্যবহৃত হয়।

**Use case:** Ambient declarations ব্যবহার করি যখন আমরা JavaScript libraries বা global objects-এর জন্য type safety চাই, কিন্তু তাদের implementation আমাদের control-এ নেই।


✅ 11. React with TypeScript (Bonus if using React)
### _#57._ 🔵 **How do you type props and state in a React component?**

TypeScript-এ React component-এর props এবং state টাইপ করার জন্য আমরা interface বা type ব্যবহার করি। Functional components এবং class components-এর ক্ষেত্রে পদ্ধতি একটু ভিন্ন।

**Functional Component (Props):**
```typescript
interface MyComponentProps {
  name: string;
  age?: number; // Optional prop
}

const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
  return <div>Hello, {name}! Age: {age ?? "N/A"}</div>;
};
```

**State in Functional Component (useState):**
```typescript
import { useState } from 'react';

interface UserState {
  name: string;
  isActive: boolean;
}

const MyComponent = () => {
  const [user, setUser] = useState<UserState>({ name: "Alice", isActive: true });

  return <div>{user.name}</div>;
};
```

**Class Component (Props and State):**
```typescript
interface MyComponentProps {
  title: string;
}

interface MyComponentState {
  count: number;
}

class MyComponent extends React.Component<MyComponentProps, MyComponentState> {
  state: MyComponentState = { count: 0 };

  render() {
    return <div>{this.props.title}: {this.state.count}</div>;
  }
}
```

**Use case:** Props এবং state টাইপ করা ensure করে যে component-এর ডাটা সঠিকভাবে ব্যবহৃত হচ্ছে এবং type errors ধরা পড়ে।



### _#58._ 🔵 **What is `FC` (FunctionComponent) and when should you use it?**

`React.FC` (FunctionComponent) হলো TypeScript-এর একটি built-in type যা functional React components-এর type define করতে ব্যবহৃত হয়। এটা props-এর type নির্দিষ্ট করতে এবং children prop স্বয়ংক্রিয়ভাবে support করতে সাহায্য করে।

**Example:**
```typescript
interface MyComponentProps {
  message: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ message, children }) => {
  return (
    <div>
      {message}
      {children} {/* children automatically typed */}
    </div>
  );
};
```

**When to use:**
- যখন একটি functional component লিখছেন এবং props-এর type define করতে চান।
- যখন component children accept করে, কারণ `FC` ডিফল্টভাবে `children` prop টাইপ করে।
- Simple components-এর জন্য, যেখানে complex type logic দরকার নেই।

**When not to use:**
- যদি component-এ generic types বা complex return types দরকার হয়, তখন `FC` এড়িয়ে সরাসরি function type define করা ভালো।
  ```typescript
  function GenericComponent<T>({ data }: { data: T }) {
    return <div>{String(data)}</div>;
  }
  ```

**Use case:** `FC` ব্যবহার করি straightforward functional components-এর জন্য type safety নিশ্চিত করতে।



### _#59._ 🔵 **How do you type event handlers like `onChange`, `onSubmit`?**

TypeScript-এ React event handlers (যেমন `onChange`, `onSubmit`) টাইপ করতে আমরা React-এর built-in event types ব্যবহার করি, যেমন `React.ChangeEvent` বা `React.FormEvent`।

**Typing `onChange` (Input):**
```typescript
interface FormProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: React.FC<FormProps> = ({ value, onChange }) => {
  return <input value={value} onChange={onChange} />;
};

// Usage
const App = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <MyInput value={value} onChange={handleChange} />;
};
```

**Typing `onSubmit` (Form):**
```typescript
const MyForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};
```

**Common Event Types:**
- `React.ChangeEvent<T>`: Input, select, textarea-এর জন্য।
- `React.FormEvent<T>`: Form submission-এর জন্য।
- `React.MouseEvent<T>`: Click, hover ইত্যাদির জন্য।
- `React.KeyboardEvent<T>`: Key press-এর জন্য।

**Use case:** Event handlers টাইপ করা ensure করে যে event object-এর properties (যেমন `e.target.value`) সঠিকভাবে অ্যাক্সেস করা হচ্ছে।



### _#60._ 🔵 **How do you type `useState`, `useEffect`, and `useRef` in TypeScript?**

TypeScript-এ React hooks যেমন `useState`, `useEffect`, এবং `useRef` টাইপ করা সাধারণত সোজা, কারণ React-এর types ডিফল্টভাবে support করে।

**Typing `useState`:**
```typescript
import { useState } from 'react';

const MyComponent = () => {
  // Simple type
  const [count, setCount] = useState<number>(0);

  // Complex type
  interface User {
    name: string;
    age: number;
  }
  const [user, setUser] = useState<User | null>(null);

  return <div>{user?.name ?? count}</div>;
};
```

**Typing `useEffect`:**
`useEffect` সাধারণত type annotation দরকার হয় না, কারণ এটা void বা cleanup function return করে। তবে dependencies-এর types সঠিক হতে হয়।
```typescript
import { useEffect } from 'react';

const MyComponent = ({ id }: { id: number }) => {
  useEffect(() => {
    console.log(`ID changed: ${id}`);
    return () => console.log("Cleanup");
  }, [id]); // id: number

  return <div>ID: {id}</div>;
};
```

**Typing `useRef`:**
`useRef` দুইভাবে ব্যবহৃত হয়: DOM elements এবং mutable values-এর জন্য। Type নির্দিষ্ট করতে হয়।
```typescript
import { useRef } from 'react';

const MyComponent = () => {
  // DOM element ref
  const inputRef = useRef<HTMLInputElement>(null);

  // Mutable value ref
  const countRef = useRef<number>(0);

  const focusInput = () => {
    inputRef.current?.focus();
    countRef.current += 1;
  };

  return <input ref={inputRef} onClick={focusInput} />;
};
```

**Key Points:**
- `useState`: Generic type দিয়ে state-এর type নির্দিষ্ট করি (`useState<T>`).
- `useEffect`: Dependencies-এর types সঠিক হতে হয়, cleanup function optional.
- `useRef`: Generic type দিয়ে ref-এর initial value বা DOM element টাইপ করি (`useRef<T>`).

**Use case:** Hooks টাইপ করা ensure করে যে state, effects, এবং refs সঠিকভাবে ব্যবহৃত হচ্ছে এবং type errors এড়ানো যায়।


# ✨ React based interview questions
✅ 1. Basics & Introduction
### _#01._ 🟣 **What is ReactJS and why is it used?**

ReactJS হলো একটি open-source JavaScript library যা Facebook দ্বারা develop করা হয়েছে, মূলত user interface (UI) তৈরি করার জন্য, বিশেষ করে single-page applications (SPAs)-এর জন্য। এটা component-based architecture follow করে, যা UI-কে reusable এবং modular করে।

**Why used:**
- **Fast Rendering:** Virtual DOM ব্যবহার করে React UI updates দ্রুত করে।
- **Reusable Components:** Code reuse করা যায়, যা development সহজ করে।
- **Large Ecosystem:** React-এর সাথে Redux, React Router ইত্যাদি libraries integrate করা সহজ।
- **Community Support:** বড় community এবং resources আছে, যা learning এবং problem-solving সহজ করে।
- **Flexibility:** React শুধু UI layer-এ focus করে, তাই backend বা state management-এর জন্য যেকোনো tech ব্যবহার করা যায়।



### _#02._ 🟣 **What are the main features of React?**

React-এর main features হলো:

- **Component-Based Architecture:** UI-কে ছোট ছোট reusable components-এ ভাগ করা যায়।
- **Virtual DOM:** Real DOM-এর lightweight copy, যা updates efficient করে।
- **JSX:** JavaScript-এর মধ্যে HTML-like syntax, যা UI লেখা সহজ করে।
- **Unidirectional Data Flow:** Data parent থেকে child components-এ flow করে, যা state management predictable করে।
- **React Hooks:** Functional components-এ state এবং lifecycle features ব্যবহার করার জন্য (যেমন `useState`, `useEffect`)।
- **Declarative UI:** Code-এ কী দেখাতে হবে তা describe করা হয়, React বাকিটা handle করে।
- **Cross-Platform:** React Native-এর মাধ্যমে mobile apps develop করা যায়।



### _#03._ 🟣 **What is the difference between React and other frontend frameworks (e.g., Angular or Vue)?**

| **Aspect**            | **React**                                                                 | **Angular**                                                              | **Vue**                                                                 |
|-----------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **Type**              | Library (শুধু UI layer)                                                  | Full-fledged Framework                                                  | Progressive Framework                                                   |
| **Learning Curve**    | Relatively easy, শুধু React শিখলেই হয়                                    | Steep, কারণ Angular-এর সাথে TypeScript, RxJS ইত্যাদি শিখতে হয়           | Moderate, React-এর চেয়ে সহজ কিন্তু Angular-এর চেয়ে lightweight         |
| **Data Binding**      | Unidirectional (one-way)                                                  | Two-way binding                                                         | Two-way binding (optional)                                               |
| **DOM Manipulation**  | Virtual DOM                                                              | Real DOM                                                                | Virtual DOM                                                             |
| **Structure**         | Flexible, developer নিজে state management (Redux) বা routing choose করে | Opinionated, built-in solutions (routing, forms, etc.)                  | Flexible, কিন্তু built-in solutions আছে                                 |
| **Ecosystem**         | Third-party libraries দরকার (React Router, Redux)                        | Built-in tools (Angular CLI, Material)                                  | Built-in + third-party (Vuex, Vue Router)                                |
| **Use Case**          | Dynamic, component-heavy UIs                                             | Large-scale, enterprise apps                                            | Small to medium apps, gradual adoption সম্ভব                           |

**Summary:** React flexibility এবং lightweight nature-এর জন্য popular, Angular enterprise apps-এর জন্য, আর Vue মাঝামাঝি।



### _#04._ 🟣 **What is JSX and why is it used?**

JSX (JavaScript XML) হলো React-এর একটি syntax extension যা JavaScript-এর মধ্যে HTML-like code লিখতে দেয়। এটা JavaScript-এর সাথে UI structure combine করে।

**Why used:**
- **Readable Code:** JSX-এর syntax HTML-এর মতো, তাই UI লেখা intuitive হয়।
- **JavaScript Integration:** JSX-এ JavaScript expressions (যেমন `{variable}`) ব্যবহার করা যায়।
- **Type Safety:** TypeScript-এর সাথে JSX টাইপ চেকিং support করে।
- **Compiled to JS:** Babel JSX-কে `React.createElement` calls-এ convert করে, যা React-এর জন্য optimized।

**Example:**
```jsx
const element = <h1>Hello, {name}!</h1>;
// Compiles to:
const element = React.createElement("h1", null, "Hello, ", name, "!");
```

**Use case:** JSX UI components লেখার জন্য ব্যবহৃত হয়, যা developer experience উন্নত করে।



### _#05._ 🟣 **What are components in React?**

Components হলো React-এর building blocks, যা UI-এর ছোট ছোট reusable অংশ। এগুলো independent এবং reusable code snippets যা specific functionality বা UI render করে।

**Types:**
- **Functional Components:** Simple functions যা props নিয়ে JSX return করে।
  ```jsx
  const MyComponent = ({ name }: { name: string }) => <div>Hello, {name}</div>;
  ```
- **Class Components:** Class-based, state এবং lifecycle methods support করে।
  ```jsx
  class MyComponent extends React.Component<{ name: string }> {
    render() {
      return <div>Hello, {this.props.name}</div>;
    }
  }
  ```

**Features:**
- Props নিয়ে dynamic data render করে।
- State ব্যবহার করে internal data manage করে।
- Nested components তৈরি করে complex UI build করা যায়।

**Use case:** Components ব্যবহার করি UI-কে modular এবং maintainable করতে।



### _#06._ 🟣 **What is the difference between functional and class components?**

| **Aspect**              | **Functional Components**                                      | **Class Components**                                         |
|-------------------------|---------------------------------------------------------------|-------------------------------------------------------------|
| **Syntax**              | Simple function, JSX return করে                              | Class extends `React.Component`, `render` method ব্যবহার করে |
| **State Management**    | `useState` hook দিয়ে state manage করে                       | `this.state` এবং `setState` দিয়ে state manage করে          |
| **Lifecycle Methods**   | `useEffect` hook দিয়ে lifecycle handle করে                  | Built-in lifecycle methods (e.g., `componentDidMount`)       |
| **Readability**         | Concise এবং less boilerplate                                  | More boilerplate (class, `this` binding)                    |
| **Performance**         | Slightly better, কারণ simpler structure                      | Slightly heavier, কারণ class overhead                       |
| **Usage**               | Modern React-এ preferred (hooks-এর জন্য)                     | Legacy code বা complex lifecycle দরকার হলে                 |

**Example (Functional):**
```jsx
const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
```

**Example (Class):**
```jsx
class Counter extends React.Component {
  state = { count: 0 };
  render() {
    return <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</button>;
  }
}
```

**Use case:** Functional components modern React-এ বেশি ব্যবহৃত হয় hooks-এর সুবিধার জন্য। Class components legacy code-এ বা specific use case-এ ব্যবহৃত হয়।



### _#07._ 🟣 **What is a single-page application (SPA)?**

Single-Page Application (SPA) হলো এমন একটি web application যা একটি single HTML page লোড করে এবং dynamically content update করে, পুরো page reload না করে। React SPA build করার জন্য popular।

**Key Features:**
- **Client-Side Rendering:** JavaScript (React) browser-এ UI render করে।
- **Routing:** React Router-এর মতো libraries ব্যবহার করে page navigation handle করে।
- **Fast Experience:** Page reload ছাড়া content update হয়, তাই user experience smooth।
- **API Integration:** Backend থেকে data fetch করে (যেমন REST বা GraphQL)।

**Example:** Gmail, Facebook-এর মতো apps SPA, যেখানে navigation page refresh ছাড়া হয়।

**Use case:** SPA ব্যবহার করি fast, interactive web apps তৈরি করতে, যেখানে user experience priority।



### _#08._ 🟣 **What is the role of Babel and Webpack in React?**

**Babel:**
- Babel হলো একটি JavaScript compiler যা modern JavaScript (ES6+) এবং JSX-কে browser-compatible JavaScript-এ convert করে।
- **Role in React:**
  - JSX-কে `React.createElement` calls-এ transform করে।
  - ES6+ features (arrow functions, destructuring) পুরোনো browsers-এর জন্য polyfill করে।
  - Example: `<div>Hello</div>` → `React.createElement("div", null, "Hello")`.

**Webpack:**
- Webpack হলো একটি module bundler যা JavaScript, CSS, images ইত্যাদি assets-কে bundle করে production-ready files তৈরি করে।
- **Role in React:**
  - Modules (JS/TS files) এবং dependencies একটি single bundle-এ combine করে।
  - Code splitting, minification, এবং tree-shaking করে performance optimize করে।
  - Loaders (যেমন babel-loader, ts-loader) দিয়ে TypeScript/JSX process করে।
  - Dev server (hot reloading) provide করে development-এর জন্য।

**Use case:** Babel React-এর modern syntax support করে, আর Webpack assets bundle করে app-কে fast এবং production-ready করে।


✅ 2. Props & State
### _#09._ 🟣 **What is props in React?**

Props (properties) হলো React-এ একটি component-এর input, যা parent component থেকে child component-এ data পাঠানোর জন্য ব্যবহৃত হয়। Props read-only, অর্থাৎ child component-এ এগুলো modify করা যায় না।

**Example:**
```jsx
const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;

// Parent component
const App = () => <Greeting name="Alice" />;
```

**Key Points:**
- Props হলো object যা component-এর attributes হিসেবে পাঠানো হয়।
- Functions, objects, arrays, বা primitive values হিসেবে props পাঠানো যায়।
- Props immutable, তাই child component শুধু read করতে পারে।

**Use case:** Props ব্যবহার করি parent থেকে child-এ data বা behavior (callbacks) পাঠাতে।



### _#10._ 🟣 **What is the difference between props and state?**

| **Aspect**         | **Props**                                                                 | **State**                                                                |
|--------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **Definition**     | Parent থেকে child component-এ পাঠানো data                                | Component-এর internal data, যা component নিজে manage করে                |
| **Mutability**     | Immutable (read-only)                                                     | Mutable (component-এর মধ্যে update করা যায়)                            |
| **Source**         | Parent component থেকে আসে                                                | Component-এর ভিতরে define করা হয় (useState বা this.state)              |
| **Usage**          | Data passing এবং communication-এর জন্য                                   | Dynamic UI updates (যেমন form input, counter)                           |
| **Example**        | `<Button label="Click" />`                                               | `const [count, setCount] = useState(0);`                                |

**Example:**
```jsx
const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue); // State
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

// Parent
const App = () => <Counter initialValue={0} />; // Props
```

**Use case:** Props data passing-এর জন্য, state internal changes manage করার জন্য।



### _#11._ 🟣 **What is state lifting in React?**

State lifting (lifting state up) হলো React-এ এমন একটি পদ্ধতি যেখানে state কে child components থেকে তাদের common parent component-এ move করা হয়, যাতে multiple components state share করতে পারে।

**Example:**
```jsx
const Parent = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Child1 value={value} onChange={setValue} />
      <Child2 value={value} />
    </>
  );
};

const Child1 = ({ value, onChange }) => (
  <input value={value} onChange={(e) => onChange(e.target.value)} />
);

const Child2 = ({ value }) => <p>Value: {value}</p>;
```

**How it works:**
- State (`value`) parent-এ define করা হয়।
- Child components props হিসেবে state এবং update function পায়।
- এটা sibling components-এর মধ্যে data sharing enable করে।

**Use case:** State lifting ব্যবহার করি যখন multiple components-এর মধ্যে shared state দরকার, যেমন form data বা user input।



### _#12._ 🟣 **What is the difference between controlled and uncontrolled components?**

| **Aspect**              | **Controlled Components**                                           | **Uncontrolled Components**                                       |
|-------------------------|--------------------------------------------------------------------|------------------------------------------------------------------|
| **Definition**          | State দিয়ে input-এর value control করা হয়                         | DOM নিজে input-এর value manage করে                              |
| **State Management**    | Component state-এ value store হয়, props বা state দিয়ে update     | Value DOM-এ store হয়, ref দিয়ে access করা হয়                  |
| **Example**             | `<input value={state} onChange={handleChange} />`                 | `<input ref={inputRef} />`                                      |
| **Control**             | React fully controls input                                        | DOM controls input, React শুধু access করে                      |
| **Use Case**            | Form validation, dynamic updates                                  | Simple forms, যেখানে state management দরকার নেই                 |

**Controlled Component Example:**
```jsx
const ControlledInput = () => {
  const [value, setValue] = useState("");
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};
```

**Uncontrolled Component Example:**
```jsx
const UncontrolledInput = () => {
  const inputRef = useRef(null);
  const handleSubmit = () => console.log(inputRef.current.value);
  return <input ref={inputRef} />;
};
```

**Use case:** Controlled components complex forms-এর জন্য, uncontrolled components simple cases-এ।



### _#13._ 🟣 **What is prop drilling, and how do you avoid it?**

**Prop drilling** হলো এমন একটি সমস্যা যেখানে props কে multiple nested components-এর মধ্য দিয়ে পাঠাতে হয়, এমনকি যদি মাঝের components-এ props-এর দরকার না থাকে। এটা code complex এবং maintain করা কঠিন করে।

**Example:**
```jsx
const App = () => {
  const data = "Hello";
  return <Parent data={data} />;
};

const Parent = ({ data }) => <Child data={data} />; // data-এর দরকার নেই
const Child = ({ data }) => <GrandChild data={data} />; // data-এর দরকার নেই
const GrandChild = ({ data }) => <div>{data}</div>;
```

**How to avoid:**
1. **React Context API:**
   ```jsx
   const DataContext = createContext(null);

   const App = () => (
     <DataContext.Provider value="Hello">
       <GrandChild />
     </DataContext.Provider>
   );

   const GrandChild = () => {
     const data = useContext(DataContext);
     return <div>{data}</div>;
   };
   ```
2. **State Management Libraries:** Redux, Zustand, বা Recoil ব্যবহার করে global state manage করা।
3. **Component Composition:** Props-এর পরিবর্তে children বা render props ব্যবহার করা।
   ```jsx
   const Parent = ({ children }) => <div>{children}</div>;
   ```

**Use case:** Prop drilling avoid করতে Context বা state management ব্যবহার করি large-scale apps-এ।



### _#14._ 🟣 **What is the use of the key prop in a list?**

`key` prop হলো React-এর একটি special attribute যা list-এর items (elements) uniquely identify করতে ব্যবহৃত হয়। এটা React-কে efficient rendering করতে সাহায্য করে।

**Why needed:**
- React Virtual DOM-এ changes track করতে `key` ব্যবহার করে।
- List items add, remove, বা reorder হলে React সঠিকভাবে কোন item পরিবর্তন হয়েছে বুঝতে পারে।
- Without `key`, React entire list re-render করতে পারে, যা performance issue সৃষ্টি করে।

**Example:**
```jsx
const List = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.name}</li> // key হিসেবে unique id
    ))}
  </ul>
);
```

**Rules:**
- `key` unique হতে হবে list-এর sibling elements-এর মধ্যে।
- Index ব্যবহার করা avoid করা উচিত, কারণ list order change হলে issue হয়।
- Stable IDs (যেমন database ID) best choice।

**Use case:** `key` prop ব্যবহার করি lists efficiently render করতে এবং unnecessary re-renders এড়াতে।


✅ 3. Hooks
### _#15._ 🟣 **What is a hook in React?**

React-এ Hook হলো special functions যা functional components-এ state, lifecycle features, এবং অন্যান্য React functionalities ব্যবহার করতে দেয়। Hooks React 16.8-এ introduce করা হয়েছে, যাতে class components ছাড়াই complex logic handle করা যায়।

**Example:** `useState`, `useEffect`, `useContext` ইত্যাদি।
**Use case:** Hooks ব্যবহার করি functional components-এ state management, side effects, বা context access করতে।



### _#16._ 🟣 **What is useState and how does it work?**

`useState` হলো React-এর একটি hook যা functional components-এ state manage করতে ব্যবহৃত হয়। এটা একটি state variable এবং তা update করার জন্য একটি function return করে।

**How it works:**
- `useState` initial value নিয়ে state initialize করে।
- State update হলে component re-render হয়।

**Example:**
```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Initial state: 0
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

**Use case:** `useState` ব্যবহার করি simple state (যেমন counter, form input) manage করতে।



### _#17._ 🟣 **What is useEffect and how does it work?**

`useEffect` হলো React-এর একটি hook যা side effects (যেমন data fetching, DOM manipulation, subscriptions) handle করতে ব্যবহৃত হয়। এটা component lifecycle methods-এর (mount, update, unmount) কাজ করে।

**How it works:**
- `useEffect` একটি callback function নেয়, যা component render-এর পরে run করে।
- Dependency array দিয়ে control করা যায় কখন effect run করবে।
- Cleanup function return করলে unmount বা re-run এর আগে cleanup হয়।

**Example:**
```jsx
import { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((res) => res.json())
      .then(setData);
    return () => console.log('Cleanup'); // Cleanup on unmount
  }, []); // Empty dependency array: runs once on mount

  return <div>{data ? data.name : 'Loading...'}</div>;
};
```

**Use case:** `useEffect` ব্যবহার করি API calls, timers, বা event listeners setup করতে।



### _#18._ 🟣 **What are the rules of hooks?**

React hooks-এর দুটি প্রধান rules আছে, যা ESLint plugin (`eslint-plugin-react-hooks`) enforce করে:

1. **Only call hooks at the top level:**
   - Hooks কে loops, conditions, বা nested functions-এর মধ্যে call করা যাবে না।
   - সবসময় component-এর বা custom hook-এর top level-এ call করতে হবে।
   - **Reason:** Hooks-এর call order consistent থাকতে হয় প্রতি render-এ।

2. **Only call hooks from React function components or custom hooks:**
   - Hooks শুধু functional components বা custom hooks-এর মধ্যে ব্যবহার করা যাবে।
   - Regular JavaScript functions বা class components-এ hooks ব্যবহার করা যাবে না।
   - **Reason:** Hooks React-এর internal state management-এর সাথে tied।

**Example (Correct):**
```jsx
const MyComponent = () => {
  const [count, setCount] = useState(0); // Top level
  useEffect(() => {}, []);
  return <div>{count}</div>;
};
```

**Example (Incorrect):**
```jsx
const MyComponent = () => {
  if (true) {
    const [count, setCount] = useState(0); // Error: Not top level
  }
  return <div></div>;
};
```

**Use case:** Rules follow করলে hooks predictable এবং bug-free থাকে।



### _#19._ 🟣 **What is useRef and how is it used?**

`useRef` হলো React-এর একটি hook যা mutable reference object তৈরি করে, যা component-এর lifetime জুড়ে persist করে। এটা সাধারণত DOM elements access বা mutable values store করতে ব্যবহৃত হয়।

**How it works:**
- `useRef` একটি `{ current: initialValue }` object return করে।
- `current` property change করলে component re-render হয় না।

**Example (DOM Access):**
```jsx
import { useRef } from 'react';

const MyInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // DOM element access
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};
```

**Example (Mutable Value):**
```jsx
const Counter = () => {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1; // No re-render
    console.log(countRef.current);
  };

  return <button onClick={increment}>Increment</button>;
};
```

**Use case:** `useRef` ব্যবহার করি DOM manipulation, timers, বা state ছাড়া mutable values track করতে।



### _#20._ 🟣 **What is useMemo and why would you use it?**

`useMemo` হলো React-এর একটি hook যা expensive calculations memoize করে, যাতে unnecessary re-computations এড়ানো যায়। এটা একটি value return করে।

**How it works:**
- `useMemo` একটি callback function এবং dependency array নেয়।
- Dependencies unchanged থাকলে memoized value return করে।

**Example:**
```jsx
import { useMemo } from 'react';

const ExpensiveComponent = ({ numbers }) => {
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]); // Recompute only if numbers change

  return <div>Sum: {sum}</div>;
};
```

**Why use:**
- Performance optimization-এর জন্য, যখন complex calculations (যেমন sorting, filtering) render-এর সময় বারবার run হয়।
- Unnecessary re-renders prevent করে।

**Use case:** `useMemo` ব্যবহার করি large datasets process বা computationally heavy operations optimize করতে।



### _#21._ 🟣 **What is useCallback?**

`useCallback` হলো React-এর একটি hook যা memoized callback function return করে, যাতে function unnecessary re-creation এড়ানো যায়।

**How it works:**
- `useCallback` একটি callback function এবং dependency array নেয়।
- Dependencies unchanged থাকলে same function reference return করে।

**Example:**
```jsx
import { useCallback, useState } from 'react';

const Button = ({ onClick }) => {
  console.log('Button re-rendered');
  return <button onClick={onClick}>Click</button>;
};

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Same function unless count changes

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  );
};
```

**Why use:**
- Child components-এ function props পাঠানোর সময় unnecessary re-renders prevent করতে।
- Performance optimization-এর জন্য।

**Use case:** `useCallback` ব্যবহার করি যখন functions child components-এ props হিসেবে পাঠানো হয় এবং re-render avoid করতে হয়।



### _#22._ 🟣 **What is useContext and how does it work?**

`useContext` হলো React-এর একটি hook যা Context API থেকে data access করতে ব্যবহৃত হয়, prop drilling এড়িয়ে। Context global state বা shared data store করতে ব্যবহৃত হয়।

**How it works:**
- `createContext` দিয়ে context তৈরি করা হয়।
- `Provider` দিয়ে context value set করা হয়।
- `useContext` দিয়ে component-এ value access করা হয়।

**Example:**
```jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
};

const Child = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>Toggle Theme</button>
    </div>
  );
};
```

**Use case:** `useContext` ব্যবহার করি theme, user data, বা app-wide settings share করতে।



### _#23._ 🟣 **What is useReducer and how is it different from useState?**

`useReducer` হলো React-এর একটি hook যা complex state logic manage করতে ব্যবহৃত হয়। এটা Redux-এর মতো reducer pattern follow করে।

**How it works:**
- `useReducer` একটি reducer function এবং initial state নেয়।
- `dispatch` function দিয়ে actions trigger করা হয়।
- Reducer state update করে।

**Example:**
```jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};
```

**Difference from useState:**

| **Aspect**          | **useState**                                     | **useReducer**                                  |
|---------------------|-------------------------------------------------|------------------------------------------------|
| **Purpose**         | Simple state management                         | Complex state logic                            |
| **API**             | `[state, setState]`                             | `[state, dispatch]`                            |
| **Logic**           | Direct state updates                            | Reducer function দিয়ে state updates           |
| **Use Case**        | Single value বা simple objects                  | Multiple related states বা complex transitions |
| **Example**         | Form input, toggle                              | Form with multiple fields, state machines      |

**Use case:** `useReducer` ব্যবহার করি যখন state transitions complex বা multiple related states manage করতে হয়।


### _#24._ 🟣 **What is a custom hook?**

Custom hook হলো একটি user-defined React hook, যা reusable logic encapsulate করতে ব্যবহৃত হয়। এটা `use` দিয়ে নামকরণ করা হয় এবং built-in hooks (যেমন `useState`, `useEffect`) ব্যবহার করে logic তৈরি করে।

**Example:**
```jsx
import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

// Usage
const MyComponent = () => {
  const { width, height } = useWindowSize();
  return <div>Window: {width} x {height}</div>;
};
```

**Key Points:**
- Custom hooks reusable logic share করে।
- Hooks-এর rules (top level, only in components/hooks) follow করতে হয়।
- Component-এর UI logic থেকে separate থাকে।

**Use case:** Custom hooks ব্যবহার করি API fetching, form handling, বা reusable behaviors (যেমন window size tracking) implement করতে।


✅ 4. Advanced Hooks & Concepts
### _#25._ 🟣 **What is the difference between a custom hook and a higher-order component (HOC)?**

| **Aspect**              | **Custom Hook**                                              | **Higher-Order Component (HOC)**                             |
|-------------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| **Definition**          | JavaScript function যা React hooks ব্যবহার করে reusable logic encapsulate করে। | Function যা একটি component নিয়ে enhanced component return করে। |
| **Usage**               | Functional components-এ logic share করতে।                   | Components-এ props বা behavior inject করতে।                |
| **Syntax**              | `use` prefix দিয়ে নামকরণ, hooks rules follow করে।          | Regular function যা component wrap করে।                    |
| **Example**             | `useWindowSize` hook window size track করে।                | `withAuth` HOC authentication logic যোগ করে।               |
| **Code Sharing**        | Logic শুধু functional components বা hooks-এ share হয়।      | Logic এবং UI behavior class/functional components-এ share হয়। |
| **Flexibility**         | Hooks-এর সাথে modern React-এ preferred।                    | Legacy code-এ বেশি ব্যবহৃত, কম flexible।                  |

**Example (Custom Hook):**
```jsx
const useToggle = () => {
  const [isOn, setIsOn] = useState(false);
  return [isOn, () => setIsOn(!isOn)];
};

const MyComponent = () => {
  const [isOn, toggle] = useToggle();
  return <button onClick={toggle}>{isOn ? 'On' : 'Off'}</button>;
};
```

**Example (HOC):**
```jsx
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log('Rendering', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
};

const MyComponent = ({ name }) => <div>{name}</div>;
const EnhancedComponent = withLogger(MyComponent);
```

**Use case:** Custom hooks modern React-এ logic reuse-এর জন্য, HOCs legacy code বা cross-cutting concerns (যেমন logging, auth) handle করতে।


### _#26._ 🟣 **What is a higher-order component (HOC)?**

Higher-Order Component (HOC) হলো React-এ একটি pattern যেখানে একটি function একটি component নিয়ে তাকে enhance করে নতুন component return করে। HOCs code reuse এবং logic sharing-এর জন্য ব্যবহৃত হয়।

**Example:**
```jsx
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = checkAuth(); // Assume some auth check
    return isAuthenticated ? <WrappedComponent {...props} /> : <div>Login required</div>;
  };
};

const Profile = ({ user }) => <div>{user.name}</div>;
const AuthProfile = withAuth(Profile);
```

**Key Points:**
- HOCs props manipulation, conditional rendering, বা additional logic যোগ করে।
- Common use cases: Authentication, logging, data fetching।
- React Redux-এর `connect` একটি জনপ্রিয় HOC।

**Use case:** HOCs ব্যবহার করি component-এ reusable logic (যেমন auth, error handling) inject করতে।


### _#27._ 🟣 **What is memoization in React and when should you use React.memo?**

**Memoization** হলো একটি optimization technique যা expensive calculations বা renders cache করে performance উন্নত করে। React-এ `React.memo` একটি higher-order component যা functional components-কে memoize করে, যাতে props unchanged থাকলে re-render এড়ানো যায়।

**How `React.memo` works:**
- `React.memo` শুধু props compare করে।
- Props unchanged থাকলে component re-render হয় না।

**Example:**
```jsx
const MyComponent = React.memo(({ value }) => {
  console.log('Rendering MyComponent');
  return <div>{value}</div>;
});

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <MyComponent value="Hello" /> {/* Won't re-render if value unchanged */}
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};
```

**When to use `React.memo`:**
- Component-এর rendering expensive (যেমন complex UI, large lists)।
- Props frequently unchanged থাকে।
- Component parent-এর frequent re-renders-এর মধ্যে থাকে।

**Use case:** `React.memo` ব্যবহার করি unnecessary re-renders prevent করতে, বিশেষ করে large বা complex components-এ।


### _#28._ 🟣 **What are some common performance optimization techniques in React?**

React apps-এর performance optimize করার জন্য কিছু common techniques:

1. **Use `React.memo`:** Functional components-এ unnecessary re-renders prevent করতে।
2. **useMemo & useCallback:** Expensive calculations এবং function re-creation এড়াতে।
   ```jsx
   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
   const memoizedCallback = useCallback(() => doSomething(), [deps]);
   ```
3. **Lazy Loading:** Components বা routes lazily load করতে (see #29).
4. **Code Splitting:** Webpack-এর সাথে dynamic imports ব্যবহার করে bundle size কমানো।
   ```jsx
   const LazyComponent = React.lazy(() => import('./LazyComponent'));
   ```
5. **Avoid Inline Functions/Objects in JSX:** Functions/objects props হিসেবে re-create হলে re-renders trigger করে।
   ```jsx
   // Bad
   <Child onClick={() => doSomething()} />
   // Good
   const handleClick = useCallback(() => doSomething(), []);
   <Child onClick={handleClick} />
   ```
6. **Use Keys in Lists:** Correct `key` prop দিয়ে list rendering optimize করা।
7. **Profile with React DevTools:** Performance bottlenecks identify করতে।
8. **Avoid Overusing State:** Unnecessary state updates re-renders trigger করে।

**Use case:** Performance optimization ব্যবহার করি large-scale apps-এ fast rendering এবং smooth user experience নিশ্চিত করতে।


### _#29._ 🟣 **What is lazy loading in React?**

Lazy loading হলো একটি technique যেখানে components বা resources (যেমন images, scripts) শুধু তখনই load করা হয় যখন তাদের দরকার হয়, initial bundle size কমানোর জন্য। React-এ `React.lazy` এবং `Suspense` ব্যবহার করে lazy loading implement করা হয়।

**Example:**
```jsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
```

**Key Points:**
- `React.lazy` dynamic imports ব্যবহার করে components asynchronously load করে।
- `Suspense` fallback UI দেখায় যতক্ষণ component load না হয়।
- Routing-এ (React Router) lazy loading খুব common।

**Use case:** Lazy loading ব্যবহার করি large apps-এ initial load time কমাতে এবং performance উন্নত করতে।


### _#30._ 🟣 **What is React Suspense?**

React Suspense হলো React-এর একটি feature যা asynchronous operations (যেমন lazy loading, data fetching) handle করতে সাহায্য করে। এটা components বা resources load হওয়ার সময় fallback UI দেখায়।

**Example:**
```jsx
import { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
```

**Key Points:**
- `Suspense` `React.lazy` বা data fetching libraries (যেমন Relay) এর সাথে কাজ করে।
- Concurrent rendering-এর সাথে Suspense data fetching optimize করে।
- Multiple components একসাথে Suspense-এ wrap করা যায়।

**Use case:** Suspense ব্যবহার করি lazy-loaded components বা asynchronous data fetching-এর জন্য smooth user experience প্রদান করতে।


### _#31._ 🟣 **What is React Concurrent Mode (or React Concurrent Features)?**

React Concurrent Features (পূর্বে Concurrent Mode নামে পরিচিত) হলো React-এর একটি feature set যা rendering process-কে আরো flexible এবং responsive করে। এটা apps-কে non-blocking rendering এবং better user experience প্রদান করে।

**Key Features:**
- **Time Slicing:** CPU-intensive renders কে smaller chunks-এ ভাগ করে।
- **Priority Scheduling:** High-priority updates (যেমন user input) কে low-priority tasks-এর আগে handle করে।
- **Suspense for Data Fetching:** Asynchronous data loading সহজ করে।

**Example (Conceptual):**
```jsx
import { Suspense } from 'react';

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <DataComponent />
  </Suspense>
);
```

**Key Points:**
- Concurrent features React 18-এ stable হয়েছে।
- `startTransition` API দিয়ে low-priority updates handle করা যায়।
- Improves performance in complex UIs with heavy state updates.

**Use case:** Concurrent features ব্যবহার করি large apps-এ smooth animations, fast interactions, এবং better performance নিশ্চিত করতে।


### _#32._ 🟣 **What is error boundary and how does it work?**

Error Boundary হলো React-এর একটি special component যা child components-এর JavaScript errors catch করে এবং fallback UI দেখায়, যাতে app crash না করে।

**How it works:**
- Class components-এ `static getDerivedStateFromError` বা `componentDidCatch` implement করে error boundaries তৈরি করা হয়।
- Error হলে fallback UI render করে এবং error log করা যায়।

**Example:**
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error, errorInfo); // Log error
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }
    return this.props.children;
  }
}

const App = () => (
  <ErrorBoundary>
    <BuggyComponent />
  </ErrorBoundary>
);
```

**Key Points:**
- Error boundaries শুধু class components-এ কাজ করে।
- Event handlers বা async code-এর errors catch করে না।
- Production-এ user-friendly error UI দেখাতে ব্যবহৃত হয়।

**Use case:** Error boundaries ব্যবহার করি app stability নিশ্চিত করতে এবং user experience protect করতে।


### _#33._ 🟣 **What is debouncing and throttling in React?**

**Debouncing:** একটি function-কে delay করে execute করে, যতক্ষণ না একটি নির্দিষ্ট সময়ের মধ্যে আরো calls না থাকে।

**Throttling:** একটি function-কে নির্দিষ্ট time interval-এর মধ্যে শুধু একবার execute করতে দেয়।

**Example (Debouncing):**
```jsx
import { useState, useCallback } from 'react';
import _ from 'lodash';

const Search = () => {
  const [query, setQuery] = useState('');

  const debouncedSearch = useCallback(
    _.debounce((value) => {
      console.log('Searching:', value); // API call here
    }, 500),
    []
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return <input value={query} onChange={handleChange} />;
};
```

**Example (Throttling):**
```jsx
import { useCallback } from 'react';
import _ from 'lodash';

const ScrollTracker = () => {
  const throttledScroll = useCallback(
    _.throttle(() => {
      console.log('Scroll position:', window.scrollY);
    }, 1000),
    []
  );

  return <div onScroll={throttledScroll}>Scroll me</div>;
};
```

**Use case:**
- **Debouncing:** Search inputs, autocomplete, বা frequent user actions-এ API calls কমাতে।
- **Throttling:** Scroll events, resize events, বা rapid button clicks handle করতে।


✅ 5. Lifecycle & Rendering
### _#34._ 🟣 **What is the component lifecycle in React?**

React-এ component lifecycle হলো একটি component-এর জীবনচক্র, যা তিনটি প্রধান phase নিয়ে গঠিত: **Mounting**, **Updating**, এবং **Unmounting**। প্রতিটি phase-এ নির্দিষ্ট events বা methods ঘটে, যা component-এর creation, update, এবং destruction-এর সাথে সম্পর্কিত।

**Phases:**
1. **Mounting:** Component তৈরি হয় এবং DOM-এ render হয়।
2. **Updating:** Component-এর state বা props change হলে re-render হয়।
3. **Unmounting:** Component DOM থেকে remove হয়।

**Use case:** Lifecycle বুঝে আমরা specific সময়ে logic (যেমন data fetching, cleanup) execute করতে পারি।


### _#35._ 🟣 **What is the difference between mounting, updating, and unmounting?**

| **Phase**       | **Description**                                                                 | **Key Activities**                                  |
|-----------------|--------------------------------------------------------------------------------|----------------------------------------------------|
| **Mounting**    | Component প্রথমবার তৈরি হয় এবং DOM-এ insert হয়।                              | Constructor, initial render, lifecycle methods (যেমন `componentDidMount`)। |
| **Updating**    | State বা props change হলে component re-render হয়।                              | State/props update, lifecycle methods (যেমন `componentDidUpdate`)। |
| **Unmounting**  | Component DOM থেকে remove হয়।                                                | Cleanup tasks, lifecycle methods (যেমন `componentWillUnmount`)। |

**Example:**
```jsx
class MyComponent extends React.Component {
  componentDidMount() { console.log("Mounted"); }
  componentDidUpdate() { console.log("Updated"); }
  componentWillUnmount() { console.log("Unmounted"); }
  render() { return <div>Hello</div>; }
}
```

**Use case:** Mounting-এ initialization, updating-এ data refresh, এবং unmounting-এ cleanup করতে।



### _#36._ 🟣 **What are lifecycle methods in class components (e.g., componentDidMount)?**

Lifecycle methods হলো class components-এর built-in methods যা lifecycle-এর বিভিন্ন phase-এ automatically call হয়।

**Common Lifecycle Methods:**

1. **Mounting:**
   - `constructor()`: Component initialize করতে।
   - `static getDerivedStateFromProps(props, state)`: Props থেকে state update করতে।
   - `render()`: UI render করতে।
   - `componentDidMount()`: Component DOM-এ add হওয়ার পরে (যেমন API call)।

2. **Updating:**
   - `static getDerivedStateFromProps(props, state)`: Props change হলে state update।
   - `shouldComponentUpdate(nextProps, nextState)`: Re-render control করতে।
   - `render()`: Updated UI render।
   - `getSnapshotBeforeUpdate(prevProps, prevState)`: DOM update-এর আগে snapshot capture।
   - `componentDidUpdate(prevProps, prevState, snapshot)`: Update-এর পরে (যেমন DOM manipulation)।

3. **Unmounting:**
   - `componentWillUnmount()`: Component remove হওয়ার আগে cleanup (যেমন timers, subscriptions)।

**Example:**
```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component mounted");
  }
  componentDidUpdate(prevProps) {
    console.log("Component updated with props:", prevProps);
  }
  componentWillUnmount() {
    console.log("Component unmounting");
  }
  render() {
    return <div>Hello</div>;
  }
}
```

**Use case:** Lifecycle methods ব্যবহার করি specific lifecycle events-এ logic (যেমন data fetching, cleanup) handle করতে।



### _#37._ 🟣 **How does useEffect replace lifecycle methods?**

`useEffect` হলো functional components-এর একটি hook যা class components-এর lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) এর কাজ একত্রে করে।

**How it replaces:**
1. **componentDidMount:** Empty dependency array (`[]`) দিয়ে `useEffect` শুধু mount-এ run করে।
   ```jsx
   useEffect(() => {
     console.log("Mounted");
   }, []); // Runs once on mount
   ```

2. **componentDidUpdate:** Dependency array-এ variables দিলে dependencies change হলে run করে।
   ```jsx
   useEffect(() => {
     console.log("Updated with prop:", prop);
   }, [prop]); // Runs on prop change
   ```

3. **componentWillUnmount:** Cleanup function return করলে unmount-এ run করে।
   ```jsx
   useEffect(() => {
     const timer = setInterval(() => console.log("Timer"), 1000);
     return () => clearInterval(timer); // Cleanup on unmount
   }, []);
   ```

**Example (Combined):**
```jsx
const MyComponent = ({ prop }) => {
  useEffect(() => {
    console.log("Mounted or prop updated");
    return () => console.log("Unmounting");
  }, [prop]); // Runs on mount and prop change

  return <div>Hello</div>;
};
```

**Use case:** `useEffect` ব্যবহার করি side effects (যেমন API calls, subscriptions) handle করতে, lifecycle methods-এর simpler alternative হিসেবে।



### _#38._ 🟣 **What is reconciliation in React?**

Reconciliation হলো React-এর process যা Virtual DOM-এর changes detect করে এবং real DOM-এ efficiently update করে। এটা React-এর core mechanism, যা UI updates fast এবং efficient করে।

**How it works:**
- Component-এর state বা props change হলে, React নতুন Virtual DOM tree তৈরি করে।
- Previous Virtual DOM-এর সাথে compare করে (diffing)।
- শুধু changed parts real DOM-এ update করে।

**Key Points:**
- Reconciliation Virtual DOM-এর সুবিধা নেয়।
- `key` prop lists-এ reconciliation optimize করে।
- Diffing algorithm elements-এর type এবং position compare করে।

**Use case:** Reconciliation ensures minimal DOM updates, যা app performance উন্নত করে।



### _#39._ 🟣 **What is React's rendering process?**

React-এর rendering process হলো component-এর UI তৈরি এবং DOM-এ display করার ধাপ।

**Steps:**
1. **Trigger:** State বা props change হলে rendering শুরু হয়।
2. **Render Phase:** Component-এর `render` method বা function JSX return করে, যা Virtual DOM tree তৈরি করে।
3. **Reconciliation:** React নতুন Virtual DOM-কে previous-এর সাথে compare করে (diffing)।
4. **Commit Phase:** Changed parts real DOM-এ apply করে।
5. **Lifecycle Methods/Hooks:** `useEffect` বা `componentDidMount/Update` call হয়।

**Example:**
```jsx
const MyComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effect after render");
  });
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
```
- Click করলে `setCount` state update করে।
- React নতুন Virtual DOM তৈরি করে, reconcile করে, এবং DOM update করে।

**Use case:** Rendering process বুঝে আমরা efficient UI updates এবং side effects handle করতে পারি।



### _#40._ 🟣 **What causes re-render in React?**

React-এ re-render ঘটে যখন component-এর state, props, বা parent component-এর rendering change হয়।

**Causes:**
1. **State Change:** `setState` বা `useState` setter call হলে।
   ```jsx
   const [count, setCount] = useState(0);
   setCount(count + 1); // Triggers re-render
   ```
2. **Props Change:** Parent থেকে নতুন props পেলে।
   ```jsx
   <Child value={parentState} /> // parentState change হলে Child re-renders
   ```
3. **Parent Re-render:** Parent component re-render করলে children by default re-render করে।
4. **Context Change:** `useContext` বা `Context.Consumer` দিয়ে context value change হলে।
5. **Hooks Dependency Change:** `useEffect`, `useMemo`, বা `useCallback`-এর dependencies change হলে।

**Avoid Unnecessary Re-renders:**
- `React.memo` ব্যবহার করা।
- `useCallback` বা `useMemo` দিয়ে functions/values memoize করা।
- Proper `key` usage lists-এ।

**Use case:** Re-render causes বুঝে optimization techniques apply করতে।



### _#41._ 🟣 **What is the virtual DOM?**

Virtual DOM হলো React-এর একটি in-memory representation of the real DOM। এটা real DOM-এর lightweight copy, যা JavaScript object হিসেবে UI structure store করে।

**How it works:**
- Component render করলে, React Virtual DOM tree তৈরি করে।
- State/props change হলে নতুন Virtual DOM তৈরি হয়।
- Reconciliation process-এ নতুন এবং পুরোনো Virtual DOM compare করে।
- শুধু changes real DOM-এ apply হয়।

**Example:**
```jsx
const MyComponent = () => <div>Hello</div>;
// Virtual DOM: { type: 'div', props: { children: 'Hello' } }
```

**Use case:** Virtual DOM efficient updates এবং performance optimization-এর জন্য ব্যবহৃত হয়।



### _#42._ 🟣 **What is the difference between virtual DOM and real DOM?**

| **Aspect**            | **Virtual DOM**                                              | **Real DOM**                                                |
|-----------------------|-------------------------------------------------------------|------------------------------------------------------------|
| **Definition**        | JavaScript object হিসেবে UI-এর lightweight representation।  | Browser-এর actual DOM tree, যা UI render করে।             |
| **Performance**       | Fast, কারণ in-memory operations।                            | Slower, কারণ direct DOM manipulation costly।               |
| **Manipulation**      | React changes Virtual DOM এবং diffs apply করে।             | Direct changes browser-এ apply হয়।                        |
| **Updates**           | Efficient, শুধু changed parts real DOM-এ update করে।        | Entire DOM update হতে পারে, যা slow।                      |
| **Example**           | `{ type: 'div', props: { children: 'Hello' } }`            | `<div>Hello</div>`                                         |

**How it works:**
- Virtual DOM changes compare করে minimal real DOM updates করে।
- Real DOM direct manipulation browser-এর rendering trigger করে।

**Use case:** Virtual DOM React-এ fast এবং efficient rendering নিশ্চিত করে।


✅ 6. Forms & Events
### _#43._ 🟣 **How do you handle forms in React?**

React-এ forms handle করার জন্য সাধারণত দুটি approach ব্যবহৃত হয়: **controlled components** এবং **uncontrolled components**। বেশিরভাগ ক্ষেত্রে controlled components ব্যবহার করা হয় কারণ এটা React-এর state-driven philosophy-এর সাথে consistent।

**Handling Forms (Controlled):**
- **State Management:** Form inputs-এর value state-এ store করা হয় এবং `onChange` দিয়ে update করা হয়।
- **Event Handling:** `onSubmit` event দিয়ে form submission handle করা হয়।
- **Validation:** State-এর ভিত্তিতে validation logic apply করা যায়।

**Example:**
```jsx
import { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
```

**Uncontrolled Approach:**
- `useRef` দিয়ে input values access করা হয়।
- Less common, simple forms-এ ব্যবহৃত হয়।
```jsx
import { useRef } from 'react';

const MyForm = () => {
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
};
```

**Use case:** Controlled forms ব্যবহার করি dynamic forms, validation, এবং state-driven apps-এ। Uncontrolled forms simple, one-off forms-এ।



### _#44._ 🟣 **What is a controlled component?**

Controlled component হলো এমন একটি React component যেখানে form input-এর value React state-এর মাধ্যমে control করা হয়। Input-এর value এবং changes state-এ sync থাকে।

**Key Points:**
- Input-এর `value` prop state থেকে আসে।
- `onChange` event দিয়ে state update করা হয়।
- React fully controls input-এর behavior।

**Example:**
```jsx
import { useState } from 'react';

const ControlledInput = () => {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter text"
    />
  );
};
```

**Advantages:**
- State-এর সাথে input sync থাকে।
- Validation এবং dynamic updates সহজ।
- Form data manipulate করা যায়।

**Use case:** Controlled components ব্যবহার করি complex forms, real-time validation, বা state-dependent UI-এর জন্য।



### _#45._ 🟣 **What is event handling in React and how is it different from HTML?**

**Event Handling in React:**
React-এ event handling হলো user interactions (যেমন click, input change, submit) handle করার জন্য synthetic events ব্যবহার করা। React events camelCase-এ লেখা হয় এবং event handlers JSX-এর মাধ্যমে components-এ attach করা হয়।

**Example:**
```jsx
const Button = () => {
  const handleClick = (event) => {
    console.log('Clicked:', event.target);
  };

  return <button onClick={handleClick}>Click me</button>;
};
```

**Differences from HTML:**

| **Aspect**             | **React**                                                    | **HTML**                                                   |
|------------------------|-------------------------------------------------------------|-----------------------------------------------------------|
| **Event Names**        | camelCase (যেমন `onClick`, `onChange`)                      | lowercase (যেমন `onclick`, `onchange`)                    |
| **Event System**       | Synthetic events, React-এর wrapper                           | Native browser events                                     |
| **Event Handler**      | Functions passed as props (যেমন `onClick={handleClick}`)    | Inline strings (যেমন `onclick="handleClick()"`)           |
| **Event Object**       | SyntheticEvent, cross-browser compatible                     | Native event object, browser-specific                     |
| **Performance**        | Event delegation করে performance optimize করে               | Direct event listeners, less optimized                    |
| **Prevent Default**    | `e.preventDefault()`                                        | `return false` বা `event.preventDefault()`                |

**Example (React vs HTML):**
```jsx
// React
<button onClick={(e) => console.log(e)}>Click</button>

// HTML
<button onclick="console.log(event)">Click</button>
```

**Use case:** React-এর event handling cross-browser consistency এবং performance optimization-এর জন্য ব্যবহৃত হয়।



### _#46._ 🟣 **How do you handle input validation in forms?**

React-এ form input validation করার জন্য নিচের পদ্ধতি ব্যবহার করা হয়:

1. **State-Based Validation:**
   - Input state-এর সাথে validation logic apply করা।
   - Error messages state-এ store করে conditionally render করা।

**Example:**
```jsx
import { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email';
      valid = false;
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
```

2. **Third-Party Libraries:**
   - **Formik:** Form handling এবং validation সহজ করে।
   - **Yup:** Schema-based validation Formik-এর সাথে ব্যবহৃত হয়।
   ```jsx
   import { Formik, Form, Field } from 'formik';
   import * as Yup from 'yup';

   const validationSchema = Yup.object({
     email: Yup.string().email('Invalid email').required('Required'),
     password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
   });

   const MyForm = () => (
     <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={validationSchema}
       onSubmit={(values) => console.log(values)}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="email" />
           {touched.email && errors.email && <p>{errors.email}</p>}
           <Field name="password" type="password" />
           {touched.password && errors.password && <p>{errors.password}</p>}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   );
   ```

3. **Real-Time Validation:**
   - `onChange` বা `onBlur` event-এ validation trigger করা।
   - Debouncing ব্যবহার করে frequent validation calls কমানো।

4. **Server-Side Validation:**
   - Form submission-এর পর API থেকে errors ফিরিয়ে এনে display করা।

**Use case:** Input validation ব্যবহার করি user input সঠিক কিনা check করতে এবং user-friendly error messages দেখাতে।


✅ 7. Routing, State Management, and Tools
### _#47._ 🟣 **What is React Router and how does it work?**

React Router হলো React-এর জন্য একটি জনপ্রিয় routing library যা single-page applications (SPAs)-এ client-side navigation handle করে। এটা URL-এর ভিত্তিতে components render করে এবং page refresh ছাড়াই navigation সম্ভব করে।

**How it works:**
- **BrowserRouter:** HTML5 history API ব্যবহার করে routing manage করে।
- **Routes & Route:** URL path-এর সাথে components map করে।
- **Link/NavLink:** Navigation-এর জন্য `<a>`-এর পরিবর্তে ব্যবহৃত হয়, যা page reload prevent করে।
- **Dynamic Routing:** URL parameters (যেমন `:id`) ব্যবহার করে dynamic content render করে।

**Example:**
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
```

**Use case:** React Router ব্যবহার করি SPA-তে multiple views বা pages (যেমন Home, Profile) manage করতে।



### _#48._ 🟣 **What are nested routes?**

Nested routes হলো React Router-এ এমন একটি পদ্ধতি যেখানে একটি route-এর ভিতরে আরো sub-routes define করা হয়। এটা hierarchical UI structure তৈরি করতে সাহায্য করে, যেখানে parent route-এর component child routes-এর components render করে।

**How it works:**
- Parent route-এ `<Outlet />` component ব্যবহার করা হয়, যেখানে child routes render হবে।
- URL structure nested paths reflect করে।

**Example:**
```jsx
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />}>
          <Route path="settings" element={<Settings />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

const Layout = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | 
      <Link to="/profile/settings">Settings</Link> | <Link to="/profile/details">Details</Link>
    </nav>
    <Outlet /> {/* Child routes render here */}
  </div>
);

const Home = () => <h1>Home</h1>;
const Profile = () => <div><h1>Profile</h1><Outlet /></div>;
const Settings = () => <h1>Settings</h1>;
const Details = () => <h1>Details</h1>;
```

**Use case:** Nested routes ব্যবহার করি complex layouts (যেমন dashboard-এ sidebar + sub-pages) তৈরি করতে।



### _#49._ 🟣 **What is Redux and how does it work with React?**

Redux হলো একটি open-source JavaScript library যা predictable state management-এর জন্য ব্যবহৃত হয়। React-এর সাথে Redux global state manage করতে ব্যবহৃত হয়, যা multiple components-এ share করা যায়।

**How it works:**
- **Store:** Single source of truth, যেখানে app-এর সব state store হয়।
- **Actions:** State change-এর জন্য payloads (objects) যা dispatch করা হয়।
- **Reducers:** Pure functions যা actions-এর ভিত্তিতে state update করে।
- **React-Redux:** `Provider` এবং `useSelector`/`useDispatch` hooks দিয়ে Redux store-কে React-এর সাথে connect করে।

**Example:**
```jsx
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: state.count - 1 };
    default: return state;
  }
};

// Store
const store = createStore(counterReducer);

// Component
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

// App
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
```

**Use case:** Redux ব্যবহার করি large-scale apps-এ complex state (যেমন user data, app settings) manage করতে।



### _#50._ 🟣 **What is the difference between Redux and Context API?**

| **Aspect**              | **Redux**                                                  | **Context API**                                            |
|-------------------------|-----------------------------------------------------------|-----------------------------------------------------------|
| **Purpose**             | Large-scale state management library                      | Built-in React feature for sharing data across components |
| **Setup Complexity**    | More boilerplate (store, actions, reducers)               | Simpler setup (createContext, Provider)                   |
| **Scalability**         | Highly scalable, complex apps-এর জন্য                    | Small to medium apps-এর জন্য                             |
| **Performance**         | Optimized, middleware support করে                        | Less optimized, frequent updates re-renders trigger করতে পারে |
| **Tooling**             | DevTools, middleware (thunk, saga)                       | No built-in dev tools                                    |
| **State Logic**         | Centralized (store, reducers)                            | Decentralized (multiple contexts)                        |
| **Use Case**            | Complex state, frequent updates                          | Simple state sharing (theme, auth)                       |

**Example (Context API):**
```jsx
const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
};

const Child = () => {
  const { theme } = useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
};
```

**Use case:** Redux large apps-এ complex state-এর জন্য, Context API simple state sharing-এর জন্য।



### _#51._ 🟣 **What are actions, reducers, and the store in Redux?**

1. **Actions:**
   - Objects যা state change-এর intention বর্ণনা করে।
   - `type` property থাকতেই হবে; optional payload থাকতে পারে।
   - `dispatch` দিয়ে store-এ পাঠানো হয়।
   ```jsx
   const increment = { type: 'INCREMENT' };
   const addTodo = { type: 'ADD_TODO', payload: 'Learn Redux' };
   ```

2. **Reducers:**
   - Pure functions যা current state এবং action নিয়ে new state return করে।
   - State immutable থাকে, তাই spread operator বা new object ব্যবহার করা হয়।
   ```jsx
   const counterReducer = (state = { count: 0 }, action) => {
     switch (action.type) {
       case 'INCREMENT': return { count: state.count + 1 };
       default: return state;
     }
   };
   ```

3. **Store:**
   - Single source of truth, যেখানে app-এর সব state store হয়।
   - `createStore` দিয়ে তৈরি করা হয়।
   - Methods: `getState`, `dispatch`, `subscribe`।
   ```jsx
   import { createStore } from 'redux';
   const store = createStore(counterReducer);
   ```

**Use case:** Actions state changes trigger করে, reducers state update করে, এবং store সবকিছু centralized রাখে।



### _#52._ 🟣 **What is middleware in Redux?**

Middleware হলো Redux-এর একটি extension point যা action dispatch এবং reducer-এর মাঝে custom logic (যেমন logging, async operations) execute করে।

**How it works:**
- Middleware action intercept করে এবং side effects (যেমন API calls) handle করতে পারে।
- `applyMiddleware` দিয়ে store-এ middleware add করা হয়।
- Popular middleware: `redux-thunk`, `redux-saga`, `redux-logger`।

**Example (redux-thunk):**
```jsx
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const fetchData = () => async (dispatch) => {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  dispatch({ type: 'FETCH_SUCCESS', payload: data });
};

const store = createStore(reducer, applyMiddleware(thunk));

// Component
const MyComponent = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(fetchData())}>Fetch</button>;
};
```

**Use case:** Middleware ব্যবহার করি async operations, logging, বা action transformation-এর জন্য।



### _#53._ 🟣 **What are some alternatives to Redux? (e.g., Zustand, Recoil)**

Redux-এর কিছু জনপ্রিয় alternatives:

1. **Zustand:**
   - Lightweight state management library।
   - Minimal API, no boilerplate।
   - Hooks-based, simple store creation।
   **Example:**
   ```jsx
   import create from 'zustand';

   const useStore = create((set) => ({
     count: 0,
     increment: () => set((state) => ({ count: state.count + 1 })),
   }));

   const Counter = () => {
     const { count, increment } = useStore();
     return <button onClick={increment}>{count}</button>;
   };
   ```
   **Use case:** Small to medium apps-এ simple state management।

2. **Recoil:**
   - Facebook-এর state management library।
   - Atom এবং selector-এর মাধ্যমে granular state management।
   - React-এর concurrent features-এর সাথে compatible।
   **Example:**
   ```jsx
   import { atom, useRecoilState } from 'recoil';

   const countState = atom({
     key: 'countState',
     default: 0,
   });

   const Counter = () => {
     const [count, setCount] = useRecoilState(countState);
     return <button onClick={() => setCount(count + 1)}>{count}</button>;
   };
   ```
   **Use case:** Complex apps-এ fine-grained state management।

3. **Context API + useReducer:**
   - Built-in React solution।
   - Simple apps-এ Redux-এর পরিবর্তে ব্যবহার করা যায়।
   **Use case:** Lightweight apps-এ global state।

4. **MobX:**
   - Reactive state management।
   - Observables ব্যবহার করে automatic updates।
   **Use case:** Apps যেখানে reactive programming পছন্দ।

**Comparison:**
- **Zustand:** Simple, minimal, fast।
- **Recoil:** Modern, granular, React-focused।
- **Context API:** No external dependency, limited scalability।
- **MobX:** Reactive, less predictable than Redux।

**Use case:** Alternatives ব্যবহার করি app size এবং complexity-এর উপর নির্ভর করে।



✅ 8. Testing & Best Practices
### _#54._ 🟣 **How do you test a React component?**

React components-কে test করার জন্য সাধারণত **unit testing** এবং **integration testing** করা হয়। React Testing Library বা Jest-এর মতো tools ব্যবহার করে components-এর behavior, rendering, এবং user interactions test করা হয়।

**Steps to Test a React Component:**
1. **Setup Testing Environment:**
   - Jest (test runner) এবং React Testing Library install করুন।
   - `npm install --save-dev @testing-library/react jest`.
2. **Write Test Cases:**
   - Render component-এর output test করুন।
   - User events (click, input) simulate করুন।
   - State changes এবং props handling verify করুন।
3. **Run Tests:** `npm test` দিয়ে tests execute করুন।

**Example:**
```jsx
// MyComponent.jsx
import { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p data-testid="count">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// MyComponent.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders count and increments on button click', () => {
  render(<MyComponent />);
  
  // Check initial render
  expect(screen.getByTestId('count')).toHaveTextContent('Count: 0');
  
  // Simulate button click
  fireEvent.click(screen.getByText('Increment'));
  
  // Check updated count
  expect(screen.getByTestId('count')).toHaveTextContent('Count: 1');
});
```

**Tools Used:**
- **Jest:** Test runner এবং assertion library।
- **React Testing Library:** Component rendering এবং interaction testing।
- **Enzyme** (optional): Older alternative for shallow rendering।
- **@testing-library/user-event:** Advanced user interactions (যেমন typing)।

**Use case:** Component testing ensure করে যে UI সঠিকভাবে render হয় এবং user interactions expected behavior প্রদান করে।



### _#55._ 🟣 **What is the difference between unit testing and integration testing?**

| **Aspect**              | **Unit Testing**                                          | **Integration Testing**                                  |
|-------------------------|----------------------------------------------------------|---------------------------------------------------------|
| **Definition**          | Individual components বা functions-এর isolated testing।  | Multiple components একসাথে কীভাবে কাজ করে তা test করা। |
| **Scope**               | Single function, component, বা module।                   | Multiple components, APIs, বা systems-এর interaction।  |
| **Focus**               | Specific logic বা behavior।                              | Components-এর integration এবং data flow।               |
| **Example**             | Button click-এ state update test করা।                   | Form submission-এ API call এবং UI update test করা।     |
| **Tools**               | Jest, React Testing Library (for components)।            | Jest, React Testing Library, Cypress (end-to-end)।     |
| **Complexity**          | Simpler, faster।                                         | More complex, slower।                                   |
| **Dependencies**        | Mocked/stubbed (যেমন API calls)।                        | Real dependencies বা partial mocks।                     |

**Unit Testing Example:**
```jsx
test('increments count', () => {
  const { getByText } = render(<MyComponent />);
  fireEvent.click(getByText('Increment'));
  expect(getByTestId('count')).toHaveTextContent('Count: 1');
});
```

**Integration Testing Example:**
```jsx
test('form submits data to API', async () => {
  const mockApi = jest.fn().mockResolvedValue({ success: true });
  render(<Form api={mockApi} />);
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Alice' } });
  fireEvent.click(screen.getByText('Submit'));
  expect(mockApi).toHaveBeenCalledWith({ name: 'Alice' });
});
```

**Use case:** Unit testing individual components-এর জন্য, integration testing app-এর flow এবং interactions verify করতে।



### _#56._ 🟣 **What is React Testing Library and why is it popular?**

React Testing Library হলো একটি lightweight testing library যা React components-এর testing-এর জন্য design করা হয়েছে। এটা user-centric testing encourage করে, অর্থাৎ কীভাবে users UI-এর সাথে interact করে তা test করা হয়।

**Key Features:**
- **DOM Testing:** Components render করে এবং DOM queries (যেমন `getByText`, `getByTestId`) প্রদান করে।
- **User Interactions:** `fireEvent` বা `@testing-library/user-event` দিয়ে clicks, typing simulate করে।
- **No Implementation Details:** Internal state বা structure test করার পরিবর্তে user-facing output test করে।
- **Accessible Queries:** Accessibility-focused queries (যেমন `getByRole`) encourage করে।

**Example:**
```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

test('button toggles text', () => {
  render(<MyComponent />);
  expect(screen.getByText('Off')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByText('On')).toBeInTheDocument();
});
```

**Why Popular:**
- **User-Centric:** Tests user-এর perspective থেকে লেখা হয়, যা real-world scenarios reflect করে।
- **Simple API:** Intuitive queries এবং minimal setup।
- **Encourages Best Practices:** Implementation details avoid করে robust tests লিখতে সাহায্য করে।
- **Compatibility:** Jest, TypeScript, এবং modern React (hooks) এর সাথে ভালো কাজ করে।
- **Community Support:** Wide adoption এবং active community।

**Use case:** React Testing Library ব্যবহার করি user behavior test করতে এবং maintainable test suites লিখতে।



### _#57._ 🟣 **What are some best practices for writing clean React code?**

Clean React code লেখার জন্য কিছু best practices:

1. **Use Functional Components and Hooks:**
   - Modern React-এ functional components এবং hooks (যেমন `useState`, `useEffect`) ব্যবহার করুন।
   - Class components এড়ানো, কারণ hooks simpler এবং less boilerplate।
   ```jsx
   const Counter = () => {
     const [count, setCount] = useState(0);
     return <button onClick={() => setCount(count + 1)}>{count}</button>;
   };
   ```

2. **Keep Components Small and Focused:**
   - Single responsibility principle follow করুন।
   - Large components-কে smaller, reusable components-এ ভাগ করুন।
   ```jsx
   const UserCard = ({ user }) => (
     <div>
       <UserName name={user.name} />
       <UserDetails details={user.details} />
     </div>
   );
   ```

3. **Use Descriptive Naming:**
   - Components, variables, এবং functions-এর নাম meaningful রাখুন।
   - Example: `Button` এর পরিবর্তে `SubmitButton` বা `ToggleSwitch`।

4. **Avoid Prop Drilling:**
   - Context API বা state management libraries (Redux, Zustand) ব্যবহার করুন।
   ```jsx
   const ThemeContext = createContext();
   const App = () => (
     <ThemeContext.Provider value="dark">
       <Child />
     </ThemeContext.Provider>
   );
   ```

5. **Optimize Performance:**
   - `React.memo`, `useMemo`, `useCallback` ব্যবহার করে unnecessary re-renders prevent করুন।
   - Lists-এ unique `key` prop ব্যবহার করুন।
   ```jsx
   const MemoizedComponent = React.memo(({ value }) => <div>{value}</div>);
   ```

6. **Use TypeScript for Type Safety:**
   - Props এবং state-এর types define করুন।
   ```jsx
   interface Props {
     name: string;
   }
   const MyComponent: React.FC<Props> = ({ name }) => <div>{name}</div>;
   ```

7. **Follow Consistent Folder Structure:**
   - Components, hooks, utils, এবং tests-এর জন্য organized folders।
   - Example: `src/components/`, `src/hooks/`, `src/__tests__/`.

8. **Write Reusable and DRY Code:**
   - Custom hooks তৈরি করে logic reuse করুন।
   - Common UI patterns (যেমন buttons, modals) component libraries ব্যবহার করুন।
   ```jsx
   const useToggle = () => {
     const [isOn, setIsOn] = useState(false);
     return [isOn, () => setIsOn(!isOn)];
   };
   ```

9. **Handle Errors Gracefully:**
   - Error boundaries ব্যবহার করুন।
   - API errors এবং form validation handle করুন।
   ```jsx
   class ErrorBoundary extends React.Component {
     state = { hasError: false };
     static getDerivedStateFromError() { return { hasError: true }; }
     render() { return this.state.hasError ? <h1>Error</h1> : this.props.children; }
   }
   ```

10. **Write Tests:**
    - React Testing Library দিয়ে unit এবং integration tests লিখুন।
    - Test coverage maintain করুন।

11. **Use ESLint and Prettier:**
    - Consistent code style enforce করতে ESLint এবং Prettier ব্যবহার করুন।
    - Example: `eslint-plugin-react`, `eslint-plugin-react-hooks`।

**Use case:** Clean code maintainability, scalability, এবং collaboration উন্নত করে এবং technical debt কমায়।


✅ 9. Miscellaneous
### _#58._ 🟣 **What is React Portals and why is it used?**

React Portals হলো React-এর একটি feature যা একটি component-এর DOM tree-এর বাইরে অন্য কোনো DOM node-এ child components render করতে দেয়, যদিও component hierarchy-তে এটি parent-এর অধীনে থাকে। এটা `ReactDOM.createPortal` API ব্যবহার করে implement করা হয়।

**How it works:**
- `createPortal` দুটি argument নেয়: JSX (child) এবং DOM node (যেখানে render হবে)।
- Portals event bubbling এবং React context maintain করে।

**Example:**
```jsx
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root') // DOM node outside root
  );
};

const App = () => (
  <div>
    <Modal>Modal Content</Modal>
  </div>
);
```

**Why used:**
- **Modals/Overlays:** Modals, popups, বা tooltips DOM-এর root-এর বাইরে render করতে।
- **Z-Index Issues:** CSS stacking issues এড়াতে।
- **Third-Party Integration:** External DOM nodes-এ render করতে।
- **Accessibility:** Event bubbling maintain করে accessible components তৈরি করতে।

**Use case:** Portals ব্যবহার করি modals, dialogs, বা global UI elements render করতে যা main DOM tree-এর constraints এড়ায়।



### _#59._ 🟣 **What is the difference between SSR, CSR, and SSG in context of React (Next.js)?**

| **Aspect**           | **CSR (Client-Side Rendering)** | **SSR (Server-Side Rendering)** | **SSG (Static Site Generation)** |
|----------------------|--------------------------------|--------------------------------|----------------------------------|
| **Definition**       | Browser-এ JavaScript দিয়ে UI render হয়। | Server-এ HTML generate হয় এবং browser-এ পাঠানো হয়। | Build time-এ static HTML generate হয়। |
| **How it works**     | Initial blank HTML লোড হয়, তারপর JS UI render করে। | Server প্রতি request-এ HTML তৈরি করে। | Pages build time-এ pre-render হয়। |
| **Example in Next.js** | Default React behavior (`create-react-app`)। | `getServerSideProps` ব্যবহার করে। | `getStaticProps` ব্যবহার করে। |
| **Performance**      | Initial load slower, client-side heavy। | Faster initial load, server-side heavy। | Fastest initial load, minimal server load। |
| **SEO**              | Poor, কারণ initial HTML empty। | Good, কারণ server HTML পাঠায়। | Excellent, কারণ static HTML pre-rendered। |
| **Use Case**         | Dynamic apps যেখানে SEO priority নয়। | Dynamic data, frequent updates। | Static content (blogs, docs)। |

**Example (Next.js):**
```jsx
// SSR (getServerSideProps)
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}

// SSG (getStaticProps)
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data } };
}
```

**Use case:** CSR simple SPAs-এর জন্য, SSR dynamic data এবং SEO-এর জন্য, SSG static content এবং fast performance-এর জন্য।



### _#60._ 🟣 **What is hydration in React?**

Hydration হলো React-এর একটি process যেখানে server-side rendered (SSR) বা static site generated (SSG) HTML-কে client-এ interactive করে তোলা হয়। Next.js-এ এটা common।

**How it works:**
- Server HTML generate করে browser-এ পাঠায়।
- Client-এ React JavaScript লোড হয় এবং HTML-এর সাথে event listeners attach করে।
- Hydration-এর পর component fully interactive হয়।

**Example (Next.js):**
```jsx
// pages/index.jsx
export async function getServerSideProps() {
  return { props: { message: 'Hello' } };
}

const Home = ({ message }) => <div>{message}</div>;

export default Home;
// Server: Renders HTML with "Hello"
// Client: Hydrates HTML to make it interactive
```

**Key Points:**
- Hydration performance-critical, কারণ এটা client-side JS execution নির্ভর করে।
- Next.js-এ partial hydration (React 18) performance উন্নত করে।

**Use case:** Hydration ব্যবহার করি SSR/SSG apps-এ initial HTML-কে interactive করতে।



### _#61._ 🟣 **What is the purpose of keys in rendering a list?**

`key` prop হলো React-এর একটি special attribute যা list rendering-এ elements uniquely identify করতে ব্যবহৃত হয়। এটা reconciliation process optimize করে।

**Purpose:**
- **Efficient Updates:** React `key` ব্যবহার করে list items-এর changes (add, remove, reorder) track করে।
- **Prevent Re-renders:** Correct keys unchanged items-এর re-rendering এড়ায়।
- **Maintain State:** List items-এর state (যেমন input values) preserve করে।

**Example:**
```jsx
const List = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.name}</li> // Unique key
    ))}
  </ul>
);
```

**Rules:**
- `key` unique হতে হবে sibling elements-এর মধ্যে।
- Index ব্যবহার এড়ানো উচিত, কারণ list order change হলে issues হয়।
- Stable IDs (যেমন database IDs) best।

**Use case:** `key` ব্যবহার করি lists efficiently render করতে এবং performance issues এড়াতে।



### _#62._ 🟣 **What is the difference between Fragment and div in React?**

| **Aspect**            | **Fragment**                                              | **div**                                                  |
|-----------------------|----------------------------------------------------------|---------------------------------------------------------|
| **Definition**        | React-এর virtual wrapper যা DOM-এ extra node যোগ করে না। | HTML element যা DOM-এ actual `<div>` tag যোগ করে।       |
| **Syntax**            | `<Fragment>` বা shorthand `<>...</>`                    | `<div>...</div>`                                       |
| **DOM Impact**        | No extra DOM node, cleaner markup।                       | Adds `<div>` to DOM, যা unnecessary nesting সৃষ্টি করে। |
| **Use Case**          | Multiple children return করতে, styling দরকার নেই।        | Styling বা layout-এর জন্য actual DOM element দরকার।     |
| **Example**           | `<><h1>Title</h1><p>Text</p></>`                       | `<div><h1>Title</h1><p>Text</p></div>`                |

**Fragment Example:**
```jsx
const MyComponent = () => (
  <>
    <h1>Title</h1>
    <p>Text</p>
  </>
);
```

**div Example:**
```jsx
const MyComponent = () => (
  <div>
    <h1>Title</h1>
    <p>Text</p>
  </div>
);
```

**Key Points:**
- Fragments CSS বা layout issues এড়ায়।
- `<Fragment>` key prop support করে (list rendering-এ)।
- `div` ব্যবহার করলে unnecessary DOM nodes বাড়তে পারে।

**Use case:** Fragments ব্যবহার করি clean DOM structure এবং unnecessary markup এড়াতে; `div` styling বা structural needs-এর জন্য।



# ✨ JavaScript based interview questions

_#08._ You have a API that fetches a user's details, but it sometimes takes a long time to respond. You need to show a loading spinner waiting for the API response and hide it once the data is fetched. How would you implement this?

_#14._ How would you handle a situation where two APIs depend on each other. for example, imagine you're building a social media app, The first API fetches for user content like user name, host content etc. and the second API fetches the likes and comments for that post. now what if the first API fails, how would you ensure the second API only runs if the first one is successful?

# ✨ React based interview questions

_#02._ What are the rules of `hooks` in react?
_Ans:_ There are 3 rules of `hooks`

1. **Top-Level Only:** use `hooks` at the top level of your `functional components`. not inside `loops`, `conditions`, or `nested functions`.
2. **React Functions Only:** call `hooks` only from react `functional components`, or `custom hooks`. not from regular javascript functions.
3. **No Conditions:** call hooks unconditionally at the top level without any `if-else` statements or conditions.

_#05._ You have a table with hundreds of rows. How can you efficiently handle a click event on every row without adding an event listener to each row?
_/ event delegation, event bubbling /_

_#07._ You need to implement an infinite scrolling feature in a react application where more data loads as the user scrolls down. How would you achieve this?

_#08._ You need to render a list of 10,000 items in the react application, but rendering all items at once causes performance issues. How would you optimize this? _/ virtualization /_

_#10._ You have a search bar that fetches from an API. The problem is that API is called every time the user types a letter which overloads the server with unnecessary request. How would you optimize this?

_#11._ You have a login page where the user loges in successfully. But as soon as user refreshes the page, they get logged out. Why does this happen and how would you fix it?

_#15._ Imagine you're building a social media platform like facebook. Now you want to let users switch between newest first and oldest first comments using a dropdown. How would you implement this features?

_#16._ Imagine you're building a web page that shows data from an API. If the API fails due to bad internet or server error. How will you handle it?

_#17._ Imagine you're building a gmail like app. when a user delete an email instead of removing it instantly you app should show a small message like "Message will delete in 5s, Undo?" this message should stay visible for 5 seconds and giving the user a chance to cancel. how would you implement this undo delete feature in your code?

_#18._ Imagine you're building a YouTube style app, when a user uploads a video, you need to show a real time upload progress like 0% to 100%. How would you implement this live progress bar UI plus backend upload logic in react?

_#19._ You have a submit button in your form. But when the user clicks multiple times quickly, your API gets called again and again. How can you prevent multiple API calls on repeated button clicks in react?

_Ans:_ To solve this, I'll follow these steps.

- **step 1:** use a loading state like isSubmitting. to track if the API call is already in progress, while it's true disable the button, so the user can't click again.
- **step 2:** we can also use use ref to store a flag that prevents repeated submission without rerendering.
- **step 3:** for more advanced control. apply a debounce method to delay the function call. If clicks happen rapidly.
