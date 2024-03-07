# Calculator App

Start time - 11:30pm
Completed - 5:20am
One Hour Break - boarding, take off, dinner and the start of a movie that i didn't wanna watch cause I got bored

# Notes

Completed this app while on a flight from Vancouver to Hong Kong
Sitting in the middle seat - working on this was super uncomfortable cause the seats are too small
Used ChatGPT for quick questions and refactor
Major error with setup that took over 30 mins to debug, with the custom Hook.

Initial Setup looked like this

```js
function reducer(state, action) {
  ....
}

const useCalculator = () => {
 const [state, dispatch] = useReducer(reducer, initialState);

 return {
  state,
  dispatch
 }
}
```

This was incorrect because although I'm returning state and dispatch for whatever reason updating with dispatch wasn't showing the update to state, ended up changing it to

```js
const useCalculator = () => {
  return useReducer(reducer, initialState);
};
```
