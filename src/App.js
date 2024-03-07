import './App.css';
import Calculator from './components/Calculator';
import CalculatorContext from './contexts/CalculatorContext';
import useCalculator from './hooks/useCalculator';

function App() {

  const [state, dispatch] = useCalculator();

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      <div className="App"> 
        <Calculator />
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;
