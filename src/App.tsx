import React, { useState } from "react";
import "./App.css";
import { BsPower, BsBackspace } from "react-icons/bs";
import Button from "./Button";
function App() {
  const [inputs, setInputs] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState(true);
  const operator = ["*", "+", "/", "-", "%"];

  const getInputs = (value: any) => {
    if (
      (operator.includes(value) && inputs === "") ||
      (operator.includes(value) && operator.includes(inputs.slice(-1)))
    ) {
      return;
    } else if (operator.includes(value) && inputs.includes(inputs.slice(-1))) {
      output === "" ? setInputs(inputs + value) : setInputs(output + value);
    } else if (inputs.length <= 15) {
      setInputs(inputs + value);
    } else setOutput("Maximum characters Entered");
  };

  const clearInputs = () => {
    if (inputs === "") {
      return;
    } else if (output !== "") {
      setOutput("");
    } else if (output === "") {
      const value = inputs.slice(0, -1);
      setInputs(value);
    }
  };

  const calculateResult = (value: any) => {
    setOutput(eval(inputs).toString());
  };
  const togleState = () => {
    if (status === true) {
      setStatus(false);
    } else {
      setStatus(true);
      setInputs("");
      setOutput("");
    }
  };

  return (
    <>
      <div className="container">
        <div className="display">
          <div className="input">{inputs || ""}</div>
          <div className="output">
            <span>{output}</span>
          </div>
        </div>
        <div className="button_container">
          <Button
            symbol={
              <span>
                <BsPower color={status ? "red" : "green"} />
              </span>
            }
            handleClick={togleState}
          />
          <Button symbol="/" handleClick={getInputs} isdisabled={status} />
          <Button symbol="%" handleClick={getInputs} isdisabled={status} />
          <Button symbol="*" handleClick={getInputs} isdisabled={status} />
          <Button symbol="-" handleClick={getInputs} isdisabled={status} />
          <Button symbol="+" handleClick={getInputs} isdisabled={status} />
          <Button symbol="7" handleClick={getInputs} isdisabled={status} />
          <Button symbol="8" handleClick={getInputs} isdisabled={status} />
          <Button symbol="9" handleClick={getInputs} isdisabled={status} />
          <Button symbol="4" handleClick={getInputs} isdisabled={status} />
          <Button symbol="5" handleClick={getInputs} isdisabled={status} />
          <Button symbol="6" handleClick={getInputs} isdisabled={status} />
          <Button symbol="1" handleClick={getInputs} isdisabled={status} />
          <Button symbol="2" handleClick={getInputs} isdisabled={status} />
          <Button symbol="3" handleClick={getInputs} isdisabled={status} />
          <Button
            symbol={<BsBackspace />}
            handleClick={clearInputs}
            isdisabled={status}
          />
          <Button symbol="0" handleClick={getInputs} isdisabled={status} />
          <Button
            symbol="="
            handleClick={calculateResult}
            isdisabled={status}
          />
        </div>
      </div>
    </>
  );
}

export default App;
