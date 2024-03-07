import { useReducer } from 'react';

const initialState = {
  screen: "0"
}

const sumArr = (arr) => {
  const stack = [];
  let num = 0;
  let sign = '+';
  for (let i = 0; i < arr.length; i++) {
      const char = arr[i];
      if (!isNaN(parseFloat(char))) {
          num = num * 10 + parseFloat(char);
      }
      if ((isNaN(parseFloat(char)) && char !== ' ') || i === arr.length - 1) {
          if (sign === '+') {
              stack.push(num);
          } else if (sign === '-') {
              stack.push(-num);
          } else if (sign === '*') {
              stack.push(stack.pop() * num);
          } else if (sign === '/') {
              stack.push(Math.trunc(stack.pop() / num));
          }
          sign = char;
          num = 0;
      }
  }
  return stack.reduce((acc, val) => acc + val, 0);
}

function reducer(state, action) {
  const allItems = state.screen.split(" ")
  switch(action.type) {
    case 'number-click':
      
      if(allItems[allItems.length - 1].includes(".") && action.payload === ".") {
        return state
      }
      return {
        ...state,
        screen: state.screen === "0" ? `${action.payload}` : `${state.screen}${action.payload}`
      }
    case 'operator-click':
      if(action.payload === "AC") {
        return {
          ...state,
          screen: "0"
        }
      }
      const lastCharacter = state.screen[state.screen.length - 1]
      const updatedValue = state.screen.replace(/^(.*)(.)(.)/, `$1${action.payload}$3`);
      if(lastCharacter === " " && action.payload !== "=") {
        return {
          ...state,
          screen: updatedValue
        }
      }
      if(action.payload !== "=" && lastCharacter !== " ") {
        return {
          ...state,
          screen: `${state.screen} ${action.payload} `
        }
      }

      if(action.payload === "=" && allItems.length === 1) {
        return state
      }

      if(action.payload === "=") {
        return {
          ...state,
          screen: `${sumArr(allItems)}`
        }
      }

      return state
    default: 
      return state
  }
}

const useCalculator = () => {
  return useReducer(reducer, initialState);
}

export default useCalculator;