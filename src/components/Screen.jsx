import React, {useContext, useEffect} from "react";
import CalculatorContext from "../contexts/CalculatorContext";

const Screen = () => {
  const {state} = useContext(CalculatorContext);
  
  return (
    <div>
      <h1>{state.screen}</h1>
    </div>
  )
};

export default Screen;
