import React from "react";
import './Button.css'

const Button = ({value}) => {
  return (
    <div>
      <button className="btn">{value}</button>
    </div>
  )
};

export default Button;
