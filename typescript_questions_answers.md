# ✨ TypeScript based interview questions
## ✅ 1. Basics of TypeScript
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

## ✅ 2. Type System
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

## ✅ 3. Functions
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

## ✅ 4. Interfaces & Objects
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

## ✅ 5. Classes in TypeScript
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

## ✅ 6. Generics
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

## ✅ 7. Advanced Types
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

## ✅ 8. Utility Types
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

## ✅ 9. Type Guards & Safety
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

## ✅ 10. Modules and Tooling
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


## ✅ 11. React with TypeScript (Bonus if using React)
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