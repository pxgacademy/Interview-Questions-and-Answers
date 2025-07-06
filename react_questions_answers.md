# ✨ React based interview questions
## ✅ 1. Basics & Introduction
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


## ✅ 2. Props & State
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


## ✅ 3. Hooks
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


## ✅ 4. Advanced Hooks & Concepts
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


## ✅ 5. Lifecycle & Rendering
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


## ✅ 6. Forms & Events
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


## ✅ 7. Routing, State Management, and Tools
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



## ✅ 8. Testing & Best Practices
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


## ✅ 9. Miscellaneous
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
