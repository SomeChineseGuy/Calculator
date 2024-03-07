import { useReducer } from 'react';

const initialState = {
  screen: 0
}

function reducer(state, action) {
  return state
}


const useCalculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch
  }
}

export default useCalculator;