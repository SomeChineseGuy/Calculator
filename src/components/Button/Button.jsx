import React, { useContext } from "react";
import './Button.css'
import CalculatorContext from "../../contexts/CalculatorContext";

const Button = ({value}) => {
  const {dispatch} = useContext(CalculatorContext)

  const handleClick = () => {
    const type = !isNaN(Number(value)) || value === "." ? 'number-click' : 'operator-click'
    dispatch({payload: String(value), type})
  }

  return (
    <button onClick={handleClick} className="btn">{value}</button>
  )
};

export default Button;
