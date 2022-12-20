import React from "react";
import "./App.css";

const Button = ({ symbol, handleClick, isdisable }: any) => {
  return (
    <>
      <button
        onClick={() => handleClick(symbol)}
        className="buttons"
        disabled={isdisable}
      >
        {symbol}
      </button>
    </>
  );
};

export default Button;
