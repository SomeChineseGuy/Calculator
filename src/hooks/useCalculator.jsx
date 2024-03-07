import { useReducer } from 'react';

const initialState = {
  screen: "0"
}

function reducer(state, action) {
  switch(action.type) {
    case 'number-click':
      if(state.screen.includes(".") && action.payload === ".") {
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

      


      return state
    default: 
      return state
  }
}

const useCalculator = () => {
  return useReducer(reducer, initialState);
}

export default useCalculator;