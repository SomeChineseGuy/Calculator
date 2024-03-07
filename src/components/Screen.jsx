import React, {useContext} from "react";
import CalculatorContext from "../contexts/CalculatorContext";
import "./Screen.css"

const Screen = () => {
  const {state} = useContext(CalculatorContext);
  
  return (
    <div className="screen-container">
      <h1 className="screen">{state.screen}</h1>
    </div>
  )
};

export default Screen;
