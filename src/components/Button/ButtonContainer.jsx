import React from "react";
import Button from "./Button";
import './ButtonContainer.css'


const displayNumers = () => {
  const layout = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, ".", "="]
  ];
  
  return layout.map((item) => item.map(single => <Button key={single} value={single} />))
};

const displayOperators = () => {
  const operators = ["/", "*", "+", "-"]
  return operators.map((operator) => <Button key={operator} value={operator} /> )
}

const ButtonContainer = () => {
  return (
    <>
    <div className="button-container">
      <div className="button-container__numbers">
        {displayNumers()}
      </div>
      <div className="button-container__operators">
        {displayOperators()}
      </div>
    </div>
    <div className="AC-container">
      <Button value="AC" />
    </div>
    </>
  )
};

export default ButtonContainer;
