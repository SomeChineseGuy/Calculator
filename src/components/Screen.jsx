import React, {useContext} from "react";
import CalculatorContext from "../contexts/CalculatorContext";

const Screen = () => {
  const {screen} = useContext(CalculatorContext)
  return (
    <div>
      <h1>{screen}</h1>
    </div>
  )
};

export default Screen;
