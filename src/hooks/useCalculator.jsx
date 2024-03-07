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
      

      return state
    default: 
    console.log('default');
      return state
  }
}

const useCalculator = () => {
  return useReducer(reducer, initialState);
}

export default useCalculator;