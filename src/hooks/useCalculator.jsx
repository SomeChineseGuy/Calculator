import { useReducer } from 'react';

const initialState = {
  screen: "0",
  equationCompleted: false
}

const evaluateExpression = (arr) => {
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
        stack.push(stack.pop() / num);
      }
      sign = char;
      num = 0;
    }
  }
  return stack.reduce((acc, val) => acc + val, 0);
}


function reducer(state, action) {
  const { screen, equationCompleted } = state;
  const allItems = screen.split(" ")
  const lastCharacter = screen[screen.length - 1]
  switch(action.type) {
    case 'Backspace':
      if (equationCompleted) {
        return initialState;
      }

      if(lastCharacter === " ") {
        return {
          ...state,
          screen: screen.slice(0, -3)
        }
      }
      return {
        ...state,
        screen: screen.length === 1 ? "0" : screen.slice(0, -1)
      };
      
    case 'number-click':
      if(equationCompleted) {
        return {
          ...state,
          screen: `${action.payload}`,
          equationCompleted: false
        }
      }
      
      if(allItems[allItems.length - 1].includes(".") && action.payload === ".") {
        return state
      }
      
      return {
        ...state,
        screen: screen === "0" ? `${action.payload}` : `${screen}${action.payload}`
      }
    case 'operator-click':
      if(equationCompleted || action.payload === "AC") {
        return initialState
      }
      
      const updatedValue = screen.replace(/^(.*)(.)(.)/, `$1${action.payload}$3`);
      if(lastCharacter === " " && action.payload !== "=") {
        return {
          ...state,
          screen: updatedValue
        }
      }
      if(action.payload !== "=" && lastCharacter !== " ") {
        return {
          ...state,
          screen: `${screen} ${action.payload} `
        }
      }

      if(action.payload === "=" && allItems.length === 1) {
        return state
      }

      if (action.payload === "=") {
        try {
          const result = evaluateExpression(allItems);
          return {
            ...state,
            screen: `${result}`,
            equationCompleted: true
          };
        } catch (error) {
          return {
            ...state,
            screen: "Error",
            equationCompleted: true
          };
        }
      }
      return state;
    default: 
      return state
  }
}

const useCalculator = () => {
  return useReducer(reducer, initialState);
}

export default useCalculator;