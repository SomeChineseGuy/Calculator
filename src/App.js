import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import CalculatorContext from './contexts/CalculatorContext';
import useCalculator from './hooks/useCalculator';

function App() {
  const {state} = useCalculator();

  return (
    <div className="App"> 
      <CalculatorContext.Provider value={state}>
        <Calculator />
      </CalculatorContext.Provider>
    </div>
  );
}

export default App;
