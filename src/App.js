import { useEffect } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import CalculatorContext from './contexts/CalculatorContext';
import useCalculator from './hooks/useCalculator';

function App() {
  const [state, dispatch] = useCalculator();

  useEffect(() => {
    const getKeyDown = (e) => {
      const key = e.key;
      const operators = ["+", "-", "*", "/", "="]
      if(key === "Enter") {
        dispatch({payload: "=", type: 'operator-click'})
      }
      if(operators.includes(key)) {
        dispatch({payload: key, type: 'operator-click'})
      }
      if(!isNaN(Number(key)) || key === "." ) {
        dispatch({payload: String(key), type: 'number-click' })
      } 
      if(key === "Backspace") {
        dispatch({type: 'Backspace'})
      }
    }
  
    window.addEventListener("keydown", getKeyDown)
    return () => {
      window.removeEventListener("keydown",getKeyDown)
    }
    
  }, [dispatch])
  

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      <div className="App"> 
        <Calculator />
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;
