# 💠 INTERVIEW QUESTIONS 💠


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
